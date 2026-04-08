'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const FRAME_COUNT = 192;

function getFramePath(index: number): string {
  const padded = String(index).padStart(3, '0');
  return `/sequence/ezgif-frame-${padded}.jpg`;
}

export default function KeyboardSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);

  // Draw a frame on canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const images = imagesRef.current;

    if (!canvas || !ctx || !images[frameIndex]) return;

    const img = images[frameIndex];

    // Set canvas to match displayed size for crispness
    const rect = canvas.getBoundingClientRect();
    if (canvas.width !== rect.width || canvas.height !== rect.height) {
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    // Draw image covering canvas (object-fit: contain behavior)
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = canvas.width / canvas.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgAspect > canvasAspect) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgAspect;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgAspect;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Preload frames logic
  useEffect(() => {
    let unmounted = false;
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    // Load first frame blockingly to ensure instant visual layout
    const firstImg = new Image();
    firstImg.src = getFramePath(1);
    firstImg.onload = () => {
      if (unmounted) return;
      images[0] = firstImg;
      loadedCount++;
      imagesRef.current = images;
      setFirstFrameLoaded(true);
      
      // Render immediately
      requestAnimationFrame(() => drawFrame(0));
      
      // Preload the rest asynchronously
      for (let i = 2; i <= FRAME_COUNT; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => {
          if (unmounted) return;
          images[i - 1] = img;
          loadedCount++;
          if (loadedCount === FRAME_COUNT) {
            setAllLoaded(true);
          }
        };
      }
    };

    return () => {
      unmounted = true;
      images.forEach((img) => {
        if (img) img.onload = null;
      });
    };
  }, [drawFrame]);

  // Handle visibility states saving battery/computation
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisibleRef.current = entry.isIntersecting;
      });
    }, { threshold: 0 });

    observer.observe(node);
    
    return () => observer.disconnect();
  }, []);

  // Auto-play animation loop
  useEffect(() => {
    if (!allLoaded) return;

    let lastTime = 0;
    const fps = 24; 
    const frameDuration = 1000 / fps;
    let forward = true;

    const animate = (time: number) => {
      // Pause updates completely if invisible 
      if (isVisibleRef.current) {
        if (time - lastTime >= frameDuration) {
          lastTime = time;

          if (forward) {
            currentFrameRef.current++;
            if (currentFrameRef.current >= FRAME_COUNT - 1) {
              forward = false;
            }
          } else {
            currentFrameRef.current--;
            if (currentFrameRef.current <= 0) {
              forward = true;
            }
          }

          drawFrame(currentFrameRef.current);
        }
      }
      
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [allLoaded, drawFrame]);

  return (
    <div ref={containerRef} className="relative w-full aspect-[4/3] max-w-xl">
      <canvas
        ref={canvasRef}
        className={`w-full h-full rounded-2xl transition-opacity duration-300 ${
          firstFrameLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

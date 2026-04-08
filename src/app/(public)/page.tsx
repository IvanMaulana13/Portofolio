import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import KeyboardSequence from '@/components/hero/KeyboardSequence';


export default async function HomePage() {
  const profile = await prisma.profile.findFirst();
  const featuredProjects = await prisma.project.findMany({
    where: { published: true, featured: true },
    orderBy: { order: 'asc' },
    take: 3,
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-28 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {profile?.avatarUrl && (
              <img 
                src={profile.avatarUrl} 
                alt={profile.name || "Profile"} 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg mb-6"
              />
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
              Hi, I&apos;m {profile?.name || "a Developer"}.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl mb-8">
              {profile?.title || "Welcome to my personal portfolio."}
            </p>
            <div className="flex gap-4">
              <Link 
                href="/projects" 
                className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                View My Work
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-gray-900 border border-gray-200 font-medium rounded-full hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Keyboard Image Sequence */}
          <div className="flex-1 flex justify-center">
            {/* Desktop: animated canvas */}
            <div className="hidden md:block w-full">
              <KeyboardSequence />
            </div>
            {/* Mobile: static fallback */}
            <div className="block md:hidden w-full max-w-sm">
              <Image
                src="/sequence/ezgif-frame-096.jpg"
                alt="Keyboard"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Featured Work</h2>
                <p className="mt-2 text-gray-500">Some of my selected projects.</p>
              </div>
              <Link href="/projects" className="hidden sm:inline-flex items-center text-blue-600 font-medium hover:text-blue-500">
                View all projects <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map(project => (
                <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
                  )}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 line-clamp-3 text-sm">{project.content}</p>
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="mt-4 text-blue-600 font-medium text-sm hover:underline inline-flex items-center">
                        Visit Project <ArrowRight size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

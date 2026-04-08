'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import KeyboardSequence from '@/components/hero/KeyboardSequence';
import { motion } from 'framer-motion';

type Profile = {
  name: string;
  title: string;
  avatarUrl: string | null;
} | null;

type Project = {
  id: string;
  title: string;
  content: string;
  image: string | null;
  link: string | null;
};

interface HomeClientProps {
  profile: Profile;
  featuredProjects: Project[];
}

export default function HomeClient({ profile, featuredProjects }: HomeClientProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-28 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {profile?.avatarUrl && (
              <img 
                src={profile.avatarUrl} 
                alt={profile.name || "Profile"} 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg mb-6 ring-4 ring-gray-50 dark:ring-gray-800"
              />
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">{profile?.name || "a Developer"}</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl mb-8">
              {profile?.title || "Welcome to my personal portfolio."}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link 
                href="/projects" 
                className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 active:scale-95"
              >
                View My Work
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* Keyboard Image Sequence */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center w-full"
          >
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
                className="w-full h-auto rounded-2xl shadow-xl dark:shadow-blue-900/10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="bg-gray-50 dark:bg-gray-900/50 py-20 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Work</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Some of my selected projects.</p>
              </motion.div>
              <Link href="/projects" className="hidden sm:inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                View all projects <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none dark:border dark:border-gray-700 flex flex-col transition-all hover:-translate-y-1"
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500">No Image</div>
                  )}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-3 text-sm">{project.content}</p>
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline inline-flex items-center">
                        Visit Project <ArrowRight size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

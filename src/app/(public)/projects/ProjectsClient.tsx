'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Code } from 'lucide-react';


interface Project {
  id: string;
  title: string;
  content: string;
  image: string | null;
  link: string | null;
  repoUrl: string | null;
  tags: any;
}

interface ProjectsClientProps {
  projects: Project[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">Projects</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg lg:text-xl max-w-2xl">
          A showcase of my recent work, side projects, and open source contributions.
        </p>
      </motion.div>

      {projects.length === 0 ? (
        <p className="text-gray-400 dark:text-gray-500 text-center py-20 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800">
          No projects published yet.
        </p>
      ) : (
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl dark:shadow-none transition-all hover:-translate-y-2 group"
            >
              <div className="relative h-56 overflow-hidden">
                {project.image ? (
                  <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">No Preview Available</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <div className="flex gap-3">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-gray-800 hover:text-white transition-colors">
                          <Code size={18} />
                        </a>
                      )}
                   </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base line-clamp-3 mb-6 leading-relaxed">
                    {project.content}
                  </p>

                  {Array.isArray(project.tags) && (project.tags as string[]).length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.tags as string[]).map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-semibold bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full border border-gray-100 dark:border-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

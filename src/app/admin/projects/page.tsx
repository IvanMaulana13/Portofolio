import { prisma } from '@/lib/prisma';
import ProjectClient from './ProjectClient';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { order: 'asc' },
  });

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-xl shadow-gray-200/40 dark:shadow-none p-8 md:p-10 w-full max-w-6xl overflow-hidden transition-colors">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Project Portfolio</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your showcase and public visibility</p>
        </div>
        <Link 
          href="/admin/projects/new" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
        >
          <Plus size={20} className="mr-2" />
          Create New Project
        </Link>
      </div>
      <ProjectClient projects={projects} />
    </div>
  );
}


import { prisma } from '@/lib/prisma';
import ProjectClient from './ProjectClient';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { order: 'asc' },
  });

  return (
    <div className="bg-white rounded-lg shadow-sm w-full max-w-6xl overflow-hidden p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
        <Link 
          href="/admin/projects/new" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-medium text-white hover:bg-blue-700"
        >
          <Plus size={16} className="mr-2" />
          Add Project
        </Link>
      </div>
      <ProjectClient projects={projects} />
    </div>
  );
}

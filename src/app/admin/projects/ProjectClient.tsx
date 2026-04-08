'use client';

import { deleteProject } from '@/app/actions/project';
import { Pencil, Trash2, Eye, EyeOff, Star } from 'lucide-react';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  featured: boolean;
};

export default function ProjectClient({ projects }: { projects: Project[] }) {
  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      await deleteProject(id);
    }
  };

  return (
    <div className="border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm transition-colors">
      <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-800">
        <thead className="bg-gray-50/50 dark:bg-gray-800/50">
          <tr>
            <th className="px-8 py-5 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Project Details</th>
            <th className="px-8 py-5 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Visibility</th>
            <th className="px-8 py-5 text-right text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
          {projects.map((project) => (
            <tr key={project.id} className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">/{project.slug}</div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full ${
                    project.published 
                      ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}>
                    {project.published ? <Eye size={12} /> : <EyeOff size={12} />}
                    {project.published ? 'Public' : 'Hidden'}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
                      <Star size={12} fill="currentColor" />
                      Featured
                    </span>
                  )}
                </div>
              </td>
              <td className="px-8 py-6 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex justify-end gap-2">
                  <Link 
                    href={`/admin/projects/${project.id}`} 
                    className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                    title="Edit Project"
                  >
                    <Pencil size={18} />
                  </Link>
                  <button 
                    onClick={() => handleDelete(project.id)}
                    className="p-2 text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all cursor-pointer"
                    title="Delete Project"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {projects.length === 0 && (
            <tr>
              <td colSpan={3} className="px-8 py-12 text-center">
                 <div className="text-gray-400 dark:text-gray-500 font-medium italic">No projects added to your portfolio yet.</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


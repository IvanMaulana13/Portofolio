'use client';

import { deleteProject } from '@/app/actions/project';
import { Pencil, Trash2 } from 'lucide-react';
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
    <div className="border border-gray-200 rounded-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title / Slug</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{project.title}</div>
                <div className="text-sm text-gray-500">{project.slug}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {project.published ? 'Published' : 'Draft'}
                </span>
                {project.featured && (
                  <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Featured
                  </span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link href={`/admin/projects/${project.id}`} className="text-indigo-600 hover:text-indigo-900 inline-flex items-center mr-4">
                  <Pencil size={18} />
                </Link>
                <button 
                  onClick={() => handleDelete(project.id)}
                  className="text-red-600 hover:text-red-900 cursor-pointer inline-flex items-center"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
          {projects.length === 0 && (
            <tr>
              <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">
                No projects found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

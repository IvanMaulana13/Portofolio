import { prisma } from '@/lib/prisma';
import { ExternalLink, Code } from 'lucide-react';


export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    where: { published: true },
    orderBy: { order: 'asc' },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Projects</h1>
      <p className="text-gray-500 mb-12 text-lg">A collection of my work and side projects.</p>

      {projects.length === 0 ? (
        <p className="text-gray-400 text-center py-12">No projects published yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
              ) : (
                <div className="w-full h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No Preview</span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{project.content}</p>

                  {Array.isArray(project.tags) && (project.tags as string[]).length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.tags as string[]).map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      <ExternalLink size={14} className="mr-1" /> Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
                    >
                      <Code size={14} className="mr-1" /> Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

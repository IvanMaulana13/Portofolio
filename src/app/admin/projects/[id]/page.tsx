import { prisma } from '@/lib/prisma';
import ProjectForm from '../ProjectForm';
import { notFound } from 'next/navigation';

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = await prisma.project.findUnique({
    where: { id: resolvedParams.id },
  });

  if (!project) notFound();

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Project: {project.title}</h2>
      <ProjectForm initialData={project} />
    </div>
  );
}

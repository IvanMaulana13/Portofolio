import ProjectForm from '../ProjectForm';

export default function NewProjectPage() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Project</h2>
      <ProjectForm />
    </div>
  );
}

'use client';

import { useActionState } from 'react';
import { createSkill, deleteSkill } from '@/app/actions/skill';
import { Trash2 } from 'lucide-react';

type Skill = { id: string; name: string; category: string | null; icon: string | null };

export default function SkillClient({ skills }: { skills: Skill[] }) {
  const [state, action, pending] = useActionState(createSkill, null);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this skill?')) {
      await deleteSkill(id);
    }
  };

  return (
    <div>
      <form action={action} className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Add New Skill</h3>
        
        {state?.error && <p className="text-red-500 text-sm mb-3">{state.error}</p>}
        {state?.success && <p className="text-green-500 text-sm mb-3">{state.success}</p>}

        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="flex-1">
            <input 
              type="text" 
              name="name" 
              placeholder="Skill Name (e.g. React)" 
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="flex-1">
            <input 
              type="text" 
              name="category" 
              placeholder="Category (e.g. Frontend)" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="flex-1">
            <input 
              type="text" 
              name="icon" 
              placeholder="Icon URL (Optional)" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <button 
            type="submit"
            disabled={pending}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            Add
          </button>
        </div>
      </form>

      <div className="border border-gray-200 rounded-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {skills.map((skill) => (
              <tr key={skill.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                  {skill.icon && <img src={skill.icon} alt="" className="w-5 h-5 mr-2 object-contain" />}
                  {skill.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{skill.category || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => handleDelete(skill.id)}
                    className="text-red-600 hover:text-red-900 cursor-pointer"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {skills.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">
                  No skills found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

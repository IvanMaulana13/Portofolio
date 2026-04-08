'use client';

import { useActionState } from 'react';
import { createSkill, deleteSkill } from '@/app/actions/skill';
import { Trash2, Sparkles, Layers, Image as ImageIcon, Send } from 'lucide-react';

type Skill = { id: string; name: string; category: string | null; icon: string | null };

export default function SkillClient({ skills }: { skills: Skill[] }) {
  const [state, action, pending] = useActionState(createSkill, null);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this skill?')) {
      await deleteSkill(id);
    }
  };

  const inputClasses = "w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 transition-all";

  return (
    <div>
      <div className="mb-12 p-8 bg-gray-50/50 dark:bg-gray-800/30 rounded-3xl border border-dashed border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          Register New Skill
        </h3>
        
        <form action={action}>
          {state?.error && <p className="text-rose-600 dark:text-rose-400 text-sm mb-4 font-medium">{state.error}</p>}
          {state?.success && <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-4 font-medium">{state.success}</p>}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="relative">
              <Sparkles className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                name="name" 
                placeholder="Skill Name (e.g. React)" 
                required
                className={inputClasses}
              />
            </div>
            <div className="relative">
              <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                name="category" 
                placeholder="Category (e.g. Frontend)" 
                className={inputClasses}
              />
            </div>
            <div className="relative">
              <ImageIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                name="icon" 
                placeholder="Icon URL (Optional)" 
                className={inputClasses}
              />
            </div>
          </div>
          
          <button 
            type="submit"
            disabled={pending}
            className="w-full sm:w-auto px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {pending ? 'Registering...' : (
              <>
                <Send size={18} />
                Add Skill
              </>
            )}
          </button>
        </form>
      </div>

      <div className="border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm transition-colors">
        <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-800">
          <thead className="bg-gray-50/50 dark:bg-gray-800/50">
            <tr>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Skill Name</th>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Category</th>
              <th className="px-8 py-5 text-right text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
            {skills.map((skill) => (
              <tr key={skill.id} className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="px-8 py-5 whitespace-nowrap text-base font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <div className="w-10 h-10 p-2 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                    {skill.icon ? (
                      <img src={skill.icon} alt="" className="w-full h-full object-contain" />
                    ) : (
                      <Sparkles className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                    )}
                  </div>
                  <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{skill.name}</span>
                </td>
                <td className="px-8 py-5 whitespace-nowrap">
                   <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-bold rounded-full uppercase tracking-widest">
                    {skill.category || 'General'}
                   </span>
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => handleDelete(skill.id)}
                    className="p-3 text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all cursor-pointer"
                    title="Delete Skill"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
            {skills.length === 0 && (
              <tr>
                <td colSpan={3} className="px-8 py-16 text-center text-gray-400 dark:text-gray-500 font-medium italic">
                  No skills registered yet. Start adding some above.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


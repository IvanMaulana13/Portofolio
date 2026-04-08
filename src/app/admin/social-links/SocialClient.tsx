'use client';

import { useActionState } from 'react';
import { createSocialLink, deleteSocialLink } from '@/app/actions/social';
import { Trash2, Globe, Link2, Send, Share2 } from 'lucide-react';

type SocialLink = { id: string; platform: string; url: string; order: number };

export default function SocialClient({ links }: { links: SocialLink[] }) {
  const [state, action, pending] = useActionState(createSocialLink, null);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this link?')) {
      await deleteSocialLink(id);
    }
  };

  const inputClasses = "w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 transition-all";

  return (
    <div>
      <div className="mb-12 p-8 bg-gray-50/50 dark:bg-gray-800/30 rounded-3xl border border-dashed border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Share2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          Add Connection Link
        </h3>
        
        <form action={action}>
          {state?.error && <p className="text-rose-600 dark:text-rose-400 text-sm mb-4 font-medium">{state.error}</p>}
          {state?.success && <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-4 font-medium">{state.success}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                name="platform" 
                placeholder="Platform (e.g. GitHub)" 
                required
                className={inputClasses}
              />
            </div>
            <div className="relative">
              <Link2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="url" 
                name="url" 
                placeholder="https://..." 
                required
                className={inputClasses}
              />
            </div>
          </div>
          
          <button 
            type="submit"
            disabled={pending}
            className="w-full sm:w-auto px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {pending ? 'Connecting...' : (
              <>
                <Send size={18} />
                Link Profile
              </>
            )}
          </button>
        </form>
      </div>

      <div className="border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm transition-colors">
        <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-800">
          <thead className="bg-gray-50/50 dark:bg-gray-800/50">
            <tr>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Service Platform</th>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Public URL</th>
              <th className="px-8 py-5 text-right text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
            {links.map((link) => (
              <tr key={link.id} className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="px-8 py-5 whitespace-nowrap text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.platform}
                </td>
                <td className="px-8 py-5 whitespace-nowrap">
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
                  >
                    <Link2 size={14} />
                    {link.url}
                  </a>
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => handleDelete(link.id)}
                    className="p-3 text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all cursor-pointer"
                    title="Delete Link"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
            {links.length === 0 && (
              <tr>
                <td colSpan={3} className="px-8 py-16 text-center text-gray-400 dark:text-gray-500 font-medium italic">
                  No social presence linked yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


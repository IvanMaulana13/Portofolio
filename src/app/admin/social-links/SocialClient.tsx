'use client';

import { useActionState } from 'react';
import { createSocialLink, deleteSocialLink } from '@/app/actions/social';
import { Trash2 } from 'lucide-react';

type SocialLink = { id: string; platform: string; url: string; order: number };

export default function SocialClient({ links }: { links: SocialLink[] }) {
  const [state, action, pending] = useActionState(createSocialLink, null);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this link?')) {
      await deleteSocialLink(id);
    }
  };

  return (
    <div>
      <form action={action} className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Add New Link</h3>
        
        {state?.error && <p className="text-red-500 text-sm mb-3">{state.error}</p>}
        {state?.success && <p className="text-green-500 text-sm mb-3">{state.success}</p>}

        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="flex-1">
            <input 
              type="text" 
              name="platform" 
              placeholder="Platform (e.g. GitHub)" 
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="flex-1">
            <input 
              type="url" 
              name="url" 
              placeholder="https://..." 
              required
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {links.map((link) => (
              <tr key={link.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{link.platform}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">
                  <a href={link.url} target="_blank" rel="noreferrer">{link.url}</a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => handleDelete(link.id)}
                    className="text-red-600 hover:text-red-900 cursor-pointer"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {links.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">
                  No social links found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

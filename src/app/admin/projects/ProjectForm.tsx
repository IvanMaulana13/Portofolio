'use client';

import { useActionState } from 'react';
import { upsertProject } from '@/app/actions/project';
import Link from 'next/link';

export default function ProjectForm({ initialData }: { initialData?: any }) {
  const [state, action, pending] = useActionState(upsertProject, null);

  return (
    <form action={action} className="space-y-6 max-w-4xl bg-white p-6 rounded-lg shadow-sm">
      {state?.error && <div className="text-red-500 text-sm p-3 bg-red-50 rounded">{state.error}</div>}
      
      {initialData?.id && <input type="hidden" name="id" value={initialData.id} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title *</label>
          <input type="text" name="title" defaultValue={initialData?.title} required className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Slug *</label>
          <input type="text" name="slug" defaultValue={initialData?.slug} required className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Content *</label>
        <textarea name="content" defaultValue={initialData?.content} required rows={8} className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input type="url" name="image" defaultValue={initialData?.image} className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Live Link</label>
          <input type="url" name="link" defaultValue={initialData?.link} className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Repository URL</label>
          <input type="url" name="repoUrl" defaultValue={initialData?.repoUrl} className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tags (comma separated)</label>
          <input type="text" name="tags" defaultValue={initialData?.tags?.join(', ')} className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Order</label>
          <input type="number" name="order" defaultValue={initialData?.order || 0} className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" />
        </div>
      </div>

      <div className="flex gap-6">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" name="featured" defaultChecked={initialData?.featured} className="rounded border-gray-300" />
          <span className="text-sm font-medium text-gray-700">Featured</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" name="published" defaultChecked={initialData?.published} className="rounded border-gray-300" />
          <span className="text-sm font-medium text-gray-700">Published</span>
        </label>
      </div>

      <div className="flex gap-4 pt-4 border-t border-gray-200">
        <button type="submit" disabled={pending} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50">
          {pending ? 'Saving...' : 'Save Project'}
        </button>
        <Link href="/admin/projects" className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200">
          Cancel
        </Link>
      </div>
    </form>
  );
}

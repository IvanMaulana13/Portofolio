'use client';

import { useActionState } from 'react';
import { updateProfile } from '@/app/actions/profile';

export default function ProfileForm({ initialData }: { initialData: any }) {
  const [state, action, pending] = useActionState(updateProfile, null);

  return (
    <form action={action} className="space-y-6">
      {state?.success && (
        <div className="bg-green-50 text-green-700 p-3 rounded text-sm text-center">
          {state.success}
        </div>
      )}
      {state?.error && (
        <div className="bg-red-50 text-red-700 p-3 rounded text-sm text-center">
          {state.error}
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          defaultValue={initialData?.name || ''}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          defaultValue={initialData?.title || ''}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          name="bio"
          defaultValue={initialData?.bio || ''}
          required
          rows={5}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Avatar URL</label>
        <input
          type="url"
          name="avatarUrl"
          defaultValue={initialData?.avatarUrl || ''}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Resume URL</label>
        <input
          type="url"
          name="resumeUrl"
          defaultValue={initialData?.resumeUrl || ''}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
      >
        {pending ? 'Saving...' : 'Save Profile'}
      </button>
    </form>
  );
}

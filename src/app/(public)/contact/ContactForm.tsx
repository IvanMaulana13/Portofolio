'use client';

import { useActionState } from 'react';
import { sendMessage } from '@/app/actions/contact';
import { useRef, useEffect } from 'react';

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendMessage, null);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  useEffect(() => {
    if (state?.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={action} className="space-y-6">
      {state?.success && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-sm">
          {state.success}
        </div>
      )}
      {state?.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-sm">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-black"
          placeholder="What is this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-black"
          placeholder="Write your message here..."
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full py-3 px-6 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {pending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

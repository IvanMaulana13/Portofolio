'use client';

import { markMessageRead, deleteMessage } from '@/app/actions/message';
import { MailOpen, Trash2, Mail, Clock, User } from 'lucide-react';

type Message = {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  read: boolean;
  createdAt: Date;
};

export default function MessageClient({ messages }: { messages: Message[] }) {
  const handleMarkRead = async (id: string) => {
    await markMessageRead(id);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      await deleteMessage(id);
    }
  };

  return (
    <div className="overflow-x-auto">
      <ul className="divide-y divide-gray-100 dark:divide-gray-800">
        {messages.map((msg) => (
          <li 
            key={msg.id} 
            className={`p-8 transition-colors ${msg.read ? 'bg-white dark:bg-gray-900' : 'bg-blue-50/50 dark:bg-blue-900/10'}`}
          >
            <div className="flex justify-between items-start gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${msg.read ? 'bg-gray-100 dark:bg-gray-800 text-gray-400' : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'}`}>
                    {msg.read ? <MailOpen size={18} /> : <Mail size={18} />}
                  </div>
                  <h3 className={`text-xl font-bold ${msg.read ? 'text-gray-700 dark:text-gray-300' : 'text-gray-900 dark:text-white'}`}>
                    {msg.subject || 'No Subject'}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{msg.name}</span>
                    <span className="text-gray-300 dark:text-gray-600">|</span>
                    <span className="text-blue-600 dark:text-blue-400">{msg.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{new Date(msg.createdAt).toLocaleString()}</span>
                  </div>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-base leading-relaxed whitespace-pre-wrap">
                  {msg.message}
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-3 shrink-0">
                {!msg.read && (
                  <button 
                    onClick={() => handleMarkRead(msg.id)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
                  >
                    Mark Ready
                  </button>
                )}
                <button 
                  onClick={() => handleDelete(msg.id)}
                  className="p-3 text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all cursor-pointer"
                  title="Delete Message"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </li>
        ))}
        {messages.length === 0 && (
          <li className="p-20 text-center">
            <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300 dark:text-gray-600">
              <MailOpen size={32} />
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium">No messages in your inbox yet.</p>
          </li>
        )}
      </ul>
    </div>
  );
}


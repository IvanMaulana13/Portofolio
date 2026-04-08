'use client';

import { markMessageRead, deleteMessage } from '@/app/actions/message';
import { MailOpen, Trash2, Mail } from 'lucide-react';

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
    <ul className="divide-y divide-gray-200">
      {messages.map((msg) => (
        <li key={msg.id} className={`p-6 ${msg.read ? 'bg-white' : 'bg-blue-50'}`}>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {msg.read ? <MailOpen size={16} className="text-gray-400" /> : <Mail size={16} className="text-blue-600" />}
                <h3 className="text-lg font-bold text-gray-900">{msg.subject || 'No Subject'}</h3>
              </div>
              <p className="text-sm font-medium text-gray-900 mb-1">From: {msg.name} ({msg.email})</p>
              <p className="text-xs text-gray-500 mb-4">{new Date(msg.createdAt).toLocaleString()}</p>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{msg.message}</p>
            </div>
            
            <div className="ml-4 flex flex-col items-end space-y-2">
              {!msg.read && (
                <button 
                  onClick={() => handleMarkRead(msg.id)}
                  className="text-xs text-blue-600 font-medium hover:underline cursor-pointer"
                >
                  Mark as Read
                </button>
              )}
              <button 
                onClick={() => handleDelete(msg.id)}
                className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                title="Delete Message"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </li>
      ))}
      {messages.length === 0 && (
        <li className="p-6 text-center text-gray-500">No messages found.</li>
      )}
    </ul>
  );
}

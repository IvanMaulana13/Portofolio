import { prisma } from '@/lib/prisma';
import MessageClient from './MessageClient';

export default async function MessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-gray-200/40 dark:shadow-none border border-gray-100 dark:border-gray-800 w-full max-w-6xl overflow-hidden transition-colors">
      <div className="p-8 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Client Inquiries</h2>
        <span className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-bold rounded-full uppercase tracking-widest">
          {messages.length} total
        </span>
      </div>
      <MessageClient messages={messages} />
    </div>
  );
}


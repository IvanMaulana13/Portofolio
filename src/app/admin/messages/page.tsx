import { prisma } from '@/lib/prisma';
import MessageClient from './MessageClient';

export default async function MessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="bg-white rounded-lg shadow-sm w-full max-w-5xl overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Messages</h2>
      </div>
      <MessageClient messages={messages} />
    </div>
  );
}

import { prisma } from '@/lib/prisma';
import SocialClient from './SocialClient';

export default async function SocialLinksPage() {
  const links = await prisma.socialLink.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-xl shadow-gray-200/40 dark:shadow-none p-8 md:p-10 w-full max-w-4xl transition-colors">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight transition-colors">Digital Identity</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Manage your social presence and external profiles</p>
      </div>
      <SocialClient links={links} />
    </div>
  );
}


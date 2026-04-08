import { prisma } from '@/lib/prisma';
import SocialClient from './SocialClient';

export default async function SocialLinksPage() {
  const links = await prisma.socialLink.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Social Links</h2>
      <SocialClient links={links} />
    </div>
  );
}

import { prisma } from '@/lib/prisma';
import SkillClient from './SkillClient';

export default async function SkillsPage() {
  const skills = await prisma.skill.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
      <SkillClient skills={skills} />
    </div>
  );
}

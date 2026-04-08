import { prisma } from '@/lib/prisma';
import SkillClient from './SkillClient';

export default async function SkillsPage() {
  const skills = await prisma.skill.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-xl shadow-gray-200/40 dark:shadow-none p-8 md:p-10 w-full max-w-4xl transition-colors">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight transition-colors">Technical Skills</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Manage your core competencies and toolset</p>
      </div>
      <SkillClient skills={skills} />
    </div>
  );
}


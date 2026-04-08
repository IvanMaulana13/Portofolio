import { prisma } from '@/lib/prisma';
import SkillsClient from './SkillsClient';

export default async function SkillsPage() {
  const skills = await prisma.skill.findMany({
    orderBy: { createdAt: 'asc' },
  });

  // Group skills by category
  const grouped: Record<string, typeof skills> = {};
  for (const skill of skills) {
    const cat = skill.category || 'Other';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(skill);
  }

  const categories = Object.keys(grouped);

  return <SkillsClient grouped={grouped} categories={categories} />;
}


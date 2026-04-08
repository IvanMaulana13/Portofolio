import { prisma } from '@/lib/prisma';
import HomeClient from './HomeClient';

export default async function HomePage() {
  const profile = await prisma.profile.findFirst();
  const featuredProjects = await prisma.project.findMany({
    where: { published: true, featured: true },
    orderBy: { order: 'asc' },
    take: 3,
  });

  return <HomeClient profile={profile} featuredProjects={featuredProjects} />;
}



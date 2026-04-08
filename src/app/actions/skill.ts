'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createSkill(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const category = formData.get('category') as string;
  const icon = formData.get('icon') as string;

  if (!name) return { error: 'Skill name is required' };

  try {
    await prisma.skill.create({
      data: { name, category, icon },
    });
    revalidatePath('/admin/skills');
    return { success: 'Skill created!' };
  } catch (error) {
    return { error: 'Failed to create skill' };
  }
}

export async function deleteSkill(id: string) {
  try {
    await prisma.skill.delete({ where: { id } });
    revalidatePath('/admin/skills');
    return { success: 'Deleted!' };
  } catch (error) {
    return { error: 'Failed to delete' };
  }
}

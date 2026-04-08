'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function upsertProject(prevState: any, formData: FormData) {
  const id = formData.get('id') as string | null;
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const content = formData.get('content') as string;
  const image = formData.get('image') as string;
  const link = formData.get('link') as string;
  const repoUrl = formData.get('repoUrl') as string;
  const tagsStr = formData.get('tags') as string;
  const order = parseInt((formData.get('order') as string) || '0', 10);
  const featured = formData.get('featured') === 'on';
  const published = formData.get('published') === 'on';

  if (!title || !slug || !content) {
    return { error: 'Title, slug, and content are required' };
  }

  // Very basic tags parsing (comma separated)
  const tags = tagsStr ? tagsStr.split(',').map(t => t.trim()).filter(Boolean) : [];

  try {
    if (id) {
      await prisma.project.update({
        where: { id },
        data: { title, slug, content, image, link, repoUrl, tags, order, featured, published },
      });
    } else {
      await prisma.project.create({
        data: { title, slug, content, image, link, repoUrl, tags, order, featured, published },
      });
    }
  } catch (error) {
    console.error(error);
    return { error: 'Database error. Make sure slug is unique.' };
  }

  revalidatePath('/admin/projects');
  redirect('/admin/projects');
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({ where: { id } });
    revalidatePath('/admin/projects');
    return { success: true };
  } catch (error) {
    return { error: 'Failed to delete project' };
  }
}

'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createSocialLink(prevState: any, formData: FormData) {
  const platform = formData.get('platform') as string;
  const url = formData.get('url') as string;

  if (!platform || !url) return { error: 'Platform and URL are required' };

  try {
    await prisma.socialLink.create({
      data: { platform, url },
    });
    revalidatePath('/admin/social-links');
    return { success: 'Social link created!' };
  } catch (error) {
    return { error: 'Failed to create social link' };
  }
}

export async function deleteSocialLink(id: string) {
  try {
    await prisma.socialLink.delete({ where: { id } });
    revalidatePath('/admin/social-links');
    return { success: 'Deleted!' };
  } catch (error) {
    return { error: 'Failed to delete' };
  }
}

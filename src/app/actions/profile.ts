'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function updateProfile(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const title = formData.get('title') as string;
  const bio = formData.get('bio') as string;
  const avatarUrl = formData.get('avatarUrl') as string;
  const resumeUrl = formData.get('resumeUrl') as string;

  try {
    const profile = await prisma.profile.findFirst();

    if (profile) {
      await prisma.profile.update({
        where: { id: profile.id },
        data: { name, title, bio, avatarUrl, resumeUrl },
      });
    } else {
      await prisma.profile.create({
        data: { name, title, bio, avatarUrl, resumeUrl },
      });
    }

    revalidatePath('/admin/profile');
    return { success: 'Profile updated successfully!' };
  } catch (error) {
    console.error('Update profile error:', error);
    return { error: 'Failed to update profile.' };
  }
}

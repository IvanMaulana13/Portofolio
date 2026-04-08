'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function markMessageRead(id: string) {
  try {
    await prisma.message.update({
      where: { id },
      data: { read: true },
    });
    revalidatePath('/admin/messages');
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    return { error: 'Failed' };
  }
}

export async function deleteMessage(id: string) {
  try {
    await prisma.message.delete({ where: { id } });
    revalidatePath('/admin/messages');
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    return { error: 'Failed' };
  }
}

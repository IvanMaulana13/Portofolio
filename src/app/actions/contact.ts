'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function sendMessage(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Name, email, and message are required.' };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: 'Please enter a valid email address.' };
  }

  try {
    await prisma.message.create({
      data: { name, email, subject, message },
    });
    revalidatePath('/admin/messages');
    revalidatePath('/admin');
    return { success: 'Message sent successfully! I will get back to you soon.' };
  } catch (error) {
    console.error('Send message error:', error);
    return { error: 'Failed to send message. Please try again later.' };
  }
}

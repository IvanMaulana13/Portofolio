'use server';

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { createSession, deleteSession } from '@/lib/session';
import { redirect } from 'next/navigation';

export async function login(prevState: any, formData: FormData) {
  // Instantiate inside the action to prevent build-time initialization errors
  const prisma = new PrismaClient();
  
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Please enter both email and password.' };
  }

  try {
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return { error: 'Invalid credentials.' };
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return { error: 'Invalid credentials.' };
    }

    // Success! Create session
    await createSession(admin.id);
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'An error occurred during log in.' };
  }

  // Redirect should be called outside try/catch if it throws, but in Next.js redirect throws a special error which we don't want to catch here.
  redirect('/admin');
}

export async function logout() {
  await deleteSession();
  redirect('/admin/login');
}

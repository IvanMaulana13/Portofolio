import { prisma } from '@/lib/prisma';
import ProfileForm from './ProfileForm';

export default async function ProfilePage() {
  const profile = await prisma.profile.findFirst();

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-xl shadow-gray-200/40 dark:shadow-none p-8 md:p-10 w-full max-w-3xl transition-colors">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Main Profile Information</h2>
      <ProfileForm initialData={profile || {}} />
    </div>
  );
}


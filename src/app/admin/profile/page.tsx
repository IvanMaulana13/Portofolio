import { prisma } from '@/lib/prisma';
import ProfileForm from './ProfileForm';

export default async function ProfilePage() {
  const profile = await prisma.profile.findFirst();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-full max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Profile</h2>
      <ProfileForm initialData={profile || {}} />
    </div>
  );
}

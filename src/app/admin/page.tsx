import { logout } from '@/app/actions/auth';
import { verifySession } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function AdminDashboardPage() {
  const session = await verifySession();
  
  if (!session?.isAuth) {
    redirect('/admin/login');
  }

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>
      <p className="text-gray-600 mb-8">
        Welcome to the admin area! Here you will eventually manage your projects, skills, and messages.
      </p>

      <form action={logout}>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 cursor-pointer"
        >
          Log Out
        </button>
      </form>
    </div>
  );
}

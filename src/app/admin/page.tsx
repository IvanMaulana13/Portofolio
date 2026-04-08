import { prisma } from '@/lib/prisma';
import { logout } from '@/app/actions/auth';
import { FolderKanban, Wrench, Mail, LinkIcon } from 'lucide-react';

export default async function AdminDashboardPage() {
  const [projectCount, skillCount, messageCount, linkCount] = await Promise.all([
    prisma.project.count(),
    prisma.skill.count(),
    prisma.message.count({ where: { read: false } }),
    prisma.socialLink.count()
  ]);

  const stats = [
    { name: 'Total Projects', value: projectCount, icon: FolderKanban, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'Skills', value: skillCount, icon: Wrench, color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'Unread Messages', value: messageCount, icon: Mail, color: 'text-red-600', bg: 'bg-red-100' },
    { name: 'Social Links', value: linkCount, icon: LinkIcon, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
          <p className="text-gray-600">Welcome back to your portfolio admin area.</p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 cursor-pointer"
          >
            Log Out
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg p-6 shadow-sm flex items-center space-x-4">
              <div className={`p-4 rounded-full ${stat.bg} ${stat.color}`}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

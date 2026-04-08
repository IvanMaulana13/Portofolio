'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  User, 
  FolderKanban, 
  Wrench, 
  Link as LinkIcon, 
  Mail, 
  LogOut 
} from 'lucide-react';
import { useTransition } from 'react';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Profile', href: '/admin/profile', icon: User },
  { name: 'Projects', href: '/admin/projects', icon: FolderKanban },
  { name: 'Skills', href: '/admin/skills', icon: Wrench },
  { name: 'Social Links', href: '/admin/social-links', icon: LinkIcon },
  { name: 'Messages', href: '/admin/messages', icon: Mail },
];

export function Sidebar() {
  const pathname = usePathname();

  // Hide sidebar on log in page
  if (pathname === '/admin/login') return null;

  return (
    <div className="w-64 bg-gray-900 text-white flex-shrink-0 min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white tracking-tight">Portfolio Admin</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/admin' && pathname?.startsWith(item.href));
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout is handled in layout / admin dashboard page usually, or we can put a Link here that does a POST? Forms are better for logouts, but we can just use a server action linked to a button, though this is a Client Component. The actual logout button is in page.tsx for now, but extending it here is helpful. We will leave it in page.tsx or add it if needed later. */}
    </div>
  );
}

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
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

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
    <div className="w-64 bg-white dark:bg-black border-r border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white flex-shrink-0 min-h-screen flex flex-col transition-colors">
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight">Portfolio Admin</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/admin' && pathname?.startsWith(item.href));
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Theme</span>
        <ThemeToggle />
      </div>
    </div>
  );
}


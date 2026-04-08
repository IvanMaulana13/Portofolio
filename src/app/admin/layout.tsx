import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

export const dynamic = 'force-dynamic';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors">
          <div className="px-8 py-5 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">Admin Console</h2>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8 lg:p-10">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}


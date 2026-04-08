import { prisma } from '@/lib/prisma';
import { FileText } from 'lucide-react';
import { FadeUp } from '@/components/ui/AnimatedContainer';

export default async function AboutPage() {
  const profile = await prisma.profile.findFirst();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <FadeUp>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">About Me</h1>
      </FadeUp>
      
      <FadeUp delay={0.1}>
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-gray-200/40 dark:shadow-none border border-gray-100 dark:border-gray-700 p-8 md:p-12 transition-colors">
          {profile?.avatarUrl && (
            <div className="mb-10 flex justify-center md:justify-start">
              <img 
                src={profile.avatarUrl} 
                alt={profile.name || "Profile"} 
                className="w-48 h-48 rounded-full object-cover shadow-xl ring-8 ring-gray-50 dark:ring-gray-900"
              />
            </div>
          )}
          
          <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none whitespace-pre-wrap leading-relaxed">
            {profile?.bio || "No biography available yet."}
          </div>

          {profile?.resumeUrl && (
            <div className="mt-12">
              <a 
                href={profile.resumeUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
              >
                <FileText size={22} className="mr-2" />
                View Full Resume
              </a>
            </div>
          )}
        </div>
      </FadeUp>
    </div>
  );
}


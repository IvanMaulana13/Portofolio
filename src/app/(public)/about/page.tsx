import { prisma } from '@/lib/prisma';
import { FileText } from 'lucide-react';


export default async function AboutPage() {
  const profile = await prisma.profile.findFirst();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">About Me</h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        {profile?.avatarUrl && (
          <div className="mb-8 flex justify-center md:justify-start">
            <img 
              src={profile.avatarUrl} 
              alt={profile.name || "Profile"} 
              className="w-48 h-48 rounded-full object-cover shadow-md"
            />
          </div>
        )}
        
        <div className="prose prose-lg text-gray-600 max-w-none whitespace-pre-wrap">
          {profile?.bio || "No biography available yet."}
        </div>

        {profile?.resumeUrl && (
          <div className="mt-10">
            <a 
              href={profile.resumeUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              <FileText size={20} className="mr-2" />
              View Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

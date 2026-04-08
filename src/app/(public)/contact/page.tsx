import { prisma } from '@/lib/prisma';
import ContactForm from './ContactForm';
import { Mail, Camera, Code2, Briefcase, Globe, Link2, MessageCircle } from 'lucide-react';

export default async function ContactPage() {
  // Fetch admin for primary email
  const admin = await prisma.admin.findFirst();
  const email = admin?.email || '';

  // Fetch social links
  const socialLinks = await prisma.socialLink.findMany({
    orderBy: { order: 'asc' },
  });

  const getPlatformIcon = (platform: string) => {
    const pl = platform.toLowerCase();
    if (pl.includes('github')) return <Code2 className="w-5 h-5" />;
    if (pl.includes('instagram')) return <Camera className="w-5 h-5" />;
    if (pl.includes('linkedin')) return <Briefcase className="w-5 h-5" />;
    if (pl.includes('whatsapp')) return <MessageCircle className="w-5 h-5" />;
    return <Globe className="w-5 h-5" />;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Side: Contact Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-gray-500 mb-10 text-lg leading-relaxed max-w-md">
            Have a question, a project idea, or just want to connect? I&apos;d love to hear from you. Reach out via the form, or using the channels below.
          </p>

          <div className="space-y-6">
            {email && (
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600 group-hover:bg-gray-900 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">Email</h3>
                  <a href={`mailto:${email}`} className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
                    {email}
                  </a>
                </div>
              </div>
            )}

            {socialLinks.map((link) => (
              <div key={link.id} className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600 group-hover:bg-gray-900 group-hover:text-white transition-all">
                  {getPlatformIcon(link.platform)}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">{link.platform}</h3>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors line-clamp-1 break-all"
                  >
                    {link.url.replace(/^https?:\/\/(www\.)?/, '')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-8 relative z-10">Send a Message</h2>
          <div className="relative z-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

import { prisma } from '@/lib/prisma';
import ContactForm from './ContactForm';
import { Mail, Camera, Code2, Briefcase, Globe, Link2, MessageCircle } from 'lucide-react';
import { FadeUp } from '@/components/ui/AnimatedContainer';

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
        <FadeUp>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">Get in Touch</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg leading-relaxed max-w-md transition-colors">
              Have a question, a project idea, or just want to connect? I&apos;d love to hear from you. Reach out via the form, or using the channels below.
            </p>

            <div className="space-y-6">
              {email && (
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email</h3>
                    <a href={`mailto:${email}`} className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {email}
                    </a>
                  </div>
                </div>
              )}

              {socialLinks.map((link) => (
                <div key={link.id} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                    {getPlatformIcon(link.platform)}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{link.platform}</h3>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-1 break-all"
                    >
                      {link.url.replace(/^https?:\/\/(www\.)?/, '')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Right Side: Form */}
        <FadeUp delay={0.2}>
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl shadow-gray-200/40 dark:shadow-none border border-gray-100 dark:border-gray-700 p-8 md:p-12 relative overflow-hidden transition-colors">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-50 dark:bg-blue-900/10 blur-3xl opacity-50 pointer-events-none" />
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 relative z-10 transition-colors">Send a Message</h2>
            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}


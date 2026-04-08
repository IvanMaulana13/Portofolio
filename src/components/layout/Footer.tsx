import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
            </span>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Home</span>
              Home
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Projects</span>
              Projects
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Contact</span>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
      <p className="text-gray-500 mb-12 text-lg">
        Have a question or want to work together? Feel free to reach out.
      </p>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <ContactForm />
      </div>
    </div>
  );
}

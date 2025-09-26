import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  theme: 'light' | 'dark';
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'service_ot5ggl3';
    const templateId = 'template_cnn5h9g';
    const publicKey = 'Vn5wJjrfLcIlu24tb';

    // Send the email using EmailJS
    emailjs.sendForm(serviceId, templateId, form.current!, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'success',
          text: 'Your message has been sent successfully! I will get back to you soon.',
        });
        setFormState({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setSubmitMessage(null);
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'error',
          text: 'Failed to send your message. Please try again or contact me directly via email.',
        });
      });
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        {/* Google Map */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">Find Me Here</h3>
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2416.8308567822482!2d75.41575123720196!3d12.846468928227791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1744962409121!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Contact Info & Social */}
          <div className="lg:col-span-1">
            <div className={`rounded-lg overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Mail size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-blue-600">Email</h4>
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>varunmcchinthu@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Phone size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-blue-600">Phone</h4>
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>+91 94816 01768</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-blue-600">Location</h4>
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Puttur, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-sm font-medium mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/varun601768"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
                      }`}
                    >
                      <Github size={18} />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/varun-m-c-27871b321"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
                      }`}
                    >
                      <Linkedin size={18} />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="https://twitter.com/varun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
                      }`}
                    >
                      <Twitter size={18} />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href="https://instagram.com/va_ru_n_salian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
                      }`}
                    >
                      <Instagram size={18} />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-2">
            <div className={`rounded-lg overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                {submitMessage && (
                  <div
                    className={`p-4 mb-6 rounded-lg ${
                      submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}

                <form ref={form} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-sm font-medium mb-2 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 rounded-lg border ${
                          theme === 'dark'
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium mb-2 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 rounded-lg border ${
                          theme === 'dark'
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                    ) : (
                      <Send size={18} className="mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
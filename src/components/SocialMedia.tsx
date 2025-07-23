import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Globe,
  MessageSquare,
  User,
  Calendar
} from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/nyaho_tamakloe',
    icon: <Twitter size={24} />,
    color: 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700',
    description: 'Follow for latest updates and insights'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/nyaho.tamakloe',
    icon: <Facebook size={24} />,
    color: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800',
    description: 'Connect and engage with the community'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/nyaho_tamakloe',
    icon: <Instagram size={24} />,
    color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    description: 'Behind-the-scenes moments and photos'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nyaho-tamakloe',
    icon: <Linkedin size={24} />,
    color: 'bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900',
    description: 'Professional network and achievements'
  },
  {
    name: 'Website',
    url: 'https://nyahotamakloe.com',
    icon: <Globe size={24} />,
    color: 'bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800',
    description: 'Official website and blog'
  }
];

const SocialMedia: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="social" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Connect & Engage
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Stay connected with Dr. Nyaho Nyaho-Tamakloe across various platforms and get in touch
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social Media Links */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Follow Dr. Nyaho</h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg ${link.color}`}
                >
                  <div className="flex-shrink-0">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{link.name}</h4>
                    <p className="text-sm opacity-90">{link.description}</p>
                  </div>
                  <Send size={16} className="opacity-70" />
                </motion.a>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-white dark:bg-dark-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-700 dark:text-gray-300">contact@nyahotamakloe.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-700 dark:text-gray-300">+233 XX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-700 dark:text-gray-300">Accra, Ghana</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 order-1 lg:order-2"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="book">Book Related</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="media">Media Interview</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-glow"
              >
                <MessageSquare size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-purple-700 dark:from-primary-700 dark:to-purple-800 rounded-lg p-6 sm:p-8 text-white text-center shadow-glow"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to receive updates about Dr. Nyaho's latest activities, speaking engagements, and insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia; 
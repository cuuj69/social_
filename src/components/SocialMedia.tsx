import React from 'react';
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
  Globe
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
    color: 'bg-blue-500 hover:bg-blue-600',
    description: 'Follow for latest updates and insights'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/nyaho.tamakloe',
    icon: <Facebook size={24} />,
    color: 'bg-blue-600 hover:bg-blue-700',
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
    color: 'bg-blue-700 hover:bg-blue-800',
    description: 'Professional network and achievements'
  },
  {
    name: 'Website',
    url: 'https://nyahotamakloe.com',
    icon: <Globe size={24} />,
    color: 'bg-green-600 hover:bg-green-700',
    description: 'Official website and blog'
  }
];

const SocialMedia: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <section id="social" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Connect & Engage</h2>
          <p className="text-lg md:text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
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
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Follow Dr. Nyaho</h3>
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
            <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-blue-600" />
                  <span className="text-gray-700">contact@nyahotamakloe.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-blue-600" />
                  <span className="text-gray-700">+233 XX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-blue-600" />
                  <span className="text-gray-700">Accra, Ghana</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

                              <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Send size={20} />
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
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white text-center"
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
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia; 
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Star, ExternalLink, Download, ShoppingCart } from 'lucide-react';

const BookSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <section id="book" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            His Story in Print
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover the complete journey of Dr. Nyaho Nyaho-Tamakloe through his acclaimed autobiography
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-purple-700 dark:from-primary-700 dark:to-purple-800 rounded-xl shadow-2xl p-8 text-white">
                <div className="text-center">
                  <BookOpen size={48} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Never Say Die!</h3>
                  <p className="text-lg opacity-90 mb-4">The Autobiography of a Ghanaian Statesman</p>
                  <div className="flex justify-center items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm font-medium">5.0</span>
                  </div>
                  <p className="text-sm opacity-75">Published 2013</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80 shadow-lg"
              />
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full opacity-60 shadow-lg"
              />
            </div>
          </motion.div>

          {/* Book Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Never Say Die!: The Autobiography of a Ghanaian Statesman
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                This compelling autobiography chronicles the extraordinary life of Dr. Nyaho Nyaho-Tamakloe, 
                from his humble beginnings in Adabraka to his distinguished career spanning medicine, 
                football administration, politics, and diplomacy.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-dark-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">What You'll Discover:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>His medical education journey in Prague</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Service in the Ghana Armed Forces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Leadership in Ghanaian football</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Founding the New Patriotic Party</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Diplomatic service in Serbia</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 border border-primary-200 dark:border-primary-800">
                <h4 className="font-semibold text-primary-800 dark:text-primary-200 mb-3">Book Details:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-primary-700 dark:text-primary-300">
                  <div>
                    <span className="font-medium">Publisher:</span> Ghana Universities Press
                  </div>
                  <div>
                    <span className="font-medium">Year:</span> 2013
                  </div>
                  <div>
                    <span className="font-medium">Language:</span> English
                  </div>
                  <div>
                    <span className="font-medium">Genre:</span> Autobiography
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@nyahotamakloe.com?subject=Book Sample Request"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-glow"
              >
                <Download size={20} />
                Read Sample
              </a>
              <a
                href="https://www.amazon.com/search?k=Never+Say+Die+Nyaho+Nyaho-Tamakloe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-all duration-300"
              >
                <ShoppingCart size={20} />
                Purchase Book
              </a>
            </div>

            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              <p>Available at major bookstores and online retailers</p>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">What Readers Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "A fascinating insight into Ghana's political and sporting landscape through the eyes of a true statesman.",
                author: "Ghana Book Review"
              },
              {
                quote: "Dr. Nyaho's story is one of resilience, leadership, and unwavering commitment to his country.",
                author: "African Literature Today"
              },
              {
                quote: "An inspiring autobiography that captures the spirit of a man who never gave up on his dreams.",
                author: "Readers' Choice Award"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-dark-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-white">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookSection; 
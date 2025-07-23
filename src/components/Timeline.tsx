import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
  category: 'education' | 'career' | 'politics' | 'football' | 'diplomacy';
}

const timelineData: TimelineEvent[] = [
  {
    year: '1942',
    title: 'Birth in Adabraka',
    description: 'Born on May 7, 1942, in Adabraka, a suburb of Accra, Gold Coast (now Ghana).',
    image: '/photo-1581704832940-a21203b94ad9.avif',
    category: 'education'
  },
  {
    year: '1960s',
    title: 'Medical Education in Prague',
    description: 'Studied at Charles University in Prague, Czechoslovakia, training to become a medical doctor.',
    image: '/photo-1579684453423-f84349ef60b0.jpeg',
    category: 'education'
  },
  {
    year: '1972',
    title: 'Ghana Armed Forces',
    description: 'Joined the Ghana Armed Forces as a medical practitioner during the National Redemption Council era.',
    image: '/photo-1609692235164-394d6828466c.avif',
    category: 'career'
  },
  {
    year: '1980s',
    title: 'Hearts of Oak Management',
    description: 'Joined the Accra Hearts of Oak Management Chair and Board, beginning his journey in football administration.',
    image: '/photo-1550591927-391fccf9934b.avif',
    category: 'football'
  },
  {
    year: '1992',
    title: 'Founding NPP Member',
    description: 'Became a founding member of the New Patriotic Party, marking his entry into active politics.',
    image: '/Gh_npp.gif',
    category: 'politics'
  },
  {
    year: '2001-2005',
    title: 'GFA Presidency',
    description: 'Served as President of the Ghana Football Association, leading the development of Ghanaian football.',
    image: '/Ghana_Football_Association_logo.png',
    category: 'football'
  },
  {
    year: '2005-2009',
    title: 'Ambassador to Serbia',
    description: 'Appointed as Ghana\'s Ambassador to Serbia and Montenegro, serving until 2009.',
    image: '/photo-1534974788331-bb9273017d4c.avif',
    category: 'diplomacy'
  },
  {
    year: '2013',
    title: 'Autobiography Published',
    description: 'Published "Never Say Die!: The Autobiography of a Ghanaian Statesman", sharing his life story.',
    image: '/photo-1455390582262-044cdead277a.avif',
    category: 'career'
  },
  {
    year: '2024',
    title: 'Continued Leadership',
    description: 'Reappointed to Hearts of Oak board and continues to be an influential voice in Ghanaian politics and sports.',
    image: '/photo-1632137349293-14d5e9f0e0ef.avif',
    category: 'politics'
  }
];

const TimelineEventComponent: React.FC<{ event: TimelineEvent; index: number }> = ({ event, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const categoryColors = {
    education: 'bg-primary-500 dark:bg-primary-400',
    career: 'bg-green-500 dark:bg-green-400',
    politics: 'bg-red-500 dark:bg-red-400',
    football: 'bg-yellow-500 dark:bg-yellow-400',
    diplomacy: 'bg-purple-500 dark:bg-purple-400'
  };

  const categoryLabels = {
    education: 'Education',
    career: 'Career',
    politics: 'Politics',
    football: 'Football',
    diplomacy: 'Diplomacy'
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex flex-col lg:flex-row items-start gap-6 lg:gap-8 mb-16 ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Timeline dot */}
      <div className="relative flex-shrink-0 order-1 lg:order-none">
        <div className={`w-6 h-6 rounded-full ${categoryColors[event.category]} shadow-lg border-4 border-white dark:border-dark-800`}></div>
        <div className="absolute top-6 left-3 w-0.5 h-20 lg:h-16 bg-gray-300 dark:bg-gray-600"></div>
      </div>

      {/* Content */}
      <div className={`flex-1 order-2 lg:order-none ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
        <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-200 dark:hover:border-primary-700">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">{event.year}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${categoryColors[event.category]} w-fit`}>
              {categoryLabels[event.category]}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{event.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{event.description}</p>
          {event.image && (
            <div className="mt-4">
              <img
                src={event.image}
                alt={event.title}
                className={`w-full h-48 sm:h-56 object-cover rounded-lg shadow-md ${
                  event.image.includes('Ghana_Football_Association_logo') 
                    ? 'object-contain bg-gray-100 dark:bg-dark-700 p-4' 
                    : ''
                }`}
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            A Life of Service & Leadership
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            From medical practice to football administration, from politics to diplomacy - 
            Dr. Nyaho Nyaho-Tamakloe's journey spans decades of dedicated service to Ghana.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 lg:left-6 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
          
          {/* Timeline events */}
          <div className="space-y-8">
            {timelineData.map((event, index) => (
              <TimelineEventComponent key={event.year} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-white">Timeline Categories</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {Object.entries({
              education: 'Education',
              career: 'Career',
              politics: 'Politics',
              football: 'Football',
              diplomacy: 'Diplomacy'
            }).map(([key, label]) => (
              <div key={key} className="flex items-center gap-2 bg-white dark:bg-dark-800 px-4 py-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className={`w-3 h-3 rounded-full ${
                  key === 'education' ? 'bg-primary-500' :
                  key === 'career' ? 'bg-green-500' :
                  key === 'politics' ? 'bg-red-500' :
                  key === 'football' ? 'bg-yellow-500' :
                  'bg-purple-500'
                }`}></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 
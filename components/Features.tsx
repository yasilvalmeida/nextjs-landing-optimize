'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Zap,
  Shield,
  Smartphone,
  BarChart3,
  Palette,
  Code,
} from 'lucide-react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description:
        'Optimized for speed with 90+ Lighthouse performance scores and sub-second load times.',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description:
        'Built with security best practices and enterprise-grade reliability standards.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description:
        'Responsive design that looks perfect on every device, from mobile to desktop.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: BarChart3,
      title: 'Analytics Ready',
      description:
        'Track performance metrics and user behavior with built-in analytics integration.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Palette,
      title: 'Customizable',
      description:
        'Easy to customize with your brand colors, fonts, and styling preferences.',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description:
        'Clean, maintainable code with TypeScript, ESLint, and modern best practices.',
      color: 'bg-indigo-100 text-indigo-600',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id='features' className='py-24 bg-white' ref={ref}>
      <div className='container section-padding'>
        <motion.div
          className='text-center mb-20'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-secondary-900 mb-6'>
            Everything You Need to{' '}
            <span className='text-gradient'>Succeed</span>
          </h2>
          <p className='text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed'>
            Our landing page solution comes packed with all the features you
            need to create high-converting, professional websites that your
            users will love.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className='group h-full'
              >
                <motion.div
                  className='relative p-8 rounded-2xl border border-secondary-200 bg-white hover:bg-secondary-50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2 h-full flex flex-col'
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} mb-6`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className='w-7 h-7' />
                  </motion.div>

                  <h3 className='text-xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300'>
                    {feature.title}
                  </h3>
                  <p className='text-secondary-600 leading-relaxed flex-grow'>
                    {feature.description}
                  </p>

                  <motion.div
                    className='absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className='text-center mt-20'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className='text-lg text-secondary-600 mb-8'>
            Ready to experience the difference?
          </p>
          <motion.button
            className='btn-primary text-lg px-8 py-4'
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Building Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

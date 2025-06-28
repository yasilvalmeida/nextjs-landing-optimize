'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const stats = [
    { label: 'Happy Customers', value: '10,000+' },
    { label: 'Performance Score', value: '98%' },
    { label: 'Load Time', value: '<1s' },
  ];

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>

      {/* Floating Elements */}
      <motion.div
        className='absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70'
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className='absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70'
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className='container section-padding relative z-10'>
        <motion.div
          className='max-w-4xl mx-auto text-center'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className='inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-8'
          >
            <Star className='w-4 h-4 mr-2 fill-current' />
            Trusted by 10,000+ developers
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className='text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 leading-tight'
          >
            Build{' '}
            <span className='text-gradient relative'>
              Lightning-Fast
              <motion.div
                className='absolute -bottom-2 left-0 right-0 h-3 bg-primary-200 -z-10'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </span>{' '}
            Landing Pages
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className='text-xl md:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed'
          >
            Create stunning, high-performance landing pages with optimal user
            experience, accessibility, and Lighthouse scores that convert
            visitors into customers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'
          >
            <motion.button
              className='btn-primary text-lg px-8 py-4'
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
              <ArrowRight className='ml-2 h-5 w-5' />
            </motion.button>

            <motion.button
              className='btn-secondary text-lg px-8 py-4 group'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className='mr-2 h-5 w-5 group-hover:scale-110 transition-transform' />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto'
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className='text-center'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
              >
                <div className='text-3xl md:text-4xl font-bold text-primary-600 mb-2'>
                  {stat.value}
                </div>
                <div className='text-secondary-600 font-medium'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <motion.div
          className='w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className='w-1 h-3 bg-secondary-400 rounded-full mt-2'
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    'Setup in under 5 minutes',
    '30-day money-back guarantee',
    'Free updates and support',
    'No coding required',
  ];

  return (
    <section
      className='py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden'
      ref={ref}
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]'></div>

      {/* Animated Background Elements */}
      <motion.div
        className='absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-xl'
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className='absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-xl'
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className='container section-padding relative z-10'>
        <motion.div
          className='max-w-4xl mx-auto text-center text-white'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.h2
            className='text-4xl md:text-6xl font-bold mb-6 leading-tight'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Build Your
            <br />
            <span className='bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent'>
              Perfect Landing Page?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className='text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join thousands of businesses that have already transformed their
            online presence with our high-converting, lightning-fast landing
            page solution.
          </motion.p>

          {/* Benefits List */}
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className='flex items-center justify-center md:justify-start space-x-3'
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <CheckCircle className='w-6 h-6 text-green-300 flex-shrink-0' />
                <span className='text-primary-100'>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.button
              className='inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white rounded-lg hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200'
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(255, 255, 255, 0.3)',
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
              <ArrowRight className='ml-2 h-5 w-5' />
            </motion.button>

            <motion.button
              className='inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live Demo
            </motion.button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            className='text-primary-200 text-sm'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            ✨ No credit card required • Cancel anytime • 30-day guarantee
          </motion.p>
        </motion.div>

        {/* Floating Action Elements */}
        <motion.div
          className='absolute top-1/4 left-8 hidden lg:block'
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center'>
            <ArrowRight className='w-8 h-8 text-white' />
          </div>
        </motion.div>

        <motion.div
          className='absolute top-1/3 right-8 hidden lg:block'
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className='w-12 h-12 bg-yellow-300/30 rounded-full'></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

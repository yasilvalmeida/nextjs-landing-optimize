'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      content:
        'This landing page solution exceeded our expectations. Our conversion rate increased by 40% within the first month!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'StartupXYZ',
      content:
        'The performance optimization is incredible. Our page loads in under a second, and the Lighthouse scores are consistently 95+.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'Design Studio',
      content:
        'Beautiful, accessible, and responsive. The animations are smooth and the user experience is top-notch.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Developer',
      company: 'WebAgency',
      content:
        'Clean code, excellent documentation, and easy to customize. This has become our go-to solution for client projects.',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'Product Manager',
      company: 'InnovateCo',
      content:
        'The accessibility features are outstanding. We can confidently serve all our users with this inclusive design.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'GrowthLabs',
      content:
        'ROI was immediate. The professional design and fast loading times significantly improved our lead generation.',
      rating: 5,
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
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className='flex items-center space-x-1'>
        {[...Array(rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Star className='w-5 h-5 fill-yellow-400 text-yellow-400' />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section
      id='testimonials'
      className='py-24 bg-gradient-to-b from-secondary-50 to-white'
      ref={ref}
    >
      <div className='container section-padding'>
        <motion.div
          className='text-center mb-20'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-secondary-900 mb-6'>
            What Our <span className='text-gradient'>Customers</span> Say
          </h2>
          <p className='text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed'>
            Join thousands of satisfied customers who have transformed their
            online presence with our high-performance landing page solution.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className='group perspective-1000'
            >
              <motion.div
                className='relative p-8 rounded-2xl bg-white border border-secondary-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className='absolute -top-4 -left-4 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center'
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote className='w-4 h-4 text-white' />
                </motion.div>

                <div className='mb-6'>
                  <StarRating rating={testimonial.rating} />
                </div>

                <blockquote className='text-secondary-700 mb-6 leading-relaxed text-lg'>
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <div className='flex items-center'>
                  <motion.div
                    className='w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold mr-4'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div>
                    <div className='font-semibold text-secondary-900'>
                      {testimonial.name}
                    </div>
                    <div className='text-sm text-secondary-600'>
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>

                <motion.div
                  className='absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='mt-20 text-center'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className='text-secondary-600 mb-8'>Trusted by industry leaders</p>
          <div className='flex items-center justify-center space-x-12 opacity-50'>
            {['TechCorp', 'StartupXYZ', 'Design Studio', 'WebAgency'].map(
              (company, index) => (
                <motion.div
                  key={company}
                  className='text-2xl font-bold text-secondary-400'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                >
                  {company}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

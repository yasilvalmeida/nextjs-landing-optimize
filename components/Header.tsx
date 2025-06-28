'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-secondary-200'>
      <nav
        className='container section-padding py-4'
        aria-label='Main navigation'
      >
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center'
          >
            <a
              href='#home'
              className='text-2xl font-bold text-gradient focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md px-2 py-1'
              aria-label='OptimizedLanding homepage'
            >
              OptimizedLanding
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='hidden md:flex items-center space-x-8'
          >
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className='text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md px-2 py-1'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className='absolute inset-x-0 -bottom-1 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
              </motion.a>
            ))}
            <motion.button
              className='btn-primary'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ChevronRight className='ml-2 h-4 w-4' />
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className='md:hidden p-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200'
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='md:hidden mt-4 pb-4 border-t border-secondary-200'
            >
              <div className='pt-4 space-y-3'>
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className='block text-secondary-700 hover:text-primary-600 font-medium py-2 px-3 rounded-lg hover:bg-secondary-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500'
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  className='btn-primary w-full mt-4'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                  <ChevronRight className='ml-2 h-4 w-4' />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

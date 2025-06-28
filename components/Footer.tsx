'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  ArrowUp,
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Templates', href: '#templates' },
      { name: 'Integration', href: '#integration' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Status', href: '#status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#github' },
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'hello@optimizedlanding.com',
      href: 'mailto:hello@optimizedlanding.com',
    },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#location' },
  ];

  return (
    <footer className='bg-secondary-900 text-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-grid-white/5 bg-[size:60px_60px]'></div>

      <div className='container section-padding relative z-10'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 py-16'>
          {/* Brand Section */}
          <motion.div
            className='lg:col-span-1'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='mb-6'>
              <h3 className='text-2xl font-bold text-gradient bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent'>
                OptimizedLanding
              </h3>
              <p className='text-secondary-400 mt-4 leading-relaxed'>
                Create lightning-fast, accessible, and high-converting landing
                pages that deliver exceptional user experiences and outstanding
                performance scores.
              </p>
            </div>

            {/* Contact Info */}
            <div className='space-y-3'>
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.text}
                    href={item.href}
                    className='flex items-center space-x-3 text-secondary-400 hover:text-primary-400 transition-colors duration-200 group'
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <IconComponent className='w-5 h-5 group-hover:scale-110 transition-transform duration-200' />
                    <span>{item.text}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className='lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8'>
            {Object.entries(footerLinks).map(
              ([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className='text-lg font-semibold text-white mb-4 capitalize'>
                    {category}
                  </h4>
                  <ul className='space-y-3'>
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          className='text-secondary-400 hover:text-primary-400 transition-colors duration-200 hover:underline'
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className='border-t border-secondary-700 pt-8 pb-8'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            {/* Copyright */}
            <div className='text-secondary-400 text-sm'>
              © {new Date().getFullYear()} OptimizedLanding. All rights
              reserved.
            </div>

            {/* Social Links */}
            <div className='flex items-center space-x-6'>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className='text-secondary-400 hover:text-primary-400 transition-colors duration-200'
                    aria-label={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -2 }}
                  >
                    <IconComponent className='w-6 h-6' />
                  </motion.a>
                );
              })}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className='flex items-center space-x-2 text-secondary-400 hover:text-primary-400 transition-colors duration-200 group'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className='text-sm'>Back to top</span>
              <ArrowUp className='w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-200' />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Back to Top Button for Mobile */}
      <motion.button
        onClick={scrollToTop}
        className='fixed bottom-8 right-8 w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 md:hidden z-50'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label='Back to top'
      >
        <ArrowUp className='w-6 h-6 mx-auto' />
      </motion.button>
    </footer>
  );
};

export default Footer;

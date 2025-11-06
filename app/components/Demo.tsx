'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { containerAnimation, itemAnimation } from './animations';

const demoImages = [
  {
    src: '/Demo/Home.png',
    alt: 'Home Dashboard',
    title: 'Home Dashboard'
  },
  {
    src: '/Demo/Sale.png',
    alt: 'Point of Sale',
    title: 'Point of Sale'
  },
  {
    src: '/Demo/ProductManager.png',
    alt: 'Product Management',
    title: 'Product Management'
  },
  {
    src: '/Demo/Analytics.png',
    alt: 'Analytics Dashboard',
    title: 'Analytics Dashboard'
  },
  {
    src: '/Demo/TransactionHistory.png',
    alt: 'Transaction History',
    title: 'Transaction History'
  }
];

export default function Demo() {
  return (
    <section id="demo" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the interface and features of our restaurant management system
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {demoImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-center">
                {image.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { FaWindows, FaLinux, FaApple, FaAndroid, FaMobile } from 'react-icons/fa';
import { containerAnimation } from './animations';
import DownloadCard from './DownloadCard';

const downloadLinks = [
  {
    platform: 'Windows',
    icon: FaWindows,
    files: [
      { format: '.exe', url: 'https://github.com/Roboticela/Restaurant-Management-System/releases/latest/download/restaurant-management-system-setup.exe' },
      { format: '.msi', url: 'https://github.com/Roboticela/Restaurant-Management-System/releases/latest/download/restaurant-management-system-setup.msi' }
    ],
    color: 'from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700'
  },
  {
    platform: 'Linux',
    icon: FaLinux,
    files: [
      { format: '.AppImage', url: 'https://github.com/Roboticela/Restaurant-Management-System/releases/latest/download/restaurant-management-system.AppImage' },
      { format: '.deb', url: 'https://github.com/Roboticela/Restaurant-Management-System/releases/latest/download/restaurant-management-system.deb' },
      { format: '.rpm', url: 'https://github.com/Roboticela/Restaurant-Management-System/releases/latest/download/restaurant-management-system.rpm' }
    ],
    color: 'from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700'
  },
  {
    platform: 'macOS',
    icon: FaApple,
    files: [
      { format: '.dmg', url: 'https://github.com/Roboticela/Restaurant-Management-System/releases/latest/download/restaurant-management-system.dmg' },
      { format: '.app', url: 'https://github.com/Roboticela/Restaurant-Management-System/releases/latest/download/restaurant-management-system.app.tar.gz' }
    ],
    color: 'from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800'
  },
  {
    platform: 'iOS',
    icon: FaMobile,
    files: [
      { format: '.ipa', url: 'https://github.com/Roboticela/Restaurant-Management-System/releases/latest/download/restaurant-management-system.ipa' },
      { store: 'App Store' }
    ],
    color: 'from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700'
  },
  {
    platform: 'Android',
    icon: FaAndroid,
    files: [
      { format: '.apk', url: 'https://github.com/Roboticela/Restaurant-Management-System/releases/latest/download/restaurant-management-system.apk' },
      { store: 'Play Store' }
    ],
    color: 'from-green-500 to-green-600 dark:from-green-600 dark:to-green-700'
  }
];

export default function Downloads() {
  return (
    <section id="downloads" className="py-16 md:py-24 px-4 bg-white/30 dark:bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Download for Your Platform
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Available for Windows, Linux, macOS, iOS, and Android. Choose your platform and get started today.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {downloadLinks.map((platform, index) => (
            <DownloadCard
              key={index}
              platform={platform.platform}
              icon={platform.icon}
              files={platform.files}
              color={platform.color}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-600 dark:text-gray-300 mb-4">
            Looking for the latest version? Check our{' '}
            <a 
              href="https://github.com/Roboticela/Restaurant-Management-System/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-700! dark:hover:text-teal-300! hover:underline underline-offset-4 font-semibold transition-all duration-200 cursor-pointer"
            >
              GitHub Releases
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}


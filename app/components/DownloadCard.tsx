'use client';

import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { itemAnimation } from './animations';

interface DownloadFile {
  format?: string;
  url?: string;
  store?: string;
}

interface DownloadCardProps {
  platform: string;
  icon: IconType;
  files: DownloadFile[];
  color: string;
}

export default function DownloadCard({ platform, icon: Icon, files, color }: DownloadCardProps) {
  const getDownloadUrl = (file: DownloadFile, platform: string) => {
    // If it's a store link, return the store URL
    if (file.store) {
      if (file.store === 'App Store') {
        return 'https://apps.apple.com/app/restaurant-management-system';
      } else if (file.store === 'Play Store') {
        return 'https://play.google.com/store/apps/details?id=com.roboticela.restaurantmanagement';
      }
    }
    
    // If custom URL is provided, use it
    if (file.url) {
      return file.url;
    }
    
    // Default to GitHub releases (this will be updated with actual release URLs)
    if (file.format) {
      const format = file.format.replace('.', '');
      return `https://github.com/Roboticela/Restaurant-Management-System/releases/latest/download/${platform.toLowerCase()}-${format}`;
    }
    return '#';
  };

  return (
    <motion.div
      variants={itemAnimation}
      whileHover={{ y: -5 }}
      className={`bg-linear-to-br ${color} text-white rounded-2xl p-8 text-center transition-all duration-300`}
    >
      <Icon className="w-16 h-16 mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-6">{platform}</h3>
      <div className="space-y-3">
        {files.map((file, fileIndex) => (
          <motion.a
            key={fileIndex}
            href={getDownloadUrl(file, platform)}
            target={file.store ? '_blank' : undefined}
            rel={file.store ? 'noopener noreferrer' : undefined}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaDownload className="text-lg" />
            <span className="text-sm md:text-base">{file.store || file.format}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}


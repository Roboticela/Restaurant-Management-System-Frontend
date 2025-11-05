'use client';

import { FaUtensils, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/70 dark:bg-white/10 backdrop-blur-sm border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaUtensils className="w-8 h-8 text-teal-500 dark:text-teal-400" />
          <span className="text-xl font-bold text-slate-900 dark:text-white">Restaurant Management System</span>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <a href="#features" className="text-slate-700 dark:text-gray-300 hover:text-teal-600! dark:hover:text-teal-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer text-sm md:text-base">Features</a>
          <a href="#downloads" className="text-slate-700 dark:text-gray-300 hover:text-teal-600! dark:hover:text-teal-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer text-sm md:text-base">Download</a>
          <a href="#faq" className="text-slate-700 dark:text-gray-300 hover:text-teal-600! dark:hover:text-teal-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer text-sm md:text-base">FAQ</a>
          <a href="#support" className="text-slate-700 dark:text-gray-300 hover:text-teal-600! dark:hover:text-teal-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer text-sm md:text-base">Support</a>
          <a href="/contact" className="text-slate-700 dark:text-gray-300 hover:text-teal-600! dark:hover:text-teal-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer text-sm md:text-base">Contact</a>
          <a href="#about" className="text-slate-700 dark:text-gray-300 hover:text-teal-600! dark:hover:text-teal-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer text-sm md:text-base">About</a>
          <a 
            href="https://github.com/Roboticela/Restaurant-Management-System" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl transition-colors"
          >
            <FaGithub className="text-lg" />
            <span className="text-slate-900 dark:text-white font-semibold">GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}


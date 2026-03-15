'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const AIHero = () => {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Intelligent UX Orchestration
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Bridging the gap between deterministic design and generative intelligence for the modern enterprise.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center gap-2">
              <Sparkles size={16} /> Get Started
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
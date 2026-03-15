'use client';

import { motion } from 'framer-motion';

export const PerformanceChart = () => {
  // Enterprise-grade SVG Chart with Framer Motion animations
  const data = [40, 70, 45, 90, 65, 80, 95];
  
  return (
    <div className="w-full h-64 flex items-end justify-between gap-2 p-4">
      {data.map((value, i) => (
        <div key={i} className="relative flex-1 flex flex-col items-center group">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: `${value}%` }}
            transition={{ duration: 1, delay: i * 0.1, ease: "circOut" }}
            className="w-full bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-sm shadow-lg group-hover:from-emerald-500 group-hover:to-teal-400 transition-all cursor-pointer"
          />
          <span className="text-[10px] text-slate-500 mt-2 font-mono">Q{i + 1}</span>
          
          {/* Tooltip */}
          <div className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
            Value: {value}%
          </div>
        </div>
      ))}
    </div>
  );
};
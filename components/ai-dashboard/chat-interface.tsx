'use client';

import { useAIStream } from '@/hooks/use-ai-stream';
import { Send, Bot, User } from 'lucide-react';
import { motion } from 'framer-motion';

export const AIChatInterface = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useAIStream();

  return (
    <div className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
      <div className="p-4 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
        <h3 className="font-semibold text-slate-100 flex items-center gap-2">
          <Bot className="text-emerald-400" size={20} />
          Enterprise Copilot
        </h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-slate-500 text-sm text-center mt-10">How can I assist with your data today?</div>
        ) : (
          messages.map((m, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={idx} 
              className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${m.role === 'user' ? 'bg-blue-600' : 'bg-emerald-900/50 border border-emerald-800'}`}>
                {m.role === 'user' ? <User size={16} /> : <Bot size={16} className="text-emerald-400" />}
              </div>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'}`}>
                {m.content}
              </div>
            </motion.div>
          ))
        )}
        {isLoading && (
          <div className="flex gap-2 items-center text-emerald-400 text-sm p-2">
            <span className="animate-pulse">●</span><span className="animate-pulse delay-75">●</span><span className="animate-pulse delay-150">●</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-slate-800 bg-slate-900/50">
        <div className="relative flex items-center">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Query your enterprise data..."
            className="w-full bg-slate-950 border border-slate-700 rounded-full pl-4 pr-12 py-3 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
          />
          <button 
            type="submit" 
            disabled={isLoading || !input}
            className="absolute right-2 p-2 rounded-full bg-blue-600 text-white disabled:opacity-50 hover:bg-blue-500 transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </form>
    </div>
  );
};
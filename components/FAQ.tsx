import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {FAQS.map((faq) => (
          <div key={faq.id} className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden transition-colors hover:bg-white/10">
            <button
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <span className="p-2 rounded-full bg-white/5 text-purple-400">
                {openId === faq.id ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <AnimatePresence>
              {openId === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-black opacity-20 rounded-full blur-3xl"></div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight relative z-10">
            Ready to Ace Your <br/> Next Exam?
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto relative z-10">
            Join 10,000+ students who have already upgraded their study routine. Download AceIt AI today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
             <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl flex items-center gap-2 transform hover:scale-105 duration-200">
              Download Now
              <ArrowRight size={20} />
            </button>
            <span className="text-purple-200 text-sm font-medium">Free 7-day trial for Pro features</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

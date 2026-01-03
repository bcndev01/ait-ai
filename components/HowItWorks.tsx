import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Cpu, Sparkles } from 'lucide-react';

const steps = [
  {
    title: "Snap",
    description: "Take a photo of your messy handwritten notes or textbook.",
    icon: Camera,
    color: "bg-blue-500"
  },
  {
    title: "Process",
    description: "Our AI engine analyzes the text, structure, and diagrams instantly.",
    icon: Cpu,
    color: "bg-purple-500"
  },
  {
    title: "Master",
    description: "Get quizzes, mind maps, and flashcards generated automatically.",
    icon: Sparkles,
    color: "bg-emerald-500"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">From Notes to Mastery</h2>
          <p className="text-gray-400">Three simple steps to smarter studying.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-emerald-500/50 -z-10 border-t border-dashed border-white/20"></div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 rounded-3xl ${step.color} bg-opacity-10 flex items-center justify-center mb-6 relative transition-transform duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10`}>
                 <div className={`absolute inset-0 ${step.color} blur-xl opacity-20`}></div>
                 <step.icon className="w-10 h-10 text-white relative z-10" />
                 <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0F172A] border border-white/10 flex items-center justify-center font-bold text-gray-400">
                    {i + 1}
                 </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

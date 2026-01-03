import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-pink-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-300 tracking-wide">AI STUDY COMPANION v2.0</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
            Ace Every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Exam
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Turn your messy notes into interactive quizzes, mind maps, and flashcards instantly. Studying just got an upgrade.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="relative group px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Download on App Store</span>
            </button>
            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2">
              <span>Watch Demo</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[8px] border-l-white border-b-[4px] border-b-transparent ml-0.5"></div>
              </div>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/${i}/40/40`} alt="User" className="w-8 h-8 rounded-full border-2 border-[#0F172A]" />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <span>Loved by 10k+ students</span>
            </div>
          </div>
        </motion.div>

        {/* 3D Visual Mockup */}
        <motion.div
          style={{ y: y2, rotate: rotate }}
          className="relative hidden lg:block perspective-1000"
        >
          <div className="relative w-[320px] h-[640px] mx-auto transform rotate-y-[-12deg] rotate-x-[5deg] shadow-2xl transition-transform duration-500 hover:rotate-0">
            {/* iPhone Frame */}
            <div className="absolute inset-0 rounded-[3rem] border-8 border-gray-800 shadow-[0_0_0_2px_#333,0_0_0_6px_#000] z-20 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30"></div>
            </div>
            {/* Screen Content */}
            <div className="absolute inset-[2px] rounded-[2.8rem] overflow-hidden bg-[#0F172A] z-10">
              <img src="/dashboard_mockup.png" alt="App Screen" className="w-full h-full object-cover" />

              {/* Floating Elements on screen - Removed for clarity */}
              {/* Floating overlays removed to show dashboard */}
            </div>
            {/* Glow behind */}
            <div className="absolute inset-0 bg-purple-600 blur-[80px] opacity-40 -z-10 translate-y-10"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{ y: y1, opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">Scroll to explore</span>
        <ArrowDown className="text-white animate-bounce" size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;

'use client';
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FEATURES } from '../constants';

// 3D Tilt Card Component
const TiltCard: React.FC<{
  feature: typeof FEATURES[0];
  index: number;
}> = ({ feature, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={`group relative rounded-[2rem] overflow-hidden cursor-pointer ${feature.size === 'large' ? 'md:col-span-2' : ''
        }`}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-[2rem] p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Main card content */}
      <div className="relative h-full rounded-[2rem] bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl border border-white/[0.08] p-8 flex flex-col justify-between overflow-hidden">

        {/* Background gradient orb */}
        <motion.div
          className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${feature.color} blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
        />

        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        {/* Content with 3D transform */}
        <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
          {/* Icon with glow */}
          <div className="relative mb-6">
            {/* Pulsing glow behind icon */}
            <motion.div
              className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} blur-xl opacity-0 group-hover:opacity-60`}
              animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
              <feature.icon className="text-white w-7 h-7" />
            </div>
          </div>

          {/* Title with gradient on hover */}
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed max-w-sm group-hover:text-gray-300 transition-colors duration-300">
            {feature.description}
          </p>
        </div>


        {/* Large card decorative image */}
        {feature.size === 'large' && feature.image && (
          <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
            <img src={feature.image} className="w-full h-full object-contain" alt="" />
          </div>
        )}

        {/* Corner accent */}
        <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${feature.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
};

const BentoGrid: React.FC = () => {
  return (
    <section id="features" className="py-28 px-6 relative z-10">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm text-gray-300">Powerful Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Your Ultimate{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Study Arsenal
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to crush your exams, packed into one beautiful app.
          </motion.p>
        </div>

        {/* Bento Grid with 3D Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-5"
          style={{ perspective: '1500px' }}
        >
          {FEATURES.map((feature, i) => (
            <TiltCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

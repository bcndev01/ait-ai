'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const screens = [
    {
        id: 1,
        title: "3D Playground",
        description: "Explore 3D models interactively",
        image: "/3d_playground.png",
        color: "from-cyan-500 to-blue-600",
        gradient: "rgba(6, 182, 212, 0.3)"
    },
    {
        id: 2,
        title: "AI Tutor",
        description: "24/7 personal study guide",
        image: "/ai_tutor.png",
        color: "from-purple-500 to-indigo-600",
        gradient: "rgba(139, 92, 246, 0.3)"
    },
    {
        id: 3,
        title: "Mind Map",
        description: "Visual knowledge connections",
        image: "/mind_map.png",
        color: "from-emerald-500 to-teal-600",
        gradient: "rgba(16, 185, 129, 0.3)"
    },
    {
        id: 4,
        title: "Quiz Generator",
        description: "Instant practice tests",
        image: "/quiz_generator.png",
        color: "from-orange-500 to-amber-500",
        gradient: "rgba(249, 115, 22, 0.3)"
    },
    {
        id: 5,
        title: "AI Study Notes",
        description: "Smart summaries & flashcards",
        image: "/study_notes.png",
        color: "from-pink-500 to-rose-500",
        gradient: "rgba(236, 72, 153, 0.3)"
    }
];

const AppShowcase: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Start with Mind Map in center
    const [isHovering, setIsHovering] = useState(false);

    const getCardStyle = (index: number) => {
        const diff = index - activeIndex;
        const absDistance = Math.abs(diff);

        // Base values
        let translateX = diff * 180;
        let translateZ = -absDistance * 120;
        let rotateY = diff * -15;
        let scale = 1 - absDistance * 0.12;
        let opacity = 1 - absDistance * 0.25;
        let zIndex = 10 - absDistance;

        // Adjust for expanded state on hover
        if (isHovering) {
            translateX = diff * 240;
            rotateY = diff * -8;
        }

        return {
            transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
            opacity: Math.max(opacity, 0.4),
            zIndex
        };
    };

    return (
        <section className="py-28 px-6 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[150px] transition-all duration-700"
                    style={{ background: screens[activeIndex].gradient }}
                />
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-sm text-gray-300">Experience the App</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-5 tracking-tight"
                    >
                        Functionality at your{' '}
                        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Fingertips
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Swipe through the future of studying — beautiful interfaces, powerful AI.
                    </motion.p>
                </div>

                {/* 3D Card Stack */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[650px] flex items-center justify-center"
                    style={{ perspective: '1500px' }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div className="relative w-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                        {screens.map((screen, index) => (
                            <motion.div
                                key={screen.id}
                                className="absolute cursor-pointer group"
                                initial={false}
                                animate={getCardStyle(index)}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                                onClick={() => setActiveIndex(index)}
                                whileHover={{ scale: index === activeIndex ? 1.02 : undefined }}
                            >
                                {/* Phone Frame */}
                                <div className={`relative w-[260px] h-[540px] rounded-[2.5rem] bg-gradient-to-b from-gray-800 to-gray-900 p-[3px] shadow-2xl transition-all duration-500 ${index === activeIndex ? 'shadow-emerald-500/20' : ''}`}>
                                    {/* Glow effect for active card */}
                                    {index === activeIndex && (
                                        <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-t ${screen.color} opacity-30 blur-xl -z-10`} />
                                    )}

                                    {/* Inner phone body */}
                                    <div className="relative w-full h-full rounded-[2.3rem] bg-black overflow-hidden">
                                        {/* Dynamic Island */}
                                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-gray-800 mr-4" />
                                        </div>

                                        {/* Screen Content */}
                                        <img
                                            src={screen.image}
                                            alt={screen.title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Overlay gradient for non-active cards */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${index === activeIndex ? 'opacity-0' : 'opacity-60'}`}
                                        />

                                        {/* Glass info panel - shows on hover for active card */}
                                        <AnimatePresence>
                                            {index === activeIndex && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 20 }}
                                                    className="absolute bottom-0 left-0 right-0 p-5"
                                                >
                                                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                                                        <h3 className="text-lg font-semibold text-white mb-1">{screen.title}</h3>
                                                        <p className="text-sm text-gray-300">{screen.description}</p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Reflection */}
                                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-white/5 blur-2xl rounded-full" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Navigation dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {screens.map((screen, index) => (
                        <button
                            key={screen.id}
                            onClick={() => setActiveIndex(index)}
                            className={`group relative transition-all duration-300 ${index === activeIndex ? 'scale-110' : 'hover:scale-105'}`}
                        >
                            <div
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? `bg-gradient-to-r ${screen.color} shadow-lg`
                                        : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                            />

                            {/* Tooltip */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800/90 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-xs text-white pointer-events-none">
                                {screen.title}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Feature highlight text */}
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mt-10"
                >
                    <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${screens[activeIndex].color} bg-opacity-20 text-sm font-medium text-white`}>
                        {screens[activeIndex].title}
                    </span>
                </motion.div>
            </div>
        </section>
    );
};

export default AppShowcase;

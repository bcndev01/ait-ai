'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Atom, Layers, Zap, Sparkles, Globe, Dna } from 'lucide-react';

// Custom hook for mobile detection and reduced motion preference
const useOptimizedAnimations = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for mobile device
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };

        // Check for reduced motion preference
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(motionQuery.matches);

        checkMobile();
        window.addEventListener('resize', checkMobile);
        motionQuery.addEventListener('change', (e) => setPrefersReducedMotion(e.matches));

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return { isMobile, prefersReducedMotion, shouldReduceAnimations: isMobile || prefersReducedMotion };
};

// Orbital floating element component
const FloatingOrbit: React.FC<{
    icon: React.ElementType;
    size: number;
    orbitSize: number;
    duration: number;
    delay: number;
    color: string;
    reverse?: boolean;
}> = ({ icon: Icon, size, orbitSize, duration, delay, color, reverse = false }) => {
    return (
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: orbitSize, height: orbitSize }}
            animate={{ rotate: reverse ? -360 : 360 }}
            transition={{ duration, repeat: Infinity, ease: "linear", delay }}
        >
            <motion.div
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full backdrop-blur-md border border-white/20`}
                style={{
                    background: `linear-gradient(135deg, ${color}40, ${color}20)`,
                    boxShadow: `0 0 20px ${color}40`
                }}
                animate={{ rotate: reverse ? 360 : -360 }}
                transition={{ duration, repeat: Infinity, ease: "linear", delay }}
            >
                <Icon size={size} className="text-white" />
            </motion.div>
        </motion.div>
    );
};

// Pulsing glow ring component
const GlowRing: React.FC<{ size: number; delay: number; color: string }> = ({ size, delay, color }) => {
    return (
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
                width: size,
                height: size,
                border: `1px solid ${color}`,
                boxShadow: `0 0 30px ${color}, inset 0 0 30px ${color}20`
            }}
            animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay
            }}
        />
    );
};

// Optimized Image component with progressive loading and WebP support
const OptimizedImage: React.FC<{
    webp: string;
    png: string;
    alt: string;
    priority?: boolean;
}> = ({ webp, png, alt, priority = false }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (priority || !imgRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '100px' }
        );

        observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, [priority]);

    return (
        <div ref={imgRef} className="min-w-full h-full relative bg-black">
            {/* Blur placeholder */}
            <div
                className={`absolute inset-0 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
            />

            {/* Loading spinner */}
            {!isLoaded && isInView && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
                </div>
            )}

            {/* Picture element with WebP and PNG fallback */}
            {isInView && (
                <picture className="contents">
                    <source srcSet={webp} type="image/webp" />
                    <img
                        src={png}
                        alt={alt}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setIsLoaded(true)}
                        loading={priority ? "eager" : "lazy"}
                        decoding="async"
                    />
                </picture>
            )}
        </div>
    );
};

// 3D Model showcase images - WebP with PNG fallback
const showcaseImages = [
    { webp: '/images/3d-models/heart.webp', png: '/images/3d-models/heart-optimized.png', alt: 'Human Heart 3D Model' },
    { webp: '/images/3d-models/brain.webp', png: '/images/3d-models/brain-optimized.png', alt: 'Human Brain 3D Model' },
    { webp: '/images/3d-models/eye.webp', png: '/images/3d-models/eye-optimized.png', alt: 'Human Eye 3D Model' },
];

const FeatureSpotlight: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const { shouldReduceAnimations, isMobile } = useOptimizedAnimations();

    // Auto-slide every 3 seconds (slower on mobile to reduce repaints)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev: number) => (prev + 1) % showcaseImages.length);
        }, isMobile ? 5000 : 3000);
        return () => clearInterval(interval);
    }, [isMobile]);

    // Mouse parallax - disabled on mobile/touch devices
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { stiffness: 100, damping: 20 };
    const parallaxX = useSpring(mouseX, springConfig);
    const parallaxY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Skip parallax on mobile - major performance drain
        if (shouldReduceAnimations) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            mouseX.set((e.clientX - centerX) / 30);
            mouseY.set((e.clientY - centerY) / 30);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY, shouldReduceAnimations]);

    // Generate star positions only once (memoized)
    const starPositions = useMemo(() =>
        [...Array(shouldReduceAnimations ? 8 : 30)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 2
        })), [shouldReduceAnimations]);

    const features = [
        {
            icon: Atom,
            title: "Interactive Models",
            desc: "Anatomy, Chemistry, Astronomy in stunning 4K detail.",
            color: "from-blue-500 to-cyan-500",
            iconBg: "bg-blue-500/20"
        },
        {
            icon: Layers,
            title: "Spatial UI",
            desc: "Apple-grade glassmorphic interface design.",
            color: "from-purple-500 to-pink-500",
            iconBg: "bg-purple-500/20"
        },
        {
            icon: Zap,
            title: "Smart Quizzes",
            desc: "Gamified learning paths inside 3D worlds.",
            color: "from-amber-500 to-orange-500",
            iconBg: "bg-amber-500/20"
        }
    ];

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen py-24 px-6 overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#0a0f1a] via-[#0F172A] to-[#0a0f1a]"
        >
            {/* Enhanced Dynamic Background - Optimized for mobile */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                {/* Animated gradient orbs - static on mobile, animated on desktop */}
                {shouldReduceAnimations ? (
                    // Static gradient background for mobile - no blur, no animation
                    <>
                        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[60px]" />
                        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-cyan-600/15 rounded-full blur-[50px]" />
                    </>
                ) : (
                    // Full animations for desktop
                    <>
                        <motion.div
                            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px] will-change-transform"
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [0, 50, 0],
                                y: [0, -30, 0]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] will-change-transform"
                            animate={{
                                scale: [1, 1.3, 1],
                                x: [0, -40, 0],
                                y: [0, 40, 0]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[180px] will-change-transform"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        />
                    </>
                )}

                {/* Star field effect - reduced count on mobile */}
                <div className="absolute inset-0 opacity-50">
                    {starPositions.map((star, i) => (
                        shouldReduceAnimations ? (
                            // Static stars on mobile
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full opacity-40"
                                style={{ left: star.left, top: star.top }}
                            />
                        ) : (
                            // Animated stars on desktop
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full will-change-[opacity,transform]"
                                style={{ left: star.left, top: star.top }}
                                animate={{
                                    opacity: [0.2, 0.8, 0.2],
                                    scale: [1, 1.5, 1]
                                }}
                                transition={{
                                    duration: star.duration,
                                    repeat: Infinity,
                                    delay: star.delay
                                }}
                            />
                        )
                    ))}
                </div>

                {/* Noise texture - hidden on mobile for performance */}
                {!shouldReduceAnimations && (
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                )}
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* Left Content Column */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Badge */}
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl mb-8"
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.span
                                    className="flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-sm font-medium bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent tracking-wide uppercase">
                                    New Experience
                                </span>
                            </motion.div>

                            {/* Title */}
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                                Learning in <br />
                                <span className="relative">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                                        Another Dimension
                                    </span>
                                    {/* Underline glow */}
                                    <motion.div
                                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                    />
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                                Don't just read about biology or physics—
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 font-semibold">experience it</span>.
                                Rotate, zoom, and explore high-fidelity 3D models from the Human Heart to Saturn.
                            </p>
                        </motion.div>

                        {/* Enhanced Feature Cards */}
                        <div className="grid gap-4">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.15), duration: 0.6 }}
                                    whileHover={{ x: 8, scale: 1.01 }}
                                    className="group relative flex items-center gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all backdrop-blur-xl cursor-default overflow-hidden"
                                >
                                    {/* Hover gradient */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${feature.color} transition-opacity duration-500`} style={{ opacity: 0.05 }} />

                                    {/* Icon */}
                                    <div className={`relative p-4 rounded-2xl ${feature.iconBg} border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h3 className="font-semibold text-white text-lg mb-1 group-hover:text-cyan-100 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                                            {feature.desc}
                                        </p>
                                    </div>

                                    {/* Arrow indicator */}
                                    <motion.div
                                        className="absolute right-5 opacity-0 group-hover:opacity-100 transition-opacity"
                                        initial={{ x: -10 }}
                                        whileHover={{ x: 0 }}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual Column - Parallax iPhone with Orbiting Elements */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center relative" style={{ perspective: 1500 }}>

                        {/* Main parallax container */}
                        <motion.div
                            style={{
                                x: parallaxX,
                                y: parallaxY,
                                rotateX: useTransform(parallaxY, [-20, 20], [5, -5]),
                                rotateY: useTransform(parallaxX, [-20, 20], [-5, 5])
                            }}
                            className="relative"
                        >
                            {/* Orbital Elements - hidden on mobile for performance */}
                            {!shouldReduceAnimations && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FloatingOrbit icon={Atom} size={20} orbitSize={480} duration={20} delay={0} color="#06b6d4" />
                                    <FloatingOrbit icon={Dna} size={18} orbitSize={420} duration={25} delay={2} color="#a855f7" reverse />
                                    <FloatingOrbit icon={Globe} size={22} orbitSize={540} duration={30} delay={4} color="#3b82f6" />
                                    <FloatingOrbit icon={Sparkles} size={16} orbitSize={380} duration={18} delay={1} color="#f59e0b" reverse />
                                </div>
                            )}

                            {/* Glow Rings - hidden on mobile for performance */}
                            {!shouldReduceAnimations && (
                                <>
                                    <GlowRing size={450} delay={0} color="rgba(6, 182, 212, 0.3)" />
                                    <GlowRing size={500} delay={0.5} color="rgba(139, 92, 246, 0.2)" />
                                    <GlowRing size={550} delay={1} color="rgba(59, 130, 246, 0.15)" />
                                </>
                            )}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative z-10"
                            >
                                {/* iPhone 16 Pro Frame */}
                                <div className="relative w-[300px] h-[620px] md:w-[340px] md:h-[700px] rounded-[50px] p-3 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] shadow-2xl border-[5px] border-[#3a3a3a]">

                                    {/* Multi-layer glow effect */}
                                    <div className="absolute -inset-4 rounded-[60px] bg-gradient-to-t from-cyan-500/20 via-purple-500/10 to-blue-500/20 blur-2xl -z-10" />
                                    <div className="absolute inset-0 rounded-[50px] shadow-[0_0_100px_-20px_rgba(6,182,212,0.4)] z-[-1]" />

                                    {/* Titanium frame reflection */}
                                    <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

                                    {/* Screen Content */}
                                    <div className="w-full h-full rounded-[42px] overflow-hidden bg-black relative">
                                        {/* Dynamic Island */}
                                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-50 flex items-center justify-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-gray-800" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                                        </div>

                                        {/* Auto-sliding 3D Model Showcase */}
                                        <div className="absolute inset-0 bg-black overflow-hidden">
                                            {/* Image Carousel - optimized with progressive loading */}
                                            <motion.div
                                                className="flex h-full will-change-transform"
                                                animate={{ x: `-${currentSlide * 100}%` }}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                            >
                                                {showcaseImages.map((img, index) => (
                                                    <OptimizedImage
                                                        key={index}
                                                        webp={img.webp}
                                                        png={img.png}
                                                        alt={img.alt}
                                                        priority={index === 0}
                                                    />
                                                ))}
                                            </motion.div>

                                            {/* Slide Indicators */}
                                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                                {showcaseImages.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setCurrentSlide(index)}
                                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                            currentSlide === index
                                                                ? 'bg-white w-6'
                                                                : 'bg-white/40 hover:bg-white/60'
                                                        }`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Cinematic overlays */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
                                        </div>

                                        {/* Home indicator */}
                                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[120px] h-1 bg-white/50 rounded-full z-50" />
                                    </div>
                                </div>

                                {/* Floor reflection */}
                                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-gradient-to-b from-white/10 to-transparent blur-2xl rounded-full" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSpotlight;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Zap, Target, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

const Gamification: React.FC = () => {
  const [xp, setXp] = useState(2450);
  const [level, setLevel] = useState(5);
  const maxXp = 3000;

  const handleEarnXp = () => {
    const increment = 50;
    const newXp = Math.min(xp + increment, maxXp);
    setXp(newXp);
    
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8B5CF6', '#10B981', '#3B82F6']
    });

    if (newXp >= maxXp) {
        // Level up logic simulation
        setTimeout(() => {
            setXp(0);
            setLevel(l => l + 1);
        }, 1000);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0B1120]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Make Studying <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Addictive
                </span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Why should games have all the fun? Earn XP, unlock achievements, and climb the leaderboard as you master your subjects.
              </p>
            </motion.div>

            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                <Zap className="text-yellow-400" />
                <div>
                  <div className="text-sm text-gray-400">Daily Streak</div>
                  <div className="font-bold">12 Days 🔥</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                <Target className="text-emerald-400" />
                <div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                  <div className="font-bold">94%</div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleEarnXp}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Click to Earn 50 XP
                <Zap className="w-5 h-5 group-hover:fill-white" />
              </span>
            </button>
          </div>

          <div className="relative">
            {/* XP Card */}
            <motion.div 
              className="bg-[#1E293B]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-end mb-4">
                <div>
                  <span className="text-sm text-purple-400 font-bold uppercase tracking-wider">Current Level</span>
                  <div className="text-4xl font-black font-mono text-white mt-1">LVL {level}</div>
                </div>
                <div className="text-right">
                    <div className="text-sm text-gray-400">Next Level</div>
                  <div className="text-xl font-bold text-gray-200">{xp} / {maxXp} XP</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-4 bg-gray-700 rounded-full overflow-hidden mb-8 relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${(xp / maxXp) * 100}%` }}
                  transition={{ type: "spring", stiffness: 50 }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                    <Trophy size={20} />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-white">Quiz Master</div>
                    <div className="text-xs text-gray-500">Unlocked</div>
                  </div>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-3 opacity-50">
                   <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400">
                    <Lock size={18} />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-white">Speed Demon</div>
                    <div className="text-xs text-gray-500">Locked</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gamification;

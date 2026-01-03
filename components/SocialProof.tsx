import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-gray-400 items-center">
          {/* Duplicated content for seamless loop */}
          {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <span className="text-xl md:text-2xl font-bold text-white/20">STANFORD</span>
              <span className="text-xl md:text-2xl font-bold text-white/20">HARVARD</span>
              <span className="text-xl md:text-2xl font-bold text-white/20">MIT</span>
              <span className="text-xl md:text-2xl font-bold text-white/20">OXFORD</span>
              <span className="text-xl md:text-2xl font-bold text-white/20">CAMBRIDGE</span>
            </React.Fragment>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 text-gray-400 items-center ml-12">
           {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <span className="text-xl md:text-2xl font-bold text-white/20">STANFORD</span>
              <span className="text-xl md:text-2xl font-bold text-white/20">HARVARD</span>
              <span className="text-xl md:text-2xl font-bold text-white/20">MIT</span>
              <span className="text-xl md:text-2xl font-bold text-white/20">OXFORD</span>
              <span className="text-xl md:text-2xl font-bold text-white/20">CAMBRIDGE</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 text-center">
         <div>
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">10K+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Active Students</div>
         </div>
         <div className="w-px h-12 bg-white/10 hidden md:block"></div>
         <div>
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">500K+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Quizzes Generated</div>
         </div>
         <div className="w-px h-12 bg-white/10 hidden md:block"></div>
         <div>
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">95%</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Success Rate</div>
         </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;

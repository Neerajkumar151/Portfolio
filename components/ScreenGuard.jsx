import { useEffect, useState } from "react";

export default function ScreenGuard({ children }) {
  const MIN_WIDTH = 1200;
  const MIN_HEIGHT = 700;

  const [isAllowed, setIsAllowed] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setIsMounted(true);

    const checkScreen = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const valid = width >= MIN_WIDTH && height >= MIN_HEIGHT;
      
      setIsAllowed(valid);
      setWindowSize({ width, height });
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isMounted) return null;

  if (!isAllowed) {
    return (
      <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#fafafa] via-[#f5f5f7] to-[#f0f0f2]">
        {/* Elegant animated gradient meshes */}
        <div className="absolute top-[-15%] left-[-5%] w-[45vw] h-[45vw] bg-gradient-to-br from-blue-100/50 via-indigo-50/40 to-transparent rounded-full blur-[140px] animate-floatSlow pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-8%] w-[50vw] h-[50vw] bg-gradient-to-tl from-purple-100/50 via-pink-50/30 to-transparent rounded-full blur-[160px] animate-floatSlower pointer-events-none" />
        <div className="absolute top-[30%] right-[10%] w-[30vw] h-[30vw] bg-gradient-to-bl from-cyan-100/30 to-transparent rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />

        {/* Ultra-premium glass card with refined shadows */}
        <div className="relative z-10 w-full max-w-[520px] mx-6 p-14 flex flex-col items-center text-center bg-white/80 backdrop-blur-[60px] saturate-[180%] border border-white/60 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.02)] animate-appleFadeScale hover:shadow-[0_24px_70px_rgba(0,0,0,0.1),0_10px_28px_rgba(0,0,0,0.05),0_3px_10px_rgba(0,0,0,0.03)] transition-all duration-700 ease-out">

          {/* Refined icon with gradient and subtle glow */}
          <div className="mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[1.25rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-20 h-20 rounded-[1.25rem] bg-gradient-to-br from-white via-[#fafafa] to-[#f5f5f7] border border-gray-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] flex items-center justify-center text-[#1d1d1f] transform group-hover:scale-105 transition-all duration-500 ease-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
          </div>

          {/* Premium typography with refined spacing */}
          <h1 className="text-[32px] font-semibold tracking-[-0.025em] text-[#1d1d1f] mb-4 leading-[1.15] animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Designed for Desktop
          </h1>

          <p className="text-[17px] font-normal leading-[1.65] text-[#6e6e73] mb-10 max-w-[420px] animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            RankMySkills is crafted for a larger canvas to ensure optimal visual clarity. Please access the platform on a device with a minimum resolution of{' '}
            <span className="font-semibold text-[#1d1d1f] inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg border border-gray-200/60 shadow-sm">
              1200 × 700
            </span>
            .
          </p>

          {/* Refined dimensions display */}
          <div className="flex items-center gap-4 mb-10 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col items-center gap-1.5 px-6 py-4 bg-gradient-to-b from-gray-50/80 to-white/80 rounded-2xl border border-gray-200/50 shadow-sm backdrop-blur-sm">
              <span className="text-xs font-medium text-[#86868b] uppercase tracking-wide">Current</span>
              <span className="text-sm font-semibold text-[#1d1d1f] tabular-nums">
                {isMounted ? `${windowSize.width} × ${windowSize.height}` : '— × —'}
              </span>
            </div>
            
            <div className="text-[#d2d2d7]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="flex flex-col items-center gap-1.5 px-6 py-4 bg-gradient-to-b from-blue-50/80 to-indigo-50/80 rounded-2xl border border-blue-200/50 shadow-sm backdrop-blur-sm">
              <span className="text-xs font-medium text-blue-600/80 uppercase tracking-wide">Required</span>
              <span className="text-sm font-semibold text-blue-900 tabular-nums">1200 × 700</span>
            </div>
          </div>

          {/* Subtle footer text */}
          <p className="text-[13px] font-medium text-[#a1a1a6] animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            We appreciate your understanding
          </p>

          {/* Decorative bottom accent */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full opacity-50" />
        </div>

        {/* Refined Apple-style animations */}
        <style>{`
          @keyframes appleFadeScale {
            0% {
              opacity: 0;
              transform: scale(0.96) translateY(12px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(8px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes floatSlow {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(30px, -30px) scale(1.05);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.95);
            }
          }

          @keyframes floatSlower {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(-40px, -25px) scale(1.08);
            }
          }

          @keyframes pulse-slow {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.1);
            }
          }

          .animate-appleFadeScale {
            animation: appleFadeScale 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
          }

          .animate-floatSlow {
            animation: floatSlow 25s ease-in-out infinite;
          }

          .animate-floatSlower {
            animation: floatSlower 30s ease-in-out infinite;
          }

          .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}
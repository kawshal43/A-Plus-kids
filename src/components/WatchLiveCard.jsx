import { motion } from "framer-motion";
import { Play, Tv2 } from "lucide-react";

function WatchLiveCard({ reducedMotion, onNavigate }) {
  const hoverMotion = reducedMotion
    ? {}
    : {
        whileHover: { y: -4 },
      };

  const buttonMotion = reducedMotion
    ? {}
    : {
        whileHover: { y: -2, scale: 1.02 },
        whileTap: { scale: 0.985 },
      };

  const revealMotion = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 26 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <motion.aside
      className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#147CF5_0%,#1597F2_58%,#21B4FF_100%)] px-6 py-6 shadow-card sm:px-7 sm:py-7 xl:min-h-[236px]"
      {...hoverMotion}
      {...revealMotion}
    >
      <div className="absolute -right-14 top-[-4rem] h-52 w-52 rounded-full bg-white/12 blur-3xl" />
      <div className="absolute -bottom-16 left-[-2rem] h-44 w-44 rounded-full bg-[#0458C3]/22 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="whitespace-nowrap text-[1.8rem] font-bold tracking-[-0.045em] text-white sm:text-[1.95rem]">
              Watch Live
            </h3>

            <span className="inline-flex items-center gap-2 rounded-full bg-[#FF5B56] px-4 py-2 text-sm font-semibold uppercase tracking-[0.02em] text-white shadow-[0_10px_24px_rgba(255,91,86,0.3)]">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              Live
            </span>
          </div>

          <p className="mt-5 text-[1.14rem] font-medium text-white/90">Now Playing</p>
          <p className="mt-1 whitespace-nowrap text-[2rem] font-bold tracking-[-0.045em] text-white">
            Fun Factory
          </p>

          <motion.button
            type="button"
            onClick={() => onNavigate("live-fun-factory")}
            className="mt-5 inline-flex h-[52px] items-center gap-3 whitespace-nowrap rounded-full bg-brandYellow px-5 text-[1rem] font-semibold text-brandNavy shadow-[0_16px_30px_rgba(255,201,40,0.26)]"
            {...buttonMotion}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/50">
              <Play className="ml-0.5 h-[1.05rem] w-[1.05rem] fill-current" strokeWidth={2.6} />
            </span>
            Watch Live Now
          </motion.button>

          <p className="mt-4 flex items-center gap-2 whitespace-nowrap text-[1rem] font-medium text-white/94">
            <Tv2 className="h-5 w-5" strokeWidth={2.3} />
            Dialog TV Channel 52
          </p>
        </div>

        <motion.button
          type="button"
          onClick={() => onNavigate("live-fun-factory")}
          className="relative w-full max-w-[210px] flex-none overflow-hidden rounded-[24px] border border-white/20 bg-white/12 shadow-[0_16px_32px_rgba(4,33,88,0.22)]"
          {...buttonMotion}
        >
          <div className="aspect-[1.68]">
            <video
              className="h-full w-full object-cover"
              src="/A_PLUS_KIDS/BACKGROUND/background_video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(6,22,67,0.18)_50%,rgba(6,22,67,0.48)_100%)]" />

          <span className="absolute bottom-4 left-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-[#0C4AA3]/72 text-white backdrop-blur-sm">
            <Play className="ml-1 h-6 w-6 fill-current" strokeWidth={2.6} />
          </span>
        </motion.button>
      </div>
    </motion.aside>
  );
}

export default WatchLiveCard;

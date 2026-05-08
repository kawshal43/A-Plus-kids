import { motion } from "framer-motion";

function LoadingScreen({ progress }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#E7F4FF_0%,#F7FBFF_55%,#FFFFFF_100%)] px-6">
      <div className="absolute left-1/2 top-[18%] h-48 w-48 -translate-x-1/2 rounded-full bg-[#BFE5FF] blur-3xl" />
      <div className="absolute bottom-[12%] left-[18%] h-40 w-40 rounded-full bg-[#FFF0AE] blur-3xl" />
      <div className="absolute bottom-[10%] right-[18%] h-44 w-44 rounded-full bg-[#D3F5D0] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex w-full max-w-[26rem] flex-col items-center rounded-[36px] border border-white/70 bg-white/85 px-7 py-9 text-center shadow-[0_28px_60px_rgba(14,91,166,0.16)] backdrop-blur-sm"
      >
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-[#9FD8FF]/50 blur-2xl"
          />
          <img
            src="/A_PLUS_KIDS/LOGO/aplus-logo-glow.png"
            alt="A Plus Kids loading"
            className="relative z-10 h-20 w-auto sm:h-24"
          />
        </div>

        <div className="mt-6 rounded-full bg-[#F4F8FF] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#1498F3]">
          Loading A Plus Kids
        </div>

        <p className="mt-5 max-w-[20rem] text-[1.02rem] font-medium leading-relaxed text-brandNavy/75">
          Warming up the homepage, caching the main assets, and getting everything ready.
        </p>

        <div className="mt-6 w-full rounded-full bg-[#EAF4FF] p-2 shadow-inner">
          <div className="relative h-4 overflow-hidden rounded-full bg-white">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(135deg,#1498F3_0%,#2FB5FF_55%,#FFC928_100%)]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="mt-4 text-sm font-semibold text-brandNavy/65">{progress}% ready</div>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;

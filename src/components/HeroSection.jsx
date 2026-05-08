import { motion } from "framer-motion";
import { LayoutGrid, Play } from "lucide-react";

function HeroSection({ reducedMotion, onNavigate }) {
  const buttonMotion = reducedMotion
    ? {}
    : {
        whileHover: { y: -3, scale: 1.02 },
        whileTap: { scale: 0.985 },
      };

  const textMotion = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section className="relative mt-6 w-full overflow-hidden shadow-hero sm:mt-7">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover object-[68%_center]"
        src="/A_PLUS_KIDS/BACKGROUND/background_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(247,251,255,0.82)_26%,rgba(247,251,255,0.32)_47%,rgba(247,251,255,0)_66%)]" />

      <svg
        className="absolute inset-x-0 top-0 z-[2] h-[76px] w-full text-white sm:h-[90px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,24 C137,92 342,14 544,16 C740,17 890,75 1088,67 C1247,61 1350,14 1440,2 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="relative z-10 w-full">
        <div className="flex min-h-[470px] items-center px-6 pb-20 pt-20 sm:min-h-[540px] sm:px-10 sm:pb-24 sm:pt-24 lg:min-h-[602px] lg:px-14 xl:px-24">
          <motion.div className="max-w-[34rem]" {...textMotion}>
            <h1 className="font-display text-[clamp(3.25rem,6.4vw,5.95rem)] font-normal leading-[0.92] tracking-[-0.055em] text-brandNavy">
              <span className="block">Where Little</span>
              <span className="block">
                <span className="text-brandNavy">Minds </span>
                <span className="text-brandOrange">Learn,</span>
              </span>
              <span className="block whitespace-nowrap">
                <span className="text-brandGreen">Laugh </span>
                <span className="text-brandNavy">&amp; </span>
                <span className="text-brandBlue">Grow!</span>
              </span>
            </h1>

            <p className="mt-6 max-w-[24rem] text-[1.18rem] font-medium leading-[1.45] text-brandNavy/90 sm:text-[1.38rem]">
              Safe, educational and entertaining content
              <br />
              for Sri Lanka&apos;s little stars.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
              <motion.button
                type="button"
                onClick={() => onNavigate("watch-now")}
                className="inline-flex h-[62px] items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#1678FF_0%,#2FB5FF_100%)] px-8 text-[1.26rem] font-semibold text-white shadow-[0_16px_32px_rgba(21,151,242,0.28)]"
                {...buttonMotion}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/18">
                  <Play className="ml-0.5 h-5 w-5 fill-current" strokeWidth={2.6} />
                </span>
                Watch Now
              </motion.button>

              <motion.button
                type="button"
                onClick={() => onNavigate("explore-shows")}
                className="inline-flex h-[62px] items-center justify-center gap-3 rounded-full bg-white px-8 text-[1.26rem] font-semibold text-brandNavy shadow-soft"
                {...buttonMotion}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F7FF] text-brandBlue">
                  <LayoutGrid className="h-5 w-5" strokeWidth={2.4} />
                </span>
                Explore Shows
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <svg
        className="absolute inset-x-0 bottom-0 z-[2] h-[92px] w-full text-page sm:h-[104px]"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,34 C171,112 389,123 648,88 C868,58 1086,6 1440,56 L1440,140 L0,140 Z"
        />
      </svg>
    </section>
  );
}

export default HeroSection;

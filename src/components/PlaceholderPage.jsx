import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";

function PlaceholderPage({ page, onNavigate }) {
  const Icon = page.icon;

  return (
    <motion.section
      key={page.title}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="px-3 pb-14 pt-6 sm:px-5 lg:px-7 lg:pb-16 xl:px-8"
    >
      <div className="relative overflow-hidden rounded-[40px] bg-white px-6 py-10 shadow-card sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <div
          className={`absolute inset-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] opacity-[0.18] ${page.gradient}`}
        />
        <div className="absolute right-[-4rem] top-[-4rem] h-56 w-56 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute bottom-[-5rem] left-[-2rem] h-48 w-48 rounded-full bg-[#BFE8FF]/50 blur-3xl" />

        <div className="relative z-10 max-w-[44rem]">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#F2F8FF] px-4 py-2 text-sm font-semibold text-[#1498F3]">
            <Sparkles className="h-4 w-4" strokeWidth={2.2} />
            Demo Page
          </div>

          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-white text-brandNavy shadow-soft">
              <Icon className="h-8 w-8" strokeWidth={2.1} />
            </span>
            <h1 className="text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-brandNavy">
              {page.title}
            </h1>
          </div>

          <p className="mt-6 max-w-[36rem] text-[1.08rem] font-medium leading-8 text-brandNavy/75 sm:text-[1.2rem]">
            {page.description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="inline-flex h-[60px] items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#1678FF_0%,#2FB5FF_100%)] px-8 text-[1.12rem] font-semibold text-white shadow-[0_16px_32px_rgba(21,151,242,0.22)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={2.4} />
              Back Home
            </button>

            <button
              type="button"
              onClick={() => onNavigate("watch-live")}
              className="inline-flex h-[60px] items-center justify-center gap-3 rounded-full bg-white px-8 text-[1.12rem] font-semibold text-brandNavy shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Sparkles className="h-5 w-5 text-brandBlue" strokeWidth={2.4} />
              Open Another Demo
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default PlaceholderPage;

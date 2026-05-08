import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

function FeaturedShows({ shows, reducedMotion, onNavigate }) {
  const buttonMotion = reducedMotion
    ? {}
    : {
        whileHover: { x: 2, scale: 1.03 },
        whileTap: { scale: 0.98 },
      };

  return (
    <section className="mt-10 sm:mt-12">
      <motion.h2
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 text-[2rem] font-bold tracking-[-0.045em] text-brandNavy sm:text-[2.2rem]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF3B5] text-brandYellow shadow-soft">
          <Star className="h-5 w-5 fill-current" strokeWidth={2.2} />
        </span>
        Featured Shows
      </motion.h2>

      <div className="mt-5 flex items-stretch gap-4 overflow-x-auto overflow-y-hidden pb-4 hide-scrollbar">
        {shows.map((show, index) => {
          const Icon = show.icon;

          return (
            <motion.button
              key={show.route}
              type="button"
              onClick={() => onNavigate(show.route)}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.46,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reducedMotion ? undefined : { y: -5, scale: 1.015 }}
              whileTap={reducedMotion ? undefined : { scale: 0.992 }}
              className={`relative min-h-[142px] min-w-[238px] flex-1 overflow-hidden rounded-[28px] p-5 text-left shadow-card sm:min-w-[244px] sm:p-6 ${show.background}`}
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
              <div
                className={`absolute -left-6 bottom-[-2rem] h-24 w-24 rounded-full blur-xl ${show.accentClass}`}
              />
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.15)_100%)]" />
              <div className="absolute bottom-4 right-4 h-16 w-24 rounded-[24px] border border-white/28 bg-white/12" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex justify-end">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/16 text-white backdrop-blur-sm">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                </div>

                <div className="mt-3">
                  {show.lines.map((line) => (
                    <span
                      key={`${show.route}-${line.text}`}
                      className={`block text-[2.25rem] font-bold uppercase leading-[0.9] tracking-[-0.055em] drop-shadow-[0_6px_10px_rgba(7,26,68,0.18)] sm:text-[2.45rem] ${line.className}`}
                    >
                      {line.text}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          );
        })}

        <motion.button
          type="button"
          onClick={() => onNavigate("all-shows")}
          className="flex h-[70px] w-[70px] flex-none items-center justify-center self-center rounded-full bg-white text-brandBlue shadow-card"
          {...buttonMotion}
        >
          <ArrowRight className="h-7 w-7" strokeWidth={2.4} />
        </motion.button>
      </div>
    </section>
  );
}

export default FeaturedShows;

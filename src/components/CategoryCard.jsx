import { motion } from "framer-motion";

function CategoryCard({
  title,
  emoji,
  panelClass,
  reducedMotion,
  index = 0,
  onClick,
}) {
  const hoverMotion = reducedMotion
    ? {}
    : {
        whileHover: { y: -5, scale: 1.02 },
        whileTap: { scale: 0.99 },
      };

  const revealMotion = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: {
          duration: 0.46,
          delay: index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        },
      };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`group relative flex min-h-[128px] flex-col items-center justify-center overflow-hidden rounded-[28px] px-4 py-5 text-center shadow-card transition-transform sm:min-h-[132px] ${panelClass}`}
      {...hoverMotion}
      {...revealMotion}
    >
      <div className="absolute inset-x-4 top-3 h-8 rounded-full bg-white/18 blur-xl" />
      <span className="relative text-[3.35rem] leading-none drop-shadow-[0_8px_14px_rgba(7,26,68,0.14)]">
        {emoji}
      </span>
      <span className="relative mt-4 whitespace-nowrap text-[0.98rem] font-semibold tracking-[-0.035em] text-brandNavy sm:text-[1.04rem]">
        {title}
      </span>
    </motion.button>
  );
}

export default CategoryCard;

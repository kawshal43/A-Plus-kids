import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { mobileQuickLinks } from "../siteData";

function MobileMenu({ isOpen, onClose, onNavigate, activeRoute }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#071A44]/28 backdrop-blur-[2px] lg:hidden"
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-[min(86vw,24rem)] flex-col bg-white px-5 pb-6 pt-5 shadow-[0_22px_60px_rgba(7,26,68,0.18)] lg:hidden"
          >
            <div className="flex items-center justify-between">
              <img
                src="/A_PLUS_KIDS/LOGO/aplus-logo.png"
                alt="A Plus Kids logo"
                className="h-12 w-auto"
              />

              <button
                type="button"
                aria-label="Close mobile menu"
                onClick={onClose}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#E6EEF8] bg-white text-brandNavy shadow-soft"
              >
                <X className="h-5 w-5" strokeWidth={2.4} />
              </button>
            </div>

            <div className="mt-6 grid gap-3">
              {mobileQuickLinks.map((item, index) => {
                const Icon = item.icon;
                const active = activeRoute === item.route;

                return (
                  <motion.button
                    key={item.route}
                    type="button"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.04 * index,
                      duration: 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => onNavigate(item.route)}
                    className={`inline-flex h-[58px] items-center gap-3 rounded-full border px-5 text-left text-[1rem] font-semibold tracking-[-0.02em] shadow-soft transition-transform duration-300 hover:-translate-y-0.5 ${
                      active
                        ? "border-transparent bg-[linear-gradient(135deg,#1498F3_0%,#3EB8FF_100%)] text-white"
                        : "border-[#E6EEF8] bg-white text-brandNavy"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                        active
                          ? "bg-white/20 text-white"
                          : item.iconWrapClass || "bg-[#F3F8FF] text-brandBlue"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.35} />
                    </span>
                    {item.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default MobileMenu;

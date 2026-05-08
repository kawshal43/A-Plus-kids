import { motion } from "framer-motion";
import { CircleUserRound, Menu, Search, Tv2 } from "lucide-react";
import { navItems } from "../siteData";

function Navbar({ reducedMotion, activeRoute, onNavigate, onMenuToggle }) {
  const hoverMotion = reducedMotion
    ? {}
    : {
        whileHover: { y: -2, scale: 1.01 },
        whileTap: { scale: 0.985 },
      };

  return (
    <header className="relative z-30">
      <div className="flex h-[84px] items-center justify-between rounded-[32px] bg-white px-4 shadow-nav sm:h-[90px] sm:px-6 lg:px-8 xl:h-[92px] xl:px-10">
        <button
          type="button"
          aria-label="Go to homepage"
          onClick={() => onNavigate("home")}
          className="shrink-0"
        >
          <img
            src="/A_PLUS_KIDS/LOGO/aplus-logo.png"
            alt="A Plus Kids logo"
            className="h-[3rem] w-auto sm:h-[3.35rem] lg:h-[3.6rem]"
          />
        </button>

        <nav className="hidden items-center gap-4 lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeRoute === item.route;

            return (
              <motion.button
                key={item.route}
                type="button"
                onClick={() => onNavigate(item.route)}
                className={`inline-flex h-[58px] min-w-[138px] items-center justify-center gap-3 rounded-full border px-6 text-[1.02rem] font-semibold tracking-[-0.02em] shadow-soft transition-colors ${
                  active
                    ? "border-transparent bg-[linear-gradient(135deg,#1498F3_0%,#3EB8FF_100%)] text-white"
                    : "border-[#E6EEF8] bg-white text-brandNavy"
                }`}
                {...hoverMotion}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                    active ? "bg-white/20 text-white" : item.iconWrapClass
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.4} />
                </span>
                {item.label}
              </motion.button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <motion.button
            type="button"
            aria-label="Search"
            onClick={() => onNavigate("search")}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#E6EEF8] bg-white text-brandBlue shadow-soft sm:h-14 sm:w-14"
            {...hoverMotion}
          >
            <Search className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} />
          </motion.button>

          <motion.button
            type="button"
            onClick={() => onNavigate("watch-live")}
            className="hidden h-14 items-center gap-3 rounded-full bg-brandYellow px-7 text-[1.02rem] font-semibold text-brandNavy shadow-soft md:inline-flex"
            {...hoverMotion}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/45">
              <Tv2 className="h-5 w-5" strokeWidth={2.3} />
            </span>
            Watch Live
          </motion.button>

          <motion.button
            type="button"
            aria-label="Login"
            onClick={() => onNavigate("login")}
            className="hidden h-14 w-14 items-center justify-center rounded-full border border-[#E6EEF8] bg-white text-brandNavy shadow-soft lg:inline-flex"
            {...hoverMotion}
          >
            <CircleUserRound className="h-6 w-6" strokeWidth={2.25} />
          </motion.button>

          <motion.button
            type="button"
            aria-label="Open mobile menu"
            onClick={onMenuToggle}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#E6EEF8] bg-white text-brandNavy shadow-soft lg:hidden sm:h-14 sm:w-14"
            {...hoverMotion}
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} />
          </motion.button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

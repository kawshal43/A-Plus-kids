import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import FeaturedShows from "./FeaturedShows";
import HeroSection from "./HeroSection";
import WatchLiveCard from "./WatchLiveCard";
import { categories, featuredShows } from "../siteData";

function HomePage({ reducedMotion, onNavigate }) {
  const [videoShows, setVideoShows] = useState(featuredShows);

  useEffect(() => {
    let isMounted = true;

    async function loadFeaturedVideos() {
      try {
        const response = await fetch("/api/featured-videos");

        if (!response.ok) {
          return;
        }

        const payload = await response.json();
        const items = Array.isArray(payload.items) ? payload.items : [];

        if (!items.length || !isMounted) {
          return;
        }

        setVideoShows((currentShows) =>
          currentShows.map(
            (fallbackShow) =>
              items.find((item) => item.itemId === fallbackShow.itemId) || fallbackShow,
          ),
        );
      } catch {
        // Keep the poster-based fallback cards if the endpoint is unavailable.
      }
    }

    loadFeaturedVideos();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <motion.div
      key="home-page"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <HeroSection reducedMotion={reducedMotion} onNavigate={onNavigate} />

      <main className="relative flex w-full flex-col px-3 pb-14 sm:px-5 lg:px-7 lg:pb-16 xl:px-8">
        <section className="mt-2 grid gap-7 xl:grid-cols-[minmax(0,1fr)_30rem] xl:gap-8">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="pt-4 sm:pt-6"
          >
            <h2 className="text-[1.85rem] font-bold tracking-[-0.045em] text-brandNavy sm:text-[2.15rem]">
              What do you want to do today?
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map((category, index) => (
                <CategoryCard
                  key={category.route}
                  title={category.title}
                  emoji={category.emoji}
                  panelClass={category.panelClass}
                  reducedMotion={reducedMotion}
                  index={index}
                  onClick={() => onNavigate(category.route)}
                />
              ))}
            </div>
          </motion.div>

          <WatchLiveCard reducedMotion={reducedMotion} onNavigate={onNavigate} />
        </section>

        <FeaturedShows
          shows={videoShows}
          reducedMotion={reducedMotion}
          onNavigate={onNavigate}
        />
      </main>
    </motion.div>
  );
}

export default HomePage;

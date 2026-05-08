import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

function FeaturedShowPreview({ streamUrl, posterUrl, title, isActive }) {
  const videoRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [playbackFailed, setPlaybackFailed] = useState(false);

  useEffect(() => {
    setIsReady(false);
    setPlaybackFailed(false);
  }, [streamUrl]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    if (!streamUrl || !isActive) {
      video.pause();
      return undefined;
    }

    let isCancelled = false;
    let hls;

    const keepPreviewShort = () => {
      if (video.currentTime > 9.5) {
        video.currentTime = 0.4;
      }
    };

    const handleReady = () => {
      setIsReady(true);
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {
          setPlaybackFailed(true);
        });
      }
    };

    const handlePlaybackError = () => {
      setPlaybackFailed(true);
      setIsReady(false);
    };

    video.addEventListener("timeupdate", keepPreviewShort);
    video.addEventListener("error", handlePlaybackError);

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
      video.addEventListener("loadedmetadata", handleReady);
      video.load();
      return () => {
        video.pause();
        video.removeEventListener("timeupdate", keepPreviewShort);
        video.removeEventListener("error", handlePlaybackError);
        video.removeEventListener("loadedmetadata", handleReady);
        video.removeAttribute("src");
        video.load();
      };
    }

    async function setupHlsPlayback() {
      const { default: Hls } = await import("hls.js");

      if (isCancelled) {
        return;
      }

      if (!Hls.isSupported()) {
        setPlaybackFailed(true);
        return;
      }

      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        capLevelToPlayerSize: true,
        backBufferLength: 8,
        maxBufferLength: 12,
        maxMaxBufferLength: 20,
        startLevel: 0,
      });

      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, handleReady);
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          handlePlaybackError();
          hls.destroy();
        }
      });
    }

    setupHlsPlayback().catch(() => {
      setPlaybackFailed(true);
      setIsReady(false);
    });

    return () => {
      isCancelled = true;
      video.pause();
      video.removeEventListener("timeupdate", keepPreviewShort);
      video.removeEventListener("error", handlePlaybackError);
      if (hls) {
        hls.destroy();
      }
      video.removeAttribute("src");
      video.load();
    };
  }, [isActive, streamUrl]);

  return (
    <div className="absolute inset-0">
      <img
        src={posterUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      {streamUrl && !playbackFailed ? (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterUrl}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,68,0.04)_0%,rgba(7,26,68,0.14)_36%,rgba(7,26,68,0.76)_100%)]" />
    </div>
  );
}

function FeaturedShowCard({ show, index, reducedMotion }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.5, margin: "120px 0px 120px 0px" });

  return (
    <motion.a
      ref={cardRef}
      href={show.pageUrl}
      target="_blank"
      rel="noreferrer"
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
      className="group relative min-h-[152px] min-w-[252px] snap-start flex-1 overflow-hidden rounded-[28px] bg-white text-left shadow-card sm:min-w-[272px]"
    >
      <FeaturedShowPreview
        streamUrl={show.streamUrl}
        posterUrl={show.coverUrl}
        title={show.title}
        isActive={isInView}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full bg-white/88 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-brandNavy/88 backdrop-blur-sm">
            Featured
          </span>
          {show.duration ? (
            <span className="rounded-full bg-brandNavy/72 px-3 py-1 text-[0.72rem] font-semibold text-white backdrop-blur-sm">
              {show.duration}
            </span>
          ) : null}
        </div>

        <div className="max-w-[16ch]">
          <span className="block text-[1.75rem] font-bold leading-[0.92] tracking-[-0.055em] text-white drop-shadow-[0_8px_20px_rgba(7,26,68,0.35)] sm:text-[1.95rem]">
            {show.title}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function FeaturedShows({ shows, reducedMotion, onNavigate }) {
  const railRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return undefined;
    }

    const updateScrollState = () => {
      const maxScrollLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
      setCanScrollLeft(rail.scrollLeft > 8);
      setCanScrollRight(rail.scrollLeft < maxScrollLeft - 8);
    };

    const frameId = window.requestAnimationFrame(updateScrollState);
    const resizeObserver = new ResizeObserver(() => {
      updateScrollState();
    });

    resizeObserver.observe(rail);
    Array.from(rail.children).forEach((child) => {
      resizeObserver.observe(child);
    });

    rail.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      rail.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [shows]);

  const scrollRailBy = (direction) => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction * Math.max(rail.clientWidth * 0.76, 280),
      behavior: "smooth",
    });
  };

  const buttonMotion = reducedMotion
    ? {}
    : {
        whileHover: { x: 2, scale: 1.03 },
        whileTap: { scale: 0.98 },
      };

  const handleRightAction = () => {
    if (canScrollRight) {
      scrollRailBy(1);
      return;
    }

    onNavigate("all-shows");
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

      <div className="relative mt-5">
        <div
          ref={railRef}
          className="hide-scrollbar flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overflow-y-hidden pb-4 pr-24 scroll-smooth lg:pr-32"
        >
          {shows.map((show, index) => (
            <FeaturedShowCard
              key={show.itemId || show.pageUrl || show.title}
              show={show}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {canScrollLeft ? (
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-[linear-gradient(90deg,rgba(247,251,255,0.96)_22%,rgba(247,251,255,0)_100%)] lg:block" />
        ) : null}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-36 bg-[linear-gradient(270deg,rgba(247,251,255,0.99)_18%,rgba(247,251,255,0.82)_42%,rgba(247,251,255,0)_100%)] lg:block" />

        {canScrollLeft ? (
          <motion.button
            type="button"
            onClick={() => scrollRailBy(-1)}
            aria-label="Show previous videos"
            className="absolute left-2 top-1/2 hidden h-[62px] w-[62px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-brandBlue shadow-card lg:flex"
            {...buttonMotion}
          >
            <ArrowLeft className="h-6 w-6" strokeWidth={2.4} />
          </motion.button>
        ) : null}

        <motion.button
          type="button"
          onClick={handleRightAction}
          aria-label={canScrollRight ? "Show more videos" : "See all featured shows"}
          className="absolute right-2 top-1/2 z-10 flex h-[68px] w-[68px] -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/95 text-brandBlue shadow-[0_18px_40px_rgba(17,90,170,0.18)] backdrop-blur-sm lg:right-3 lg:h-[74px] lg:w-[74px]"
          {...buttonMotion}
        >
          <ArrowRight className="h-7 w-7" strokeWidth={2.55} />
        </motion.button>
      </div>
    </section>
  );
}

export default FeaturedShows;

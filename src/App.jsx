import { AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import HomePage from "./components/HomePage";
import LoadingScreen from "./components/LoadingScreen";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import PlaceholderPage from "./components/PlaceholderPage";
import { bootAssets, placeholderPages } from "./siteData";

const CACHE_NAME = "a-plus-kids-shell-v1";
const CACHE_READY_KEY = "a-plus-kids-shell-ready";

function getRouteFromHash() {
  if (typeof window === "undefined") {
    return "home";
  }

  const hash = window.location.hash.replace(/^#\/?/, "").trim();
  return hash || "home";
}

function setRoute(route) {
  if (typeof window === "undefined") {
    return;
  }

  if (route === "home") {
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname + window.location.search);
    }
    return;
  }

  const nextHash = `#/${route}`;

  if (window.location.hash !== nextHash) {
    window.location.hash = `/${route}`;
  }
}

async function warmBootAssets(onProgress) {
  const seen = new Set();
  const assets = bootAssets.filter((asset) => {
    if (seen.has(asset)) {
      return false;
    }

    seen.add(asset);
    return true;
  });

  let loaded = 0;
  const update = () => {
    loaded += 1;
    const value = Math.min(100, Math.round((loaded / assets.length) * 100));
    onProgress(value);
  };

  try {
    if ("caches" in window) {
      const cache = await window.caches.open(CACHE_NAME);

      for (const asset of assets) {
        try {
          const cached = await cache.match(asset);

          if (!cached) {
            const response = await fetch(asset, { cache: "force-cache" });

            if (response.ok) {
              await cache.put(asset, response.clone());
            }
          }
        } catch {
          // Ignore per-asset failures and keep booting.
        } finally {
          update();
        }
      }
    } else {
      for (const asset of assets) {
        try {
          await fetch(asset, { cache: "force-cache" });
        } catch {
          // Ignore per-asset failures and keep booting.
        } finally {
          update();
        }
      }
    }
  } finally {
    window.localStorage.setItem(CACHE_READY_KEY, "true");
  }
}

function App() {
  const reducedMotion = useReducedMotion();
  const [route, setActiveRoute] = useState(() => getRouteFromHash());
  const [isBooting, setIsBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(8);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      const nextRoute = getRouteFromHash();
      const resolved = nextRoute === "home" || placeholderPages[nextRoute] ? nextRoute : "home";
      setActiveRoute(resolved);
    };

    window.addEventListener("hashchange", onHashChange);
    onHashChange();

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const cacheReady = window.localStorage.getItem(CACHE_READY_KEY) === "true";

    async function boot() {
      const minimumDelay = cacheReady ? 700 : 1500;
      const startedAt = performance.now();

      await warmBootAssets((value) => {
        if (!cancelled) {
          setBootProgress(Math.max(8, value));
        }
      });

      const elapsed = performance.now() - startedAt;

      if (elapsed < minimumDelay) {
        await new Promise((resolve) => {
          window.setTimeout(resolve, minimumDelay - elapsed);
        });
      }

      if (!cancelled) {
        setBootProgress(100);
        setIsBooting(false);
      }
    }

    boot();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: isBooting ? "auto" : "smooth" });
  }, [route, isBooting]);

  const currentPage = useMemo(() => placeholderPages[route] || null, [route]);

  const handleNavigate = (nextRoute) => {
    const resolved = nextRoute === "home" || placeholderPages[nextRoute] ? nextRoute : "home";
    setActiveRoute(resolved);
    setRoute(resolved);
  };

  if (isBooting) {
    return <LoadingScreen progress={bootProgress} />;
  }

  return (
    <div className="relative min-h-screen bg-page text-brandNavy">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top_left,rgba(21,151,242,0.14),transparent_48%),radial-gradient(circle_at_top_right,rgba(255,201,40,0.08),transparent_20%)]" />
      <div className="pointer-events-none absolute left-[-7rem] top-[18rem] h-[15rem] w-[15rem] rounded-full bg-[#D7EEFF]/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-5rem] right-[-3rem] h-[18rem] w-[18rem] rounded-full bg-[#DDEEFF]/75 blur-3xl" />

      <div className="relative w-full px-3 pt-4 sm:px-5 sm:pt-6 lg:px-7 xl:px-8">
        <Navbar
          reducedMotion={reducedMotion}
          activeRoute={route}
          onNavigate={handleNavigate}
          onMenuToggle={() => setMobileMenuOpen(true)}
        />
      </div>

      <AnimatePresence mode="wait">
        {route === "home" ? (
          <HomePage
            key="home"
            reducedMotion={reducedMotion}
            onNavigate={handleNavigate}
          />
        ) : (
          <PlaceholderPage
            key={route}
            page={currentPage || placeholderPages.watch}
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={handleNavigate}
        activeRoute={route}
      />
    </div>
  );
}

export default App;

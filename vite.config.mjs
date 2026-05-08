import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fetchFeaturedVideoData } from "./api/_shared/featuredVideos.mjs";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "featured-videos-dev-endpoint",
      configureServer(server) {
        server.middlewares.use("/api/featured-videos", async (req, res, next) => {
          if (req.method !== "GET") {
            next();
            return;
          }

          try {
            const items = await fetchFeaturedVideoData();
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ items }));
          } catch (error) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                error: "Unable to load featured videos right now.",
                details: error instanceof Error ? error.message : "Unknown error",
              }),
            );
          }
        });
      },
    },
  ],
});

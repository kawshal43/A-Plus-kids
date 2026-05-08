module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { fetchFeaturedVideoData } = await import("./_shared/featuredVideos.mjs");
    const items = await fetchFeaturedVideoData();

    res.setHeader(
      "Cache-Control",
      "s-maxage=900, stale-while-revalidate=43200",
    );
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({
      error: "Unable to load featured videos right now.",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

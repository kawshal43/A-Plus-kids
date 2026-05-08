const LIST_PAGE_URL =
  "https://www.apluskidstvsl.com/?wix-vod-video-id=36ec005a65324799b2050598b53e7d8f&wix-vod-comp-id=comp-lnbgjcb5";

const LIST_API_BASE_URL =
  "https://www.apluskidstvsl.com/_api/vod/public/v3-to-v2/public/lists/b6757603658746188632fabe0f157131";
const LIST_PAGE_SIZE = 6;
const MAX_LIST_PAGES = 20;

export const featuredVideoSeeds = [
  {
    itemId: "36ec005a65324799b2050598b53e7d8f",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=36ec005a65324799b2050598b53e7d8f&wix-vod-comp-id=comp-lnbgjcb5",
    title: "Chat with A Plus Kids",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_fb31181b7c54440abca2c8e72b2f32b9f002.jpg",
    duration: "01:47",
  },
  {
    itemId: "3f63670c0cc244a2b3be5b5b0d850fc0",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=3f63670c0cc244a2b3be5b5b0d850fc0&wix-vod-comp-id=comp-lnbgjcb5",
    title: "Chakkaraya Animated",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_7ab540f2e56e4ce98e3addcaf97bbf22f002.jpg",
    duration: "00:31",
  },
  {
    itemId: "e731c57afe454b1a80a304f949c1d904",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=e731c57afe454b1a80a304f949c1d904&wix-vod-comp-id=comp-lnbgjcb5",
    title: "Ada Awilla",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_d81644a8fbbc48969679c4acad07d379f002.jpg",
    duration: "01:49",
  },
  {
    itemId: "e1dfaacacfa84fc1a8ba7ea8a45fcc23",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=e1dfaacacfa84fc1a8ba7ea8a45fcc23&wix-vod-comp-id=comp-lnbgjcb5",
    title: "Poem Animated",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_797c72525f074f938657b7865ac00fb1f002.jpg",
    duration: "00:33",
  },
  {
    itemId: "910d3ac6bff8413584ef12dc429d0a5a",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=910d3ac6bff8413584ef12dc429d0a5a&wix-vod-comp-id=comp-lnbgjcb5",
    title: "Dictation",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_ca2501dd0f2146b89ea8cccbbba2eb5ef002.jpg",
    duration: "00:54",
  },
  {
    itemId: "0578413d619a4206a0b65dda4d1b7d39",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=0578413d619a4206a0b65dda4d1b7d39&wix-vod-comp-id=comp-lnbgjcb5",
    title: "Riddles",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_c69a0c24437e4daa8329f0d1fe5d89bdf002.jpg",
    duration: "00:32",
  },
  {
    itemId: "e91e943a9d5f49adac9bfd29028d5584",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=e91e943a9d5f49adac9bfd29028d5584&wix-vod-comp-id=comp-lnbgjcb5",
    title: "Tounge Twisters",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_8c06667b189f42d7bee661117946f4eff002.jpg",
    duration: "00:34",
  },
  {
    itemId: "721d99fb1e334baf888d783ab78e5602",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=721d99fb1e334baf888d783ab78e5602&wix-vod-comp-id=comp-lnbgjcb5",
    title: "Wirudda Pada",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_8511137ff9264cc8abdc3472848c7659f002.jpg",
    duration: "00:32",
  },
  {
    itemId: "6aa16803e8cc4a2abd534d61b417c316",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=6aa16803e8cc4a2abd534d61b417c316&wix-vod-comp-id=comp-lnbgjcb5",
    title: "Theravili",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_7de5d913325d4fef990ffb5f49f72a47f002.jpg",
    duration: "00:29",
  },
  {
    itemId: "71d1e13b3d504d1492dbdc683e7d2249",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=71d1e13b3d504d1492dbdc683e7d2249&wix-vod-comp-id=comp-lnbgjcb5",
    title: "Honda Purudu",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_bcff8aec1f90437abb29c13f3c98d559f002.jpg",
    duration: "00:31",
  },
  {
    itemId: "0cd85a8bdcac4f1c8c3439ad2b1d287e",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=0cd85a8bdcac4f1c8c3439ad2b1d287e&wix-vod-comp-id=comp-lnbgjcb5",
    title: "Poem",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_c4c723ad14d54a9298ed11f3561dfee9f002.jpg",
    duration: "00:32",
  },
  {
    itemId: "c3bff526df02416eacafd8425c8729c2",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=c3bff526df02416eacafd8425c8729c2&wix-vod-comp-id=comp-lnbgjcb5",
    title: "Jeewithayata Pata Denna",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_4f88b0d032704615b35f4cf385e18a53f002.jpg",
    duration: "01:18",
  },
];

function cleanTitle(value) {
  return value
    .replace(/\.mp4$/i, "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getHeaderValue(html, name) {
  const patterns = [
    new RegExp(`\\\\\\"${name}\\\\\\":\\[\\\\\\"([^\\\\]+?)\\\\\\"\\]`),
    new RegExp(`"${name}":\\["([^"]+?)"\\]`),
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);

    if (match?.[1]) {
      return match[1];
    }
  }

  return null;
}

function mapItemToShow(item, seed) {
  return {
    itemId: seed.itemId,
    pageUrl: seed.pageUrl,
    title: seed.title || cleanTitle(item.title || ""),
    duration: item.duration_str || seed.duration,
    coverUrl: item.custom_cover_url || item.cover_url || seed.coverUrl,
    streamUrl: item.play_info?.url || null,
  };
}

function buildListApiUrl(cursor = null) {
  const url = new URL(LIST_API_BASE_URL);
  url.searchParams.set("media_type", "secure_video");
  url.searchParams.set("page_size", String(LIST_PAGE_SIZE));
  url.searchParams.set("order", "custom");
  url.searchParams.set("with_play_info", "true");

  if (cursor) {
    url.searchParams.set("cursor", cursor);
  }

  return url.toString();
}

export async function fetchFeaturedVideoData() {
  const pageResponse = await fetch(LIST_PAGE_URL, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    },
  });

  if (!pageResponse.ok) {
    throw new Error(`Failed to read Wix page: ${pageResponse.status}`);
  }

  const html = await pageResponse.text();
  const authorization = getHeaderValue(html, "authorization");
  const commonConfig = getHeaderValue(html, "commonConfig");
  const linguist = getHeaderValue(html, "x-wix-linguist");

  if (!authorization || !commonConfig || !linguist) {
    throw new Error("Failed to extract Wix playback headers.");
  }

  const requestHeaders = {
    Accept: "application/json, text/plain, */*",
    authorization,
    commonConfig,
    "x-wix-brand": "wix",
    "x-wix-linguist": linguist,
  };
  const seedIds = new Set(featuredVideoSeeds.map((seed) => seed.itemId));
  const itemsById = new Map();
  let cursor = null;

  for (let page = 0; page < MAX_LIST_PAGES; page += 1) {
    const apiResponse = await fetch(buildListApiUrl(cursor), {
      headers: requestHeaders,
    });

    if (!apiResponse.ok) {
      throw new Error(`Failed to read Wix list API: ${apiResponse.status}`);
    }

    const payload = await apiResponse.json();
    const items = Array.isArray(payload.items) ? payload.items : [];

    for (const item of items) {
      if (seedIds.has(item.item_id)) {
        itemsById.set(item.item_id, item);
      }
    }

    if (itemsById.size === seedIds.size || !payload.cursor) {
      break;
    }

    cursor = payload.cursor;
  }

  return featuredVideoSeeds
    .map((seed) => {
      const match = itemsById.get(seed.itemId);
      return match ? mapItemToShow(match, seed) : { ...seed, streamUrl: null };
    })
    .filter(Boolean);
}

import {
  ArrowRight,
  BookOpen,
  BrushCleaning,
  CircleUserRound,
  Compass,
  Gamepad2,
  GraduationCap,
  House,
  LayoutGrid,
  Music4,
  Play,
  Search,
  Sparkles,
  Star,
  Trees,
  Tv2,
  WandSparkles,
} from "lucide-react";

export const navItems = [
  {
    label: "Home",
    route: "home",
    icon: House,
    iconWrapClass: "bg-white/20 text-white",
  },
  {
    label: "Watch",
    route: "watch",
    icon: Play,
    iconWrapClass: "bg-[#FF5959] text-white",
  },
  {
    label: "Play",
    route: "play",
    icon: Gamepad2,
    iconWrapClass: "bg-[#7E4BEE] text-white",
  },
  {
    label: "Learn",
    route: "learn",
    icon: BookOpen,
    iconWrapClass: "bg-[#52BE48] text-white",
  },
];

export const utilityItems = [
  { label: "Search", route: "search", icon: Search },
  { label: "Watch Live", route: "watch-live", icon: Tv2 },
  { label: "Login", route: "login", icon: CircleUserRound },
];

export const categories = [
  {
    title: "Stories",
    route: "stories",
    emoji: "\u{1F4D6}",
    panelClass: "bg-[linear-gradient(180deg,#FFE98F_0%,#FFD45A_100%)]",
  },
  {
    title: "Art & Crafts",
    route: "art-crafts",
    emoji: "\u{1F3A8}",
    panelClass: "bg-[linear-gradient(180deg,#FFCBE0_0%,#F7A7C8_100%)]",
  },
  {
    title: "Songs",
    route: "songs",
    emoji: "\u{1F3B5}",
    panelClass: "bg-[linear-gradient(180deg,#DCF891_0%,#BDEA6C_100%)]",
  },
  {
    title: "Learn",
    route: "learn-zone",
    emoji: "\u{1F393}",
    panelClass: "bg-[linear-gradient(180deg,#BFEAFF_0%,#91D6FB_100%)]",
  },
  {
    title: "Games",
    route: "games",
    emoji: "\u{1F3AE}",
    panelClass: "bg-[linear-gradient(180deg,#D7C7FF_0%,#B8A4FA_100%)]",
  },
  {
    title: "Fun Zone",
    route: "fun-zone",
    emoji: "\u{2B50}",
    panelClass: "bg-[linear-gradient(180deg,#FFD08F_0%,#FFA750_100%)]",
  },
];

export const featuredShows = [
  {
    itemId: "36ec005a65324799b2050598b53e7d8f",
    title: "Chat with A Plus Kids",
    duration: "01:47",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=36ec005a65324799b2050598b53e7d8f&wix-vod-comp-id=comp-lnbgjcb5",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_fb31181b7c54440abca2c8e72b2f32b9f002.jpg",
  },
  {
    itemId: "3f63670c0cc244a2b3be5b5b0d850fc0",
    title: "Chakkaraya Animated",
    duration: "00:31",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=3f63670c0cc244a2b3be5b5b0d850fc0&wix-vod-comp-id=comp-lnbgjcb5",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_7ab540f2e56e4ce98e3addcaf97bbf22f002.jpg",
  },
  {
    itemId: "e731c57afe454b1a80a304f949c1d904",
    title: "Ada Awilla",
    duration: "01:49",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=e731c57afe454b1a80a304f949c1d904&wix-vod-comp-id=comp-lnbgjcb5",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_d81644a8fbbc48969679c4acad07d379f002.jpg",
  },
  {
    itemId: "e1dfaacacfa84fc1a8ba7ea8a45fcc23",
    title: "Poem Animated",
    duration: "00:33",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=e1dfaacacfa84fc1a8ba7ea8a45fcc23&wix-vod-comp-id=comp-lnbgjcb5",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_797c72525f074f938657b7865ac00fb1f002.jpg",
  },
  {
    itemId: "910d3ac6bff8413584ef12dc429d0a5a",
    title: "Dictation",
    duration: "00:54",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=910d3ac6bff8413584ef12dc429d0a5a&wix-vod-comp-id=comp-lnbgjcb5",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_ca2501dd0f2146b89ea8cccbbba2eb5ef002.jpg",
  },
  {
    itemId: "0578413d619a4206a0b65dda4d1b7d39",
    title: "Riddles",
    duration: "00:32",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=0578413d619a4206a0b65dda4d1b7d39&wix-vod-comp-id=comp-lnbgjcb5",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_c69a0c24437e4daa8329f0d1fe5d89bdf002.jpg",
  },
  {
    itemId: "e91e943a9d5f49adac9bfd29028d5584",
    title: "Tounge Twisters",
    duration: "00:34",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=e91e943a9d5f49adac9bfd29028d5584&wix-vod-comp-id=comp-lnbgjcb5",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_8c06667b189f42d7bee661117946f4eff002.jpg",
  },
  {
    itemId: "721d99fb1e334baf888d783ab78e5602",
    title: "Wirudda Pada",
    duration: "00:32",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=721d99fb1e334baf888d783ab78e5602&wix-vod-comp-id=comp-lnbgjcb5",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_8511137ff9264cc8abdc3472848c7659f002.jpg",
  },
  {
    itemId: "6aa16803e8cc4a2abd534d61b417c316",
    title: "Theravili",
    duration: "00:29",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=6aa16803e8cc4a2abd534d61b417c316&wix-vod-comp-id=comp-lnbgjcb5",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_7de5d913325d4fef990ffb5f49f72a47f002.jpg",
  },
  {
    itemId: "71d1e13b3d504d1492dbdc683e7d2249",
    title: "Honda Purudu",
    duration: "00:31",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=71d1e13b3d504d1492dbdc683e7d2249&wix-vod-comp-id=comp-lnbgjcb5",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_bcff8aec1f90437abb29c13f3c98d559f002.jpg",
  },
  {
    itemId: "0cd85a8bdcac4f1c8c3439ad2b1d287e",
    title: "Poem",
    duration: "00:32",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=0cd85a8bdcac4f1c8c3439ad2b1d287e&wix-vod-comp-id=comp-lnbgjcb5",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_c4c723ad14d54a9298ed11f3561dfee9f002.jpg",
  },
  {
    itemId: "c3bff526df02416eacafd8425c8729c2",
    title: "Jeewithayata Pata Denna",
    duration: "01:18",
    pageUrl:
      "https://www.apluskidstvsl.com/?wix-vod-video-id=c3bff526df02416eacafd8425c8729c2&wix-vod-comp-id=comp-lnbgjcb5",
    coverUrl:
      "https://static.wixstatic.com/media/15d579_4f88b0d032704615b35f4cf385e18a53f002.jpg",
  },
];

export const placeholderPages = {
  watch: {
    title: "Watch",
    description:
      "A safe streaming hub for live TV, curated episodes, and family-friendly viewing queues.",
    icon: Tv2,
    gradient: "from-[#1498F3] via-[#33B4FF] to-[#7EDCFF]",
  },
  play: {
    title: "Play",
    description:
      "Interactive games, sing-alongs, and movement activities designed for little explorers.",
    icon: Gamepad2,
    gradient: "from-[#7850F2] via-[#9B72FF] to-[#C0A9FF]",
  },
  learn: {
    title: "Learn",
    description:
      "A bright learning space for reading, numbers, discovery themes, and guided early skills.",
    icon: GraduationCap,
    gradient: "from-[#4CAF50] via-[#6DCC72] to-[#A6E67F]",
  },
  search: {
    title: "Search",
    description:
      "A future-safe search experience will help families find shows, topics, and activities quickly.",
    icon: Search,
    gradient: "from-[#0F86E8] via-[#46B8FF] to-[#9BE1FF]",
  },
  "watch-live": {
    title: "Watch Live",
    description:
      "The live channel view will surface the current show, up-next schedule, and a simple play experience.",
    icon: Tv2,
    gradient: "from-[#FFC928] via-[#FFD95E] to-[#FFECA4]",
  },
  login: {
    title: "Login",
    description:
      "A friendly parent login area can live here for watchlists, profiles, and safe viewing preferences.",
    icon: CircleUserRound,
    gradient: "from-[#0F2D6B] via-[#2451A8] to-[#4D8FF7]",
  },
  "watch-now": {
    title: "Watch Now",
    description:
      "This shortcut can jump straight into the featured stream or today's highlighted programming.",
    icon: Play,
    gradient: "from-[#1578FF] via-[#279EFF] to-[#76D9FF]",
  },
  "explore-shows": {
    title: "Explore Shows",
    description:
      "A browsing page can gather all series, age-group picks, and themed content collections.",
    icon: LayoutGrid,
    gradient: "from-[#FFB547] via-[#FFD07C] to-[#FFF0C4]",
  },
  stories: {
    title: "Stories",
    description:
      "Story-led adventures, bedtime favorites, and read-along moments can live in this category page.",
    icon: BookOpen,
    gradient: "from-[#FFC935] via-[#FFD865] to-[#FFF1B0]",
  },
  "art-crafts": {
    title: "Art & Crafts",
    description:
      "Hands-on projects, coloring ideas, and simple making activities can be grouped here.",
    icon: BrushCleaning,
    gradient: "from-[#F7A7C8] via-[#FFC0DB] to-[#FFE3EF]",
  },
  songs: {
    title: "Songs",
    description:
      "Nursery songs, dance tracks, and musical favorites can be organized on this demo page.",
    icon: Music4,
    gradient: "from-[#A3E93D] via-[#C8F466] to-[#EBFFAF]",
  },
  "learn-zone": {
    title: "Learn",
    description:
      "Letters, numbers, science starters, and thoughtful early-learning playlists can appear here.",
    icon: GraduationCap,
    gradient: "from-[#8ACFF8] via-[#AEE4FF] to-[#E2F7FF]",
  },
  games: {
    title: "Games",
    description:
      "Playful challenges, matching games, and motor-skill activities can be highlighted here.",
    icon: Gamepad2,
    gradient: "from-[#B8A4FA] via-[#CCBEFF] to-[#EEE7FF]",
  },
  "fun-zone": {
    title: "Fun Zone",
    description:
      "Surprise picks, bright favorites, and extra-joy content can be collected in this zone.",
    icon: Star,
    gradient: "from-[#FFA750] via-[#FFC17C] to-[#FFE3BA]",
  },
  "live-fun-factory": {
    title: "Fun Factory Live",
    description:
      "A focused live detail page can spotlight the current stream, show notes, and related episodes.",
    icon: Sparkles,
    gradient: "from-[#1384F4] via-[#1FA2FF] to-[#77D7FF]",
  },
  "all-shows": {
    title: "Featured Shows",
    description:
      "This placeholder page can expand into a full show library with seasons, categories, and recommendations.",
    icon: Compass,
    gradient: "from-[#22A7FF] via-[#65CAFF] to-[#B6EEFF]",
  },
  "show-story-time": {
    title: "Story Time",
    description:
      "A dedicated show page for Story Time can gather episodes, summaries, and story-based activities.",
    icon: BookOpen,
    gradient: "from-[#1F66C9] via-[#3B8AEF] to-[#78C4FF]",
  },
  "show-art-plus": {
    title: "Art Plus",
    description:
      "A colorful show page for Art Plus can introduce crafts, materials, and featured making sessions.",
    icon: BrushCleaning,
    gradient: "from-[#FF934E] via-[#FFC167] to-[#FFE0A7]",
  },
  "show-fun-factory": {
    title: "Fun Factory",
    description:
      "The Fun Factory page can lead into playful episodes, clips, and family activity prompts.",
    icon: Sparkles,
    gradient: "from-[#29A0F4] via-[#5BCBF8] to-[#9BF4B5]",
  },
  "show-kids-fashion": {
    title: "Kids Fashion",
    description:
      "A bright style page can collect themed episodes, confidence play, and fun costume inspiration.",
    icon: WandSparkles,
    gradient: "from-[#8EE0FF] via-[#C6F2FF] to-[#FFC5E4]",
  },
  "show-maya-lokaya": {
    title: "Maya Lokaya",
    description:
      "This show page can explore magical worlds, imaginative stories, and character-led adventures.",
    icon: Trees,
    gradient: "from-[#1480D0] via-[#36B6D9] to-[#63D38E]",
  },
};

export const bootAssets = [
  "/",
  "/A_PLUS_KIDS/LOGO/aplus-logo.png",
  "/A_PLUS_KIDS/LOGO/aplus-logo-glow.png",
  "/A_PLUS_KIDS/BACKGROUND/background_video.mp4",
];

export const mobileQuickLinks = [
  ...navItems,
  ...utilityItems,
  {
    label: "Watch Now",
    route: "watch-now",
    icon: Play,
    iconWrapClass: "bg-[#1498F3] text-white",
  },
  {
    label: "Explore Shows",
    route: "explore-shows",
    icon: LayoutGrid,
    iconWrapClass: "bg-[#F5F8FF] text-[#1498F3]",
  },
  {
    label: "Featured Shows",
    route: "all-shows",
    icon: ArrowRight,
    iconWrapClass: "bg-[#FFF3B5] text-[#FFC928]",
  },
];

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
    title: "Story Time",
    route: "show-story-time",
    icon: BookOpen,
    background:
      "bg-[linear-gradient(135deg,#1F66C9_0%,#2A82EB_44%,#5BB8FF_100%)]",
    accentClass: "bg-[#FFCC39]/35",
    lines: [
      { text: "Story", className: "text-[#FFD539]" },
      { text: "Time", className: "text-[#FFD539]" },
    ],
  },
  {
    title: "Art Plus",
    route: "show-art-plus",
    icon: BrushCleaning,
    background:
      "bg-[linear-gradient(135deg,#74D4FF_0%,#A5E5FF_26%,#FFB34C_68%,#FF7E56_100%)]",
    accentClass: "bg-[#FF6FA0]/35",
    lines: [
      { text: "Art", className: "text-white" },
      { text: "Plus", className: "text-[#6B3FD6]" },
    ],
  },
  {
    title: "Fun Factory",
    route: "show-fun-factory",
    icon: Sparkles,
    background:
      "bg-[linear-gradient(135deg,#6FD7FF_0%,#57C5F8_28%,#7FD763_68%,#30A43A_100%)]",
    accentClass: "bg-[#FFD53B]/30",
    lines: [
      { text: "Fun", className: "text-[#143DA5]" },
      { text: "Factory", className: "text-[#FFD539]" },
    ],
  },
  {
    title: "Kids Fashion",
    route: "show-kids-fashion",
    icon: WandSparkles,
    background:
      "bg-[linear-gradient(135deg,#8EE0FF_0%,#B7EFFF_28%,#FFC0E3_72%,#FF7AB3_100%)]",
    accentClass: "bg-[#FFF08A]/32",
    lines: [
      { text: "Kids", className: "text-white" },
      { text: "Fashion", className: "text-white" },
    ],
  },
  {
    title: "Maya Lokaya",
    route: "show-maya-lokaya",
    icon: Trees,
    background:
      "bg-[linear-gradient(135deg,#1577C9_0%,#2D9BE9_24%,#44C8E1_45%,#3EBB78_76%,#248E48_100%)]",
    accentClass: "bg-[#FFE16A]/28",
    lines: [
      { text: "Maya", className: "text-[#FFD63B]" },
      { text: "Lokaya", className: "text-[#FFD63B]" },
    ],
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

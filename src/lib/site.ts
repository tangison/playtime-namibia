export const site = {
  name: "Playtime Namibia",
  legalName: "The Playtime Sport Development Trust",
  url: "https://playtime.com.na",
  description:
    "A non-governmental charitable organisation established in 2015 in Walvis Bay, Namibia, enabling sustainable youth and community development through sport.",
  established: 2015,
  address: "4th Street, Walvis Bay, Namibia",
  phone: "+264 64 279 650",
  phoneHref: "tel:+26464279650",
  email: "info@playtime.com.na",
  hours: [
    { days: "Monday – Friday", time: "8:00 – 18:00" },
    { days: "Saturday", time: "10:00 – 16:00" },
    { days: "Sunday", time: "Closed" },
  ],
  facebook: "https://www.facebook.com/playtimenamibia",
  tagline: "Empowering Youth Through Sports",
  missionLine: "Together, we're building a brighter future, one child at a time.",
} as const;

export type NavChild = { title: string; href: string; description?: string };
export type NavItem = { title: string; href: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Programmes",
    href: "/programmes",
    children: [
      {
        title: "Sports Codes",
        href: "/programmes",
        description: "Soccer, cricket, multi-sports and athletics",
      },
      {
        title: "School Partnerships",
        href: "/programmes/school-partnerships",
        description: "Multi-sports mornings and school football leagues",
      },
      {
        title: "Facilities",
        href: "/facilities",
        description: "The Hub in Kuisebmond and Atlantis Sports Club",
      },
    ],
  },
  {
    title: "Coaches",
    href: "/coaches",
    children: [
      {
        title: "Coaching Team",
        href: "/coaches",
        description: "Meet the coaches at The Hub and Atlantis",
      },
      {
        title: "Coaches' Corner",
        href: "/coaches-corner",
        description: "Drills, lessons and video resources",
      },
    ],
  },
  { title: "Gallery", href: "/gallery" },
  { title: "Events", href: "/events" },
  { title: "Partners", href: "/partners" },
  { title: "Contact", href: "/contact" },
];

export const sponsors = [
  { name: "Cavema Fishing", src: "/images/sponsor-cavema.webp", type: "webp" as const },
  { name: "Hydroweld Walvis Bay", src: "/images/sponsor-hydroweld.png", type: "png" as const },
  { name: "Namibia Ship Chandlers", src: "/images/sponsor-namibia-ship-chandlers.png", type: "png" as const },
  { name: "OTB Sport", src: "/images/sponsor-otb.png", type: "png" as const },
  { name: "Global United FC", src: "/images/sponsor-global-united.png", type: "png" as const },
  { name: "Atlantis Sport Club", src: "/images/sponsor-atlantis.webp", type: "webp" as const },
];

export function absoluteUrl(path: string) {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

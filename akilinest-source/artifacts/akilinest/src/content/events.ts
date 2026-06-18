export type AkiliEvent = {
  id: string;
  title: string;
  dates: string;
  time: string;
  price?: string;
  duration?: string;
  badge: string;
  description: string;
  highlights: string[];
  image?: string;
  featured?: boolean;
};

export const VENUE = "heARTspace, Kabarnet Road, off Ngong Road, Nairobi";
export const EVENT_REGISTRATION_URL = "https://forms.gle/KA3kQZS7Pr6c6WRZ6";
export const SIGNUP_LABEL = "Sign up now";
export const SIGNUP_LABEL_SHORT = "Sign up";
export const WHATSAPP_URL =
  "https://wa.me/254702820845?text=Hi%2C%20I%27d%20like%20to%20register%20my%20child%20for%20AkiliNest";

export const events: AkiliEvent[] = [
  {
    id: "taster-june-27",
    title: "Raising Curious Minds: Taster Session",
    dates: "Saturday, 27 June 2026",
    time: "10:00 AM - 1:00 PM",
    price: "KSh 2,000 per child",
    badge: "Next Up",
    description: "A 3-hour introduction to the AkiliNest Think-First cycle. Ages 6-17. See how we teach children to think before they use AI.",
    highlights: ["Ages 6-17", "3 hours", "KSh 2,000", "Limited spots"],
    image: "images/flyer-june27.png",
    featured: true,
  },
  {
    id: "camp-july-1",
    title: "Holiday Camp: July Intake 1",
    dates: "6 - 19 July 2026",
    time: "10:00 AM - 12:00 PM daily",
    duration: "10 days · 2 hours each day",
    price: "Limited spots",
    badge: "Holiday Camp",
    description: "Hands-on creative intelligence sessions across all four programme stages.",
    highlights: ["10 days", "2 hrs/day", "Small groups", "Tangible outputs weekly"],
    image: "images/flyer-holiday-camps.jpg",
  },
  {
    id: "camp-july-2",
    title: "Holiday Camp: July Intake 2",
    dates: "20 - 31 July 2026",
    time: "10:00 AM - 12:00 PM daily",
    duration: "10 days · 2 hours each day",
    price: "Limited spots",
    badge: "Holiday Camp",
    description: "Second July intake for families who missed the first camp dates.",
    highlights: ["10 days", "2 hrs/day", "Small groups", "All stages"],
    image: "images/flyer-holiday-camps.jpg",
  },
  {
    id: "camp-aug-1",
    title: "Holiday Camp: August Intake 1",
    dates: "3 - 16 August 2026",
    time: "10:00 AM - 12:00 PM daily",
    duration: "10 days · 2 hours each day",
    price: "Limited spots",
    badge: "Holiday Camp",
    description: "August holiday creative programme at AkiliNest: think first, create boldly, use AI wisely.",
    highlights: ["10 days", "2 hrs/day", "Small groups", "heARTspace venue"],
    image: "images/flyer-holiday-camps.jpg",
  },
  {
    id: "camp-aug-2",
    title: "Holiday Camp: August Intake 2",
    dates: "17 - 28 August 2026",
    time: "10:00 AM - 12:00 PM daily",
    duration: "10 days · 2 hours each day",
    price: "Limited spots",
    badge: "Holiday Camp",
    description: "Final August intake before school term resumes.",
    highlights: ["10 days", "2 hrs/day", "Small groups", "Register early"],
    image: "images/flyer-holiday-camps.jpg",
  },
];

export const featuredEvent = events.find((e) => e.featured) ?? events[0];

export const holidayCamps = events.filter((e) => !e.featured);

export const holidayCampsFlyer = {
  tagline: "Raising Curious Minds in the Age of AI",
  subtitle: "Book classes · 10 days each",
  ages: "For children aged 6-17",
  time: "10:00 AM - 12:00 PM daily",
  duration: "2 hours each day",
  image: "images/flyer-holiday-camps.jpg",
  pillars: ["Think First", "Create Boldly", "Use AI Wisely"],
  intakes: [
    { month: "July", dates: "6th - 19th July" },
    { month: "July", dates: "20th - 31st July" },
    { month: "August", dates: "3rd - 16th August" },
    { month: "August", dates: "17th - 28th August" },
  ],
  highlights: ["2 hours each day", "Limited spots", "Small class sizes"],
};

export const eventInterestOptions = [
  "June 27 Taster Session",
  "Holiday Camp: July 6-19",
  "Holiday Camp: July 20-31",
  "Holiday Camp: August 3-16",
  "Holiday Camp: August 17-28",
  "Weekend sessions (coming soon)",
  "Parent Intelligence Series",
  "Partnership or general enquiry",
];

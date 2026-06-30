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
export const EVENT_REGISTRATION_URL = "https://forms.gle/soVzS7zP3UECs56M9";
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
    badge: "Past Event",
    description: "A 3-hour introduction to the AkiliNest Think-First cycle. Ages 8-17. See how we teach children to think before they use AI.",
    highlights: ["Ages 8-17", "3 hours", "KSh 2,000", "Limited spots"],
    image: "images/flyer-june27.png",
  },
  {
    id: "camp-july-1",
    title: "Holiday Camp: July Intake",
    dates: "19 - 31 July 2026",
    time: "10:00 AM - 12:00 PM daily",
    duration: "10 days · 2 hours each day",
    price: "KSh 10,000 per child",
    badge: "Next Up",
    description: "Hands-on creative intelligence sessions across all four programme stages.",
    highlights: ["10 days", "2 hrs/day", "Small groups", "Tangible outputs weekly"],
    image: "images/flyer-holiday-camps.jpg",
    featured: true,
  },
  {
    id: "camp-aug-1",
    title: "Holiday Camp: August Intake 1",
    dates: "5 - 16 August 2026",
    time: "10:00 AM - 12:00 PM daily",
    duration: "10 days · 2 hours each day",
    price: "KSh 10,000 per child",
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
    price: "KSh 10,000 per child",
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
  ages: "For children aged 8-17",
  time: "10:00 AM - 12:00 PM daily",
  duration: "2 hours each day",
  image: "images/flyer-holiday-camps.jpg",
  pillars: ["Think First", "Create Boldly", "Use AI Wisely"],
  intakes: [
    { month: "July", dates: "19th - 31st July" },
    { month: "August", dates: "5th - 16th August" },
    { month: "August", dates: "17th - 28th August" },
  ],
  highlights: ["2 hours each day", "Limited spots", "Small class sizes"],
};

export const eventInterestOptions = [
  "Holiday Camp: July 19-31",
  "Holiday Camp: August 5-16",
  "Holiday Camp: August 17-28",
  "Schools Partnership (extracurricular or mainstream)",
  "Weekend sessions (coming soon)",
  "Parent Intelligence Series",
  "Partnership or general enquiry",
];

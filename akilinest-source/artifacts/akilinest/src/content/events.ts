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
export const SIGNUP_LABEL = "Register your child";
export const SIGNUP_LABEL_SHORT = "Register";
export const WHATSAPP_URL =
  "https://wa.me/254702820845?text=Hi%2C%20I%27d%20like%20to%20hear%20about%20the%20next%20AkiliNest%20kids%20bootcamp";

/**
 * Camp intakes are announced per school holiday. While no intake is live,
 * CAMPS_ANNOUNCED stays false and every surface shows a waiting-list state
 * instead of dates. Never list an intake here until the dates are confirmed.
 */
export const CAMPS_ANNOUNCED = true;

export const events: AkiliEvent[] = [
  {
    id: "camp-nov-dec",
    title: "Creative AI Bootcamp: November - December Intake",
    dates: "November - December 2026",
    time: "Session times confirmed on registration",
    badge: "Next intake",
    description:
      "The next AkiliNest creative AI bootcamp for children aged 8 to 17, across all four programme stages.",
    highlights: ["Ages 8-17", "Small groups", "Hands-on projects", "heARTspace, Nairobi"],
    image: "images/flyer-holiday-camps.jpg",
    featured: true,
  },
];

export const featuredEvent: AkiliEvent | undefined = events.find((e) => e.featured) ?? events[0];

export const holidayCamps = events.filter((e) => !e.featured);

export const holidayCampsFlyer = {
  tagline: "Creative AI Bootcamps for Kids",
  subtitle: "November - December 2026 intake",
  ages: "For children aged 8-17",
  time: "Daily sessions during school holidays",
  duration: "Small groups, hands-on projects",
  image: "images/flyer-holiday-camps.jpg",
  pillars: ["Think First", "Create Boldly", "Use AI Wisely"],
  highlights: ["Ages 8-17", "Small class sizes", "Hands-on projects"],
};

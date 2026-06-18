const base = import.meta.env.BASE_URL;

export function asset(path: string): string {
  return `${base}${path.replace(/^\//, "")}`;
}

export const IMAGES = {
  parentLearning1: "images/parent-learning-1.jpg",
  parentLearning2: "images/parent-learning-2.jpg",
  parentLearning3: "images/parent-learning-3.jpg",
  kidsCrafts: "images/kids-crafts.jpg",
  flyerJune27: "images/flyer-june27.png",
  flyerHolidayCamps: "images/flyer-holiday-camps.jpg",
  eventSpace: "event-space.jpg",
  workSprouts: "work-sprouts.png",
  workExplorers: "work-explorers.png",
  workBuilders: "work-builders.png",
} as const;

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
  pitchStage: "images/pitch-stage.jpg",
  pitchGroup: "images/pitch-group.jpg",
  sessionLaptop: "images/session-laptop.jpg",
  pitchStage2: "images/pitch-stage-2.jpg",
  sessionScreen: "images/session-screen.jpg",
  workSprouts: "work-sprouts.png",
  workExplorers: "work-explorers.png",
  workBuilders: "work-builders.png",
} as const;

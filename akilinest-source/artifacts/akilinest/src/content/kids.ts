/**
 * Kids programme detail, carried over from the programme page so the bootcamp
 * page says what children actually do rather than only naming the stages.
 */
export const KIDS_QUOTE = {
  text: "Creativity is one of the most important human qualities, and one of the hardest things to replicate.",
  author: "Demis Hassabis",
  role: "CEO, Google DeepMind",
} as const;

export const kidsStages = [
  {
    id: "sprouts",
    letter: "S",
    name: "Sprouts",
    age: "Ages 8 to 10",
    mantra: "I can imagine and express myself creatively.",
    about:
      "Playful creativity, storytelling and imagination. AI enters only after children express their own ideas.",
    learn: [
      "Storytelling and character creation",
      "Colours, shapes and emotions",
      "Imagination and world-building",
      "Creative confidence and articulation",
    ],
    tools: ["Book Creator", "Canva AI", "FlipaClip", "ElevenLabs"],
    grad: "from-[#0B4D5F] to-[#1AB5DC]",
  },
  {
    id: "explorers",
    letter: "E",
    name: "Explorers",
    age: "Ages 11 to 12",
    mantra: "I can understand technology and think critically about it.",
    about:
      "Critical thinking, digital literacy and AI understanding. Children question how AI works and form independent perspectives.",
    learn: [
      "How AI works and learns",
      "Prompting with intention",
      "Digital safety and media literacy",
      "Articulating ideas in their own words",
    ],
    tools: ["Perplexity", "CapCut", "Google Slides"],
    grad: "from-[#6B3900] to-[#E8980A]",
  },
  {
    id: "builders",
    letter: "B",
    name: "Builders",
    age: "Ages 13 to 14",
    mantra: "I can build with technology.",
    about:
      "Real digital products from structured thinking. Every project starts with a creative brief before any tool opens.",
    learn: [
      "Branding and design thinking",
      "AI-assisted content with intent",
      "User research and feedback",
      "Portfolio development",
    ],
    tools: ["Figma", "Lovable", "NotebookLM", "Canva Pro"],
    grad: "from-[#6B1A0A] to-[#E8523A]",
  },
  {
    id: "innovators",
    letter: "I",
    name: "Innovators",
    age: "Ages 15 to 17",
    mantra: "I can solve real-world problems with technology and AI.",
    about:
      "Real problems, original research and solutions children can defend and communicate with confidence.",
    learn: [
      "Advanced AI literacy",
      "Product strategy and innovation",
      "Research methodology",
      "Entrepreneurship and ethical AI",
    ],
    tools: ["Notion", "Zapier", "Behance", "Shopify"],
    grad: "from-[#1A0B6B] to-[#7F5AF0]",
  },
] as const;

/** Capabilities built across every stage, whatever the tools of the moment are. */
export const kidsDomains = [
  { label: "Create", title: "Visual and media expression", desc: "Stories, posters and videos, built from a child's own idea first." },
  { label: "Build", title: "Digital products", desc: "Apps and tools. Moving from consumer to creator." },
  { label: "Think", title: "Logic and reasoning", desc: "Form a position and ask the right question before reaching for a tool." },
  { label: "Understand AI", title: "How AI works", desc: "Where AI fails, and why a child must direct it rather than follow it." },
  { label: "Interact", title: "Communicate and collaborate", desc: "Presenting and pitching. Skills no AI will fully replace." },
  { label: "Connect", title: "Digital safety and identity", desc: "Algorithms, attention, and navigating the digital world." },
] as const;

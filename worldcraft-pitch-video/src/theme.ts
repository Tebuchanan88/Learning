export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

// Each scene after the first starts OVERLAP frames early and fades in over
// the one before it, so the cuts are crossfades handled in one place.
export const OVERLAP = 15;

export const SCENES = {
  hook: 150,
  problem: 210,
  solution: 315,
  proof: 135,
  cta: 150,
} as const;

// 960 frames of scenes minus four 15-frame overlaps = 900 frames (30s).
export const TOTAL_FRAMES =
  Object.values(SCENES).reduce((a, b) => a + b, 0) - OVERLAP * 4;

// Sampled from the Worldcraft logo file.
export const COLORS = {
  ink: '#111111',
  paper: '#FCFAFA',
  gold: '#BF9453',
} as const;

// All on-screen wording lives here, so copy changes never touch animation code.
export const COPY = {
  hook: {
    line1: 'On page 12, her eyes are green.',
    line2: 'On page 340, they’re grey.',
  },
  problem: {
    line1: 'Every story is a doorway into a world.',
    line2: 'The longer the book, the harder it is to keep straight.',
  },
  steps: [
    {
      number: '01',
      title: 'Upload your manuscript.',
      body: 'Worldcraft reads through it to find the characters, places and world details already in your story.',
    },
    {
      number: '02',
      title: 'It finds your world.',
      body: 'Every character and place, drawn from your own pages.',
    },
    {
      number: '03',
      title: 'You approve what’s true.',
      body: 'Nothing becomes canon until you say so.',
    },
  ],
  proof: {
    line1: 'The AI never invents.',
    line2: 'You stay the author.',
    note: 'Already handles a full-length novel, start to finish.',
  },
  cta: {
    tagline: 'Build a world that stays consistent as your story grows.',
    button: 'Join the early-access list',
    url: 'worldcraft.co.uk',
  },
} as const;

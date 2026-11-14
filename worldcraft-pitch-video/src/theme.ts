export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

// Most scenes change on a hard cut. Only the two moves onto the paper
// background (into the product section and into the end card) crossfade,
// by starting OVERLAP frames early.
export const OVERLAP = 15;

export const SCENES = {
  hook: 105,
  problem: 180,
  solution: 330,
  proof: 150,
  cta: 165,
} as const;

// 930 frames of scenes minus two 15-frame overlaps = 900 frames (30s).
export const TOTAL_FRAMES =
  Object.values(SCENES).reduce((a, b) => a + b, 0) - OVERLAP * 2;

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

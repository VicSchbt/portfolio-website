import React from 'react';

export type TileCategory =
  | 'all'
  | 'about'
  | 'project'
  | 'resume'
  | 'contact'
  | 'random';

export type TileSize =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge';

export interface TileContent {
  text?: string;
  image?: string;
  component?: React.ReactNode;
  cta?: {
    label: string;
    target?: string;
    isExternal?: boolean;
  };
}

export interface TileData {
  id: string;
  title: string;
  description?: string;
  category: TileCategory;
  size: TileSize;
  image?: string;
  contentType?: 'text' | 'image' | 'component';
  orientation?: 'horizontal' | 'vertical';
  content?: TileContent;
  comingSoon?: boolean;
}

export const tiles: TileData[] = [
  // About/
  {
    id: 'about-1',
    title: 'Hello there!',
    description:
      'Creative developer, artist at heart, athlete by nature.',
    category: 'about',
    size: 'medium',
    orientation: 'horizontal',
    contentType: 'text',
    content: {
      text: `I’m Victoire, a frontend developer who blends creativity and code to craft interactive, human-centered web experiences.\n\n
      Based in France, I love building interfaces that feel smooth, intentional, and alive — whether I’m working on a portfolio, a product, or a playground project.\n\n
      I'm drawn to teams and clients who care about UX, accessibility, and expressive design.`,
      cta: {
        label: 'See my values',
        target: '/about#values',
        isExternal: false,
      },
    },
  },
  {
    id: 'about-2',
    title: 'What I Value 💡',
    description:
      'Empathy, elegance & clarity in every detail.',
    category: 'about',
    size: 'medium',
    contentType: 'text',
    orientation: 'vertical',
    content: {
      text: `I believe great UX is built with empathy. ✨ It's not just about pretty interfaces — it's about how people feel while using them.\n\n
      That means:\n
      - Accessible text ♿️\n
      - Meaningful animations 🎞️\n
      - Clear flows 🧭\n
      - Respect for performance ⏱️\n\n
      💬 My creative process: idea → wireframes → motion → polish.\n\n
      🧭 Design principles I follow:\n
      - Design is for humans\n
      - Animations should never get in the way\n
      - Code is part of the design process\n\n
      I aim to build experiences where users feel confident — not confused. 🧘‍♀️`,
      cta: {
        label: 'Explore my work',
        target: '/projects',
        isExternal: false,
      },
    },
  },
  {
    id: 'about-3',
    title: 'Based in France 🇫🇷',
    description:
      'Remote-ready from the north, with creative energy from everywhere.',
    category: 'about',
    size: 'small',
    contentType: 'text',
    orientation: 'vertical',
    content: {
      text: `I live in the north of France, where I balance city life, sport, and creative flow. ✨\n\n
      I'm open to remote-friendly opportunities and collaborations — especially the kind that mix design, code, and originality.\n\n
      Whether I’m at my desk, on a board, or sketching in a café, I bring full energy to what I do.`,
      cta: {
        label: 'Let’s work together',
        target: '/contact',
        isExternal: false,
      },
    },
  },
  {
    id: 'about-4',
    title: 'Beyond Code 🌀',
    description:
      'Creative hands, moving feet, and a mind that won’t sit still.',
    category: 'about',
    size: 'large',
    contentType: 'text',
    orientation: 'horizontal',
    content: {
      text: `When I'm not coding, you’ll find me drawing, crocheting, gardening — or out skating or climbing. 🎨🧗‍♀️️🛹\n\n
      I believe creativity lives in motion, discipline, and joy. Whether it’s crafting a beautiful UI or nailing a new trick, I love the feeling of progress.\n\n
      I also care deeply about feminism, personal freedom, and building a life that feels truly mine.`,
      cta: {
        label: 'See what inspires me',
        target: '/about#inspirations',
        isExternal: false,
      },
    },
  },
  {
    id: 'about-5',
    title: 'My Inspirations 🌱',
    description:
      'Design, art, people, places — what fuels my creativity.',
    category: 'about',
    size: 'small',
    contentType: 'text',
    orientation: 'vertical',
    comingSoon: true,
    content: {
      text: `A peek into what sparks my imagination — from visual design to slow living, digital poetry, skate culture, and creative coding pioneers.\n\n
      Still curating this garden of inspiration 🌼 — check back soon!`,
      cta: {
        label: 'Coming soon',
        isExternal: false,
      },
    },
  },
  {
    id: 'about-6',
    title: 'What I’m Looking For 🔍',
    description:
      'Let’s build something meaningful together.',
    category: 'about',
    size: 'medium',
    contentType: 'text',
    orientation: 'horizontal',
    content: {
      text: `I'm open to freelance collaborations or creative tech missions that value UX, design, and expressive code.\n\n
      I thrive in small, passionate teams or creative partnerships where people care about impact, craft, and kindness.`,
      cta: {
        label: 'Get in touch',
        target: '/contact',
        isExternal: false,
      },
    },
  },
  {
    id: 'about-7',
    title: 'A few fun facts 🎲',
    description:
      'Spoiler: I once coded a crochet pattern generator.',
    category: 'about',
    size: 'small',
    contentType: 'text',
    orientation: 'vertical',
    content: {
      text: `– I cook better than I climb 🧗‍♀\n
      – I love cloudy days 🌥️\n
      – I dream of making a video game 👾\n
      – I can't resist a good Notion template ⚙️`,
    },
  },
  {
    id: 'about-8',
    title: 'What Matters to Me 🌍',
    description:
      'Feminism, freedom, and using tech with intention.',
    category: 'about',
    size: 'medium',
    contentType: 'text',
    orientation: 'vertical',
    content: {
      text: `Tech is not neutral — and neither am I.\n\n
    I care about:\n
    - Feminist tech communities 👭\n
    - Ethical design & sustainability 🌱\n
    - Digital well-being 💡`,
      cta: {
        label: 'Let’s connect',
        target: '/contact',
        isExternal: false,
      },
    },
  },

  // Projects/
  {
    id: 'project-1',
    title: 'Weather App',
    description:
      'A minimalist app fetching real-time weather using OpenWeather API.',
    category: 'project',
    size: 'large',
  },
  {
    id: 'project-2',
    title: 'Task Manager CLI',
    description:
      'A Go-based command-line app to track your daily todos.',
    category: 'project',
    size: 'medium',
    orientation: 'vertical',
  },
  {
    id: 'resume-1',
    title: 'Download CV',
    description:
      'PDF version available with recent work experience.',
    category: 'resume',
    size: 'small',
  },
  {
    id: 'contact-1',
    title: 'Get in Touch',
    description: "Let's work together or grab a coffee ☕",
    category: 'contact',
    size: 'medium',
    orientation: 'horizontal',
  },
  {
    id: 'random-1',
    title: 'Fun Fact',
    description:
      'I once crocheted a bag while debugging a frontend bug.',
    category: 'random',
    size: 'small',
  },
];

export type TileCategory =
  | 'hero'
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

export const groupedTiles: Record<
  TileCategory,
  TileData[]
> = {
  hero: [
    {
      id: 'hello-there',
      title: 'Hello there! 👋',
      description:
        'Creative developer, artist at heart, athlete by nature.',
      category: 'hero',
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
      id: 'looking-for',
      title: 'What I’m Looking For 🔍',
      description:
        'Let’s build something meaningful together.',
      category: 'hero',
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
  ],
  about: [
    {
      id: 'values',
      title: 'What I Value 💡',
      description:
        'Empathy, elegance & clarity in every detail.',
      category: 'about',
      size: 'small',
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
      id: 'based-in-france',
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
      id: 'beyond-code',
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
      id: 'inspirations',
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
      id: 'fun-facts',
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
      id: 'me-matter',
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
    {
      id: 'creative-rhythm',
      title: 'My Creative Rhythm 🎧',
      description:
        'Rituals, playlists, and how I stay in flow.',
      category: 'about',
      size: 'small',
      contentType: 'text',
      orientation: 'vertical',
      content: {
        text: `☕ Deep work in the morning\n
    🎶 Chill beats while coding\n
    📓 Sketchpad always nearby\n
    🧘‍♀️ Movement = clarity`,
      },
    },
  ],

  project: [
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
  ],

  resume: [
    {
      id: 'resume-1',
      title: 'Decathlon Digital 🏋️‍♀️',
      description:
        'Frontend & UX in a customer account team.',
      category: 'resume',
      size: 'medium',
      contentType: 'text', // TODO: change to image
      orientation: 'horizontal',
      content: {
        text: `Since 2023, I’ve been working as a frontend developer at Decathlon Digital, helping shape the customer account experience for millions of users.\n\n
    I contribute to feature development, code maintenance, UX improvements, and help support our design system.\n\n
    I'm also involved in Women in Tech initiatives and push for more accessible, user-centered practices. 💜`,
        cta: {
          label: 'See full journey',
          target: '/resume',
          isExternal: false,
        },
      },
    },
    {
      id: 'resume-2',
      title: 'Finance Ministry (France) 🧾',
      description:
        'Learning, exploring… and building a serious game.',
      category: 'resume',
      size: 'medium',
      contentType: 'text', // TODO: change to image
      orientation: 'vertical',
      content: {
        text: `3 years as an apprentice developer — each year a new challenge:\n\n
    • Year 1: Vue.js, remote work, autonomy\n
    • Year 2: Python, data viz 📊\n
    • Year 3: Serious game on digital sustainability 🧠\n\n
    It shaped how I think, code, and communicate.`,
        cta: {
          label: 'Discover the Serious Game',
          target: '/projects/serious-game',
          isExternal: false,
        },
      },
    },
    {
      id: 'resume-3',
      title: 'Kick-Start.ro ✈️',
      description:
        'A 4-month internship abroad that changed everything.',
      category: 'resume',
      size: 'small',
      contentType: 'text', // TODO: change to image
      orientation: 'vertical',
      content: {
        text: `I joined a prototyping agency in Romania, working on React + TypeScript projects.\n\n
    I improved my English 🇬🇧, leveled up my coding, and learned to design in agile environments with real-world users.`,
      },
    },
    {
      id: 'resume-4',
      title: 'UBI Solutions 📱',
      description:
        'Android, RFID & my first lines of professional code.',
      category: 'resume',
      size: 'small',
      contentType: 'text', // TODO: change to image
      orientation: 'vertical',
      content: {
        text: `My first hands-on experience in tech:\n\n
    • Android apps (Java → Kotlin)\n
    • RFID / BLE features\n
    • Real teamwork, real clients, real deadlines 👩‍💻`, // TODO: maybe add testimonial from Thibault?
      },
    },
    {
      id: 'resume-5',
      title: 'My education',
      description:
        'An unconventional path — and I’m proud of it ✨',
      category: 'resume',
      size: 'large',
      contentType: 'text',
      orientation: 'vertical',
      content: {
        text: `🎓 **IMT Atlantique** — Software Engineering (2020–2023)  
🇫🇷 French Grande École, part of the Institut Mines-Télécom network  
💼 3-year work-study at DGFIP (French tax administration) as a frontend developer  
🕹️ Final project: a **serious game about digital sobriety** for public institutions  
📍 Campus: Nantes  

💻 **Université de Lille** — DUT in Computer Science (2018–2020)  
👩‍💻 First real immersion in programming, databases, networks & algorithms  
💡 Sparked my passion for UX and clean code  

🏛️ **Université de Mons (Belgium)** — Architecture (2016–2017)  
✏️ Explored design, drawing, and spatial logic  
🔁 Realized I wanted to create with code instead of concrete  

🛠️ **Université Lille 1** — DUT in Mechanical Engineering (2014–2016)  
🔩 Learned CAD, materials science, industrial processes  
👷‍♀️ Built technical rigor and a maker mindset  

🌱 **UTC Compiègne** — Engineering Prep Year (2013–2014)  
🔬 Broad scientific curriculum to prepare for engineering schools  
🧠 Solid base in maths and physics`,
      },
    },
    {
      id: 'resume-6',
      title: 'Download CV',
      description:
        'PDF version available with recent work experience.',
      category: 'resume',
      size: 'small',
    },
  ],

  contact: [
    {
      id: 'contact-1',
      title: 'Let’s work together 🤝',
      description:
        'Have a project, a question, or just want to say hi?',
      category: 'contact',
      size: 'medium',
      contentType: 'component',
      orientation: 'horizontal',
      content: {
        // component: , // TODO: add component
        cta: {
          label: 'Open contact form',
          isExternal: false,
        },
      },
    },
  ],

  random: [
    // any fun / personal tile
  ],
};

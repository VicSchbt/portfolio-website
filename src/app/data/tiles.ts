export type TileCategory =
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

export interface TileData {
  id: string;
  title: string;
  description?: string;
  category: TileCategory;
  size: TileSize;
  image?: string;
  contentType?: 'text' | 'image' | 'component';
  orientation?: 'horizontal' | 'vertical';
}

export const tiles: TileData[] = [
  {
    id: 'about-1',
    title: 'Hello there!',
    description:
      'Creative developer, artist at heart, athlete by nature.',
    category: 'about',
    size: 'medium',
    orientation: 'horizontal',
    contentType: 'text',
  },
  {
    id: 'about-2',
    title: 'Based in France',
    description:
      'I live near nature, code with coffee, and ride the wind.',
    category: 'about',
    size: 'small',
  },
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

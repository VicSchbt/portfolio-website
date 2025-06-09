import { createContext } from 'react';
import { TileCategory } from '@/app/data/tiles';

export const CategoryContext = createContext<{
  targetCategory: TileCategory | null;
  setTargetCategory: (
    category: TileCategory | null
  ) => void;
}>({
  targetCategory: null,
  setTargetCategory: () => {},
});

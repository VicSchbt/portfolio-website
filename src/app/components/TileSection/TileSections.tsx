// components/TileSection/TileSection.tsx
'use client';

import styles from './TileSection.module.scss';
import {
  groupedTiles,
  TileCategory,
} from '@/app/data/tiles';
import TileGrid from '@/app/components/TileGrid/TileGrid';

interface TileSectionProps {
  category: TileCategory;
  title: string;
  isTitleDisplayed: boolean;
}

const TileSection = ({
  category,
  title,
  isTitleDisplayed = true,
}: TileSectionProps) => {
  const tiles = groupedTiles[category];

  if (!tiles || tiles.length === 0) return null;

  return (
    <section id={category} className={styles.tileSection}>
      {isTitleDisplayed && (
        <h2 className={styles.sectionTitle}>{title}</h2>
      )}
      <TileGrid category={category} tiles={tiles} />
    </section>
  );
};

export default TileSection;

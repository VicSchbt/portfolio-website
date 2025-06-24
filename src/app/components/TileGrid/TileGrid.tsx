// components/TileGrid/TileGrid.tsx

import { TileCategory, TileData } from '@/app/data/tiles';
import styles from './TileGrid.module.scss';
import Tile from '@/app/components/Tile/Tile';

interface TileGridProps {
  category: TileCategory;
  tiles: TileData[];
}

const TileGrid = ({ category, tiles }: TileGridProps) => {
  return (
    <section
      id={`grid-${category}`}
      className={styles.tileGrid}
    >
      {tiles.map((tile) => {
        return (
          <Tile
            key={tile.id}
            size={tile.size}
            category={tile.category}
            isVisible={true}
            orientation={tile.orientation}
          >
            <h3>{tile.title}</h3>
            {tile.description && <p>{tile.description}</p>}
          </Tile>
        );
      })}
    </section>
  );
};

export default TileGrid;

import { tiles } from '@/app/data/tiles';
import { TileCategory } from '@/app/data/tiles';
import Tile from '@/app/components/Tile/Tile';
import styles from './TileGrid.module.scss';
import TextTile from '@/app/components/Tile/TextTile/TextTile';

interface TileGridProps {
  activeCategory: TileCategory | 'all';
  targetCategory?: TileCategory | null;
}

const TileGrid = ({
  activeCategory,
  targetCategory,
}: TileGridProps) => {
  return (
    <section className={styles.tileGrid}>
      {tiles.map((tile) => {
        const isVisible =
          !targetCategory ||
          tile.category === targetCategory;

        if (tile.contentType === 'text') {
          return (
            <TextTile
              key={tile.id}
              tile={tile}
              isVisible={isVisible}
            />
          );
        } else {
          return (
            <Tile
              key={tile.id}
              size={tile.size}
              category={tile.category}
              isVisible={isVisible}
            >
              <h3>{tile.title}</h3>
              {tile.description && (
                <p>{tile.description}</p>
              )}
            </Tile>
          );
        }
      })}
    </section>
  );
};

export default TileGrid;

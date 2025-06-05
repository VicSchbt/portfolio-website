import { tiles } from '@/app/data/tiles';
import { TileCategory } from '@/app/data/tiles';
import Tile from '@/app/components/Tile/Tile';
import styles from './TileGrid.module.scss';
import TextTile from '@/app/components/Tile/TextTile/TextTile';

const TileGrid = ({
  activeCategory,
}: {
  activeCategory: TileCategory | 'all';
}) => {
  const filtered =
    activeCategory === 'all'
      ? tiles
      : tiles.filter(
          (tile) => tile.category === activeCategory
        );

  return (
    <div className={styles.tileGrid}>
      {filtered.map((tile) => {
        if (tile.contentType === 'text') {
          return <TextTile key={tile.id} tile={tile} />;
        } else {
          return (
            <Tile
              key={tile.id}
              size={tile.size}
              category={tile.category}
            >
              <h3>{tile.title}</h3>
              {tile.description && (
                <p>{tile.description}</p>
              )}
            </Tile>
          );
        }
      })}
    </div>
  );
};

export default TileGrid;

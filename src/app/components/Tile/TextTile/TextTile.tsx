import Tile from '@/app/components/Tile/Tile';
import { TileData } from '@/app/data/tiles';
import styles from './TextTile.module.scss';

interface TextTileProps {
  tile: TileData;
  orientation?: 'horizontal' | 'vertical';
}

const TextTile = ({
  tile,
  orientation = undefined,
}: TextTileProps) => {
  return (
    <Tile
      key={tile.id}
      size={tile.size}
      category={tile.category}
      orientation={orientation}
      className={styles.textTile}
    >
      <h3>{tile.title}</h3>
      {tile.description && <p>{tile.description}</p>}
    </Tile>
  );
};

export default TextTile;

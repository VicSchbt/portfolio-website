'use client';

import { TileData } from '@/app/data/tiles';
import { useRouter } from 'next/navigation';
import styles from './TileRenderer.module.scss';
import Tile from '@/app/components/Tile/Tile';

interface TileRendererProps {
  tile: TileData;
  isVisible: boolean;
}

const TileRenderer = ({
  tile,
  isVisible,
}: TileRendererProps) => {
  const router = useRouter();
  const cta = tile.content?.cta;

  const handleClick = () => {
    if (!cta?.target) return;
    if (cta.isExternal) {
      window.open(cta.target, '_blank');
    } else {
      router.push(cta.target);
    }
  };

  const isClickable = !!cta?.target;

  return (
    <Tile
      key={tile.id}
      size={tile.size}
      category={tile.category}
      orientation={tile.orientation}
      className={`${styles.tileRenderer} ${styles[tile.size]} ${isClickable ? styles.clickable : ''}`}
      isVisible={isVisible}
      onClick={isClickable ? handleClick : undefined}
    >
      <h3>{tile.title}</h3>
      {tile.description && <p>{tile.description}</p>}

      {tile.contentType === 'text' &&
        tile.content?.text && (
          <p className={styles.preview}>
            {tile.content.text}
          </p>
        )}

      {tile.contentType === 'image' &&
        tile.content?.image && (
          <img src={tile.content.image} alt={tile.title} />
        )}

      {tile.contentType === 'component' &&
        tile.content?.component && (
          <div className={styles.customComponent}>
            {tile.content.component}
          </div>
        )}
    </Tile>
  );
};

export default TileRenderer;

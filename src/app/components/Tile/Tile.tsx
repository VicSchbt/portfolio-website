import styles from './Tile.module.scss';
import React from 'react';
import { TileCategory, TileSize } from '@/app/data/tiles';

interface TileProps {
  size: TileSize;
  category: TileCategory;
  orientation?: 'horizontal' | 'vertical';
  children: React.ReactNode;
  className?: string;
}

const Tile = ({
  size = 'medium',
  category = 'about',
  children,
  className = '',
  orientation = undefined,
}: TileProps) => {
  return (
    <div
      className={`${styles.tile} ${styles[size]} ${styles[category]} ${className} ${orientation ? styles[orientation] : ''}`}
      data-category={category}
    >
      {children}
    </div>
  );
};

export default Tile;

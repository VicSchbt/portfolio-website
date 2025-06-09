'use client';
import styles from './Tile.module.scss';
import React from 'react';
import { TileCategory, TileSize } from '@/app/data/tiles';
import { motion } from 'framer-motion';
import { tileAnimationDuration } from '@/app/config/animations';

interface TileProps {
  size: TileSize;
  category: TileCategory;
  orientation?: 'horizontal' | 'vertical';
  isVisible?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Tile = ({
  size = 'medium',
  category = 'about',
  children,
  className = '',
  orientation = undefined,
  isVisible,
}: TileProps) => {
  const delay = isVisible ? tileAnimationDuration : 0;
  return (
    <motion.div
      className={`${styles.tile} ${styles[size]} ${styles[category]} ${className} ${orientation ? styles[orientation] : ''}`}
      data-category={category}
      initial={{ scale: 0 }}
      animate={{ scale: isVisible ? 1 : 0 }}
      transition={{
        duration: tileAnimationDuration,
        ease: 'easeIn',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Tile;

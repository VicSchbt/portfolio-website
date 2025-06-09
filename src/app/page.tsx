'use client';
import React from 'react';
import { TileCategory } from '@/app/data/tiles';
import TileGrid from '@/app/components/TileGrid/TileGrid';
import { motion } from 'framer-motion';
import { tileAnimationDuration } from '@/app/config/animations';

export default function HomePage() {
  const activeCategory: TileCategory | 'all' = 'all';

  return (
    <main>
      <motion.section
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{
          duration: tileAnimationDuration * 4,
          ease: 'easeInOut',
        }}
        style={{ overflow: 'hidden' }}
      >
        <h1
          style={{ fontSize: '2rem', marginBottom: '1rem' }}
        >
          Welcome to my portfolio
        </h1>
        <p style={{ marginBottom: '2rem' }}>
          I create interactive and aesthetic web experiences
          that blend code, creativity, and UX.
        </p>
      </motion.section>

      {/* Grid of all tiles */}
      <TileGrid activeCategory={activeCategory} />
    </main>
  );
}

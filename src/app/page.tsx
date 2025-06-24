'use client';
import React from 'react';
import {
  groupedTiles,
  TileCategory,
} from '@/app/data/tiles';
import TileSection from '@/app/components/TileSection/TileSections';

export default function HomePage() {
  const categories = Object.keys(
    groupedTiles
  ) as TileCategory[];

  return (
    <main>
      <section style={{ overflow: 'hidden' }}>
        <h1
          style={{ fontSize: '2rem', marginBottom: '1rem' }}
        >
          Hi, I’m Victoire 👋
        </h1>
        <p style={{ marginBottom: '2rem' }}>
          I’m a frontend developer who brings ideas to life
          through smooth interactions, meaningful design,
          and a touch of creative magic. I craft digital
          experiences that don’t just work — they feel good
          to use.
        </p>
        <p>
          ↓ Explore the tiles to discover more about me, my
          work, and how I build.
        </p>
      </section>

      {/* Grid of all tiles */}
      {categories.map((category) => (
        <TileSection
          key={category}
          category={category}
          title={
            category.charAt(0).toUpperCase() +
            category.slice(1)
          }
          isTitleDisplayed={category !== 'hero'}
        />
      ))}
    </main>
  );
}

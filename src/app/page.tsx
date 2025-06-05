import React from 'react';
import { TileCategory } from '@/app/data/tiles';
import TileGrid from '@/app/components/TileGrid/TileGrid';

export default function HomePage() {
  const activeCategory: TileCategory | 'all' = 'all';

  return (
    <main>
      <section>
        <h1
          style={{ fontSize: '2rem', marginBottom: '1rem' }}
        >
          Welcome to my portfolio
        </h1>
        <p style={{ marginBottom: '2rem' }}>
          I create interactive and aesthetic web experiences
          that blend code, creativity, and UX.
        </p>

        {/* Grid of all tiles */}
        <TileGrid activeCategory={activeCategory} />
      </section>
    </main>
  );
}

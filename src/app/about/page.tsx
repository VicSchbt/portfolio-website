'use client';
import { useContext } from 'react';
import TileGrid from '../components/TileGrid/TileGrid';
import { CategoryContext } from '../context/categoryContext';

const AboutPage = () => {
  const { targetCategory } = useContext(CategoryContext);

  return (
    <TileGrid
      activeCategory="about"
      targetCategory={targetCategory}
    />
  );
};

export default AboutPage;

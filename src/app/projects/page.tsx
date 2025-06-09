'use client';
import { useContext } from 'react';
import TileGrid from '../components/TileGrid/TileGrid';
import { CategoryContext } from '../context/categoryContext';

const ProjectsPage = () => {
  const { targetCategory } = useContext(CategoryContext);

  return (
    <TileGrid
      activeCategory="project"
      targetCategory={targetCategory}
    />
  );
};

export default ProjectsPage;

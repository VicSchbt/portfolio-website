'use client';
import { useContext } from 'react';
import TileGrid from '../components/TileGrid/TileGrid';
import { CategoryContext } from '../context/categoryContext';

const ContactPage = () => {
  const { targetCategory } = useContext(CategoryContext);

  return (
    <TileGrid
      activeCategory="contact"
      targetCategory={targetCategory}
    />
  );
};

export default ContactPage;

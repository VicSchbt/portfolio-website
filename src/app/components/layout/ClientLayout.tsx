'use client';
import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import { CategoryContext } from '@/app/context/categoryContext';
import { TileCategory } from '@/app/data/tiles';

const ClientLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [targetCategory, setTargetCategory] =
    useState<TileCategory | null>(null);

  return (
    <CategoryContext.Provider
      value={{ targetCategory, setTargetCategory }}
    >
      <div className="layout">
        <Navbar />
        {children}
        <Footer />
      </div>
    </CategoryContext.Provider>
  );
};

export default ClientLayout;

'use client';
import styles from './Navbar.module.scss';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

import { CategoryContext } from '@/app/context/categoryContext';
import { useReducedMotion } from 'framer-motion';
import { TileCategory } from '@/app/data/tiles';
import { tileAnimationDuration } from '@/app/config/animations';

interface NavLink {
  label: string;
  category: TileCategory;
  route: string;
}

const navLinks: NavLink[] = [
  {
    label: 'About',
    category: 'about',
    route: '/about',
  },
  {
    label: 'Projects',
    category: 'project',
    route: '/projects',
  },
  {
    label: 'Contact',
    category: 'contact',
    route: '/contact',
  },
];

const Navbar = () => {
  const router = useRouter();
  const { setTargetCategory } = useContext(CategoryContext);
  const shouldAnimate = !useReducedMotion();

  const [announcement, setAnnouncement] = useState<
    string | null
  >(null);

  const handleNavigate = (
    category: TileCategory,
    route: string
  ) => {
    setTargetCategory(category); // trigger deflate animation on tiles

    if (shouldAnimate) {
      setAnnouncement(`Navigating to ${category}...`);
      setTimeout(() => {
        router.push(route);
        setAnnouncement(null); // clear announcement after navigation
      }, tileAnimationDuration * 1000); // match animation duration
    } else {
      router.push(route); // skip delay if reduced motion is requested
    }
  };

  return (
    <header className={styles.navbar}>
      <button
        className={styles.logo}
        aria-label="Go to homepage"
        onClick={() => handleNavigate('all', '/')}
      >
        Victoire
      </button>
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <button
            key={link.category}
            aria-live="polite"
            role="link"
            onClick={() =>
              handleNavigate(link.category, link.route)
            }
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Visually hidden ARIA live region for screen reader feedback */}
      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>
    </header>
  );
};

export default Navbar;

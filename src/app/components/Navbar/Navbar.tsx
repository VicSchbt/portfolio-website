'use client';

import styles from './Navbar.module.scss';
import { useState } from 'react';
import { TileCategory } from '@/app/data/tiles';

interface NavLink {
  label: string;
  category: TileCategory;
  targetId: string;
}

const navLinks: NavLink[] = [
  { label: 'About', category: 'about', targetId: 'about' },
  { label: 'Projects', category: 'project', targetId: 'project' },
  { label: 'Contact', category: 'contact', targetId: 'contact' },
];

const Navbar = () => {
  const [announcement, setAnnouncement] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setAnnouncement(`Navigated to ${id} section`);
      window.history.pushState(null, '', `#${id}`);
      setMenuOpen(false); // Close menu on navigation
    }
  };

  const handleHamburgerClick = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <header className={styles.navbar}>
      <a
        href="/"
        className={styles['navbar__logo']}
        aria-label="Go to homepage"
        onClick={(e) => handleClick(e, 'hero')}
      >
        Victoire
      </a>

      <button
        className={styles['navbar__menu-button']}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={handleHamburgerClick}
      >
        <span className={styles['navbar__menu-icon-box']}>
          <span className={styles['navbar__menu-icon']} />
        </span>
      </button>

      <nav
        className={`${styles['navbar__links']} ${menuOpen ? styles['navbar__links--open'] : ''}`}
        id="main-navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map(({ label, targetId, category }) => (
          <a
            key={category}
            href={`#${targetId}`}
            className={styles['navbar__link']}
            onClick={(e) => handleClick(e, targetId)}
          >
            {label}
          </a>
        ))}
      </nav>

      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>
    </header>
  );
};

export default Navbar;

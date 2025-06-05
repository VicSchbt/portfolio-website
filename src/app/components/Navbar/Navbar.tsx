import styles from './Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Link
        href="/"
        className={styles.logo}
        aria-label="Go to homepage"
      >
        Victoire
      </Link>
      <nav className={styles.nav}>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;

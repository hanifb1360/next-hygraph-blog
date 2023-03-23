import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 70) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <nav className={`${styles.navigation} ${shadow ? styles.navShadow : ''}`}>
      <Link href="/" legacyBehavior>
        <a className={styles.logo}>TECHNIUZ</a>
      </Link>
      <button
        className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`${styles.navigationMenu} ${
          isNavExpanded ? styles.expanded : ''
        }`}
      >
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a onClick={() => setIsNavExpanded(false)}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blogs" legacyBehavior>
              <a onClick={() => setIsNavExpanded(false)}>Blogs</a>
            </Link>
          </li>

          <li>
            <Link href="/about" legacyBehavior>
              <a onClick={() => setIsNavExpanded(false)}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a onClick={() => setIsNavExpanded(false)}>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

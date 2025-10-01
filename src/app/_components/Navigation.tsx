'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navigation() {
  const pathName = usePathname();
  const [opacity, setOpacity] = useState(1); // State for navigation opacity

  const menuToggle = 30;

  useEffect(() => {
    const handleScroll = () => {
      const positionY = window.scrollY;
      const newOpacity = positionY > menuToggle ? 0 : 1;

      if (opacity !== newOpacity) {
        // Only update if opacity has changed
        setOpacity(newOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, [opacity, menuToggle]); // Dependency array optimization

  return (
    <nav
      className='navigation'
      style={{ opacity }}>
      <ul>
        <li>
          <Link
            href='/'
            className={pathName === '/home' ? 'active-route' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href='/about-me'
            className={pathName === '/about-me' ? 'active-route' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link
            href='/work'
            className={pathName === '/work' ? 'active-route' : ''}>
            Work
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

function Header({ title, subtitle }) {
  const [activeTab, setActiveTab] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'apps', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveTab(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <nav className={styles.tabNav}>
        <a 
          href="#hero" 
          className={`${styles.tabLink} ${activeTab === 'hero' ? styles.active : ''}`}
        >
          Home
        </a>
        <a 
          href="#apps" 
          className={`${styles.tabLink} ${activeTab === 'apps' ? styles.active : ''}`}
        >
          Apps
        </a>
        <a 
          href="#about" 
          className={`${styles.tabLink} ${activeTab === 'about' ? styles.active : ''}`}
        >
          About
        </a>
        <a 
          href="#contact" 
          className={`${styles.tabLink} ${activeTab === 'contact' ? styles.active : ''}`}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;

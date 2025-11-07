import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ title, subtitle }) {
  const [activeTab, setActiveTab] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <nav className={styles.tabNav}>
        <a 
          href="#hero" 
          className={`${styles.tabLink} ${activeTab === 'hero' ? styles.active : ''}`}
          onClick={(e) => handleNavClick(e, 'hero')}
        >
          Home
        </a>
        <a 
          href="#apps" 
          className={`${styles.tabLink} ${activeTab === 'apps' ? styles.active : ''}`}
          onClick={(e) => handleNavClick(e, 'apps')}
        >
          Apps
        </a>
        <a 
          href="#about" 
          className={`${styles.tabLink} ${activeTab === 'about' ? styles.active : ''}`}
          onClick={(e) => handleNavClick(e, 'about')}
        >
          About
        </a>
        <a 
          href="#contact" 
          className={`${styles.tabLink} ${activeTab === 'contact' ? styles.active : ''}`}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;

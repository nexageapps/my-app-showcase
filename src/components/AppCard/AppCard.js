import React from 'react';
import styles from './AppCard.module.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import FeatureList from '../FeatureList/FeatureList';

function AppCard({ app, index }) {
  return (
    <article 
      className={styles.card} 
      style={{ animationDelay: `${index * 0.1}s` }}
      role="listitem"
      aria-labelledby={`app-name-${app.id}`}
    >
      <ImageGallery images={app.images} appName={app.name} />
      
      <div className={styles.content}>
        <h2 id={`app-name-${app.id}`} className={styles.appName}>{app.name}</h2>
        {app.tagline && <p className={styles.tagline}>{app.tagline}</p>}
        
        <FeatureList features={app.features} appId={app.id} />
      </div>
    </article>
  );
}

export default AppCard;

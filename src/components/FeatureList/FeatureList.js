import React from 'react';
import styles from './FeatureList.module.css';

const FeatureList = ({ features, appId }) => {
  // Handle empty features array gracefully
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby={`features-heading-${appId}`} className={styles.featuresSection}>
      <h3 id={`features-heading-${appId}`} className={styles.featuresHeading}>Features</h3>
      <div className={styles.featureBadges} aria-label="App features">
        {features.map((feature, index) => (
          <span key={index} className={styles.featureBadge}>
            {feature}
          </span>
        ))}
      </div>
    </section>
  );
};

export default FeatureList;

import React from 'react';
import styles from './FeatureList.module.css';

const FeatureList = ({ features, appId }) => {
  // Handle empty features array gracefully
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby={`features-heading-${appId}`}>
      <h3 id={`features-heading-${appId}`} className={styles.featuresHeading}>Features</h3>
      <ul className={styles.featureList} aria-label="App features">
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeatureList;

// components/Hero.js

import React from 'react';
import styles from '../scsss/hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <img src="/images/hero1.jpg" alt="Hero Image" className={styles.image} />
      <div className={styles.text}>
        <h1>Welcome to Quraban Gah</h1>
        <p>Cattle Dairy Farm</p>
        <button>View Our Animals</button>
      </div>
    </div>
  );
}

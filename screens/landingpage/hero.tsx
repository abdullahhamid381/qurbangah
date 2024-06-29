// components/Hero.js

import React from 'react';
import styles from '../scsss/hero.module.scss';

export default function Hero() {
  return (
  <div className={styles.heroparent}>
      <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <img src="/images/hero1.jpg" alt="Hero Image" className={styles.image} />
      <div className={styles.text}>
        <h1>Choose Your Sacrifice</h1>
        <p>Cattle Dairy Farm</p>
        <button>View Our Animals</button>
      </div>
    </div>
    <div className={styles.welcome}>
      <div>
        <h1>Welcome To Our Farm!</h1>
        <p>Here you will find a wide range of healthy and fresh dairy products that were proudly produced at our farm by our farmers and cows. Welcome to Jacksons!</p>
      </div>
      <div className={styles.secondlogo}>
        <img src="./images/logosecond.png" alt="" />
      </div>
    </div>
   
  </div>
  );
}

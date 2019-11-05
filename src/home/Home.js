import React from 'react';
import styles from './Home.css';

const Home = (props) => (
  <div className={styles.homeWrapper}>
    <div className={styles.homeVideoWrapper}>
      <video
        src="/assets/videos/octopus-cooking-background-3000cbr.mp4"
        poster="/assets/images/video-background-poster.jpg"
        autoPlay
        loop
        muted
      />
    </div>

    <div className={styles.homeImageWrapper}>
      <img src="/assets/images/cooking-pot-logo-foreground.png" alt="logo" />
    </div>
  </div>
);

export default Home;

import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import BG from '../assets/bg.svg';

const Home = () => {
  return (
    <div className={styles.home}>
      <Image src={BG} alt="Background" className={styles.bg} />
      <h1 className={styles.title}>TECHNIUZ</h1>
      <h3 className={styles.subtitle}>
        Your source for the latest in technology news and trends
      </h3>
    </div>
  );
};

export default Home;

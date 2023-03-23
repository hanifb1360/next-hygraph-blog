import React from 'react';
import AboutBg from '../assets/about-bg.svg';

import styles from '../styles/About.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.about}>
      <Image src={AboutBg} alt="Background" className={styles.bg} />
      <div className={styles.textBox}>
        <h1 className={styles.title}>TECHNIUZ</h1>
        <p className={styles.text}>
          Welcome to our blog about tech trends!<br></br>We are a team of two
          tech enthusiasts who are passionate about everything related to
          technology. We met in college while studying Industrial Design and
          have been inseparable ever since. Our love for technology brought us
          together and we decided to start this blog to share our knowledge and
          insights with the world.<br></br>Our goal is to keep you up-to-date
          with the latest trends and developments in the world of technology. We
          cover a wide range of topics, from the latest gadgets and software
          releases to emerging technologies and their potential impact on our
          lives. We also share our personal experiences and opinions on various
          tech products and services.<br></br>We believe that technology has the
          power to change the world for the better and we want to be a part of
          that change. Through our blog, we hope to inspire others to embrace
          technology and use it to improve their lives.<br></br>We hope you
          enjoy reading our blog as much as we enjoy writing it. Don&apos;t
          hesitate to reach out to us if you have any questions or suggestions.
          We&apos;d love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import styles from '../styles/Contact.module.css';
import 'leaflet/dist/leaflet.css';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <h1>Let&apos;s collaborate!</h1>

      <div className={styles.container}>
        <div className={styles.left}>
          <form>
            <input placeholder="Name" type="text" id="name" />

            <input placeholder="Email" type="email" id="email" />

            <textarea placeholder="Message" id="message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.right}>
          <div className={styles.map}>
            <Map />
          </div>
          <div className={styles.info}>
            <p>Address: 123 Main Street, Stockholm Sweden</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

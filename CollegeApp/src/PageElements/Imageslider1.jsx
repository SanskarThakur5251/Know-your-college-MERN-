import React, { useState } from 'react';
import styles from '../ElementStyles/Imageslider1Styles.module.css';

const Imageslider1 = () => {
  const images = [
    'https://www.universitymagazine.ca/wp-content/uploads/2025/05/Colleges-With-The-Most-Beautiful-Women-696x319.jpg',
    'https://picsum.photos/id/2/200/300',
    'https://picsum.photos/id/3/200/300',
    'https://picsum.photos/id/4/200/300',
  ];

  const [image, setImage] = useState(0);

  const nextImage = () => {
    setImage((image + 1) % images.length); 
  };

  const prevImage = () => {
    setImage((image - 1 + images.length) % images.length); 

    
  };

  return (
    <div className={styles.slidertop}>
    <div className={styles.slider}>
      <img
        src={images[image]}
        alt={`slide ${image + 1}`}
        className={styles.image}
      />
      <div className={styles.buttons}>
        <button onClick={prevImage} className={styles.navButton}>‹</button>
        <button onClick={nextImage} className={styles.navButton}>›</button>
      </div>
    </div>
    </div>
  );
};

export default Imageslider1;

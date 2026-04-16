import React from 'react';
import styles from '../ElementStyles/NavbarStyles.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.body}>
      <nav className={styles.navbar}>
        <div className={styles.navdiv}>
          <div className={styles.logo}>
            <Link className={styles.logoLink} to="/">KnowYourCollege</Link>
          </div>

          <ul className={styles.navList}>
            <li className={styles.pages}>
              <Link className={styles.pagesNames} to="/colleges">Colleges</Link>
            </li>
            <li className={styles.pages}>
              <Link className={styles.pagesNames} to="/tools">Tools</Link>
            </li>
            <li className={styles.pages}>
              <Link className={styles.pagesNames} to="/contactPage">Contact</Link>
            </li>
            <li className={styles.pages}>
              <Link className={styles.pagesNames} to="/wishlist">Wishlist</Link>
            </li>
            <li className={styles.pages}>
              <Link className={styles.button} to="/login">Sign In</Link>
              
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

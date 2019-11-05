
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.css'

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName={styles.active}>Home</NavLink></li>
        <li><NavLink to="/recipes" activeClassName={styles.active}>Recipes</NavLink></li>
        <li><NavLink to="/nutrition" activeClassName={styles.active}>Nutrition</NavLink></li>
        <li><NavLink to="/inspiration" activeClassName={styles.active}>Inspiration</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;

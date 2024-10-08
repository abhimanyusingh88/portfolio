import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <div>
              <a href="#about">About</a>
              <div className={styles.a1}></div>
            </div>
          </li>
          <li>
            <div>
              <a href="#experience">Experience</a>
              <div className={styles.a2}></div>
            </div>
          </li>
          <li>
            <div>
              <a href="#projects">Projects</a>
              <div className={styles.a3}></div>
            </div>
          </li>
          <li>
            <div>
              <a href="#contact">Contact</a>
              <div className={styles.a4}></div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

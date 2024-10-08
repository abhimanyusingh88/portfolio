import  { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import Typed from "typed.js";

export const Hero = () => {
  const inputRef = useRef(null); // Create a ref for the input span

  useEffect(() => {
    const options = {
      strings: ["Abhimanyu Singh","Web Developer", "Designer", "Programmer"],
      typeSpeed: 120,
      backSpeed: 110,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(inputRef.current, options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I am <span ref={inputRef}></span>
        </h1>
        <p className={styles.description}>
          a front-end developer with 6+ months of experience using React and
          NodeJS. Reach out if I&apos;d like to learn more!
        </p>
        <a href="mailto:singabhimanyu9794@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="boyssssss.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

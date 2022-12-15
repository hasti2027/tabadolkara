import styles from "./Hero.module.css";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <div className={styles.hero}>
        <h1> - تبادل کارا شیوه ای نو برای ثروت -</h1>
        <h2>تبادل کارها = رونق اقتصادی </h2>
        <div className={styles.animationContainer}>
          <p className={styles.animation}></p>
        </div>
        <p className={styles.lastParag}>
          Simbi is a registered 501(c)(3) non-profit organization! Our mission
          is to promote volunteership, mutual aid, education and community
          development!
        </p>
        <Link href="/about">خوش آمدید</Link>
      </div>
    </>
  );
}

export default HomePage;

import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.pageHead}>
      <h1>تبادل کارا چطور کار می کند</h1>
      <section className={styles.section}>
        <div>
          <h3>آیا می دانستید که </h3>
          <p>
            آیا می دانستید که مطالعه مداوم بدون هیچ وقفه ای ذهن شما را خسته می
            کند آیا می دانستید که مطالعه مداوم بدون هیچ وقفه ای ذهن شما را خسته
            می کند و باعث می شود آیا می دانستید که مطالعه مداوم بدون هیچ
          </p>
        </div>
        <img height="170" src="/about/14.jpg" alt="" />
      </section>
      <section className={styles.section + " " + styles.grey}>
        <img height="170" src="/about/13.jpg" alt="" />
        <div>
          <h3>آیا می دانستید که </h3>
          <p>
            آیا می دانستید که مطالعه مداوم بدون هیچ وقفه ای ذهن شما را خسته می
            کند آیا می دانستید که مطالعه مداوم بدون هیچ وقفه ای ذهن شما را خسته
            می کند و باعث می شود آیا می دانستید که مطالعه مداوم بدون هیچ
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div>
          <h3>آیا می دانستید که </h3>
          <p>
            آیا می دانستید که مطالعه مداوم بدون هیچ وقفه ای ذهن شما را خسته می
            کند آیا می دانستید که مطالعه مداوم بدون هیچ وقفه ای ذهن شما را خسته
            می کند و باعث می شود آیا می دانستید که مطالعه مداوم بدون هیچ
          </p>
        </div>
        <img height="170" src="/about/14.jpg" alt="" />
      </section>
      <section className={styles.section + " " + styles.grey}>
        <img height="170" src="/about/13.jpg" alt="" />
        <div>
          <h3>آیا می دانستید که </h3>
          <p>
            آیا می دانستید که مطالعه مداوم بدون هیچ وقفه ای ذهن شما را خسته می
            کند آیا می دانستید که مطالعه مداوم بدون هیچ وقفه ای ذهن شما را خسته
            می کند و باعث می شود آیا می دانستید که مطالعه مداوم بدون هیچ
          </p>
        </div>
      </section>
      <div className={styles.video}>
        <p>ویدیو را تماشا کنید</p>
        <iframe
          src="https://www.aparat.com/video/video/embed/videohash/kQEVB/vt/frame?titleShow=true&muted=true"
          width="700"
          height="400"
          // allowFullScreen="true"
          // webkitallowfullscreen="true"
          // mozallowfullscreen="true"
        ></iframe>
      </div>
      <div className={styles.hero}>
        <h2>تبادل کارها = رونق اقتصادی </h2>
        <div className={styles.animationContainer}>
          <p className={styles.animation}></p>
        </div>
        <Link href="/about">خوش آمدید</Link>
      </div>
    </div>
  );
}

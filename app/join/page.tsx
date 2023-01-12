import styles from "./join.module.css";

export default function Join() {
  return (
    <div className={styles.joinPage}>
      <h1>ثبت نام در تبادل کارا</h1>
      <div>
        <p> ورود با گوگل اکانت </p>
      </div>
      <div className={styles.orContainer}>
        <div className={styles.hrLike}></div>
        <p className={styles.or}>یا</p>
        <div className={styles.hrLike}></div>
      </div>

      <div>
        <input type="text" placeholder="نام" />
        <input type="text" placeholder="نام خانوادگی" />
        <input type="email" placeholder="ایمیل" />
        <input type="password" placeholder="پسورد" />
      </div>
      <button>ثبت نام</button>
      <p className="underButton">
        سوالات خود را به ایمیل abbasian.fz@gmail.com بفرستید
      </p>
    </div>
  );
}

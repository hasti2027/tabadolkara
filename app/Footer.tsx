import Link from "next/link";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.mediaIcon}>
        <img src="/footer/1.svg"></img>
        <img src="/footer/2.svg"></img>
        <img src="/footer/3-insta.svg"></img>
        <img src="/footer/4-pin.svg"></img>
      </div>

      <ul>
        <li>
          <Link href="/about">چطور کار میکند</Link>
        </li>

        <li>
          <Link href="#">وارد شوید</Link>
        </li>

        <li>
          <Link href="#">عضو شوید</Link>
        </li>

        <li>
          <Link href="#"> تماس با ما</Link>
        </li>
      </ul>
      {/* <hr /> */}
      <p>&#169; 2022 Tabadolkara.com </p>
    </div>
  );
}

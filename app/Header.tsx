import Link from "next/link";
import Burger from "../components/layout/Burger";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src="logo-3.png" height="60px"></img>
      </div>

      <ul>
        <li>
          <Link href="#">چطور کار میکند</Link>
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

      <div className={style.burger}>
        <Burger />
      </div>
    </header>
  );
}
export default Header;

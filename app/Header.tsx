"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Burger from "../components/layout/Burger";
import style from "./Header.module.css";

function Header() {
  const [browserWindowHeight, setBrowserWindowHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setBrowserWindowHeight(window.scrollY)
    );
  });

  return (
    <header
      className={
        browserWindowHeight > 0
          ? style.header + " " + style.headerScroll
          : style.header
      }
    >
      <div className={style.logo}>
        <Link href="/">
          <img src="logo-3.png" height="60px"></img>
        </Link>
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

      <div className={style.burger}>
        <Burger />
      </div>
    </header>
  );
}
export default Header;

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Burger from "../components/layout/Burger";
import style from "./Header.module.css";
import { usePathname } from "next/navigation";

function Header() {
  const [browserWindowHeight, setBrowserWindowHeight] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setBrowserWindowHeight(window.scrollY)
    );
  });

  return (
    <header
      className={
        browserWindowHeight > 0 || pathname !== "/"
          ? style.header + " " + style.headerScroll
          : style.header
      }
    >
      {/* console.log() */}
      <div className={style.logo}>
        <Link href="/">
          <img
            src={
              browserWindowHeight > 0 || pathname !== "/"
                ? "logo-blue.png"
                : "logo-3.png"
            }
            height="60px"
          ></img>
        </Link>
      </div>
      <ul
        className={
          browserWindowHeight > 0 || pathname !== "/" ? style.ulScroll : ""
        }
      >
        <li>
          <Link href="/about">چطور کار میکند</Link>
        </li>
        <li>
          <Link href="#">وارد شوید</Link>
        </li>
        <li className={style.join}>
          <Link href="/join">عضو شوید</Link>
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

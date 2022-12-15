"use client";

import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

// @ts-ignore: Unreachable code error
const Navbar = ({ open, setOpen }) => {
  return (
    <header className={styles.header}>
      <div className="navbar">
        <Link href="#">چطور کار میکند</Link>
        <Link href="#">وارد شوید</Link>
        <Link href="#">عضو شوید</Link>
        <Link href="#"> تماس با ما</Link>
      </div>

      <div
        className="overlay"
        onClick={(open) => {
          setOpen(!open);
        }}
      ></div>
      <style jsx>{`
        .navbar {
          z-index: 20;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.97);
          padding: 5rem 5vw 0 5vw;
          transform: ${open ? "translateX(0)" : "translateX(100%)"};
          transition: transform 0.3s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
            rgba(0, 0, 0, 0.22) 0px 10px 10px;
          width: 50%;
        }

        .overlay {
          z-index: 19;
          background-color: rgba(0, 0, 0, 0.5);
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transform: ${open ? "translateX(0)" : "translateX(100%)"};
          transition: transform 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;

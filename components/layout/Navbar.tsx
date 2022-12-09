"use client";

import React from "react";
import Link from "next/link";

// @ts-ignore: Unreachable code error
const Navbar = ({ open, setOpen }) => {
  return (
    <header>
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
        header {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
          margin: 0 5vw 0 5vw;
        }
        .navbar {
          z-index: 20;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-end;
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
        }

        a {
          margin: 1rem 0;
          background-repeat: no-repeat;
          background-position: right center;
          padding-right: 2rem;
        }
        a:hover {
          color: #278aff;
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

"use client";

// Client Component

import React, { useState } from "react";
import Navbar from "./Navbar";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="burger-main" onClick={() => setOpen(!open)}>
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />

        {/* we can only use style jsx in Client Components */}
        <style jsx>{`
          .burger-main {
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            width: 40px;
            height: 40px;
            position: absolute;
             {
              /* top: clamp(25px, 2.5vw, 30px); */
            }
            top: 15px;
            right: 5vw;
            z-index: 25;
          }
          .burger {
            box-sizing: content-box;
            background-color: ${open ? "red" : "black"};
            border: 1px solid black;
            transform-origin: 1px;
            transition: all 0.3s linear;
            border-radius: 3px;
            height: 4px;
          }
          .burger1 {
            transform: ${open ? "rotate(45deg)" : "rotate(0)"};
          }
          .burger2 {
            transform: ${open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${open ? "0" : "1"};
          }
          .burger3 {
            transform: ${open ? "rotate(-45deg)" : "rotate(0)"};
          }
        `}</style>
      </aside>
      <Navbar open={open} setOpen={setOpen} />
    </>
  );
};

export default Burger;

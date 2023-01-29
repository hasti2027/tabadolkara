"use client";

import React, { useState } from "react";
import styles from "./WhatCustomersSays.module.css";

export default function WhatCustomersSays() {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className={styles.slider}>
      <h2>اعضای سایت در مورد تبادل کارا چه می گویند</h2>
      <div className={styles.viewport}>
        <div
          className={styles.next}
          onClick={() => setActiveSlide(activeSlide >= 2 ? activeSlide - 1 : 3)}
        >
          <a>&#10094;</a>
        </div>
        {activeSlide === 1 && (
          <section>
            <img src="101.jpg" alt="" width={405} height={500} />
            <p>
              slide1 ipsum dolor sit amet consectetur adipisicing elit. Quod
              deserunt voluptatem commodi nihil adipisci repudiandae eos
              deleniti est praesentium! Dolorem reiciendis voluptates quaerat
              voluptatum non saepe praesentium possimus dicta nostrum!
            </p>
          </section>
        )}
        {activeSlide === 2 && (
          <div className={styles.slideMiddle}>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                deserunt voluptatem commodi nihil adipisci!
                <br />
                <span>Ahmad </span>
                <span> Ahmadi</span>
              </p>
              <img src="100.jpg" alt="" />
            </div>
            <div>
              <img src="100.jpg" alt="" />
              <p>
                Lorem ipsum dolor sit . Quod deserunt voluptatem commodi nihil
                non saepe praesentium possimus dicta nostrum!
                <br />
                <span>Ahmad </span>
                <span> Ahmadi</span>
              </p>
            </div>
            <div>
              <p>
                Lorem ipsumaerat voluptatum non saepe praesentium possimus dicta
                nostrum!
                <br />
                <span>Ahmad </span>
              </p>

              <img src="100.jpg" alt="" />
            </div>
          </div>
        )}
        {activeSlide === 3 && (
          <section>
            <p>
              slide3 ipsum dolor sit amet consectetur adipisicing elit. Quod
              deserunt voluptatem commodi nihil adipisci repudiandae eos
              deleniti est praesentium! Dolorem reiciendis voluptates quaerat
              voluptatum non saepe praesentium possimus dicta nostrum!
            </p>
            <img src="101.jpg" alt="" width={405} height={500} />
          </section>
        )}

        <div
          className={styles.prev}
          onClick={() => setActiveSlide(activeSlide <= 2 ? activeSlide + 1 : 1)}
        >
          <a>&#10095;</a>
        </div>
      </div>
      <div className={styles.dotContainer}>
        <span
          onClick={() => setActiveSlide(1)}
          className={activeSlide === 1 ? styles.active : ""}
        ></span>
        <span
          onClick={() => setActiveSlide(2)}
          className={activeSlide === 2 ? styles.active : ""}
        ></span>
        <span
          onClick={() => setActiveSlide(3)}
          className={activeSlide === 3 ? styles.active : ""}
        ></span>
      </div>
    </div>
  );
}

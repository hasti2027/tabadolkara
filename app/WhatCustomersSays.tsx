import React from "react";
import styles from "./WhatCustomersSays.module.css";

export default function WhatCustomersSays() {
  return (
    <div className={styles.slider}>
      <h2>اعضای سایت در مورد تبادل کارا چه می گویند</h2>
      <section>
        <img src="20191205_160349.jpg" alt="" width={405} height={500} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt
          voluptatem commodi nihil adipisci repudiandae eos deleniti est
          praesentium! Dolorem reiciendis voluptates quaerat voluptatum non
          saepe praesentium possimus dicta nostrum!
        </p>
      </section>
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt
          voluptatem commodi nihil adipisci repudiandae eos deleniti est
          praesentium! Dolorem reiciendis voluptates quaerat voluptatum non
          saepe praesentium possimus dicta nostrum!
        </p>
        <img src="20191205_161236.jpg" alt="" width={405} height={500} />
      </section>
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
            Lorem ipsum dolor sit . Quod deserunt voluptatem commodi nihil non
            saepe praesentium possimus dicta nostrum!
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
        <div className={styles.dotContainer}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

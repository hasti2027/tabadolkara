"use client";

import { useState } from "react";
import styles from "./join.module.css";

export default function Join() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function formSubmitHander(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.joinPage}>
      <h1>ثبت نام در تبادل کارا</h1>
      <div>
        <a className={styles.google}>
          {" "}
          <span>ورود</span> با گوگل اکانت{" "}
        </a>
      </div>
      <div className={styles.orContainer}>
        <div className={styles.hrLike}></div>
        <p className={styles.or}>یا</p>
        <div className={styles.hrLike}></div>
      </div>

      <form onSubmit={formSubmitHander}>
        <div>
          <input
            value={name}
            type="text"
            placeholder="نام"
            onChange={(event) => setName(event.target.value)}
            autoFocus={true}
            autoComplete="on"
            required
          />
          <input
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            placeholder="نام خانوادگی"
            required
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="ایمیل"
            required
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="پسورد"
            required
          />
        </div>
        <button
          type="submit"
          disabled={
            name.length < 2 ||
            lastName.length < 2 ||
            email.length < 2 ||
            password.length < 8 ||
            !email.includes("@")
          }
        >
          ثبت نام
        </button>
      </form>
      <p className="underButton">
        سوالات خود را به ایمیل abbasian.fz@gmail.com بفرستید
      </p>
    </div>
  );
}

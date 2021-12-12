import React from "react";
import blight from "../assets/images/blacklightlogo.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; The Blacklight Group 2022. All Rights Reserved.</p>
        <img src={blight} alt="" className="blight" />
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://www.webapp.pennybank.online/">Account</a>
          </li>
          <li className="list-inline-item">
            <a href="/privacy">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="/affiliates">Affiliates</a>
          </li>
          <li className="list-inline-item">
            <a href="/faq">FAQ</a>
          </li>
          <li className="list-inline-item">
            <a href="/press">Press</a>
          </li>
          <li className="list-inline-item">
            <a href="/https://blog.pennybank.online/">Blog</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

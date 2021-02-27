import React from "react";
import blight from "../assets/images/blacklightlogo.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; The Blacklight Group 2021. All Rights Reserved.</p>
        <img src={blight} alt="" className="blight" />
        {/* <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/#">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="/#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="/#">FAQ</a>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}

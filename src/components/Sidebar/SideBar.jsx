import React, { useState } from "react";
import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        className={`btn btn-primary ${styles.toggleBtn}`}
        onClick={toggleSidebar}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <div
        className={`${styles.sideBar} ${isOpen ? styles.open : styles.closed}`}
      >
        <h5 className={styles.title}>Menu</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to={"/"} className="nav-link text-white">
              <i className="fa-solid fa-chart-line me-2"></i>
              Score Spectrum
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/search"} className="nav-link text-white">
              <i className="fa-regular fa-address-card me-2"></i>
              Search Scores
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/topstudent"} className="nav-link text-white">
              <i className="fa-solid fa-ranking-star me-2"></i>
              Top Students
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/settings"} className="nav-link text-white">
              <i className="fa-solid fa-gear me-2"></i>
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

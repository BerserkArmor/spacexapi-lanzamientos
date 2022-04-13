import React from "react";
import { Link } from "react-router-dom";

import { Button, Image } from "@chakra-ui/react";
import spacexlogo from "../assets/logo-spacex.png";

import "../assets/main.css";
export const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Image m={2} src={spacexlogo} width={200} height="auto" />
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">👁️‍🗨️</label>
        <div className="menu">
          <ul className="list">
            <li>
              <Link to={`/`} label="Lanzamientos">
                Lanzamientos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

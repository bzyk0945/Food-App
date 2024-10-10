import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import { navLists } from "../constants";

export const Navbar: React.FC = () => {
  return (
    <header>
      <nav>
        <Link to='/'>
          <img src={logo} alt="logo tasty treat" />
          <span>Tasty Treat</span>
        </Link>
        <ul>
          {navLists.pl.map(
            (item: { path: string; name: string }, index: number) => (
              <li key={index}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

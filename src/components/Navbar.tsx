import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import personIcon from "../assets/icons/person-icon.svg";
import shoppingBagIcon from "../assets/icons/shopping-bag-icon.svg";
import menuIcon from "../assets/icons/menu-icon.svg";
import closeIcon from "../assets/icons/menu-close-icon.svg";
import { navLists } from "../constants";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Navbar: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState(false)
  const cartItems = useSelector((state: RootState) => state.cart)
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <header className="sticky top-0 index-50 border-b border-neutral-500/80 backdrop-blur-lg">
      <nav className=" container px-4  mx-auto lg:px-16">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex my-2 flex-col items-center justify-center"
          >
            <img src={logo} alt="logo tasty treat" width={52} height={52} />
            <span className="font-semibold tracking-wide">Tasty Treat</span>
          </Link>
          <ul className="hidden lg:flex gap-24">
            {navLists.en.map(
              (item: { path: string; name: string }, index: number) => (
                <li
                  key={index}
                  className="relative px-2 py-1 font-normal text-md group"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => ` ${isActive ? "active" : ""}`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-4 ">
            <button className="px-2 py-1">
              <img src={personIcon} alt="user icon" />
            </button>
            <button className="relative px-2 py-1" onClick={toggleCart}>
              <img src={shoppingBagIcon} alt="shopping bag icon" />
              <span className="absolute top-0 right-[-3px] text-red-500 font-semibold">{cartItems.length}</span>
            </button>
            <button onClick={toggleNavbar} className="px-2 py-1 lg:hidden">
              <img
                src={mobileDrawerOpen ? closeIcon : menuIcon}
                alt="menu icon"
              />
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col items-center justify-center my-4 gap-6">
              {navLists.pl.map(
                (item: { path: string; name: string }, index: number) => (
                  <li key={index} className="mt-4">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `${
                          isActive ? "border-b" : ""
                        } text-lg px-2 py-1 font-normal`
                      }
                      onClick={toggleNavbar}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
         {cartOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Cart Items</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="flex items-center mb-2">
                  <img
                    src={item.strCategoryThumb}
                    alt={item.strCategory}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <p className="font-semibold">{item.strCategory}</p>
                    <p className="text-sm">{item.strCategoryDescription}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      </nav>
    </header>
  );
};

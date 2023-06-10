"use client";

import React, { useState, useEffect, useCallback } from "react";

import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

import { AiFillBell } from "react-icons/ai";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { SafeUser } from "@/types";

type Props = {
  currentUser?: SafeUser | null;
};

const TOP_OFFSET = 66;

const Navbar = ({ currentUser }: Props) => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="fixed z-40 w-full">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <img src="/images/logo.png" className="h-4 lg:h-7" alt="Logo" />
        <div className="flex-row hidden ml-8 gap-7 lg:flex">
          <NavbarItem label="Home" active />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="relative flex flex-row items-center gap-2 ml-8 cursor-pointer lg:hidden"
        >
          <p className="text-sm text-white">Browse</p>
          <BsChevronDown
            className={`w-4 text-white fill-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row items-center ml-auto gap-7">
          <div className="text-gray-200 transition cursor-pointer hover:text-gray-300">
            <BsSearch className="w-6" />
          </div>
          <div className="text-gray-200 transition cursor-pointer hover:text-gray-300">
            <AiFillBell className="w-6" />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="relative flex flex-row items-center gap-2 cursor-pointer"
          >
            <div className="w-6 h-6 overflow-hidden rounded-md lg:w-10 lg:h-10">
              <img src="/images/default-blue.png" alt="" />
            </div>
            <BsChevronDown
              className={`w-4 text-white fill-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} currentUser={currentUser} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

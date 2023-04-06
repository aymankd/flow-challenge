import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

type NavProps = {
  children: React.ReactNode;
};

export const Nav: FC<NavProps> = ({ children }) => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <p className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Stock Market Challenge
          </span>
        </p>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
};

type NavtemProps = {
  to: ROUTES;
  text: string;
  current?: boolean;
};

export const NavItem: FC<NavtemProps> = ({ to, text, current }) => {
  return (
    <li>
      <Link
        to={to}
        className={` block py-2 pl-3 pr-4 rounded md:p-0 ${
          current === true
            ? " text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
            : " text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        } `}
      >
        {text}
      </Link>
    </li>
  );
};

import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="sticky top-0 flex justify-between items-center bg-gradient-to-r from-amber-600 from-10% max-h-10">
        <Link
          to="/"
          className="rounded-r-xl border-2 border-amber-600 hover:border-amber-200 text-lg md:text-3xl font-bold md:px-15 md:py-8 px-8 py-6 bg-clip-padding bg-[url('../images/openBooks.jpeg')] bg-contain hover:text-amber-200 transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out p-10"
        >
          About
        </Link>
      </nav>

      <main className="mt-5 md:mt-10 mx-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;

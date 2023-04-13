import React from "react";
import Link from "next/link";
export const NavBar = () => {
  return (
    <nav className="lg:pl-20 lg:pt-10 pb-10 pl-10 pt-5">
      <ul>
        <li className="inline-block lg:text-lg text-sm font-semibold mr-14 hover:text-natural-yellow">
          <Link href="./">🏠 Home</Link>
        </li>
        <li className="inline-block lg:text-lg text-sm font-semibold mr-14 hover:text-natural-yellow">
          <Link href="resume">📋 Resume</Link>
        </li>
        <li className="inline-block lg:text-lg text-sm font-semibold mr-14 hover:text-natural-yellow">
          <Link href="cv">📝 CV</Link>
        </li>
        <li className="inline-block lg:text-lg text-sm font-semibold mr-14 hover:text-natural-yellow">
          <Link href="contact">🤙 Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

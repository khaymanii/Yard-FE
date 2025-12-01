"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 
      bg-white 
      ${isScrolled ? "shadow-md" : "shadow-none"}
    `}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <h1 className="font-bold text-[#fa343a] text-2xl">Yard</h1>
          </Link>
        </div>

        <a
          href="https://wa.me/2340000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fa343a] text-white px-4 py-1.5 rounded-xl text-sm font-medium 
  hover:bg-[#e30a11] transition shadow-sm hover:shadow-md"
        >
          Talk To Yard
        </a>
      </div>
    </nav>
  );
}

export default Header;

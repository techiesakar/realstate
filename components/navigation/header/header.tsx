import React from "react";
import { Logo } from "../logo/logo";
import { navdata } from "./nav-data";
import Link from "next/link";
import { Menu, PhoneCall } from "lucide-react";
import { MobileToggle } from "./mobile-toggle";

export const Header = () => {
  return (
    <header className="bg-primary block">
      <div className="site-container  w-full flex justify-between items-center h-24 lg:h-28">
        <div className="min-w-[56px] lg:hidden">
          <MobileToggle />
        </div>
        <div className="flex-1  flex items-center justify-center lg:justify-start">
          <Link href="/">
            <Logo imageUrl="/logo-white.png" />
          </Link>
        </div>
        <div className="min-w-[56px] lg:hidden"></div>
        <ul className="lg:flex hidden text-sm list-none">
          {navdata.map((item) => (
            <li key={item.title}>
              <Link
                className="block leading-[112px] hover:bg-zinc-600/40 transition-all text-white hover:text-yellow-500  px-4 uppercase font-semibold"
                href={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}

          <li className="flex items-center text-white  px-4 gap-2">
            <PhoneCall className="w-4 h-4" />
            <a
              href="tel:(800) 9876543"
              className="text-whiteuppercase font-semibold"
            >
              (800) 9876543
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

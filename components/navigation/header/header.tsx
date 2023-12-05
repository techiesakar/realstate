import React from "react";
import { Logo } from "../logo/logo";
import { navdata } from "./nav-data";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-primary lg:block hidden">
      <div className="site-container  w-full flex justify-between items-center h-28">
        <Logo imageUrl="/logo-white.png" />

        <ul className="flex text-sm list-none">
          {navdata.map((item) => (
            <li key={item.title}>
              {" "}
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

import { Logo } from "../logo/logo";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { ScrollToTop } from "../scroll-top";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-white py-4 w-full">
      <div className="site-container lg:flex-row flex-col justify-center gap-4  flex lg:justify-between items-center h-28">
        <div className="text-sm lg:w-1/3 text-gray-600">
          &copy; Houzez - All rights reserved
        </div>

        <div className="lg:w-1/3 flex justify-center">
          <Logo imageUrl="/logo-white.png" />
        </div>
        <div className="lg:w-1/3 flex justify-end">
          <ul className="flex gap-3">
            <li>
              <Facebook className="w-5 h-5 text-gray-500" />
            </li>
            <li>
              <Instagram className="w-5 h-5 text-gray-500" />
            </li>
            <li>
              <Linkedin className="w-5 h-5 text-gray-500" />
            </li>
            <li>
              <Twitter className="w-5 h-5 text-gray-500" />
            </li>
            <li>
              <Youtube className="w-5 h-5 text-gray-500" />
            </li>
          </ul>
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
};

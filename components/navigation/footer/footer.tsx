import React from "react";
import { Logo } from "../logo/logo";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { ScrollToTop } from "../scroll-top";

export const Footer = () => {
  return (
    <div className="bg-white py-4">
      <div className="site-container  flex justify-between items-center h-28">
        {/* left */}
        <div className="text-sm w-1/3 text-gray-600">
          &copy; Houzez - All rights reserved
        </div>

        <div className="w-1/3 flex justify-center">
          <Logo imageUrl="/logo-blue.png" />
        </div>
        <div className="w-1/3 flex justify-end">
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

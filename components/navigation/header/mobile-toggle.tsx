import Link from "next/link";
import { Menu, PhoneCall } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { navdata } from "./nav-data";

export function MobileToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild className="ring-0">
        <Menu className="h-7 w-7 text-white cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="m-0 p-0">
        <ul className="flex flex-col list-none py-2">
          {navdata.map((item) => (
            <li key={item.title}>
              <Link
                className="block leading-[30px] text-primary border-b border-gray-200 px-4 py-3  transition-all  uppercase font-semibold"
                href={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}

          <li className="flex items-center text-white  px-4 gap-2">
            <PhoneCall className="w-4 h-4" />
            <Link
              href="tel:(800) 9876543"
              className="text-whiteuppercase font-semibold"
            >
              (800) 9876543
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

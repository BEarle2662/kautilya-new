import React from "react";

import Image from "next/image";
// import logo from "../../../public/assests/imgs/logo-1.png";
import logo from "../../../public/assets/img/logo-1.png";

import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";

import Sidebar from "../CustomMenubar/SideMenuBar/Sidebar";
import CustomMenuBar from "../CustomMenubar/MenuBar/CustomMenuBar";
import Link from "next/link";

const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <header className="bg-[#b11016] shadow-lg py-1 px-4 text-white">
      <div className="mx-auto max-w-screen-3xl">
        <div className="flex items-center justify-between">
          <div className="w-[120px] xl:w-[170px] h-auto">
            <Link href={"/"}>
              <Image
                src={logo}
                width={0}
                height={0}
                alt="kautilya-logo"
                priority
              />
            </Link>
          </div>
          <div className="hidden lg:block uppercase">
            <CustomMenuBar />
          </div>

          <div className="block lg:hidden">
            <IconButton
              variant="text"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              <Bars3Icon className="h-8 w-8 text-white" strokeWidth={2} />
            </IconButton>
          </div>

          <Sidebar openDrawer={openNav} setOpenDrawer={setOpenNav} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

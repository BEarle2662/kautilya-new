import React from "react";
import Link from "next/link";

import { Menu, MenuHandler } from "@material-tailwind/react";

import { NavListMenu } from "./MainRouter";
import { navLinks } from "../../../Endpoints/navbarLinks";
// import { prodNavLinks } from "../../common/endpoints";

const CustomMenuBar = () => {
  return (
    <>
      <nav className="flex flex-row justify-evenly items-center">
        {navLinks.map((each) => {
          return (
            <React.Fragment key={each.id}>
              {each.dropdown ? (
                <NavListMenu
                  eachdropdownItems={each}
                  menuposition="bottom"
                  keyProp={each.id}
                />
              ) : (
                <Menu key={each.id}>
                  <MenuHandler className="px-3 py-3 text-[10px] xl:text-xs font-semibold whitespace-nowrap">
                    <Link href={each.href}>{each.label}</Link>
                  </MenuHandler>
                </Menu>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
};

export default CustomMenuBar;

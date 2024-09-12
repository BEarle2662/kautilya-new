import React from "react";
import Link from "next/link";

import {
  Collapse,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

function NestedDropdown({ subDropdow, keyProp }) {
  return (
    <NavListMenu
      eachdropdownItems={subDropdow}
      menuposition="right-start"
      keyProp={keyProp}
    />
  );
}

export function NavListMenu({ eachdropdownItems, menuposition, keyProp }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const hoverClass = (label) =>
    [
      "Academic programs",
      "Publications",
      "Admission Process",
      "Resources",
    ].includes(label)
      ? "hover:bg-[#b11016] hover:text-white"
      : "";

  const renderItems = eachdropdownItems.dropdownItems.map((each) => (
    <React.Fragment key={each.id}>
      {each.dropdown ? (
        <NestedDropdown subDropdow={each} keyProp={each.id} />
      ) : (
        <Link href={each.href} key={each.id}>
          <MenuItem className="flex items-center  text-black rounded-lg hover:bg-[#b11016] hover:text-white">
            <div>
              <Typography className="flex items-center text-[10px] xl:text-xs font-bold tracking-[1px] uppercase">
                {each.label}
              </Typography>
            </div>
          </MenuItem>
        </Link>
      )}
    </React.Fragment>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 15 }}
        placement={menuposition}
        allowHover={true}
        key={keyProp}
        className="!rounded-none"
        animate={{
          mount: { y: 4 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <ListItem
            className={`flex items-center gap-2 xl:gap-4 font-semibold whitespace-nowrap	text-black  text-[10px] xl:text-xs uppercase ${hoverClass(
              eachdropdownItems.label
            )}`}
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            style={
              eachdropdownItems.mainNavItem
                ? {
                    "--tw-bg-opacity": "0",
                    backgroundColor: "transparent",
                    "--tw-text-opacity": "1",
                    color: "#fff",
                  }
                : {
                    "--tw-text-opacity": "1",
                  }
            }
          >
            {eachdropdownItems.label}
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`hidden h-2 w-2 xl:h-3.5 xl:w-3.5 text-[10px] xl:text-xs transition-transform lg:block ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </ListItem>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-none lg:block">
          <ul
            className="flex flex-col  gap-y-2 outline-none outline-0"
            key={keyProp}
          >
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}

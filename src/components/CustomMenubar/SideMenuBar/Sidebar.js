import React, { Component } from "react";
import Link from "next/link";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { eventNavLinks, navLinks } from "@/Endpoints/navbarLinks";
import { useRouter } from "next/router";
// import { prodNavLinks } from "@/components/common/endpoints";

const ComponentSubDropdownAccordian = ({
  subDropdownAccordian,
  openSubdropdown,
  setOpenSubdropdown,
}) => {
  const handleOpen = (value) => {
    setOpenSubdropdown(openSubdropdown === value ? 0 : value);
  };
  return (
    <React.Fragment key={subDropdownAccordian.id}>
      <Accordion
        open={openSubdropdown === subDropdownAccordian.id}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform text-white ${
              openSubdropdown === subDropdownAccordian.id ? "rotate-180" : ""
            }`}
          />
        }
        key={subDropdownAccordian.id}
        style={{
          "--tw-bg-opacity": "0",
          backgroundColor: "transparent",
          "--tw-text-opacity": "1",
          color: "#fff",
        }}
      >
        <ListItem
          className="p-0"
          selected={openSubdropdown === subDropdownAccordian.id}
          style={{
            "--tw-bg-opacity": "0",
            backgroundColor: "transparent",
            "--tw-text-opacity": "1",
            color: "#fff",
          }}
        >
          <AccordionHeader
            onClick={() => handleOpen(subDropdownAccordian.id)}
            className="border-b-0 p-3"
          >
            <p className="mr-auto font-semibold text-white uppercase text-xs mb-0">
              {subDropdownAccordian.label}
            </p>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-0.5">
          <List className="pl-4">
            {subDropdownAccordian.dropdownItems.map((eachDropdownNavItem) => {
              return (
                <React.Fragment key={eachDropdownNavItem.id}>
                  <Link href={eachDropdownNavItem.href}>
                    <ListItem
                      key={eachDropdownNavItem.id}
                      className="font-semibold text-white uppercase text-xs"
                      style={{
                        "--tw-bg-opacity": "0",
                        backgroundColor: "transparent",
                        "--tw-text-opacity": "1",
                        color: "#fff",
                      }}
                    >
                      {eachDropdownNavItem.label}
                    </ListItem>
                  </Link>
                </React.Fragment>
              );
            })}
          </List>
        </AccordionBody>
      </Accordion>
    </React.Fragment>
  );
};

const ComponentAccordian = ({ DropdownNavItem, openAccordion, setOpen }) => {
  const [openSubdropdown, setOpenSubdropdown] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(openAccordion === value ? 0 : value);
    setOpenSubdropdown(0);
  };

  return (
    <Accordion
      open={openAccordion === DropdownNavItem.id}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform  text-white ${
            openAccordion === DropdownNavItem.id ? "rotate-180" : ""
          }`}
        />
      }
      key={DropdownNavItem.id}
    >
      <ListItem
        className="p-0"
        selected={openAccordion === DropdownNavItem.id}
        style={{
          "--tw-bg-opacity": "0",
          backgroundColor: "transparent",
          "--tw-text-opacity": "1",
          color: "#fff",
        }}
      >
        <AccordionHeader
          onClick={() => handleOpen(DropdownNavItem.id)}
          // className="border-b-0 p-3"
          className="border-b-0 p-3"
        >
          <p className="mr-auto font-semibold text-white uppercase text-xs mb-0">
            {DropdownNavItem.label}
          </p>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-0.5">
        <List className="pl-2">
          {DropdownNavItem.dropdownItems.map((eachDropdownNavItem) => {
            return (
              <React.Fragment key={eachDropdownNavItem.id}>
                {eachDropdownNavItem.dropdown ? (
                  <ComponentSubDropdownAccordian
                    subDropdownAccordian={eachDropdownNavItem}
                    openSubdropdown={openSubdropdown}
                    setOpenSubdropdown={setOpenSubdropdown}
                  />
                ) : (
                  <Link href={eachDropdownNavItem.href}>
                    <ListItem
                      key={eachDropdownNavItem.id}
                      className="font-semibold text-white uppercase text-xs"
                      style={{
                        "--tw-bg-opacity": "0",
                        backgroundColor: "transparent",
                        "--tw-text-opacity": "1",
                        color: "#fff",
                      }}
                    >
                      {eachDropdownNavItem.label}
                    </ListItem>
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </List>
      </AccordionBody>
    </Accordion>
  );
};

const ComponentListItem = ({ eachNavItem }) => {
  return (
    <Link href={eachNavItem.href}>
      <ListItem
        key={eachNavItem.id}
        className="text-white font-semibold uppercase text-xs"
        style={{
          "--tw-bg-opacity": "0",
          backgroundColor: "transparent",
          "--tw-text-opacity": "1",
          color: "#fff",
        }}
      >
        {eachNavItem.label}
      </ListItem>
    </Link>
  );
};

const Sidebar = ({ openDrawer, setOpenDrawer }) => {
  const closeDrawer = () => setOpenDrawer(false);
  const [open, setOpen] = React.useState(0);

  const location = useRouter();

  const eventLinks = [
    "/kautilya-colloquy",
    "/paper-presentation",
    "/simulation",
    "/contact-us",
    "/kc-registration",
  ];

  const eventsPage = eventLinks.includes(location.pathname);
  const navItems = eventsPage ? eventNavLinks : navLinks;

  return (
    <Drawer
      placement="right"
      open={openDrawer}
      onClose={closeDrawer}
      className="min-h-full"
      overlayProps={{
        className: "fixed",
      }}
    >
      <Card
        color="transparent"
        shadow={false}
        className="h-full w-full p-4 flex flex-col bg-[#b11016] rounded-none"
      >
        <List className="flex-grow overflow-y-auto">
          {navItems?.map((each) => {
            return (
              <React.Fragment key={each.id}>
                {each.dropdown ? (
                  <ComponentAccordian
                    DropdownNavItem={each}
                    openAccordion={open}
                    setOpen={setOpen}
                  />
                ) : (
                  <ComponentListItem eachNavItem={each} />
                )}
              </React.Fragment>
            );
          })}
        </List>
      </Card>
    </Drawer>
  );
};

export default Sidebar;

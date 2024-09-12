import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";

import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function ProfileCardDialog({
  openProfile,
  setOpenProfile,
  profileData,
  imageBasePath,
}) {
  const handleOpen = () => setOpenProfile(!openProfile);

  return (
    <>
      <Dialog
        open={openProfile}
        onClose={() => setOpenProfile(false)}
        className="drop-shadow-2xl relative mt-24"
      >
        <DialogHeader className="flex flex-col items-center justify-center">
          {/* <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5  !border-none"
            onClick={handleOpen}
          ></IconButton> */}
          <span
            className="!absolute right-4 top-4  !cursor-pointer"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-6 w-6 stroke-2.5" />
          </span>
        </DialogHeader>
        <DialogBody className="relative pt-16 pb-6 px-6">
          <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2">
            <Image
              src={`${imageBasePath}${profileData.profile}`}
              width={137}
              height={135}
              alt={profileData.name}
              className="object-cover"
            />
          </div>
          <div className="text-center mt-0">
            <p className="inline-block border-b-2 border-b-[#b11016] text-2xl font-semibold mb-4 pb-2.5">
              {profileData.name}
            </p>
            <p className="text-sm font-semibold md:text-base md:font-semibold text-primary text-center mb-6">
              {profileData.designation1
                ? profileData.designation1
                : profileData.designation}
              <span className="pl-2">
                {profileData.place ? profileData.place : profileData.city}
              </span>
            </p>

            <div
              dangerouslySetInnerHTML={{ __html: profileData.description }}
              className="text-justify text-sm md:text-md text-p max-h-[46vh] md:max-h-[50vh] overflow-y-auto"
            ></div>
          </div>
        </DialogBody>
        {profileData.readmore === "Yes" ? (
          <DialogFooter>
            <Link href={`our-faculty/${profileData.slug}`}>
              <Button

              // onClick={() => onClickProfileSlug()}
              >
                <span>Read More</span>
              </Button>
            </Link>
          </DialogFooter>
        ) : (
          ""
        )}
      </Dialog>
    </>
  );
}

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

export function ProfileCardDialog({
  openProfile,
  setOpenProfile,
  profileData,
}) {
  const handleOpen = () => setOpenProfile(!openProfile);

  const imagePath =
    "https://guprojects.gitam.edu/kautilya-admin/public/ourteam/";

  return (
    <>
      <Dialog
        open={openProfile}
        onClose={() => setOpenProfile(false)}
        className="drop-shadow-2xl relative"
      >
        <DialogHeader className="flex flex-col items-center justify-center">
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2 border-none" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="relative pt-16 pb-6">
          <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2">
            <Image
              src={`${imagePath}${profileData.profile}`}
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

            <p dangerouslySetInnerHTML={{ __html: profileData.description }}></p>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Read More</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

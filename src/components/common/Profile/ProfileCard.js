"use client";

import Image from "next/image";
import { useState } from "react";
import { ProfileCardDialog } from "./ProfileCardDialog";

import { ImageBasePaths } from "@/Endpoints/imageBasePaths";

// "https://guprojects.gitam.edu/kautilya-admin/public/faculty/";
// "https://guprojects.gitam.edu/kautilya-admin/public/ourteam/";
// "https://guprojects.gitam.edu/kautilya-admin/public/alumni/";

const ProfileCard = ({ profileData, page }) => {
  let imagesPath;
  // console.log("profileData", profileData);
  switch (page) {
    case "faculty":
      imagesPath = ImageBasePaths.facultyImagesPath;

      break;
    case "about":
      imagesPath = ImageBasePaths.ourteamImagesPath;

      break;
    case "alumniAssociation":
      imagesPath = ImageBasePaths.alumniImagesPath;

      break;
  }

  const [openProfile, setOpenProfile] = useState(false);

  const onClickProfileCard = () => {
    setOpenProfile(!openProfile);
  };

  return (
    <div
      className="flex flex-col items-center justify-start  text-center p-2 m-2"
      onClick={onClickProfileCard}
      key={profileData.id}
    >
      <Image
        src={`${imagesPath}${profileData.profile}`}
        width={137}
        height={135}
        alt={profileData.name}
      />
      <h4 className="font-semibold pt-4 leading-5 text-[#424a53] text-sm md:text-base">
        {profileData.name}
      </h4>
      {profileData.place && <p>{profileData.place}</p>}

      <p
        className={
          profileData.role === "Founding Team" || profileData.role === "Dean"
            ? "w-[250px] k-facult-sub"
            : "k-facult-sub"
        }
      >
        {profileData.designation
          ? profileData.designation
          : profileData.designation1}
      </p>
      <ProfileCardDialog
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        profileData={profileData}
        imageBasePath={imagesPath}
      />
    </div>
  );
};

export default ProfileCard;

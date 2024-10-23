"use client";

import Image from "next/image";
import { useState } from "react";
import { ProfileCardDialog } from "./ProfileCardDialog";
import { FaLinkedinIn } from "react-icons/fa";

import { ImageBasePaths } from "@/Endpoints/imageBasePaths";
import Link from "next/link";

const ProfileCard = ({ profileData, page }) => {
  let imagesPath;
  let imageKey;
  // console.log("profileData", profileData);
  switch (page) {
    case "faculty":
      imagesPath = ImageBasePaths.facultyImagesPath;
      imageKey = profileData.profile;
      break;
    case "about":
      imagesPath = ImageBasePaths.ourteamImagesPath;
      imageKey = profileData.profile;
      break;
    case "alumniAssociation":
      imagesPath = ImageBasePaths.alumniImagesPath;
      imageKey = profileData.profile;
      break;
    case "Mentorship":
      imagesPath = ImageBasePaths.mentorsImagesPath;
      imageKey = profileData.desktop_banner;
      break;
    default:
  }

  const [openProfile, setOpenProfile] = useState(false);

  const onClickProfileCard = () => {
    setOpenProfile(!openProfile);
  };

  const profileImg =
    page === "PaperPresentation" ||
    page === "simulation" ||
    page === "contactUs"
      ? profileData.imgURL
      : `${imagesPath}${imageKey}`;

  return (
    <div
      className="flex flex-col items-center justify-start  text-center p-2 m-2"
      onClick={onClickProfileCard}
      key={profileData.id}
    >
      <Image
        src={profileImg}
        width={137}
        height={135}
        alt={profileData.alt_tag || profileData.name}
      />
      <h4 className="font-semibold pt-4 leading-5 text-[#424a53] text-sm md:text-base">
        {profileData.name}
      </h4>
      {profileData.place && <p>{profileData.place}</p>}
      {profileData.linkdin_url && (
        <Link
          href={profileData.linkdin_url}
          target="_blank"
          className="text-primary"
        >
          <FaLinkedinIn />
        </Link>
      )}

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

      {page !== "Mentorship" && page !== "contactUs" && (
        <ProfileCardDialog
          openProfile={openProfile}
          setOpenProfile={setOpenProfile}
          profileData={profileData}
          imageBasePath={imagesPath}
          page={page}
        />
      )}
    </div>
  );
};

export default ProfileCard;

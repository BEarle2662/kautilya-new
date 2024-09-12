"use client";

import Image from "next/image";
import { useState } from "react";
import { ProfileCardDialog } from "./ProfileCardDialog";

const ProfileCard = ({ profileData }) => {
  const imagePath =
    "https://guprojects.gitam.edu/kautilya-admin/public/ourteam/";

  const [openProfile, setOpenProfile] = useState(false);

  const onClickProfileCard = () => {
    setOpenProfile(!openProfile);
  };

  return (
    <div
      className="flex flex-col items-center justify-start  text-center p-2 m-2"
      onClick={onClickProfileCard}
    >
      <Image
        src={`${imagePath}${profileData.profile}`}
        width={137}
        height={135}
        alt={profileData.name}
      />
      <h4 className="font-semibold pt-4 leading-5 text-[#424a53] text-sm md:text-base">
        {profileData.name}
      </h4>
      <p
        className={
          profileData.role === "Founding Team" || profileData.role === "Dean"
            ? "w-[250px] k-facult-sub"
            : "k-facult-sub"
        }
      >
        {profileData.designation}
      </p>
      <ProfileCardDialog
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        profileData={profileData}
      />
    </div>
  );
};

export default ProfileCard;

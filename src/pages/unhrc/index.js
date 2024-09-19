import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import banner from "../../../public/assets/img/partners/partner_banner2.jpg";
import Image from "next/image";

const InnerPage = () => {
  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        <h5 className="mb-4 text-base font-semibold">MoU with UNHRC</h5>
        <Image
          height={0}
          width={0}
          src={banner}
          className="h-full w-full"
          alt="banner"
        />

        <p className="mt-4 mb-40  text-sm md:text-base">
          Kautilya signed an MoU with #UNHCR to build impactful connections and
          advance our efforts in addressing global displacement challenges.
          Looking to make this collaboration a step towards developing
          innovative solutions together.
        </p>
      </ScreenWidth>
    </MainLayout>
  );
};

export default InnerPage;

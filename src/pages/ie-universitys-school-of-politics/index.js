import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import banner from "../../../public/assets/img/partners/partner_banner.jpg";
import Image from "next/image";

const InnerPage = () => {
  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        <h5 className="mb-4 text-base font-semibold">
          MoU with IE University’s School of Politics
        </h5>
        <Image
          height={0}
          width={0}
          src={banner}
          className="h-full w-full"
          alt="banner"
        />

        <p className="mt-4 text-sm md:text-base">
          Kautilya School of Public Policy has signed an MoU with IE
          University’s School of Politics, Global Affairs and Economics (SPEGA)
          for student exchange, research collaboration, faculty exchange amongst
          other areas of collaboration. The student exchange will be in effect
          from the academic year 2024-25.
        </p>
        <p className="text-sm md:text-base">
          The student exchange would mean students from Kautilya would study
          various courses at SPEGA . There will be a merit based competitive
          process for the selection of interested students. The credit
          equivalence has been established.
        </p>
      </ScreenWidth>
    </MainLayout>
  );
};

export default InnerPage;

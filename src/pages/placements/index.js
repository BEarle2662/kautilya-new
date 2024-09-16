import CategoryHeading from "@/components/common/categoryHeading";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import Image from "next/image";
import React from "react";

import placementReport from "../../../public/assets/img/placements/KSPP-Placement-Report-2023-Final.jpg";
import recruitImg from "../../../public/assets/img/placements/Recruit.jpg";
import fillForm from "../../../public/assets/img/placements/re-1.jpg";
import docDownload from "../../../public/assets/img/placements/re-2.jpg";

const Placements = () => {
  const image =
    "https://kspp.edu.in/images/placements/KSPP-Placement-Report-2023-Final.jpg";
  return (
    <>
      <MainLayout
        title={"Placements page Testing for metatags"}
        description={"Placements page Testing for metatags"}
        keywords={"GIMSR, GITAM, Hospital"}
        img={image}
      >
        <CategoryHeading heading="Placements" />
        <ScreenWidth layoutwidth="false">
          <ScreenWidth layoutwidth="true">
            <Image
              src={placementReport}
              width={0}
              height={0}
              className="w-full h-full"
            />
          </ScreenWidth>

          <div className="bg-[#f6f6f6] px-1">
            <ScreenWidth layoutwidth="true">
              <div className="grid grid-cols-12 gap-8">
                <Image
                  src={recruitImg}
                  width={0}
                  height={0}
                  className="w-full h-full col-span-3"
                />

                <div className="col-span-9">
                  <h1 className="text-5xl font-normal text-center">
                    Recruit from Kautilya
                  </h1>
                  <p className="text-p mt-5">
                    Recruiters will find diverse skill sets among students of
                    this cohort. MPP students are equipped with industry
                    insights that help them hit the ground running.
                  </p>

                  <div className="flex">
                    <button className="flex items-center justify-center py-2 px-5 rounded-md bg-[#cfcfcf] mr-4">
                      <Image
                        src={fillForm}
                        width={0}
                        height={0}
                        className="w-[20px] h-[20px] mr-2"
                      />
                      <span className="text-primary text-sm">
                        Recruiter Registration
                      </span>
                    </button>

                    <button className="flex items-center justify-center py-2 px-5 rounded-md bg-[#cfcfcf]">
                      <Image
                        src={docDownload}
                        width={0}
                        height={0}
                        className="w-[20px] h-[20px] mr-2"
                      />
                      <a
                        href="/assets/pdf/placements/Kautilya-Recruiters-Guide.pdf"
                        download
                      >
                        <span className="text-primary text-sm">
                          Recruiters Guide
                        </span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </ScreenWidth>
          </div>

          <ScreenWidth layoutwidth="true"></ScreenWidth>
        </ScreenWidth>
      </MainLayout>
    </>
  );
};

export default Placements;

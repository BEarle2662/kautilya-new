import React, { useEffect } from "react";

import MainLayout from "@/components/MainContainer/MainLayout";
import CategoryHeading from "@/components/common/categoryHeading";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import ProfileCard from "@/components/common/Profile/ProfileCard";
import Link from "next/link";
import Image from "next/image";

import { apisBasePath } from "@/Endpoints/apisBase";
import { ImagePaths } from "@/Endpoints/imagePath";
import axios from "axios";

const faculty = ({ data }) => {
  const image =
    "https://programmes.gitam.edu/mbbs/static/media/academic_1.792758fcc02309368071.png";

  return (
    <>
      <MainLayout
        title={"Faculty page Testing for metatags"}
        description={"Faculty page Testing for metatags"}
        keywords={"GIMSR, GITAM, Hospital"}
        img={image}
      >
        <ScreenWidth layoutwidth="true">
          <div className="my-10">
            <CategoryHeading heading="Faculty Members" />
          </div>
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5">
            {data.data.map((each, index) => (
              <div key={each.id}>
                <ProfileCard profileData={each} page="faculty" />
              </div>
            ))}
          </div>
        </ScreenWidth>

        <ScreenWidth layoutwidth="false">
          <div className="bg-group-img  bg-cover bg-no-repeat  h-lvh mt-6">
            <ScreenWidth layoutwidth="true">
              <div className="grid grid-cols-12">
                <div className="hidden md:block md:col-span-4"></div>
                <div className="col-span-10 md:col-span-8 text-2xl md:text-3xl lg:text-5xl font-medium mt-16">
                  <h1 className="mb-4">
                    Kautilya’s Master’s Program in Public Policy (MPP) is
                    designed for those looking to rebalance Society, Government
                    and Business towards an equitable society.
                  </h1>
                  <Link href="/mpp" className="text-primary">
                    <div className="flex">
                      <h1 className="text-lg md:text-xl  font-bold">
                        LEARN ABOUT THE PROGRAM
                      </h1>
                      <Image
                        src={ImagePaths.redArrow}
                        alt="right-arrow"
                        width={0}
                        height={0}
                        className="w-10 h-4 self-end md:self-center mr-4"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </ScreenWidth>
          </div>
        </ScreenWidth>
      </MainLayout>
    </>
  );
};

export async function getStaticProps() {
  const ourFaculty = `${apisBasePath.faculty}`;

  const res = await axios.get(ourFaculty);

  const data = res.data;

  return {
    props: { data },
    // Revalidate at most once every 60 seconds
    revalidate: 30, // In seconds
  };
}

export default faculty;

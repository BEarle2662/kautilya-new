import CategoryHeading from "@/components/common/categoryHeading";
import CustomSlides from "@/components/common/CustomSlides";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import Image from "next/image";
import mppPath from "../../../public/assets/img/mpp/mpp-path.jpg";
import DynamicTabs from "@/components/common/DynamicTabs";

const Mpp = ({ mppData }) => {
  // filter for masterProgramdata
  let page = "master-program";
  const skillsShop = mppData.slidesData?.filter(
    (each) => each.category === "10 Skill Shops"
  );
  const coreCourses = mppData.slidesData?.filter(
    (each) => each.category === "Core Courses"
  );
  const electives = mppData.slidesData?.filter(
    (each) => each.category === "Electives"
  );

  return (
    <MainLayout>
      <div className="bg-mpp-img  bg-cover bg-no-repeat py-14">
        <ScreenWidth layoutwidth="true">
          <div className="md:grid md:grid-cols-12">
            <div className="md:col-span-7">
              <CategoryHeading
                heading="Master's Program in Public Policy (MPP)"
                textAlign="text-left"
                color="text-[#ffffff]"
              />
              <p className="text-[#ffffff]">
                Kautilya offers a 2-year, full-time residential Master’s Program
                in Public Policy (MPP)*, a 103-credit program with a curriculum
                designed to expand knowledge, enhance skills, instill values,
                and embrace an international pedagogical and public policy
                research outlook while engaging with the ground realities of
                India and its citizens. Being one of the best public policy
                programs it aims to bring together students from diverse
                disciplines and allow time to internalize and apply key public
                policy concepts.
              </p>
            </div>
            <div className="md:col-span-5"></div>
          </div>
        </ScreenWidth>
      </div>
      <div className="md:py-10">
        <ScreenWidth layoutwidth="true">
          <Image src={mppPath} width={0} height={0} className="w-full h-full" />
        </ScreenWidth>
      </div>

      <div className="bg-[#f6f6f6]">
        <ScreenWidth layoutwidth="true">
          <p className="my-10 text-sm md:text-base">
            Bridging the gap between the industry requirements and academic
            curriculum at the master’s level through targeted skill development
            programs taught by practitioners.
          </p>
          <DynamicTabs phd={mppData.tabsData} page="MPP Tabs" />
        </ScreenWidth>
      </div>

      <div className="md:py-10">
        <ScreenWidth layoutwidth="true">
          <h1 className="font-semibold md:font-bold text-3xl md:text-4xl text-[#00174d] text-center my-6">
            10 Skill Shops (10 Credits)
          </h1>
          <p className="mt-4 mb-8 md:mt-10 md:mb-12">
            Kautilya offers a range of core and elective courses and provides
            practical skills training through dedicated skills shops. The table
            underneath contains an indicative term-wise outlay of the courses
            for the 1st two years:
          </p>
          <CustomSlides sliderdata={skillsShop} page={page} />
        </ScreenWidth>
      </div>

      <div className="bg-[#f6f6f6]">
        <ScreenWidth layoutwidth="true">
          <h1 className="font-semibold md:font-bold text-3xl md:text-4xl text-[#00174d] text-center my-6">
            Core Courses
          </h1>
          <p className="mt-4 mb-8 md:mt-10 md:mb-12">
            Kautilya offers a range of core and elective courses and provides
            practical skills training through dedicated skills shops. The table
            underneath contains an indicative term-wise outlay of the courses
            for the 1st two years:
          </p>
          <CustomSlides sliderdata={coreCourses} page={page} />
        </ScreenWidth>
      </div>

      <div>
        <ScreenWidth layoutwidth="true">
          <h1 className="font-semibold md:font-bold text-3xl md:text-4xl text-[#00174d] text-center my-6">
            Electives
          </h1>
          <p className="mt-4 mb-8 md:mt-10 md:mb-12">
            Kautilya offers a range of core and elective courses and provides
            practical skills training through dedicated skills shops. The table
            underneath contains an indicative term-wise outlay of the courses
            for the 1st two years:
          </p>
          <CustomSlides sliderdata={electives} page={page} />

          <p className="mt-10">
            *Pending approval from the{" "}
            <a
              href="https://www.ugc.gov.in/"
              target="_blank"
              className="mpp_anchor underline"
            >
              UGC
            </a>
            , for conferring the degree of our preferred nomenclature of MPP, we
            may, in lieu, use M.A (Public Policy).
          </p>
        </ScreenWidth>
      </div>
    </MainLayout>
  );
};

export async function getStaticProps() {
  // const masterProgramData = `${apisBasePath.masterProgramData}`;
  const masterProgramData = `${ksppApisBasePath.mppSliders}`;

  // const masterProgramTabsData = `${apisBasePath.masterProgramTabsData}`;
  const mppTabsData = `${ksppApisBasePath.mppTabs}`;
  // console.log("mppTabsData", mppTabsData);
  const responses = await Promise.all([
    fetch(masterProgramData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }),
    fetch(mppTabsData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }),
  ]);

  const data = await Promise.all(responses.map((response) => response.json()));

  const mppData = {
    slidesData: data[0].data,
    tabsData: data[1].data,
  };

  return {
    props: { mppData },
  };
}

export default Mpp;

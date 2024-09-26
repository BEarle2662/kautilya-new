import CategoryHeading from "@/components/common/categoryHeading";
import CustomSlides from "@/components/common/CustomSlides";
import NumberCounter from "@/components/Counter";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { apisBasePath } from "@/Endpoints/apisBase";
import React from "react";

const StudentMix = ({ data }) => {
  const firstSlider = data.data?.filter((each) => each.category === "2023-25");
  const secondSlider = data.data?.filter((each) => each.category === "2022-24");
  const thirdSlider = data.data?.filter((each) => each.category === "2021-23");
  const fourthSlider = data.data?.filter((each) => each.category === "2024-26");

  return (
    <MainLayout>
      <div className="bg-[url('/assets/img/bgImages/studentmix-banner.jpg')]  bg-cover bg-no-repeat">
        <ScreenWidth layoutwidth="true">
          <CategoryHeading heading="#IndiaByKautilya" />

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div>
              <p className="count-ratio">
                <NumberCounter end={19} duration={1000} />:
                <span className="counter">1</span>
              </p>
              <p className="counter-txt">States Represented by Students</p>
            </div>

            <div>
              <p className="count-ratio">
                <span className="counter ">
                  <NumberCounter end={41} duration={1000} />
                </span>
              </p>
              <p className="counter-txt">
                <span className="counter ">₹ 41 LPA highest package</span>
              </p>
            </div>

            <div>
              <p className="count-ratio">
                <NumberCounter end={35} duration={1000} />%
              </p>
              <p className="counter-txt">
                Students having prior work experience
              </p>
            </div>

            <div>
              <p className="count-ratio">
                <NumberCounter end={56} duration={1000} />
              </p>
              <p className="counter-txt">Cities Represented by Students</p>
            </div>

            <div>
              <p className="count-ratio">
                <span className="counter ">
                  <NumberCounter end={60} duration={1000} />+
                </span>
              </p>
              <p className="counter-txt">
                <span className="counter ">Publications By Faculties</span>
              </p>
            </div>

            <div>
              <p className="count-ratio">
                <NumberCounter end={42} duration={1000} />%
              </p>
              <p className="counter-txt">Students are girl child</p>
            </div>
          </div>

          <div className="my-8">
            <p>
              <b>BATCH 2024-26:</b>
            </p>

            <CustomSlides sliderdata={fourthSlider} page="student-Mix" />
          </div>

          <div className="my-8">
            <p>
              <b>BATCH 2023-25:</b>
            </p>
            <CustomSlides sliderdata={firstSlider} page="student-Mix" />
          </div>

          <div className="my-8">
            <p>
              <b>BATCH 2022-24:</b>
            </p>

            <CustomSlides sliderdata={secondSlider} page="student-Mix" />
          </div>

          <div className="my-8">
            <p>
              <b>BATCH 2021-23:</b>
            </p>
            <CustomSlides sliderdata={thirdSlider} page="student-Mix" />
          </div>
        </ScreenWidth>
      </div>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const studentMixData = `${apisBasePath.studentMixData}`;

  const studentMixDataResp = await fetch(studentMixData);
  const data = await studentMixDataResp.json();
  //   console.log(data);
  return {
    props: { data },
  };
}

export default StudentMix;

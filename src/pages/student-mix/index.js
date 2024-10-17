import CategoryHeading from "@/components/common/categoryHeading";
import CustomSlides from "@/components/common/CustomSlides";
import NumberCounter from "@/components/Counter";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";
import React from "react";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const StudentMix = ({ data, metaTagsData }) => {
  const firstSlider = data?.filter((each) => each.category === "2023-25");
  const secondSlider = data?.filter((each) => each.category === "2022-24");
  const thirdSlider = data?.filter((each) => each.category === "2021-23");
  const fourthSlider = data?.filter((each) => each.category === "2024-26");

  return (
    <MainLayout
        title={metaTagsData.title}
        description={metaTagsData.description}
        keywords={metaTagsData.keywords}
        img={metaTagsData.meta_image}
    >
      <div className="bg-white-shade  bg-cover bg-no-repeat">
        <ScreenWidth layoutwidth="true">
          <CategoryHeading heading="#IndiaByKautilya" />

          <div className="hidden  md:grid  md:grid-cols-3">
            <div>
              <p className="count-ratio">
                <NumberCounter end={21} duration={1000} />
              </p>
              <p className="counter-txt">States Represented by Students</p>
            </div>

            <div>
              <p className="count-ratio">
                <span className="counter">
                  <NumberCounter end={41} duration={1000} />
                </span>
              </p>
              <p className="counter-txt">
                <span className="counter ">₹ 41 LPA highest package</span>
              </p>
            </div>

            <div>
              <p className="count-ratio">
                <NumberCounter end={47} duration={1000} />%
              </p>
              <p className="counter-txt">
                Students having prior work experience
              </p>
            </div>

            <div>
              <p className="count-ratio">
                <NumberCounter end={72} duration={1000} />
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
                <NumberCounter end={45} duration={1000} />%
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

export default StudentMix;

export async function getStaticProps() {
  // const studentMixData = `${apisBasePath.studentMixData}`;
  const studentMixApi = ksppApisBasePath.studentMixApi;

  // const studentMixDataResp = await fetch(studentMixData);
  // const data = await studentMixDataResp.json();

  const response = await axios.get(studentMixApi, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  const metaComponentResponse = await MetaTagsComponent({ page: "student-mix" });

  console.log("student-mix Page Meta DAta", metaComponentResponse);
  const data = response.data.data;
  //   console.log(data);
  return {
    props: { data, metaTagsData: metaComponentResponse },
    revalidate: 60,
  };
}

import React, { useState } from "react";
import CategoryHeading from "@/components/common/categoryHeading";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import Image from "next/image";

import placementReport from "../../../public/assets/img/placements/KSPP-Placement-Report-2023-Final.jpg";
import recruitImg from "../../../public/assets/img/placements/Recruit.jpg";
import fillForm from "../../../public/assets/img/placements/re-1.jpg";
import docDownload from "../../../public/assets/img/placements/re-2.jpg";
import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import CustomSlides from "@/components/common/CustomSlides";
import FullScreenSlider from "@/components/common/FullScreenSlider";

import placement1 from "../../../public/assets/img/placements/Aarini-Mishra.jpg";
import placement2 from "../../../public/assets/img/placements/Oaishik-Bhattacharya.jpg";
import placement3 from "../../../public/assets/img/placements/Saumya-Anand.jpg";
import intership from "../../../public/assets/img/placements/Internship.jpg";
import placementSec2 from "../../../public/assets/img/placements/Placement-sec2.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AlumniRegisterForm from "@/components/AlumniRegisterForm";
import { DialogWithForm } from "@/components/RecruiterRegdForm";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const textData = [
  {
    title: "Internships & Capstone Projects",
    description: `
       <p> As part of the MPP, students intern at relevant policy organizations for 6-8 weeks. During the second year of the program, they are also required to submit their report of a capstone project on which they have worked. These projects are supervised by their academic supervisor.
       </p>
       <p>
       This hands-on approach to policymaking is critical in aiding a student make the transition into a professional environment. It also helps build key skills such as project management, and time management and emphasizes teamwork – the key traits to create and manage positive impact in the world today.
        </p>
       `,
  },
  {
    title: "Getting interview- and industry-ready",
    description: `<p>Students can enroll to participate in seminars, interactions, and guidance sessions that can help craft their understanding of the needs of recruiters. Members participate in workshops on skill development and undergo mock interviews as part of the club. They also attend workshops on communications, team-building, and writing, among a host of other professional skills.</p>`,
  },
  {
    title: "Kautilya Entrepreneurship Cell",
    description: `<p>Created with a mission to make the campus friendly for entrepreneurs, the E-cell is a great place for those aspiring to sharpen their business acumen. Students can forge interpersonal connections amid a community of like-minded entrepreneurs. The cell also hosts several skill shops in partnership with business leaders. These sessions give students an objective view of running a business, the policy-level developments, as well as the challenges involved.</p>`,
  },
];

const Placements = ({ data, metaTagsData }) => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = (handleDialog) => {
    setOpen(handleDialog);
  };

  let page = "placements";

  const image =
    "https://kspp.edu.in/images/placements/KSPP-Placement-Report-2023-Final.jpg";

  const topRecruiters = data.data?.filter(
    (each) => each.category === "Top recruiters"
  );
  const demoGraphs = data.data?.filter(
    (each) => each.category === "Demographics 2022-24"
  );
  const placementsCongrats = data.data?.filter(
    (each) => each.category === "placement-congratulations"
  );

  const privateOrganizations = data.data?.filter(
    (each) => each.category === "Private Organizations"
  );
  const governmentOrganizations = data.data?.filter(
    (each) => each.category === "Government Organizations"
  );

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    cssEase: "linear",
  };

  return (
    <>
      <MainLayout
        title={metaTagsData.title}
        description={metaTagsData.description}
        keywords={metaTagsData.keywords}
        img={metaTagsData.meta_image}
      >
        <CategoryHeading heading="Placements" />
        <ScreenWidth layoutwidth="false">
          <ScreenWidth layoutwidth="true">
            <Image
              src={placementReport}
              width={0}
              height={0}
              alt="placement-reports"
              className="w-full h-full"
            />
          </ScreenWidth>
          <div className="bg-[#f6f6f6] px-1">
            <ScreenWidth layoutwidth="true">
              <div className="flex flex-col md:grid md:grid-cols-12 gap-8">
                <Image
                  src={recruitImg}
                  width={0}
                  height={0}
                  alt="recruit"
                  className="w-1/2 h-1/2 md:w-full md:h-full md:col-span-3 self-center md:self-start"
                />

                <div className="md:col-span-9">
                  <h1 className="text-xl md:text-5xl font-normal text-center">
                    Recruit from Kautilya
                  </h1>
                  <p className="text-p mt-5">
                    Recruiters will find diverse skill sets among students of
                    this cohort. MPP students are equipped with industry
                    insights that help them hit the ground running.
                  </p>

                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <button
                      className="flex items-center justify-center py-2 px-5 rounded-md bg-[#cfcfcf] md:mr-4 w-full"
                      onClick={handleOpenDialog}
                    >
                      <Image
                        src={fillForm}
                        width={0}
                        height={0}
                        alt="Recruiter Registration"
                        className="w-[20px] h-[20px] mr-2"
                      />
                      <span className="text-primary text-xs md:text-sm">
                        Recruiter Registration
                      </span>
                    </button>

                    <button className="flex items-center justify-center py-2 px-5 rounded-md bg-[#cfcfcf] w-full">
                      <Image
                        src={docDownload}
                        width={0}
                        height={0}
                        alt="Recruiters Guide"
                        className="w-[20px] h-[20px] mr-2"
                      />
                      <a
                        href="/assets/pdf/placements/Kautilya-Recruiters-Guide.pdf"
                        download
                      >
                        <span className="text-primary text-xs md:text-sm">
                          Recruiters Guide
                        </span>
                      </a>
                    </button>
                  </div>
                  <DialogWithForm
                    dialogOpen={open}
                    handleOpenDialog={handleOpenDialog}
                  />
                </div>
              </div>
            </ScreenWidth>
          </div>
          {/* <AlumniRegisterForm /> */}
          <div>
            <ScreenWidth layoutwidth="true">
              <CategoryHeading heading="Top recruiters" />
              <CustomSlides sliderdata={topRecruiters} page={page} />
            </ScreenWidth>
          </div>
          <div className="mt-10 px-10 mb-4">
            <FullScreenSlider slider={placementsCongrats} pagesMpp={page} />
          </div>
          <ScreenWidth layoutwidth="true">
            <div className="grid md:grid-cols-12 gap-6">
              <Image
                width={0}
                height={0}
                alt="recruiter-student synergy"
                className="h-full w-full md:col-span-5"
                src={placementSec2}
              />

              <div className="md:col-span-7">
                <h1 className="leading-10 text-3xl md:text-5xl font-medium md:font-[400] text-primary mb-5">
                  Creating the recruiter-student synergy
                </h1>

                <div className="grid md:grid-cols-12 md:gap-6">
                  <p className="md:col-span-6">
                    At Kautilya, we aim to equip each student with the resources
                    they need to maximize their professional growth after
                    graduating from the MPP program. Our team hits the ground
                    running at the start of each intake. They hold interaction
                    sessions with each student to map out career goals,
                    prospective recruiters, and areas of interest. Throughout
                    the course, career guidance interactions are held with
                  </p>
                  <div className="md:col-span-6">
                    <p>
                      students to give them insights into industry expectations
                      and trends. Students also undergo one-on-one sessions
                      where they are provided guidance in fine-tuning their CVs
                      and appearing for personal interviews.
                    </p>
                    <p>
                      The focus of the Career Fulfillment team is to upskill and
                      nurture every student’s capabilities to ensure their CVs
                      are amplified among the right recruiters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScreenWidth>
          <div className="mt-10">
            <ScreenWidth layoutwidth="true">
              <CategoryHeading
                heading="Students from across skills, demographics"
                color="text-primary"
              />
              <p className="text-lg font-bold text-center">
                MPP Batch of 2022-24
              </p>
              <CustomSlides sliderdata={demoGraphs} page={page} />
            </ScreenWidth>
          </div>
          <div className="mt-10">
            <ScreenWidth layoutwidth="true">
              <CategoryHeading heading="Internships" />

              <div className="md:my-10">
                <h1 className="text-primary text-xl md:text-3xl font-bold md:font-extrabold text-center my-6">
                  Government Organizations
                </h1>

                <CustomSlides
                  sliderdata={governmentOrganizations}
                  page={page}
                  sliderType="Government Organizations"
                />
              </div>

              <div className="md:mt-20">
                <h1 className="text-primary text-xl md:text-3xl font-bold md:font-extrabold text-center my-6">
                  Private Organizations
                </h1>

                <CustomSlides
                  sliderdata={privateOrganizations}
                  page={page}
                  sliderType="Private Organizations"
                />
              </div>
            </ScreenWidth>
          </div>
          <div className="bg-[#f6f6f6] md:my-10 pt-10">
            <CategoryHeading heading="Student-led Placement Committee" />
            <ScreenWidth layoutwidth="true">
              <div className="flex flex-col justify-center md:flex-row md:gap-8">
                <div className="flex flex-col items-center md:mr-4">
                  <Image
                    src={placement1}
                    width={160}
                    height={160}
                    alt="Aarini-Mishra"
                  />
                  <p className="mt-3 text-primary text-lg font-semibold">
                    Aarini Mishra
                  </p>
                </div>

                <div className="flex flex-col items-center md:mr-4">
                  <Image
                    src={placement2}
                    width={160}
                    height={160}
                    alt="Oaishik-Bhattacharya"
                  />
                  <p className="mt-3 text-primary text-lg font-semibold">
                    Oaishik Bhattacharya
                  </p>
                </div>

                <div className="flex flex-col items-center md:mr-4">
                  <Image
                    src={placement3}
                    width={160}
                    height={160}
                    alt="Saumya-Anand"
                  />
                  <p className="mt-3 text-primary text-lg font-semibold">
                    Saumya Anand
                  </p>
                </div>
              </div>
            </ScreenWidth>
          </div>
          <div className="bg-[#212529]">
            <ScreenWidth layoutwidth="true">
              <CategoryHeading
                heading="An eye on holistic development"
                color="text-[#fff]"
                textAlign="text-left"
              />

              <div className="grid grid-cols-12 gap-16">
                <div className="col-span-12 md:col-span-6">
                  <Image
                    src={intership}
                    width={0}
                    height={0}
                    className="w-1/3  md:w-full h-full"
                    alt="intership-jpg"
                  />
                </div>

                <div className="col-span-10 md:col-span-6 text-slider md:p-4">
                  <Slider {...settings}>
                    {textData.map((eachobj) => {
                      return (
                        <div key={eachobj.title}>
                          <h4>{eachobj.title}</h4>

                          <div
                            dangerouslySetInnerHTML={{
                              __html: eachobj.description,
                            }}
                          />
                        </div>
                      );
                    })}
                  </Slider>
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
  // const placementsKcAdvnData = `${apisBasePath.placementsKcAdvnData}`;

  const placementsApi = ksppApisBasePath.placementsApi;

  const placementResponse = await fetch(placementsApi, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  const data = await placementResponse.json();
  let  metaComponentResponse = await MetaTagsComponent({ page: "placements" });
  if (!metaComponentResponse) {
    console.log("No Meta Data for placements Page, fetching Home Page Meta Data");
    metaComponentResponse = await MetaTagsComponent({ page: "home" });
  } 
  console.log("placements Page Meta DAta", metaComponentResponse);
  return {
    props: { data, metaTagsData: metaComponentResponse },
    revalidate: 60,
  };
}

export default Placements;

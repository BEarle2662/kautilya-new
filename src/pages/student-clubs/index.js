import CategoryHeading from "@/components/common/categoryHeading";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import slideImg1 from "../../../public/assets/img/studentClubs/1.jpg";
import slideImg2 from "../../../public/assets/img/studentClubs/2.jpg";

import slideImg3 from "../../../public/assets/img/studentClubs/3.jpg";

import slideImg4 from "../../../public/assets/img/studentClubs/4.jpg";

import slideImg5 from "../../../public/assets/img/studentClubs/5.jpg";

import slideImg6 from "../../../public/assets/img/studentClubs/6.jpg";
import { ksppApisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";
import { ImageBasePaths } from "@/Endpoints/imageBasePaths";

const clubData = [
  {
    title: "Kautilya Climate Action Club",
    description:
      "The club aims to foster awareness about climate change and climate action, its mitigation, and adoption, respectively. This is an enabling platform for members to apply their knowledge and expertise in the real world by taking decisions that are conducive to sustainable development and also adhere to the SDGs or Sustainable Development Goals. The club organizes and participates in various climate action hackathons focusing on various aspects of public policy and governance like environment, energy, resource management, impact, and assessment.",
  },
  {
    title: "Chabootra",
    description:
      "This club has been formed with a very unique intention to help students through theatre as a medium. The core ideas are to help in recreation, purging inhibitions and developing empathy. The recreational activities include meditation, physical and emotional exercises. Members here learn the art of optimization of Self Expression’ with confidence, and work on improving empathy through reading, emoting, enacting and discussing.",
  },
  {
    title: "Professional Development Club",
    description:
      "This club aims to arm students with essential skills of conduct required to enter the professional world. They learn about skills like team-building, communication, project planning and delivery, negotiation, professional writing, work ethics, conflict resolution, and time management. The members organize various skill shops on case studies, mock interviews, and resumé building where along with this they learn critical thinking and design thinking. One of their key aims is to help members develop a mindset required to adapt to organizational culture as they prepare to enter the professional world.",
  },
  {
    title: "Parliamentarians Club",
    description:
      "The club supports the policy learning journey for students by mapping political processes that shape decision-making on issues relevant from local to global importance. The club was formed as an association of like-minded individuals from different professional and academic backgrounds who aspired to create a positive impact through evidence-based policymaking. Since its inception, it has successfully created a vibrant ecosystem at Kautilya through open discussion forums, live debates, study tours, and external engagement with officeholders and stakeholders. The Jan Manch (Mock Parliament) is its flagship event.",
  },
  {
    title: "Software Literacy Club",
    description:
      "Keeping in mind how important data is for public policy, this club trains its members in Excel, data analytics, visualization, and quantitative research. Both primary and intermediate levels are covered during the training. Their sessions focus on statistical software like R which is used for gathering data, where members are taught end-to-end reporting using R markdown, citations, generating charts, and graphs and applying statistical equations. They organize both online and offline sessions.",
  },
  {
    title: "Think-In Podcast Club",
    description:
      "As future change-makers, our public policy students hold regular discussions with notable personalities in the policy and advocacy space. The podcast forms a medium to voice their opinion on issues that matter and attention is given to covering every segment of society. Podcasts are slowly gaining popularity and have become a great medium to connect with the audience. The club aims to introduce Kautilya to various audiences through discussions with field-specific experts.",
  },
  {
    title: "Safarnama Club",
    description:
      "This club brings together students with a passion for the outdoors and adventure. Organizing city walks, food trails, and exploring places of historical and cultural interest is a part of their activities.",
  },
  {
    title: "Social Empowerment Club",
    description:
      "The club draws inspiration from the ideas and actions of great Indian Social reformers and rationalists who defied orthodox norms to promote social justice in the country. The Club stands for ‘progressive thought’ as it strives to preserve and progress the ideals of secularism, liberty, justice & scientific temper enshrined in the Indian Constitution. The club endeavours to create an atmosphere for public discourse on the country’s diversity, inclusion and representation issues.",
  },
  {
    title: "Kautilya Entrepreneurship Cell",
    description:
      "The E-Cell is a platform for aspiring entrepreneurs to come together and explore ideas that would advance their business acumen. The club organizes various skill shops in partnership with business and industry leaders to instil in its members’ the confidence to start a venture. Their mission is to make Kautilya an entrepreneur-friendly campus and lead the way for social impact through innovative business opportunities.",
  },
];

const StudentClub = ({ data }) => {
  // const data = [
  //   {
  //     imgURL: slideImg1,
  //   },
  //   {
  //     imgURL: slideImg2,
  //   },
  //   {
  //     imgURL: slideImg3,
  //   },
  //   {
  //     imgURL: slideImg4,
  //   },
  //   {
  //     imgURL: slideImg5,
  //   },
  //   {
  //     imgURL: slideImg6,
  //   },
  // ];

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <MainLayout>
      <ScreenWidth layoutwidth="false">
        <div className="h-[40vh] bg-black-shade pt-10">
          <CategoryHeading
            heading="Student Clubs and Activities"
            color="text-[#ffffff]"
          />
        </div>

        <ScreenWidth layoutwidth="true">
          <Slider {...settings}>
            {data.map((eachobj, index) => (
              <Image
                src={`${ImageBasePaths.studentsClubImagesPath}${eachobj.desktop_banner}`}
                key={index}
                height={0}
                width={0}
                className="h-full w-full"
                alt="students-club"
              />
            ))}
          </Slider>
        </ScreenWidth>

        <ScreenWidth layoutwidth="true">
          {clubData.map((each, index) => (
            <div className="headingWithBG" key={index}>
              <h4>{each.title}</h4>
              <p>{each.description}</p>
            </div>
          ))}
        </ScreenWidth>
      </ScreenWidth>
    </MainLayout>
  );
};

export default StudentClub;

export async function getStaticProps() {
  const studentClubApi = ksppApisBasePath.studentClubApi;
  const response = await axios.get(studentClubApi, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });

  const data = response.data.data;

  return {
    props: {
      data,
    },
  };
}

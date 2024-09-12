import Image from "next/image";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { ImageBasePaths } from "@/Endpoints/imageBasePaths";

const FacultySlugPage = ({ slugData }) => {
  const data = slugData.data;
  const {
    research_interest,
    areas_expertise,
    grants_distinctions,
    publications,
    membership,
    intiatives,
    recognitions,
    courses_fostered,
    talks_conferences,
    post_graduate,
    awards,
    funding,
    linkedin_id,
    mail,
    twitter_id,
    inded_id,
  } = data;

  // const imagePath =
  //   "https://guprojects.gitam.edu/kautilya-admin/public/faculty/banner/";

  // console.log(`${imagePath}${data.full_banner}`);

  const tabs = [
    {
      key: "research_interest",
      label: "Research Interest",
      content: research_interest,
    },
    {
      key: "areas_expertise",
      label: "Areas of Expertise",
      content: areas_expertise,
    },
    {
      key: "grants_distinctions",
      label: "Grants and Distinctions",
      content: grants_distinctions,
    },
    { key: "publications", label: "Publications", content: publications },
    { key: "membership", label: "Membership", content: membership },
    { key: "intiatives", label: "Initiatives", content: intiatives },
    { key: "recognitions", label: "Recognitions", content: recognitions },
    {
      key: "courses_fostered",
      label: "Courses Fostered",
      content: courses_fostered,
    },
    {
      key: "talks_conferences",
      label: "Talks & Conferences",
      content: talks_conferences,
    },
    { key: "post_graduate", label: "Postgraduate", content: post_graduate },
    { key: "awards", label: "Awards", content: awards },
    { key: "funding", label: "Funding", content: funding },
  ];

  const dataTabs = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <>
      <Image
        src={`${ImageBasePaths.facultySlugBannerImagesPath}${data.full_banner}`}
        alt={data.name}
        height={0}
        width={0}
        className="h-full w-full"
      />
      <h1>{data.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.brief_description }}></div>
      <h5 className="">
        Contact:
        {linkedin_id && (
          <span className="text-primary contact-icon">
            <a href={linkedin_id}>
              <i className="fa fa-linkedin"></i>
            </a>
          </span>
        )}
        {mail && (
          <span className="text-primary contact-icon">
            <a href={`mailto:${mail}`}>
              <i className="fa fa-envelope"></i>
            </a>
          </span>
        )}
        {twitter_id && (
          <span className="text-primary contact-icon">
            <a href={twitter_id}>
              <i className="fa fa-twitter"></i>
            </a>
          </span>
        )}
        {inded_id && (
          <span className="text-primary contact-icon">
            <a href={inded_id}>
              <i className="fa fa-inded"></i>
            </a>
          </span>
        )}
      </h5>

      <Tabs value="html" className="max-w-[40rem]">
        <TabsHeader
          className="bg-transparent"
          indicatorProps={{
            className: "bg-gray-900/10 shadow-none !text-gray-900",
          }}
        >
          {dataTabs.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {dataTabs.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
};

export default FacultySlugPage;

import Image from "next/image";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { ImageBasePaths } from "@/Endpoints/imageBasePaths";
import ScreenWidth from "../MainContainer/ScreenWidth";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";
import DynamicTabs from "./DynamicTabs";

const FacultySlugPage = ({ slugData }) => {
  const data = slugData.data;
  // console.log(data);
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

  const tabs = [
    {
      category: "research_interest",
      label: "Research Interest",
      description: research_interest,
    },
    {
      category: "areas_expertise",
      label: "Areas of Expertise",
      description: areas_expertise,
    },
    {
      category: "grants_distinctions",
      label: "Grants and Distinctions",
      description: grants_distinctions,
    },
    {
      category: "publications",
      label: "Publications",
      description: publications,
    },
    { category: "membership", label: "Membership", description: membership },
    { category: "intiatives", label: "Initiatives", description: intiatives },
    {
      category: "recognitions",
      label: "Recognitions",
      description: recognitions,
    },
    {
      category: "courses_fostered",
      label: "Courses Fostered",
      description: courses_fostered,
    },
    {
      category: "talks_conferences",
      label: "Talks & Conferences",
      description: talks_conferences,
    },
    {
      category: "post_graduate",
      label: "Postgraduate",
      description: post_graduate,
    },
    { category: "awards", label: "Awards", description: awards },
    { category: "funding", label: "Funding", description: funding },
  ];

  const tabsData = tabs.filter((each) => each.description);
  // console.log("TaBSDATA", tabsData);
  return (
    <div>
      <ScreenWidth layoutwidth="true">
        <Image
          src={`${ImageBasePaths.facultySlugBannerImagesPath}${data.full_banner}`}
          alt={data.name}
          height={0}
          width={0}
          className="h-full w-full mb-10"
        />
        {/* <h1>{data.name}</h1> */}

        <div
          dangerouslySetInnerHTML={{ __html: data.brief_description }}
          className="slug-description"
        ></div>
        <div className="flex items-center">
          <span className="mr-4 text-xl font-medium">Contact:</span>
          {linkedin_id && (
            <span className="text-primary text-xl mr-4">
              <a href={linkedin_id}>
                <FaLinkedinIn />
              </a>
            </span>
          )}
          {mail && (
            <span className="text-primary text-xl mr-4">
              <a href={`mailto:${mail}`}>
                <FaEnvelope />
              </a>
            </span>
          )}
          {twitter_id && (
            <span className="text-primary text-xl mr-4">
              <a href={twitter_id}>
                <FaSquareXTwitter />
              </a>
            </span>
          )}
          {inded_id && (
            <span className="text-primary text-xl mr-4">
              <a href={inded_id}>
                <SiIndeed />
              </a>
            </span>
          )}
        </div>
      </ScreenWidth>
      <div className="py-10 bg-[#f6f6f6]">
        <ScreenWidth layoutwidth="true">
          {/* <Tabs value={tabsData[0].key}>
            <TabsHeader>
              {tabsData.map(({ label, key }) => (
                <Tab key={key} value={key}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {tabsData.map(({ content, key }) => (
                <TabPanel key={key} value={key}>
                  <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs> */}

          <DynamicTabs tabData={tabsData} />
        </ScreenWidth>
      </div>
    </div>
  );
};

export default FacultySlugPage;

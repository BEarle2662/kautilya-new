import React from "react";
import ScreenWidth from "../MainContainer/ScreenWidth";
import Image from "next/image";
import { Avatar } from "@material-tailwind/react";
import Link from "next/link";

import { ImageBasePaths } from "@/Endpoints/imageBasePaths";

import { FaDownload } from "react-icons/fa6";

const SlugDetailedPage = ({ slugData, slugDetailedPage }) => {
  const docPath = "https://guprojects.gitam.edu/kautilya-admin/public/";

  let documentFile;

  switch (slugDetailedPage) {
    case "Capstone Project":
      documentFile = "CapstoneProject/";
      break;

    case "Issue Brief":
      documentFile = "issuebrief/";
      break;

    default:
      documentFile = null;
  }

  const data = slugData.data;

  return (
    <ScreenWidth layoutwidth="">
      <h4 className="text-base font-bold uppercase mb-4">{data.opinion}</h4>
      <h1 className="text-[22px] md:text-[42px] font-extrabold leading-8 md:leading-10 mb-8">
        {data.title}
      </h1>

      <div>
        <Image
          src={`${ImageBasePaths.detailedSlugsMediaPath}${data.header_path}`}
          width={0}
          height={0}
          alt={data.title}
          className="h-full w-full"
        />
      </div>

      <div className="flex items-center  pt-6 pb-0 md:p-6">
        <Avatar
          size="lg"
          variant="circular"
          alt=""
          src={`${ImageBasePaths.detailedSlugsMediaPath}${data.posted_by_path}`}
          className="border-2 border-white hover:z-10 mr-3"
        />
        <div className="font-extrabold text-[#424a53]">
          <span>
            {data.opinion} By,
            <br />
            <span>{data.posted_by_brief}</span>
          </span>
          <div dangerouslySetInnerHTML={{ __html: data.posted_by }}></div>
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: data.description }}
        className="mt-4 mb-3 slug-description"
      ></div>

      {data.document && (
        <Link
          href={`${docPath}${documentFile}${data.document}`}
          className="text-indigo-900 flex items-center gap-2"
        >
          <strong>DOWNLOAD PAPER</strong>
          <FaDownload />
        </Link>
      )}
    </ScreenWidth>
  );
};

export default SlugDetailedPage;

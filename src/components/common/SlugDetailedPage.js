import React from "react";
import ScreenWidth from "../MainContainer/ScreenWidth";
import Image from "next/image";
import { Avatar } from "@material-tailwind/react";
import Link from "next/link";

import { ImageBasePaths } from "@/Endpoints/imageBasePaths";

import { FaDownload } from "react-icons/fa6";
import { docsPath } from "@/Endpoints/docsBasePath";

const SlugDetailedPage = ({ slugData, slugDetailedPage }) => {
  const docPath = "https://guprojects.gitam.edu/kautilya-admin/public/";

  let documentFile;
  let slugMediaInnerImgPath;
  let slugMediaPostedByPath;

  switch (slugDetailedPage) {
    case "Capstone Project":
      documentFile = docsPath.capstoneSlugsMediaPath;
      slugMediaInnerImgPath = `${ImageBasePaths.capstoneSlugsMediaPath}innerpage_image/`;
      slugMediaPostedByPath = `${ImageBasePaths.capstoneSlugsMediaPath}posted_by_image/`;

      break;

    case "Issue Brief":
      documentFile = docsPath.issueBriefSlugsMediaPath;
      slugMediaInnerImgPath = `${ImageBasePaths.issueBriefSlugsMediaPath}innerpage_image/`;
      slugMediaPostedByPath = `${ImageBasePaths.issueBriefSlugsMediaPath}posted_by_image/`;

      break;

    case "Blog":
      // documentFile = docsPath.issueBriefSlugsMediaPath;
      slugMediaInnerImgPath = `${ImageBasePaths.blogSlugsMediaPath}innerpage_image/`;
      slugMediaPostedByPath = `${ImageBasePaths.blogSlugsMediaPath}posted_by_image/`;

      break;

    default:
      documentFile = null;
  }

  const data = slugData?.data;

  if (!data.inner_title) {
    return <div>Data not available</div>;
  }

  return (
    <ScreenWidth layoutwidth="">
      <h4 className="text-base font-bold uppercase mb-4">{data.opinion}</h4>
      <h1 className="text-[22px] md:text-[42px] font-extrabold leading-8 md:leading-10 mb-8">
        {data.inner_title}
      </h1>

      <div>
        <Image
          src={`${slugMediaInnerImgPath}${data.innerpage_image}`}
          width={0}
          height={0}
          alt={data.innerpage_image_alttag}
          className="h-full w-full"
        />
      </div>

      <div className="flex items-center  pt-6 pb-0 md:p-6">
        <Avatar
          size="lg"
          variant="circular"
          alt={data.posted_by_image_alttag}
          src={`${slugMediaPostedByPath}${data.posted_by_image}`}
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

      {data.file_document && (
        <Link
          // href={`${docPath}${documentFile}${data.document}`}
          href={`${documentFile}${data.file_document}`}
          target="_blank"
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

import React from "react";
import ScreenWidth from "../MainContainer/ScreenWidth";
import Image from "next/image";
import { Avatar } from "@material-tailwind/react";
import Link from "next/link";

import { ImageBasePaths } from "@/Endpoints/imageBasePaths";

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
    <ScreenWidth layoutwidth="true">
      <h4>{data.opinion}</h4>
      <h1>{data.title}</h1>

      <Image
        src={`${ImageBasePaths.detailedSlugsMediaPath}${data.header_path}`}
        width={0}
        height={0}
        alt={data.title}
        className="h-full w-full"
      />

      <div className="flex">
        <Avatar
          size="lg"
          variant="circular"
          alt="natali craig"
          src={`${ImageBasePaths.detailedSlugsMediaPath}${data.posted_by_path}`}
          className="border-2 border-white hover:z-10"
        />
        <p>
          <span>
            {data.opinion} By,
            <br />
          </span>
          <div dangerouslySetInnerHTML={{ __html: data.posted_by }}></div>
        </p>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: data.description }}
        className="mt-4 mb-3"
      ></div>

      {data.document && (
        <Link href={`${docPath}${documentFile}${data.document}`}>
          <strong>
            DOWNLOAD PAPER <i className="fa fa-download" aria-hidden="true"></i>
          </strong>
        </Link>
      )}
    </ScreenWidth>
  );
};

export default SlugDetailedPage;

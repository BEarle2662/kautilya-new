import Image from "next/image";
import ScreenWidth from "../MainContainer/ScreenWidth";
import CategoryHeading from "./categoryHeading";

import { ImageBasePaths } from "@/Endpoints/imageBasePaths";

import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Avatar,
} from "@material-tailwind/react";

import Link from "next/link";

const SlugsPage = ({ pageTitle, slugsPageData }) => {
  let slugBasePath;
  switch (pageTitle) {
    case "Capstone Project":
      slugBasePath = "capstone-project/";
      break;
    case "Blogs":
      slugBasePath = "blogs/";
      break;
    case "Issue Brief":
      slugBasePath = "issue-brief/";
      break;
    default:
      slugBasePath = null;
  }
  return (
    <>
      <ScreenWidth layoutwidth="true">
        <div className="my-10">
          <CategoryHeading heading={pageTitle} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {slugsPageData.map((eachSlugItem) => {
            return (
              <Card
                className="mt-6 rounded-none flex flex-col justify-between"
                key={eachSlugItem.id}
              >
                <Image
                  src={`${ImageBasePaths.detailedSlugsMediaPath}${eachSlugItem.thumbnail_path}`}
                  height={0}
                  width={0}
                  className="h-46 w-full"
                  alt={eachSlugItem.posted_by}
                />
                <CardBody>
                  <p className="font-semibold text-sm text-[#000] mb-4">
                    {eachSlugItem.title}
                  </p>

                  <Avatar
                    size="lg"
                    variant="circular"
                    alt="natali craig"
                    src={`${ImageBasePaths.detailedSlugsMediaPath}${eachSlugItem.posted_by_path}`}
                    className="border-2 border-white hover:z-10"
                  />
                  {eachSlugItem.posted_by_front ? (
                    <span className="font-semibold text-xs text-[#000] ml-2">
                      {eachSlugItem.posted_by_front}
                    </span>
                  ) : (
                    <span className="font-semibold text-xs text-[#000] ml-2">
                      {eachSlugItem.posted_by}
                    </span>
                  )}
                  <p className="text-sm text-[#424a53] ellipsis-two-lines">
                    {eachSlugItem.posted_by_about}
                  </p>
                </CardBody>
                <CardFooter className="pt-0">
                  <Link href={`${slugBasePath}${eachSlugItem.slug}`}>
                    <Button className="rounded-none">Read More</Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </ScreenWidth>
    </>
  );
};

export default SlugsPage;

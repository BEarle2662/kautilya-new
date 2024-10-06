import Image from "next/image";
import ScreenWidth from "../MainContainer/ScreenWidth";
import CategoryHeading from "./categoryHeading";

import { ImageBasePaths } from "@/Endpoints/imageBasePaths";

import blogIntro from "../../../public/assets/img/blogs/blog_intro.jpg";

import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Avatar,
} from "@material-tailwind/react";

import Link from "next/link";
import { ImagePaths } from "@/Endpoints/imagePath";

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
        <div className="mt-4">
          <CategoryHeading heading={pageTitle} />
        </div>

        {pageTitle === "Blogs" && (
          <Card className="flex flex-col lg:grid lg:grid-cols-12 mb-5 drop-shadow-xl border-2 p-4 md:p-10 rounded-none gap-8">
            <div className="md:col-span-7">
              <div className="m-2">
                <h4 className="text-sm text-black font-semibold">OPINION</h4>
                <h3 className="text-xl md:text-3xl text-black font-semibold my-2">
                  No Questions about Hyderabad
                </h3>

                <div className="flex">
                  <Image
                    src={ImagePaths.syed}
                    className="rounded-full"
                    alt="syed"
                    width={60}
                    height={60}
                  />
                  <p className="font-bold text-base text-p ml-4 text-left">
                    By Syed Akbaruddin, Dean
                  </p>
                </div>

                <p className="mt-4 text-sm">
                  I never thought I would ever come back to Hyderabad. When I
                  left in 1985, the city of my upbringing, the not-so-big city
                  at the time, was something I was eager to leave behind in the
                  quest to be a global nomad. After 35 years I am back...
                </p>
                <Link
                  href="no-questions-about-hyderabad-the-deans-take"
                  className=""
                >
                  <Button>Readmore</Button>
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <Image
                src={blogIntro}
                alt="syed"
                className="h-full w-full"
                width={0}
                height={0}
              />
            </div>
          </Card>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {slugsPageData.map((eachSlugItem) => {
            return (
              <Card
                className="mt-6 rounded-none flex flex-col justify-between drop-shadow-md"
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

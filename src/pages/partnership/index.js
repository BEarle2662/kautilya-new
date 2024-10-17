import CategoryHeading from "@/components/common/categoryHeading";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

import partner_1 from "../../../public/assets/img/partners/partner_thumb.jpg";

import partner_2 from "../../../public/assets/img/partners/partner_thumb2.jpg";
import Image from "next/image";
import { ksppApisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";
import { ImageBasePaths } from "@/Endpoints/imageBasePaths";

const partnersData = [
  {
    partnerImg: partner_1,
    partnerTitle: "IE University’s School of Politics",
    partnerLink: "/ie-universitys-school-of-politics",
  },
  {
    partnerImg: partner_2,
    partnerTitle: "United Nations Human Rights Council (UNHRC)",
    partnerLink: "/unhrc",
  },
];

const Partnership = ({ data }) => {
  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        <CategoryHeading heading="Partnership" />
        <div className="flex flex-col md:flex-row justify-around items-center">
          {data.map((each) => (
            <Card
              className="mt-6 md:w-96 rounded-none p-2 border-2"
              key={each.thumnail_title}
            >
              <Image
                src={`${ImageBasePaths.partnerShipImagesPath}thumbnail/${each.thumbnail_image}`}
                height={0}
                width={0}
                className="w-full h-full"
                alt={each.thumbnail_alttag}
              />

              <CardBody>
                <h4 className="text-base font-semibold text-black">
                  {each.thumnail_title}
                </h4>
              </CardBody>
              <CardFooter className="pt-0 text-center">
                <Link href={each.slug}>
                  <Button>Read More </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScreenWidth>
    </MainLayout>
  );
};

export default Partnership;

export async function getStaticProps() {
  const partnershipApi = ksppApisBasePath.partnershipApi;
  const response = await axios.get(partnershipApi, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });

  const data = response.data.data;
  // console.log(data);
  return {
    props: {
      data,
    },
  };
}

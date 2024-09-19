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

const Partnership = () => {
  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        <CategoryHeading heading="Partnership" />
        <div className="flex flex-col md:flex-row justify-around items-center">
          {partnersData.map((each) => (
            <Card
              className="mt-6 md:w-96 rounded-none p-2 border-2"
              key={each.partnerLink}
            >
              <Image
                src={each.partnerImg}
                height={0}
                width={0}
                className="w-full h-full"
                alt={each.partnerTitle}
              />

              <CardBody>
                <h4 className="text-base font-semibold text-black">
                  {each.partnerTitle}
                </h4>
              </CardBody>
              <CardFooter className="pt-0 text-center">
                <Button>
                  <Link href={each.partnerLink}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScreenWidth>
    </MainLayout>
  );
};

export default Partnership;

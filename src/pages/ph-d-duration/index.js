import { ksppApisBasePath } from "@/Endpoints/apisBase";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import DynamicTabs from "@/components/common/DynamicTabs";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import Link from "next/link";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

// import pdfDoc from "../../../public/assets/pdf/events/qs-gitamuniversity.pdf";

// React component definition
const DoctoralPhdProgram = ({ tabData, metaTagsData  }) => {
  return (

    <MainLayout
    title={metaTagsData.title}
    description={metaTagsData.description}
    keywords={metaTagsData.keywords}
    img={metaTagsData.meta_image}
    >
      <div className="md:p-12">
        <ScreenWidth layoutwidth="true">
          <Link
            href="/assets/pdf/events/qs-gitamuniversity.pdf"
            target="_blank"
          >
            <Button>Download Brochure</Button>
          </Link>

          <p className="text-p mt-4">
            The Ph.D. program at the Kautilya School of Public Policy will equip
            scholars with the training that will allow them to contribute
            through their research in academia, government, business, and
            society.
          </p>

          <p className="font-semibold mb-2 mt-6">
            The school accepts Ph.D. applications in the following area:
          </p>
          <ul className="pl-6">
            <li className="list-disc">Economics for policy.</li>
          </ul>

          <div className="my-6">
            <h1 className="font-semibold text-lg mb-1">
              Lead the way in public policy innovation with impactful research.
            </h1>
            <p>
              At the Kautilya School of Public Policy, we offer a comprehensive
              PhD program designed to equip you with the skills and knowledge
              needed to make a significant impact in academia, government,
              business, and beyond.
            </p>
          </div>

          <div>
            <h1 className="font-semibold text-lg mb-1">
              Purpose-Driven Education
            </h1>
            <p>
              Our PhD program is tailored to provide you with advanced training
              and research opportunities that align with your passions and
              career goals. You'll be prepared to contribute to various sectors,
              including academia, government, business, and society.
            </p>
          </div>
        </ScreenWidth>
      </div>
      <div className="bg-[#f6f6f6]">
        <ScreenWidth layoutwidth="true" section="tabs">
          <DynamicTabs tabData={tabData} />
        </ScreenWidth>
      </div>
    </MainLayout>
  );
};

// Make sure the component is exported as the default export
export default DoctoralPhdProgram;

// Fetch tab data during build time
export async function getStaticProps() {
  // const response = await fetch(
  //   "https://guprojects.gitam.edu/kautilya-admin/api/fetch-phd-tabsdata"
  // );
  // const data = await response.json();

  const phdDurationApi = ksppApisBasePath.phdDurationApi;

  const response = await axios.get(phdDurationApi, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  const metaComponentResponse = await MetaTagsComponent({ page: "ph-d-duration" });

  console.log("ph-d-duration Page Meta DAta", metaComponentResponse);

  const data = response.data.data;

  return {
    props: {
      tabData: data || [], metaTagsData: metaComponentResponse// Pass tabData to the page
    },
    revalidate: 60,
  };
}

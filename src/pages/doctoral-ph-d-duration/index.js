import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import DynamicTabs from "@/components/common/DynamicTabs";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

// Fetch tab data during build time
export async function getStaticProps() {
  const response = await fetch(
    "https://guprojects.gitam.edu/kautilya-admin/api/fetch-phd-tabsdata"
  );
  const data = await response.json();

  return {
    props: {
      tabData: data?.data || [], // Pass tabData to the page
    },
  };
}

// React component definition
const DoctoralPhdProgram = ({ tabData }) => {
  return (
    <MainLayout>
      <div className="p-12">
        <Link href="https://kspp.edu.in/study-at-kautilya" target="_blank">
          <Button>Download Brochure</Button>
        </Link>
        <p className="text-p mt-4">
          The Ph.D. program at the Kautilya School of Public Policy will equip
          scholars with the training that will allow them to contribute through
          their research in academia, government, business, and society.
        </p>

        <h5>
          <b>
            Lead the way in public policy innovation with impactful research.
          </b>
        </h5>

        <p>
          Our PhD program is tailored to provide you with advanced training and
          research opportunities that align with your passions and career goals.
        </p>

        <DynamicTabs tabData={tabData} />
      </div>
    </MainLayout>
  );
};

// Make sure the component is exported as the default export
export default DoctoralPhdProgram;

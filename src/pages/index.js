import FullwidthSlider from "@/components/common/fullWidthSlider";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { ksppApisBasePath } from "@/Endpoints/apisBase";
import { docsPath } from "@/Endpoints/docsBasePath";
import { ImageBasePaths } from "@/Endpoints/imageBasePaths";
import axios from "axios";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <MainLayout>
      <div className="pt-4">
        <ScreenWidth layoutwidth="false">
          <FullwidthSlider />
        </ScreenWidth>
      </div>

      {/* india by kautilya section */}
      <div className="mt-0">
        <div className="h-[10vh] bg-cover bg-center bg-red-shade flex items-center justify-center text-center pt-28 pb-48">
          <ScreenWidth layoutwidth="true">
            <div className="grid grid-cols-1 ">
              <h1 className="text-white text-2xl md:text-4xl mb-4 md:mb-12 font-semibold md:font-bold">
                {data.indiaByKc[0].title}
              </h1>
              <div className="line-below">
                <p className="text-white text-xl md:text-2xl text-center ">
                  {data.indiaByKc[0].subtitle}
                </p>
              </div>
            </div>
          </ScreenWidth>
        </div>
      </div>
      {/* Text section */}
      <div className="p-12">
        <ScreenWidth layoutwidth="false">
          <div
            dangerouslySetInnerHTML={{ __html: data.indiaByKc[0].description }}
            className="pb-4 india-by-kc"
          ></div>
        </ScreenWidth>
      </div>
      {/* gitam @ glance */}
      <div className="p-12 bg-gray">
        <ScreenWidth layoutwidth="false">
          <h1 className="text-center text-primary text-2xl md:text-4xl mb-4 md:mb-8 font-semibold md:font-bold">
            {data.gitamGlance[0].title}
          </h1>
          <div className="blackLine mb-5"></div>

          <div
            dangerouslySetInnerHTML={{
              __html: data.gitamGlance[0].description,
            }}
            className="pb-4 india-by-kc"
          ></div>

          <img
            src={`${ImageBasePaths.homeGitamGlanceDeskImagesPath}${data.gitamGlance[0].desktop_image}`}
            className="max-w-full"
            alt={data.gitamGlance[0].alt_tag}
          />
        </ScreenWidth>
      </div>

      {/* ACCREDITATIONS AND RECOGNITIONS */}
      <div className="p-12 bg-gray">
        <ScreenWidth layoutwidth="false">
          <h1 className="text-center text-primary text-2xl md:text-4xl mb-4 md:mb-8 font-semibold md:font-bold">
            ACCREDITATIONS AND RECOGNITIONS
          </h1>
          <div className="blackLine mb-5"></div>
          <div className="grid grid-cols-5 gap-5">
            {data.accRanking.map((each) => (
              <div className="flex flex-col items-center">
                <Link href={`${docsPath.acceDoc}${each.doc}`}>
                  <img
                    src={`${ImageBasePaths.homeAccRankDeskImagesPath}${each.desktop_image}`}
                    className="max-w-full"
                    alt={each.alt_tag}
                  />
                  <p className="text-center font-bold text-sm mt-4">
                    {each.img_title}
                  </p>
                </Link>
              </div>
            ))}
            {/* <div className="flex flex-col items-center">
              <img
                src="assets/img/accrediations/gitam-naac-A-grade-in-2017.jpg"
                className="max-w-full"
                alt="gitam-naac-A-grade-in-2017"
              />
              <p className="text-center font-bold text-sm mt-4">
                NAAC ‘A ++ ’ Grade in 2023
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="assets/img/accrediations/gitam-recognized-by-ugc-mhrd.jpg"
                className="max-w-full"
                alt="gitam-recognized-by-ugc-mhrd"
              />
              <p className="text-center font-bold text-sm mt-4">
                UGC Recognized as Category - ‘I’ Deemed to be University
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="assets/img/accrediations/101-150-Rank-in-NIRF-2023-University-Category.jpg"
                className="max-w-full"
                alt="101-150-Rank-in-NIRF-2023-University-Category"
              />
              <p className="text-center font-bold text-sm mt-4">
                101-150 Rank University in NIRF 2023
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="assets/img/accrediations/601-800-Rank-in-THE-mpact-Rankings-2023-in-Overall-SDGs.jpg"
                className="max-w-full"
                alt="601-800-Rank-in-THE-mpact-Rankings-2023-in-Overall-SDGs"
              />
              <p className="text-center font-bold text-sm mt-4">
                601+ Rank in THE ASIA Ranking 2023
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="assets/img/accrediations/80-in-QS-INDIA-Rankings-2022.jpg"
                className="max-w-full"
                alt="80-in-QS-INDIA-Rankings-2022"
              />
              <p className="text-center font-bold text-sm mt-4">
                93 in QS – INDIA Rankings 2023
              </p>
            </div> */}
          </div>
        </ScreenWidth>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  // const ourFaculty = `${apisBasePath.faculty}`; homeAccRanking
  const homeIndiaByKc = `${ksppApisBasePath.homeIndiaByKc}`;
  const homeGitamGlance = `${ksppApisBasePath.homeGitamGlance}`;
  const homeAccRanking = `${ksppApisBasePath.homeAccRanking}`;

  const [indiaByKc, gitamGlance, accRanking] = await Promise.all([
    axios.get(homeIndiaByKc, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }),
    axios.get(homeGitamGlance, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }),
    axios.get(homeAccRanking, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }),
  ]);

  const data = {
    indiaByKc: indiaByKc.data.data,
    gitamGlance: gitamGlance.data.data,
    accRanking: accRanking.data.data,
  };
  // console.log("home", data);
  return {
    props: { data },
    // Revalidate at most once every 60 seconds
    revalidate: 30, // In seconds
  };
}

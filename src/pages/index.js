import FullwidthSlider from "@/components/common/fullWidthSlider";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { ksppApisBasePath } from "@/Endpoints/apisBase";
import { docsPath } from "@/Endpoints/docsBasePath";
import { ImageBasePaths } from "@/Endpoints/imageBasePaths";
import axios from "axios";
import Link from "next/link";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

export default function Home({ data, metaTagsData }) {
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
    >
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
            {data.accRanking
              .sort((a, b) => a.weborder - b.weborder) // Sort based on weborder (ascending)
              .map((each) => (
                <div
                  className="flex flex-col items-center"
                  key={each.id || each.doc}
                >
                  <Link
                    href={`${docsPath.acceDoc}${each.doc}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${ImageBasePaths.homeAccRankDeskImagesPath}${each.desktop_image}`}
                      className="max-w-full"
                      alt={each.alt_tag || "Default alt text"}
                      loading="lazy"
                    />
                    <p className="text-center font-bold text-sm mt-4">
                      {each.img_title}
                    </p>
                  </Link>
                </div>
              ))}
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

  let metaComponentResponse = await MetaTagsComponent({ page: "home" });

  return {
    props: { data, metaTagsData: metaComponentResponse },

    revalidate: 60, // In seconds
  };
}

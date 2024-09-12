import FullwidthSlider from "@/components/common/fullWidthSlider";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";

export default function Home() {
  return (
    <MainLayout>
      <div className="pt-4">
        <ScreenWidth layoutwidth="false">
          <FullwidthSlider apiEndpoint="/kautilyanow_slider" />
        </ScreenWidth>
      </div>

      {/* india by kautilya section */}
      <div className=" mt-0">
        <div className="h-[10vh] bg-cover bg-center bg-[url('/assets/img/gradient-bg.jpg')] flex items-center justify-center text-center pt-28 pb-48">
          <ScreenWidth layoutwidth="true">
            <div className="grid grid-cols-1 ">
              <h1 className="text-white text-4xl mb-12 ">#Indiabykautilya</h1>
              <div className="line-below">
                <p className="text-white text-2xl ">
                  If there’s one word that well and truly defines India today,
                  it is ‘potential’.
                </p>
              </div>
            </div>
          </ScreenWidth>
        </div>
      </div>
      {/* Text section */}
      <div className=" p-12">
        <ScreenWidth layoutwidth="false">
          <p className="pb-4">
            Building a new India will require passion, long-term commitment, and
            most importantly,
            <b>a pool of public policy experts </b>formally trained in
            evidence-based policy-making, implementation, and leadership.
            Kautilya’s
            <b>vision</b> (“Working to rebalance the role of Society, Government
            &amp; Business for a more equitable and sustainable future.”) &amp;
            <b>mission</b> (“Empowering leaders to address 21st-century issues
            through rigorous public policy education.”)
          </p>

          <p>
            Kautilya brings on board the{" "}
            <b>world’s leading policy practitioners </b>drawn from
            <b>eminent institutions and international organizations</b> to
            inculcate diverse skills through one of the
            <b>finest curriculum </b> for Doctoral, and Master’s degree programs
            in Public Policy necessary for a successful career as a
            <b>public policy professional</b> in policy-making &amp; governance.
          </p>
        </ScreenWidth>
      </div>
      {/* gitam @ glance */}
      <div className="p-12 bg-gray">
        <ScreenWidth layoutwidth="false">
          <h1 className="text-4xl mb-12 text-center text-primary">
            GITAM @ A GLANCE
          </h1>
          <img
            src="assets/img/glance.jpg"
            className="max-w-full"
            alt="gitam @ glance"
          />
        </ScreenWidth>
      </div>
      {/* ACCREDITATIONS AND RECOGNITIONS */}
      <div className="p-12 bg-gray">
        <ScreenWidth layoutwidth="false">
          <h1 className="text-4xl mb-4 text-center text-primary ">
            ACCREDITATIONS AND RECOGNITIONS
          </h1>
          <div className="blackLine"></div>
          <div className="grid grid-cols-5 gap-5">
            <div className="flex flex-col items-center">
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
            </div>
          </div>
        </ScreenWidth>
      </div>
    </MainLayout>
  );
}

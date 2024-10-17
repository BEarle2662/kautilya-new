import MainLayout from "@/components/MainContainer/MainLayout";
import { ImagePaths } from "@/Endpoints/imagePath";

function MasterPublicPolicy() {
  return (
    <MainLayout>
      <div className="event4_bg bg-mpp-master bg-center bg-no-repeat bg-cover">
        <section>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
              <div className="col-span-12 text-left">
                <h5 className="mt-5 mb-5 text-4xl font-bold ">
                  The 2-year route to <br />
                  mastering public policy
                </h5>
              </div>
              <div className="hidden xl:block xl:col-span-2"></div>
              <div className="col-span-12 xl:col-span-10">
                <div className="ask_me_text mt-24 text-left">
                  <h5 className="text-2xl font-bold">ASK ME ANYTHING</h5>
                  <p className="mt-2">session with</p>
                  <p className="text-white mt-2">
                    <span className="text-black bg-white px-2 py-1 inline-block text-lg">
                      Syed Akbaruddin
                    </span>
                    <br />
                    Dean, Kautilya School of Public Policy;
                    <br />
                    Former Permanent Representative <br /> of India to the UN
                    <br />
                  </p>
                  <p className="text-white mt-4">
                    <img
                      // src="/assets/img/events/publicpolicy/calender_white.png"
                      src={ImagePaths.calenderWhite}
                      className="inline-block me-3 mb-2"
                    />
                    June 1, Thursday
                    <br />
                    <img
                      // src="/assets/img/events/publicpolicy/time_white.png"
                      src={ImagePaths.timeWhite}
                      className="inline-block me-3"
                    />
                    7:00 PM to 8:30 PM (Via Zoom)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="section_bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="text-center col-span-1">
              <h5 className="text-xl font-semibold mb-3">
                TAP INTO THE GLOBAL DEMAND FOR SUBJECT MATTER SPECIALISTS
              </h5>
              <p className="mb-4">
                The dimensions of governance, administration, public welfare,
                communication, and business are all morphing rapidly with the
                evolution of technology. Today, governments and businesses seek
                professionals who can deliver data-driven, practical solutions
                to unique challenges in management, administration, compliance,
                and much more.
              </p>
              <p>
                Join Dean Syed Akbaruddin for an in-depth session on how you can
                transform these areas of challenge into opportunities. Learn
                about the international pedagogy and immersive,
                collaboration-rich curriculum that powers the 2-year Master of
                Public Policy (MPP) program. Also, learn about the exciting new
                roles our Class of 2023 graduates have secured at leading
                organizations like Paytm, RBI-H, I-PAC, and Global Trade
                Observer.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1 text-left mb-4">
              <h4 className="pseudo_border mb-3">WHAT WILL BE COVERED?</h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="col-span-1">
              <ul className="entry_content">
                <li>What sets the 2-year MPP apart?</li>
                <li>What are the unique aspects of the curriculum?</li>
                <li>Where are our graduates placed?</li>
                <li>Where are the emerging opportunities in policymaking?</li>
                <li>
                  What makes the 2-year MPP unique in terms of a value
                  proposition?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section_bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1 text-left mb-4">
              <h4 className="pseudo_border mb-3">WHO SHOULD ATTEND?</h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="col-span-1">
              <ul className="entry_content">
                <li>Undergraduates in the final year of their course</li>
                <li>
                  Junior to middle-level professionals looking to transform
                  their careers
                </li>
                <li>UPSC aspirants</li>
                <li>MBA aspirants</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
export default MasterPublicPolicy;

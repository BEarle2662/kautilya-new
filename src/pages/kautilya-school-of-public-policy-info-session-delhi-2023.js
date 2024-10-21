import MainLayout from "@/components/MainContainer/MainLayout";
import { ImagePaths } from "@/Endpoints/imagePath";

function DelhiSession() {
  return (
    <MainLayout>
      <div className="info_session_main bg-info-session bg-center bg-no-repeat bg-cover">
        <section>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 text-left">
              <div className="col-span-1">
                <img
                  // src="/assets/img/events/publicpolicy/Info_Session_Logo.png"
                  src={ImagePaths.infoSessionLogo}
                  alt="Info Session Logo"
                  className="mb-4"
                  style={{ width: "150px" }}
                />
                <h2 className="text-6xl font-bold mt-4 mb-8">
                  Get started <br /> on your public <br /> policy career
                </h2>
                <p className="sub-title mt-2 text-3xl font-semibold">
                  Meet our leadership team <br /> to know more about the <br />
                  2-year Master in Public Policy
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="col-span-1 flex items-center justify-center">
                <img
                  // src="/assets/img/events/publicpolicy/calender_red.png"
                  src={ImagePaths.calenderRed}
                  alt="icon calendar"
                  style={{ width: "50px" }}
                  className="mr-2"
                />
                <span className="sub-text text-lg">Sunday, March 19</span>
              </div>

              <div className="col-span-1 flex items-center justify-center">
                <img
                  // src="/assets/img/events/publicpolicy/time_red.png"
                  src={ImagePaths.timeRed}
                  alt="icon time"
                  style={{ width: "50px" }}
                  className="mr-2"
                />
                <span className="sub-text text-lg">10:30 am – 1 pm</span>
              </div>

              <div className="col-span-1 flex items-center justify-center">
                <img
                  // src="/assets/img/events/publicpolicy/map_red.png"
                  src={ImagePaths.mapRed}
                  alt="icon map"
                  style={{ width: "20px" }}
                  className="mr-2"
                />
                <span className="sub-text text-lg">
                  Inspire, Le Meridien, New Delhi
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="info_section_styles py-12">
        <div className="container mx-auto">
          {/* Leadership Team Section */}
          <div className="grid grid-cols-1 text-center mb-6">
            <div className="col-span-1">
              <h4 className="text-4xl font-light">LEADERSHIP TEAM</h4>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
            <img
              // src="/assets/img/events/publicpolicy/person1.png"
              src={ImagePaths.person1}
              alt="Image 1"
              className="w-[250px] h-auto"
            />
            <img
              // src="/assets/img/events/publicpolicy/person2.png"
              src={ImagePaths.person2}
              alt="Image 2"
              className="w-[250px] h-auto"
            />
            <img
              // src="/assets/img/events/publicpolicy/person3.png"
              src={ImagePaths.person3}
              alt="Image 3"
              className="w-[250px] h-auto"
            />
          </div>

          {/* Advisory Board Members Section */}
          <div className="mt-12 grid grid-cols-1 text-center mb-6">
            <div className="col-span-1">
              <h4 className="text-4xl font-light">ADVISORY BOARD MEMBERS</h4>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
            <img
              // src="/assets/img/events/publicpolicy/person4.png"
              src={ImagePaths.person4}
              alt="Image 1"
              className="w-[250px] h-auto"
            />
            <img
              // src="/assets/img/events/publicpolicy/person5.png"
              src={ImagePaths.person5}
              alt="Image 2"
              className="w-[250px] h-auto"
            />
            <img
              // src="/assets/img/events/publicpolicy/person6.png"
              src={ImagePaths.person6}
              alt="Image 3"
              className="w-[250px] h-auto"
            />
          </div>

          {/* What You Can Expect Section */}
          <div className="mt-12 grid grid-cols-1 text-center mb-6">
            <div className="col-span-1 mb-4">
              <h4 className="text-4xl font-light">What You Can Expect</h4>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
            <img
              // src="/assets/img/events/publicpolicy/expect1.png"
              src={ImagePaths.expect1}
              alt="Image 1"
              class="max-w-[75%] h-auto align-top"
            />
            <img
              // src="/assets/img/events/publicpolicy/expect2.png"
              src={ImagePaths.expect2}
              alt="Image 2"
              class="max-w-[75%] h-auto align-top"
            />
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
            <img
              // src="/assets/img/events/publicpolicy/expect3.png"
              src={ImagePaths.expect3}
              alt="Image 3"
              class="max-w-[75%] h-auto align-top"
            />
            <img
              // src="/assets/img/events/publicpolicy/expect4.png"
              src={ImagePaths.expect4}
              alt="Image 4"
              class="max-w-[75%] h-auto align-top"
            />
          </div>
        </div>
      </section>

      <section className="infosection_bg py-12 min-h-[40vh] bg-footer-bg bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 text-center mb-6">
            <div className="col-span-1">
              <h4 className="text-3xl font-bold text-white">
                About Kautilya’s Master in <br /> Public Policy
              </h4>
              <div className="vc_empty_space my-4 h-[250px]"></div>
              <p className="text-lg text-white">
                The Kautilya Master in Public Policy is a 2-year, full-time
                residential program designed to expand your knowledge, enhance
                skills, and instill values. Our curriculum embraces
                international pedagogical and research outlook, while combining
                the ground realities of India and her citizens.
              </p>
            </div>
          </div>

          {/* Icon Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
            <img
              // src="/assets/img/events/publicpolicy/icontext1.png"
              src={ImagePaths.icontext1}
              alt="Icon 1"
              className="w-[80px] h-auto"
            />
            <img
              // src="/assets/img/events/publicpolicy/icontext2.png"
              src={ImagePaths.icontext2}
              alt="Icon 2"
              className="w-[80px] h-auto"
            />
            <img
              // src="/assets/img/events/publicpolicy/icontext3.png"
              src={ImagePaths.icontext3}
              alt="Icon 3"
              className="w-[80px] h-auto"
            />
            <img
              // src="/assets/img/events/publicpolicy/icontext4.png"
              src={ImagePaths.icontext4}
              alt="Icon 4"
              className="w-[80px] h-auto"
            />
            <img
              // src="/assets/img/events/publicpolicy/icontext5.png"
              src={ImagePaths.icontext5}
              alt="Icon 5"
              className="w-[80px] h-auto"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
export default DelhiSession;

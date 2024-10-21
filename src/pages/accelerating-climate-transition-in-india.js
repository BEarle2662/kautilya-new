import MainLayout from "@/components/MainContainer/MainLayout";
import { ImagePaths } from "@/Endpoints/imagePath";

function ClimateTransition() {
  return (
    <MainLayout>
      <div className=" bg-climate-policy bg-center bg-no-repeat bg-cover">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="row">
              <div className="m-5 p-5 col-span-12"></div>
              <div className="mb-5 text-center">
                <p className="text-4xl text-white font-bold">
                  Let’s Talk <br />
                  <span className="font-extrabold mb-5">Policy</span>
                </p>
              </div>
              <div className="text-white col-span-12">
                <p className="text-3xl font-bold text-white">
                  Accelerating Climate <br /> Transition in India
                </p>
                <p className="text-white mt-2">
                  <small>
                    Opportunities &amp; Challenges at a Time of Global Boiling
                  </small>
                </p>
                <div className="ltp-event mt-4 mb-5">
                  <span className="block text-lg mb-3">
                    <img
                      width="24"
                      src={ImagePaths.calenderWhite}
                      alt="Calendar Icon"
                      className="inline-block mr-2"
                    />
                    <span className="font-semibold">
                      September 27, Wednesday
                    </span>
                  </span>
                  <span className="block text-lg">
                    <img
                      width="24"
                      src={ImagePaths.timeWhite}
                      alt="Time Icon"
                      className="inline-block mr-2"
                    />
                    <span className="font-semibold">
                      7:30 PM – 8:30 PM (Via Zoom)
                    </span>
                  </span>
                </div>
                <a
                  className="bg-black border border-black rounded-lg text-white font-semibold text-xl py-2.5 px-10 mt-5 w-fit"
                  href="https://gitam.zoom.us/webinar/register/WN_J5QAY-dQT8yKhvSQe9qErw"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <img
                  src={ImagePaths.manisha}
                  alt="Manish Image"
                  class="max-w-[75%] h-auto align-top"
                />
              </div>
              <div>
                <img
                  src={ImagePaths.namita}
                  alt="Namita Image"
                  class="max-w-[75%] h-auto align-top"
                />
              </div>
              <div>
                <img
                  src={ImagePaths.anitaBhatia}
                  alt="Anita Bhatia Image"
                  class="max-w-[75%] h-auto align-top"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-green-900 md:py-12 py-8 bg-climate-bg-text bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            <div className="text-left">
              <h4 className="text-2xl font-bold text-white mb-4">
                SOLAR, MISSION LIFE… WHAT ELSE IS IN INDIA’S ARSENAL?
              </h4>
              <div className="h-1 bg-white w-24 mb-4"></div>
              <p className="text-white mb-4">
                The July of 2023 has been reported as the hottest month on
                record. Heightened temperatures sparked weather anomalies that
                quickly exacerbated health issues and spread widespread
                devastation. In India, climate-linked disasters ravaged wide
                swathes of the Northern and Western regions.
              </p>
              <p className="text-white">
                In this context, India’s ambitious global goals of becoming the
                back-office and manufacturer of the world have been the subject
                of much debate, applause, and even criticism. As such, how do
                these global events shape India’s strategy to eliminate
                emissions? Is New Delhi’s slew of policy measures enough? Join
                our experts for hearing both sides of the coin.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            <div className="text-left">
              <h4 className="pseudo_border mb-4">
                WHAT THE SESSION WILL COVER
              </h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div>
              <ul className="entry_content">
                <li>
                  Where do India’s efforts to achieve net-zero emissions stand?
                </li>
                <li>
                  What is the future of India’s efforts to push for climate
                  accountability from developed nations?
                </li>
                <li>
                  Is there a solution to the standoff over the Paris Agreement
                  climate goals?
                </li>
                <li>
                  Are India’s efforts to ramp up power generation from renewable
                  sources being adopted in the right manner?
                </li>
                <li>
                  What are the policy-level deadlocks to achieving a global
                  consensus on climate funding?
                </li>
                <li>
                  What are the emerging opportunities India can tap into for
                  furthering ground-level adoption of climate-conscious
                  strategies?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 text-left">
            <h4 className="pseudo_border mb-4">WHO SHOULD ATTEND?</h4>
            <div className="heading_border mb-4"></div>
          </div>
          <div className="grid grid-cols-1">
            <ul className="entry_content">
              <li>Graduates and those in the final year of their program</li>
              <li>UPSC Aspirants</li>
              <li>
                Members of think tanks, consultancies involved in sustainable
                development
              </li>
              <li>Members of research organizations</li>
              <li>Students of global trade and foreign policy</li>
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
export default ClimateTransition;

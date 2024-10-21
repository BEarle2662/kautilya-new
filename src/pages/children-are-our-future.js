import MainLayout from "@/components/MainContainer/MainLayout";
import { ImagePaths } from "@/Endpoints/imagePath";

function ChildrensFuture() {
  return (
    <MainLayout>
      <div className="children_future_bg bg-children-policy bg-no-repeat bg-cover">
        {/* First Section */}
        <section>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-1 p-5">
              <div className="mx-20 my-20 p-10 w-full"></div>
              <div className="mb-[2.25rem] w-full">
                <p className="text-white text-3xl mb-5">
                  Let’s Talk
                  <br />
                  <span className="font-bold">Policy</span>
                </p>
              </div>

              <div className="col-span-1">
                <p className="text-white text-4xl mb-16">
                  <span className="font-bold">Children are our Future:</span>
                  <br />
                  <span className="text-2xl">
                    A post-pandemic view of educational
                    <br />
                    opportunities and challenges in India
                  </span>
                </p>
                <p className="mt-4 text-white mb-5">
                  <span className="flex items-center text-lg mb-3">
                    <img
                      className="w-6"
                      src={ImagePaths.calenderWhite}
                      alt="Calendar Icon"
                    />
                    <span className="ml-2 font-semibold">
                      September 27, Wednesday
                    </span>
                  </span>
                  <span className="flex items-center mt-2 text-lg">
                    <img
                      className="w-6"
                      src={ImagePaths.timeWhite}
                      alt="Time Icon"
                    />
                    <span className="ml-2 font-semibold">
                      7:30 PM – 8:30 PM (Via Zoom)
                    </span>
                  </span>
                </p>
                <p className="mt-4">
                  <a
                    href="https://gitam.zoom.us/webinar/register/WN_J5QAY-dQT8yKhvSQe9qErw"
                    className="bg-black border border-black rounded-lg text-white font-semibold text-xl py-2.5 px-10 mt-5 w-fit"
                  >
                    Register Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="bg-black py-5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <div>
                <img
                  src={ImagePaths.one}
                  alt="Image 1"
                  class="max-w-[75%] h-auto align-top"
                />
              </div>
              <div>
                <img
                  src={ImagePaths.two}
                  alt="Image 2"
                  class="max-w-[75%] h-auto align-top"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-1">
            <div className="col-span-1">
              <h4 className="pseudo_border mb-4">
                WHAT THE SESSION WILL ADDRESS
              </h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="col-span-1">
              <ul className="entry_content">
                <li>What’s the status of NEP implementation on the ground?</li>
                <li>
                  What are the macroeconomic and social impacts of children
                  leaving the education system?
                </li>
                <li>
                  Are OTT platforms, digital channels, and mobile-based
                  classrooms keeping up with physical classrooms?
                </li>
                <li>
                  What are the factors that impede drop-outs from restarting
                  their education?
                </li>
                <li>
                  Which policy interventions can strengthen the education system
                  from systemic shocks like the COVID-19 pandemic?
                </li>
                <li>
                  How effective are Edu-tech platforms in bridging the gap with
                  a public-private solution?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="text-left">
            <h4 className="pseudo_border mb-4">WHO SHOULD ATTEND?</h4>
            <div className="heading_border mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="entry_content">
                <li>School teachers, principals, and administrators</li>
                <li>
                  Graduate students or those in the final year of their program
                </li>
                <li>UPSC aspirants</li>
                <li>Aspirants of state-level teachers’ posts</li>
              </ul>
            </div>
            <div>
              <ul className="entry_content">
                <li>Administrators of coaching institutes/centers</li>
                <li>University faculty members</li>
                <li>HR professionals</li>
                <li>Edu-tech executives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
export default ChildrensFuture;

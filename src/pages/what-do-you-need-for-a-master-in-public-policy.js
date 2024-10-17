import MainLayout from "@/components/MainContainer/MainLayout";
import { ImagePaths } from "@/Endpoints/imagePath";

function MasterInPublicPolicy() {
  return (
    <MainLayout>
      <section className="MasterPP bg-master-public bg-center bg-no-repeat bg-cover py-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4">
            <div className="col-span-12 p-3 m-3"></div>

            <div className="col-span-12">
              <div className="top-div">
                <h2 className="text-[40px] leading-[50px] text-left font-medium md:leading-tight text-[#2c394c]">
                  What do you need for a<br />
                  <b>Master in Public Policy?</b>
                </h2>
              </div>
            </div>

            <div className="col-span-12">
              <div className="flex items-start">
                <img
                  // src="/assets/img/talkseries/publicpolicy/Prateek-Kanwal.png"
                  src={ImagePaths.PrateekKanwal}
                  alt="Prateek Kanwal"
                  className="w-1/4"
                />
                <div>
                  <p className="text-lg AMA-txt text-[20px] pt-[110px]">
                    Join the AMA
                    <br />
                    on Admissions
                    <br />
                    and careers with our
                    <br />
                    Co-Founder
                    <br />
                    <span className="font-bold AMA-Pra">Prateek Kanwal</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <div className="flex items-center time_date">
                <img
                  // src="/assets/img/talkseries/publicpolicy/calender_red.png"
                  src={ImagePaths.calenderRed}
                  alt="Calendar"
                  className="w-[60px] mr-2"
                />
                <h4 className="text-xl font-bold">February 5, 2023</h4>
              </div>
            </div>

            <div className="col-span-12 mb-5">
              <div className="flex items-center time_date">
                <img
                  // src="/assets/img/talkseries/publicpolicy/time_red.png"
                  src={ImagePaths.timeRed}
                  alt="Time"
                  className="w-[60px] mr-2"
                />
                <h4 className="text-xl font-bold">5:00 pm to 6:30 pm IST</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-22">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-12">
              <p className="text-white text-center mb-4">
                From migration to climate change, poverty to cyber security;
                governments, businesses, and civil society members have begun to
                understand that following traditional mechanisms is neither
                bringing development nor solving the socio-economic problems of
                today.From migration to climate change, poverty to cyber
                security; governments, businesses, and civil society members
                have begun to understand that following traditional mechanisms
                is neither bringing development nor solving the socio-economic
                problems of today.{" "}
              </p>
              <p className="text-white text-center">
                If you wish to solve these 21st-century challenges and, in the
                process, build an impactful career, then the field of public
                policy can be both rewarding and fulfilling.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-12">
              <h4 className="pseudo_border text-lg font-bold mb-3">
                WHAT WILL THE SESSION ADDRESS?
              </h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="col-span-12">
              <p>
                The session will address a few key questions of aspiring public
                policy students, like:
              </p>
              <ul className="entry_content">
                <li>Is this the right career option for me?</li>
                <li>
                  What kind of roles are offered by companies to an MPP
                  graduate?
                </li>
                <li>What does the growth pathway look like?</li>
                <li>
                  How is Kautilya transforming the public policy education
                  landscape in India?
                </li>
                <li>How do we incubate our students?</li>
                <li>Why is our curriculum a cut above the rest?</li>
                <li>Does Kautilya have internship and placement assistance?</li>
                <li>
                  What should I keep in mind to submit the perfect application
                  form?
                </li>
                <li>Does Kautilya provide scholarships?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section_bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-12">
              <h4 className="pseudo_border text-lg font-bold mb-3">
                WHO SHOULD ATTEND?
              </h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="col-span-12">
              <ul className="entry_content">
                <li>
                  Those aspiring to build a career in public life, public
                  policy, governance and administration, the social sector, and
                  other related fields
                </li>
                <li>
                  Academicians, researchers, and other professionals working in
                  the above-mentioned fields
                </li>
                <li>Young Indians who want to build a better India</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="MasterPP2 bg-[url('/assets/img/talkseries/publicpolicy/MasterInPublicPolicy_footer_bg.jpg')] bg-center bg-no-repeat bg-cover py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-12">
              <h4 className="eventsubtitle-lineheight2 text-white text-xl font-bold">
                <strong>ABOUT THE SPEAKER</strong>
              </h4>
              <div className="heading_border_white mb-4"></div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <p className="text-white">
                Prateek Kanwal, Co-Founder of Kautilya School of Public Policy,
                did his Master in Public Policy (MPP) from the Harvard Kennedy
                School. He was awarded the prestigious World Bank scholarship
                for his work in the areas of education reform and social
                innovation. He is currently the Director of Policy and Advocacy
                at NewGlobe Education. He is also the Founder of Citizens for
                Public Leadership.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default MasterInPublicPolicy;

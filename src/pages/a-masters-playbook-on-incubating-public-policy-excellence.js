import MainLayout from "@/components/MainContainer/MainLayout";

function MasterPlaybook() {
  return (
    <MainLayout>
      <section className="masterPlayBook bg-play-outlook bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            {/* Empty div for spacing */}
            <div className="m-4 p-4"></div>

            {/* Main Content */}
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/publicpolicy/ask.jpg"
                alt="A master's playbook"
                className="w-[350px]"
              />
              <p className="LTP-tit1 mt-4">
                <span className="bg-black text-white text-2xl">
                  A master’s playbook on incubating
                  <br />
                  public policy excellence
                </span>
              </p>

              {/* Flexbox for Syed Akbaruddin section */}
              <div className="flex space-x-4 mt-4">
                {/* Image */}
                <div>
                  <img
                    src="/assets/img/talkseries/publicpolicy/Dean.jpg"
                    alt="Syed Akbaruddin"
                    className="w-[200px]"
                  />
                </div>

                {/* Description */}
                <div>
                  <p>
                    <span className="ltp-syed text-[#b51c21] text-2xl font-semibold">
                      Syed Akbaruddin
                    </span>
                  </p>
                  <p className="LTP-txt-sm">
                    Dean, Kautilya School of Public Policy:
                    <br />
                    Former Permanent Representative
                    <br />
                    of India to the UN
                  </p>
                  <p className="time_date mt-2">
                    <img
                      src="/assets/img/talkseries/publicpolicy/calender_red.png"
                      alt="Calendar"
                      className="inline-block w-[60px]"
                    />
                    <span className="ml-2">June 27, Tuesday</span>
                    <br />
                    <img
                      src="/assets/img/talkseries/publicpolicy/time_red.png"
                      alt="Time"
                      className="inline-block w-[60px]"
                    />
                    <span className="ml-2">7:30 pm (Via Zoom)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            {/* Title Section */}
            <div className="col-span-1">
              <h4 className="eventsubtitle-lineheight2 text-center text-dark mb-4 text-2xl font-bold">
                UPGRADE FROM A GENERALIST TO A SPECIALIST
              </h4>

              {/* Paragraphs */}
              <p className="text-center text-md mb-4">
                From decoding regional laws to introducing new technologies to
                the masses, the discipline of public policy is an overarching,
                multidisciplinary path to driving change. Pressing challenges
                such as the climate crisis and global economic instability also
                require an arsenal of policy-driven, unique solutions.
              </p>
              <p className="text-center text-md">
                Join Dean Akbaruddin for an Ask Me Anything session for expert
                insights into how you can develop the expertise and technical
                competencies that corporations and governments are looking for.
                His decades-long career in public service is the backbone of the
                2-year Master of Public Policy (MPP).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            {/* Title Section */}
            <div className="col-span-1">
              <h4 className="pseudo_border text-2xl font-bold mb-3">
                WHAT WILL BE COVERED
              </h4>
              <div className="heading_border mb-4"></div>
            </div>

            {/* Content Section */}
            <div className="col-span-1">
              <ul className="entry_content">
                <li>
                  What’s driving the demand for public policy specialists?
                </li>
                <li>
                  What are the avenues available to aspiring policymakers?
                </li>
                <li>What are the career paths you can pursue after the MPP?</li>
                <li>What kind of roles have MPP graduates secured?</li>
                <li>
                  How does the MPP ensure upskilling and holistic development?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section_bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            {/* Title Section */}
            <div className="col-span-1">
              <h4 className="pseudo_border text-2xl font-bold mb-3">
                WHO SHOULD ATTEND?
              </h4>
              <div className="heading_border mb-4"></div>
            </div>

            {/* Content Section */}
            <div className="col-span-1">
              <ul className="entry_content">
                <li>Graduates and those in the final year of their program</li>
                <li>Junior and mid-level corporate executives</li>
                <li>Media professionals</li>
                <li>UPSC aspirants</li>
                <li>
                  Citizens passionate about problem-solving and community
                  development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default MasterPlaybook;

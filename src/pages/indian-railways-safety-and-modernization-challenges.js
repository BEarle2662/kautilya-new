import MainLayout from "@/components/MainContainer/MainLayout";

function RailwaySafty() {
  return (
    <MainLayout>
      <section className="railwaySaftey bg-railway-bg bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            {/* Spacer */}
            <div className="m-4 p-4 col-span-1"></div>

            {/* Title Section */}
            <div className="mb-5 col-span-1">
              <p className="LTP-txt text-black text-2xl font-semibold">
                Let’s Talk <span className="font-bold mb-5">Policy</span>
              </p>
            </div>

            {/* Content Section */}
            <div className="col-span-1">
              <p className="LTP-tit text-3xl font-bold text-white">
                Indian Railways – Safety and <br /> Modernization <br />{" "}
                Challenges
              </p>
              <br />
              <p className="ltp-event mt-5 text-white">
                <span className="LTP eventicon text-black font-bold">
                  Date :
                  <span className="text-white font-semibold ml-2">
                    June 21, 2023 (via Zoom)
                  </span>
                  <br />
                  <br />
                  Time :
                  <span className="text-white font-semibold ml-2">
                    7:00 pm – 8:00 pm IST
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/Mahesh-Mangal.jpg"
                alt="Mahesh Mangal"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/Alok-Verma.jpg"
                alt="Alok Verma"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/Smita.jpg"
                alt="Smita"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="railwaySaftey2 py-8 bg-railway-mid bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <h4 className="eventsubtitle-lineheight2 text-white text-left text-2xl mb-3 font-bold">
                <strong>CLEARING THE ROUTE FOR INDIA’S RAILWAY JOURNEY</strong>
              </h4>
              <div className="heading_border_white mb-4"></div>
              <p className="text-white mb-4">
                India’s rail infrastructure is one of its primary economic and
                social lifelines. As of August 2022, the Indian Railways is
                operating 11,000 trains every day, of which, 7,000 are passenger
                trains. Each day, the Railways serve 13 million passengers
                across India on a route length of 68,000 km.
              </p>
              <p className="text-white">
                While India has introduced many projects since the 1970s to
                upgrade Infrastructure and expand the network, bottlenecks in
                procurement, project development challenges, and various other
                issues have hobbled these initiatives. Join our expert panel for
                a profound debate on finding the balance between modernizing the
                railway infrastructure and bolstering safety and operational
                protocols.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <h4 className="pseudo_border text-white text-left mb-3">
                WHAT YOU CAN EXPECT
              </h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="col-span-1">
              <ul className="entry_content">
                <li>
                  What are the kinds of challenges India is facing in upgrading
                  its rail infrastructure?
                </li>
                <li>
                  What initiatives are currently in place to build capacity?
                </li>
                <li>
                  What are the policy solutions that can help break the
                  gridlock?
                </li>
                <li>
                  What impact has the government’s Mission Raftar had so far?
                </li>
                <li>
                  In India’s push for upgraded freight corridors, how can policy
                  help shape the road ahead?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <h4 className="pseudo_border text-left mb-3">
                WHO SHOULD ATTEND
              </h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <ul className="entry_content">
                  <li>Transportation and design engineers</li>
                  <li>Members of transport organizations</li>
                  <li>Urban and rural town planners</li>
                  <li>Emergency services personnel</li>
                </ul>
              </div>
              <div className="col-span-1">
                <ul className="entry_content">
                  <li>Disaster management organizations</li>
                  <li>
                    Members of think tanks, consultancies pertaining to urban
                    and rural mobility
                  </li>
                  <li>Aspirants of public policy studies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default RailwaySafty;

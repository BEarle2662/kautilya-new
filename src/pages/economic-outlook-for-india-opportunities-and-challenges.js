import MainLayout from "@/components/MainContainer/MainLayout";

function EconomicOutlook() {
  return (
    <MainLayout>
      <div className="oppChallanges bg-eco-outlook bg-center bg-no-repeat bg-cover">
        <section>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-4">
              {/* Empty Div with margin and padding */}
              <div className="m-4 p-4 col-span-1"></div>

              {/* Let’s Talk Policy Section */}
              <div className="mb-5 col-span-1">
                <p className="LTP-txt text-2xl font-semibold text-black">
                  Let’s Talk<span className="font-bold mb-5">Policy</span>
                </p>
              </div>

              {/* Economic Outlook Section */}
              <div className="col-span-1 text-white">
                <p className="LTP-tit text-4xl font-semibold text-white">
                  Economic Outlook
                  <br /> for India –
                </p>
                <p className="font-light text-2xl mt-2 text-white mb-8">
                  Opportunities and Challenges
                </p>

                {/* Event Info Section */}
                <p className="ltp-event mt-5">
                  <span className="LTP eventicon text-black font-bold mb-8">
                    Date :
                    <span className="font-semibold ml-2 text-white">
                      July 13, Thursday
                    </span>
                    <br />
                    <br />
                    Time :
                    <span className="font-semibold ml-2 text-white mt-4">
                      7:30 pm (via Zoom)
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {/* First Image */}
            <div>
              <img
                src="/assets/img/talkseries/talkpolicy/Manisha.jpg"
                alt="Manisha"
                class="max-w-[75%] h-auto align-top"
              />
            </div>

            {/* Second Image */}
            <div>
              <img
                src="/assets/img/talkseries/talkpolicy/Anita.jpg"
                alt="Anita"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="oppChallanges2 bg-global-bg bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            {/* Title and Subtitle */}
            <div className="col-span-1 text-white">
              <h4 className="eventsubtitle-lineheight2 text-2xl font-bold mb-3">
                India’s decade on the global stage – Myth or Reality?
              </h4>
              <div className="heading_border_white mb-4"></div>

              {/* First Paragraph */}
              <p className="text-white">
                Global economic turbulence is showing signs of abating but
                long-term stability remains out of sight. Multilateral
                organizations, however, are bullish about India’s growth
                prospects in this decade. Domestically, demand is rising, while
                inflation has become a hotly contested issue.
              </p>

              {/* Second Paragraph */}
              <p className="text-white mt-4">
                Tune in to a comprehensive analysis of India’s performance on
                the global charts and the way ahead. Our expert panel member and
                moderator Anita Bhatia will deconstruct the white noise around
                India’s growth story and lay out a data-driven roadmap of the
                opportunities New Delhi has and the bottlenecks it faces in
                driving the development curve with an eye on the 2024 general
                elections.
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
                WHAT THE SESSION WILL ADDRESS
              </h4>
              <div className="heading_border mb-4"></div>
            </div>

            {/* List Section */}
            <div className="col-span-1">
              <ul className="entry_content">
                <li>
                  What steps is India taking to push its share of global GDP?
                </li>
                <li>
                  What are the foreign policy initiatives that New Delhi has
                  adopted to drive its global standing?
                </li>
                <li>
                  How are the economic measures for welfare and ease of doing
                  business faring?
                </li>
                <li>
                  What impact will further pressure on global supply chains have
                  on India’s input/output dynamics?
                </li>
                <li>
                  Pitched as the voice of the global south, what are the options
                  available to India for furthering economic relief across the
                  grouping?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section_bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {/* Title Section */}
            <div className="col-span-1 xl:col-span-2">
              <h4 className="pseudo_border text-2xl font-bold mb-3">
                WHO SHOULD ATTEND?
              </h4>
              <div className="heading_border mb-4"></div>
            </div>

            {/* Left Column - First List */}
            <div>
              <ul className="entry_content">
                <li>Aspiring policymakers</li>
                <li>Foreign policy, international trade students</li>
                <li>UPSC aspirants</li>
              </ul>
            </div>

            {/* Right Column - Second List */}
            <div>
              <ul className="entry_content">
                <li>Journalists</li>
                <li>Researchers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default EconomicOutlook;

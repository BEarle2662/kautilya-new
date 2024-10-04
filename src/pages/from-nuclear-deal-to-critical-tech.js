import MainLayout from "@/components/MainContainer/MainLayout";

function NuclearDeal() {
  return (
    <MainLayout>
      <div className="nuclearDealtoTech bg-talk-policy-bg bg-center bg-no-repeat bg-cover">
        <section>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 xl:grid-cols-1 gap-4">
              {/* First Section */}
              <div className="m-4 p-4 col-span-1"></div>

              {/* "Let’s Talk Policy" Section */}
              <div className="mb-5 col-span-1">
                <p className="LTP-txt text-black text-2xl font-semibold">
                  Let’s Talk<span className="bold mb-5">Policy</span>
                </p>
              </div>

              {/* Title and Event Info Section */}
              <div className="col-span-1 text-white">
                <p className="LTP-tit text-3xl font-semibold text-white">
                  From Nuclear Deal
                  <br /> to Critical Tech
                </p>
                <p className="font-light text-2xl mt-2 mb-5 text-white mb-16">
                  The New Chapter in India-US Ties
                </p>

                <div className="ltp-event mt-12">
                  <div className="LTP eventicon flex items-center space-x-2">
                    <img
                      className="mb-2.5 w-[30px] mr-2"
                      src="/assets/img/talkseries/talkpolicy/calender_white.png"
                      alt="Calendar"
                    />
                    <span className="font-semibold text-lg">
                      July 27, Thursday
                    </span>
                  </div>
                  <div className="LTP eventicon flex items-center space-x-2 mt-2">
                    <img
                      className="mb-2.5 w-[30px] mr-2"
                      src="/assets/img/talkseries/talkpolicy/time_white.png"
                      alt="Time"
                    />
                    <span className="font-semibold text-lg">
                      7:00 PM – 8:00 PM IST 9:30 AM – 10:30 AM EST (via Zoom)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {/* First Image */}
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/Lisa.png"
                alt="Lisa"
                className="max-w-[75%] h-auto align-top"
              />
            </div>

            {/* Second Image */}
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/Navtej.png"
                alt="Navtej"
                className="max-w-[75%] h-auto align-top"
              />
            </div>

            {/* Third Image */}
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/Smita.png"
                alt="Smita"
                className="max-w-[75%] h-auto align-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="nuclearDealtoTech2 bg-[url('/assets/img/talkseries/talkpolicy/middle_bg.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1">
            <div className="col-span-1 text-white">
              {/* Title */}
              <h4 className="eventsubtitle-lineheight2 font-bold text-white text-3xl mb-3">
                DECODING THE US-INDIA PARADIGM
              </h4>

              {/* Border */}
              <div className="heading_border_white mb-4"></div>

              {/* Paragraph 1 */}
              <p className="text-white">
                Fortified ties between New Delhi and Washington were the
                centerpiece of Prime Minister Narendra Modi’s three-day visit to
                the US last month. Both governments resolved long-standing trade
                disputes and forged new agreements in defense cooperation,
                technology sharing, and mineral sharing.
              </p>

              {/* Paragraph 2 */}
              <p className="text-white mt-4">
                What remained off the table during PM Modi’s high-profile
                addresses was a defined stance on the Russia-Ukraine war and the
                acrimony with China. India’s bid to become the “factory of the
                world” did get some space in the dialogues in the context of
                semiconductor processing and packaging, but the tag remains a
                far cry. Decode the implications of these developments with our
                expert panel.
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
              <h4 className="pseudo_border mb-3">WHAT WILL BE COVERED</h4>
              <div className="heading_border mb-4"></div>
            </div>

            {/* List Section */}
            <div className="col-span-1">
              <ul className="entry_content">
                <li>
                  What does the resolution of key trade disputes mean for
                  India’s exports?
                </li>
                <li>
                  To what extent do the technology-sharing agreements aid
                  India’s vision as a global manufacturer?
                </li>
                <li>
                  What’s the road ahead for joint nuclear projects that have
                  been stalled for over a decade?
                </li>
                <li>
                  PM Modi’s visit did not include any official talks on the
                  stalled FTA negotiations. What are the policy roadmaps that
                  can help break the deadlock?
                </li>
                <li>
                  What is the mineral sharing partnership and what action is
                  required on India’s part?
                </li>
                <li>
                  To what extent can the ICET partnership aid India’s technical
                  capabilities?
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

            {/* List Section */}
            <div className="col-span-1">
              <ul className="entry_content">
                <li>
                  Graduates and students in the final year of their program
                </li>
                <li>
                  Members of think tanks involved in global trade, research, and
                  foreign policy
                </li>
                <li>Civil services aspirants</li>
                <li>
                  Members of domestic and global trade organizations and
                  industry associations
                </li>
                <li>Students of international relations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default NuclearDeal;

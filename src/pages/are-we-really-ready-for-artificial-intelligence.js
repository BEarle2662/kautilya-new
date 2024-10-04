import MainLayout from "@/components/MainContainer/MainLayout";

function AI() {
  return (
    <MainLayout>
      <section className="readyforAI bg-ai-bg bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div className="m-3 p-3 col-span-1">
              {/* You can add any content here if needed */}
            </div>
            <div className="col-span-1">
              <div className="top-div text-left">
                <div className="mb-8 col-span-1">
                  <h4 className="cus-public text-white text-3xl font-light">
                    Let’s Talk Policy
                  </h4>
                </div>
                <h4 className="k-h2 eventsubtitle-lineheighttit text-white font-bold text-5xl mb-12">
                  Are we
                  <br />
                  <span className="font-light">really ready for</span>
                  <br />
                  <span className="inner-tit-main text-white">
                    artificial
                    <br />
                    intelligence?
                  </span>
                </h4>
                <h4 className="cus-time text-white font-normal text-xl pt-8">
                  May 04, 2023 (via Zoom)
                  <br />
                  7:00 pm – 8:00 pm IST
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/Amar.jpg"
                alt="Amar"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/Nikhil.jpg"
                alt="Nikhil"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/Mishi.jpg"
                alt="Mishi"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/Nidhi.jpg"
                alt="Nidhi"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
              <h4 className="eventsubtitle-lineheight2 text-white font-bold text-3xl mb-3">
                WHAT THE AI-ENABLED FUTURE HOLDS FOR HUMANITY
              </h4>
              <div className="heading_border_white mb-4"></div>
            </div>
            <div className="col-span-1">
              <p className="text-white">
                Artificial intelligence (AI) has become the buzzword for
                disruption in recent months. Businesses of all scales,
                entrepreneurs, and students are all trying to leverage AI-based
                solutions in their pursuit of growth. It’s important, therefore,
                to understand the growth trajectories of this technology and its
                implications on employment, safety, security, and accuracy of
                output.
              </p>
              <p className="text-white">
                Join our expert panel, moderated by renowned journalist Nidhi
                Razdan, for an exploration of how AI-based solutions are being
                developed, the problems they are trying to solve, and who stands
                to benefit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
              <h4 className="pseudo_border text-left text-xl font-bold mb-3">
                WHAT WILL BE COVERED
              </h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="col-span-1">
              <ul className="entry_content">
                <li>
                  What do the advances in algorithms, computing power, and data
                  explosion mean for the advancement in AI?
                </li>
                <li>
                  What does the age of Artificial General Intelligence (AGI) and
                  Artificial Superintelligence (ASI) portend?
                </li>
                <li>
                  Are we equipped to deal with superintelligent agents that can
                  compete against humans?
                </li>
                <li>
                  Will employers still hire humans over AI agents in the future?
                </li>
                <li>
                  Do we have policies in place to tackle this revolutionary
                  existential change?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section_bg py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
              <h4 className="pseudo_border text-left text-xl font-bold mb-3">
                WHO SHOULD ATTEND
              </h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="col-span-1">
              <ul className="entry_content">
                <li>Business owners</li>
                <li>Corporate sector employees</li>
                <li>
                  Research and activist groups focusing on tech-led innovation
                </li>
                <li>Management professionals</li>
                <li>Aspiring journalists</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default AI;

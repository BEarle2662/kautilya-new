import MainLayout from "@/components/MainContainer/MainLayout";

function ImpactfulCareer() {
  return (
    <MainLayout>
      <section className="buildImpact bg-impact-bg bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <h2 className="text-start mt-5 text-4xl leading-tight font-extrabold text-[#2c394c] mb-3">
                How to build an
                <br />
                impactful career in
                <br />
                Public Policy?
              </h2>
              <p className="text-primary pb-0 mb-4">
                An Ask-Me-Anything Session With
              </p>
              <h4 className="text-primary pb-0 mb-0 text-4xl mb-4">
                <strong>Mr. Prateek Kanwal,</strong>{" "}
                <span className="text-xl">Co-founder</span>
              </h4>
              <p className="text-primary">
                of Kautilya School of Public Policy
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <p className="bg-primary text-white p-2 text-2xl font-bold">
                17th December | 7-8 pm
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
            <div className="xl:col-span-9">
              <p className="text-primary">
                From migration to climate change, poverty to cybersecurity,
                governments, businesses and civil society have begun to
                understand that following traditional mechanisms does not seem
                to bring the development that will solve the socio-economic
                problems of today.
              </p>
              <p className="text-primary">
                If you are passionate about solving the new age problems and
                creating a difference, while growing personally and
                professionally then MPP is for you.
              </p>
              <p className="text-primary">
                Learn how you can scale up your career in public policy in our
                upcoming session on ‘How to build an impactful career in Public
                Policy?’.
              </p>
            </div>
            <div className="xl:col-span-3">
              <img
                src="/assets/img/talkseries/publicpolicy/prateek.png"
                alt="Mr. Prateek Kanwal"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#212529]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <p className="text-white text-center">
                Listen to Mr. Prateek Kanwal, Co-founder of Kautilya School of
                Public Policy, MPP – Harvard Kennedy School; Project Director,
                Ekatrit at Educate Girls, and Founder of Citizens for Public
                Leadership, talk about his journey into the world of Public
                Policy and his thoughts on choosing it as an exciting career
                option.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
            <div className="text-center">
              <img
                src="/assets/img/talkseries/publicpolicy/7.png"
                alt="Public Policy Environment"
                class="max-w-[75%] h-auto align-top"
              />
              <p className="text-primary mt-2 text-left">
                <strong>Public Policy environment</strong> and its application
                across different domains
              </p>
            </div>
            <div className="text-center">
              <img
                src="/assets/img/talkseries/publicpolicy/8.png"
                alt="Career Opportunities"
                class="max-w-[75%] h-auto align-top"
              />
              <p className="text-primary mt-2 text-left">
                <strong>Career opportunities in</strong> public and private
                sector
              </p>
            </div>
            <div className="text-center">
              <img
                src="/assets/img/talkseries/publicpolicy/9.png"
                alt="Growth Pathway"
                class="max-w-[75%] h-auto align-top"
              />
              <p className="text-primary mt-2 text-left">
                <strong>Growth pathway;</strong> academic and professional
              </p>
            </div>
            <div className="text-center">
              <img
                src="/assets/img/talkseries/publicpolicy/10.png"
                alt="Learning Opportunities"
                class="max-w-[75%] h-auto align-top"
              />
              <p className="text-primary mt-2 text-left">
                <strong>Learning opportunities;</strong> networking, conferences
                etc.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="CareerInPP2 bg-impact-footer bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <h4 className="eventsubtitle-lineheight2 text-white font-bold text-3xl mb-3">
                Who should attend?
              </h4>
              <ul className="entry_content text-white">
                <li>
                  Those aspiring to build a career in public life, public policy
                  and administration, governance, media, journalism and
                  communications, politics, social sector and other related
                  fields.
                </li>
                <li>
                  Academicians, researchers, journalists and professionals
                  working in or following the fields mentioned above.
                </li>
                <li>
                  Young Indians, passionate about bringing about change and
                  building India.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <h5 className="text-primary text-center text-xl">
                KNOW MORE ABOUT HOW TO STRUCTURE A CAREER IN THE FIELD OF PUBLIC
                POLICY
              </h5>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ImpactfulCareer;

import MainLayout from "@/components/MainContainer/MainLayout";

function ShapeUp() {
  return (
    <MainLayout>
      <div className="mt-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1 ms-auto">
              <p className="bg-black text-white float-right py-1 px-3 font-bold">
                INVITE US TO A COLLEGE WEBINAR
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="politicalCompanion mt-0 bg-shape-bg bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="m-3 p-3 col-span-1"></div>
            <div className="col-span-1">
              <div className="top-div text-left">
                <img
                  src="/assets/img/talkseries/talkpolicy/quote.png"
                  alt="Quote"
                  className="mb-8"
                />
                <h4 className="cus-public text-white text-3xl mb-12">
                  Let’s Talk Policy
                </h4>
                <h4 className="k-h2 eventsubtitle-lineheighttit text-white text-5xl font-bold mb-12">
                  Political campaigns in
                  <br />
                  Can they shape up <br />
                  narratives for 2024?
                </h4>
                <h4 className="cus-time text-white text-xl">
                  13th Sep, 2022 | 07:00 pm – 8:00 pm
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <p className="text-center mb-4">
              Since the 70s, election campaigns have undergone major shifts in
              the world’s oldest democracy, the United States of America. By the
              mid-90s, modern political campaigns in the US involved expensive
              and exhausting strategy, planning, and execution. In India,
              meanwhile, a whopping Rs 55,000-60,000 crore was spent in the
              general elections of 2019, according to a study by the Centre for
              Media Studies (CMS), a not-for-profit multi-disciplinary
              development research think-tank. The study report titled ‘Poll
              Expenditure: The 2019 Elections’ termed the last polls in India as
              the ‘most expensive election ever, anywhere.’ The report estimated
              a near six-fold jump in overall expenditures from Rs 9,000 crore
              in the Loksabha elections 2019. With high money and power at
              stake, election campaign management and political consultancies
              have emerged as key tools for electoral battles. In this episode
              of Let’s Talk Policy, we look at the history of election campaigns
              in India and the US, the impact of political consultancies on
              public policy formulation, and how the narratives will shape up
              for the big 2024 elections in India.
            </p>
            <p className="text-center mb-4">
              Let’s Talk Policy is a series of discussions by Kautilya School of
              Public Policy that brings together speakers and experts from
              various fields. Here they share insights on national and global
              issues and build a conversation for the student community.
            </p>
            <p className="text-center mb-4">
              Up for discussion are major themes around the economy, democracy,
              politics, and human rights.
            </p>
          </div>
        </div>
      </section>
      <section className="politicalCompanion2 bg-shape-panalist bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-white text-2xl">Panelist</h2>
          </div>

          {/* Centered Panelist Image */}
          <div className="flex justify-center mb-8">
            <img
              src="/assets/img/talkseries/talkpolicy/steve.png"
              alt="Panelist 1"
              class="max-w-[75%] h-auto align-top"
            />
          </div>

          {/* Row with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex justify-center">
              <img
                src="/assets/img/talkseries/talkpolicy/ashutosh.png"
                alt="Panelist 2"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div className="flex justify-center">
              {/* Empty column for spacing */}
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/img/talkseries/talkpolicy/vasu_singh.png"
                alt="Panelist 3"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
          </div>

          {/* Centered Panelist Image */}
          <div className="flex justify-center mt-8 mb-8">
            <img
              src="/assets/img/talkseries/talkpolicy/shape_smita.png"
              alt="Panelist 4"
              class="max-w-[75%] h-auto align-top"
            />
          </div>
        </div>
      </section>
      <section className="politicalCompanion3 bg-shape-mid bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Empty Column for Spacing */}
            <div className="col-span-1"></div>

            <div className="col-span-2">
              <div className="mb-8">
                <h4 className="pseudo_border text-left mb-3">
                  What will be discussed?
                </h4>
                <div className="heading_border mb-4"></div>
              </div>

              <ul className="entry_content">
                <li>
                  The history of political campaigns in the world’s oldest and
                  largest democracies
                </li>
                <li>The emergence of third-party political consultancies</li>
                <li>
                  How political campaigns are being designed to bring in
                  electoral change?
                </li>
                <li>
                  Do political campaigns merge with public policy in defining
                  the parameters of elections?
                </li>
                <li>
                  How does a professionally managed election campaign drive
                  content and manage to package?
                </li>
                <li>
                  What does the run-up to the general elections of 2024 look
                  like?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1 text-center mb-8">
              <h4 className="pseudo_border mb-3">Who should attend?</h4>
              <div className="heading_border mx-auto mb-4"></div>
            </div>
            <div className="col-span-1">
              <ul className="entry_content">
                <li>
                  Young Indians who are committed to bringing about change and
                  building India.
                </li>
                <li>
                  Those aspiring to build a career in politics, public policy,
                  public administration, journalism, political consulting,
                  psephology, public relations, image consulting and related
                  fields.
                </li>
                <li>
                  Those working as researchers, academicians, journalists, and
                  in the fields mentioned above.
                </li>
                <li>Others who take a deep interest in the subject.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ShapeUp;

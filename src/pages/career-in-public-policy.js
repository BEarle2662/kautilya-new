import MainLayout from "@/components/MainContainer/MainLayout";
import { ImagePaths } from "@/Endpoints/imagePath";

function Career() {
  return (
    <MainLayout>
      <section className="CareerInPP bg-career-bg bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <h2 className="mt-5 text-white text-start text-4xl leading-tight font-extrabold">
                Careers in
                <br />
                Public Policy
              </h2>
              <p className="text-white mt-5 mb-3">Ask Me Anything With</p>
              <h4 className="text-white mb-4">
                <span className="text-5xl">Prateek Kanwal,</span>{" "}
                <span className="text-white text-lg"> Co-founder</span>
              </h4>
              <p className="text-white mb-6">
                of Kautilya School of Public Policy
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-5">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <div className="border-b-[50px] border-b-[#b11016] border-r-[48px] border-r-[rgba(255,51,255,0.039)] h-0 w-1/2">
                <p className="title-subtext text-white text-2xl font-bold mb-0 pt-2 px-2">
                  17th December | 7-8 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
            <div className="xl:col-span-9">
              <p className="text-white">
                From migration to climate change, poverty to cybersecurity,
                governments, businesses and civil society have begun to
                understand that following traditional mechanisms does not seem
                to bring the development that will solve the socio-economic
                problems of today.
              </p>
              <p className="text-white">
                If you want to solve these 21st century challenges and in the
                process build an impactful career, then the field of Public
                Policy can be both rewarding and fulfilling.
              </p>
              <p className="text-white">
                Know all the heights that you can reach in public policy in our
                upcoming session on Careers in Public Policy.
              </p>
            </div>
            <div className="xl:col-span-3">
              <img
                src={ImagePaths.prateek}
                alt="Prateek Kanwal"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <p className="text-primary">
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

        <div className="container mx-auto mt-5">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
            <div className="text-center">
              <img
                src={ImagePaths.seven}
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
                src={ImagePaths.eight}
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
                src={ImagePaths.nine}
                alt="Growth Pathway"
                class="max-w-[75%] h-auto align-top"
              />
              <p className="text-primary mt-2 text-left">
                <strong>Growth pathway;</strong> academic and professional
              </p>
            </div>
            <div className="text-center">
              <img
                src={ImagePaths.ten}
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

export default Career;

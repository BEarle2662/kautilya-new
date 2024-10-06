import MainLayout from "@/components/MainContainer/MainLayout";
import { ImagePaths } from "@/Endpoints/imagePath";

function BraveNewWorld() {
  return (
    <MainLayout>
      <div className="bravenewworld_bg py-12 bg-brave-bg bg-center bg-no-repeat bg-cover">
        <section>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 text-center">
              <div className="col-span-1">
                <p className="text-2xl font-semibold leading-snug text-black">
                  Let’s Talk
                  <br /> Policy
                </p>
                <p className="text-white leading-none mb-6">
                  <span className="bg-black p-0.5  text-2xl font-semibold">
                    Brave New World:
                  </span>
                </p>
                <p className="text-3xl font-semibold">
                  <span className="bg-white text-black mb-8 p-0.5">
                    Public Policy and AI
                  </span>
                  <br />
                  <span className="text-2xl font-light text-white mt-2">
                    Dissecting the importance of AI in driving social progress,
                    economic growth, and environmental sustainability
                  </span>
                </p>
                <p className="ltp-event mt-6 text-white flex flex-col">
                  <span className="flex items-center space-x-3">
                    <img
                      className="w-6"
                      src={ImagePaths.calenderWhite}
                      alt="Calendar Icon"
                    />
                    <span>November 17, Friday</span>
                  </span>
                  <span className="flex items-center space-x-3 mt-2">
                    <img
                      className="w-6"
                      src={ImagePaths.timeWhite}
                      alt="Time Icon"
                    />
                    <span>7:30 PM – 8:30 PM (Via Zoom)</span>
                  </span>
                </p>
                <p className="mt-6">
                  <a
                    href="https://gitam.zoom.us/webinar/register/WN_uyDsZsz4TuiWsTssZTu-9A"
                    className="bg-black border border-black rounded-lg text-white font-semibold text-xl py-2.5 px-10 mt-5 w-fit"
                  >
                    Register Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <img
                src={ImagePaths.sowmya}
                alt="Sowmya"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div className="col-span-1">
              <img
                src={ImagePaths.anitha}
                alt="Anitha"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <p className="text-white">
                The rapidly evolving realm of Artificial Intelligence (AI) has
                made it imperative to conduct a deliberate assessment of its
                implications for public policy. AI, characterized by its
                data-driven algorithms and machine learning capabilities, has
                demonstrated remarkable potential across a spectrum of domains.
                This transformative technological advancement has far-reaching
                effects on various aspects of our lives, whether it be daily
                routines or professional pursuits.
              </p>
              <p className="text-white mt-4">
                Join us in an insightful discussion featuring Sowmya Iyer,
                Founder and CEO of DVIO Digital, and Anita Bhatia, Founder of
                Impact Commons, as they delve into the pivotal role of
                government in both facilitating and regulating AI. Additionally,
                the discussion will address the intricacies and opportunities
                that have surfaced with the ascent of AI in the Indian context.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <h4 className="pseudo_border mb-3">
                WHAT THE SESSION WILL ADDRESS
              </h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="col-span-1">
              <ul className="entry_content">
                <li className="mb-2">
                  What should be the role of the government in enabling AI?
                </li>
                <li className="mb-2">
                  What are the implications of AI for different sectors
                  including healthcare and manufacturing?
                </li>
                <li className="mb-2">
                  What are the opportunities and challenges arising from the use
                  of AI in India?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-2 text-left">
              <h4 className="pseudo_border mb-3">WHO SHOULD ATTEND?</h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div>
              <ul className="entry_content">
                <li>Government Officials and Policymakers</li>
                <li>Academics and Researchers</li>
              </ul>
            </div>
            <div>
              <ul className="entry_content">
                <li>Technology Innovators</li>
                <li>Entrepreneurs and Startups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
export default BraveNewWorld;

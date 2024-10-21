import MainLayout from "@/components/MainContainer/MainLayout";
import { ImagePaths } from "@/Endpoints/imagePath";

function UniteIndia() {
  return (
    <MainLayout>
      <section className="uniteDivide bg-unite-divide bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="row">
            <div className="m-5 p-5 w-full"></div>
            <div className="col-xl-12">
              <div className="top-div text-left">
                <h4 className="cus-public text-black text-3xl font-light mb-8">
                  <strong>Let’s Talk Policy</strong>
                </h4>
                <h4 className="k-h2  text-4xl text-[#b51c21] font-semibold mb-8">
                  Can India Unite
                  <br />a Divided G20?
                </h4>
                <h4 className="cus-time text-gray-800 text-xl mb-12 mt-44">
                  07:00 pm – 8:00 pm IST
                  <br />
                  24th January 2023 (Via Zoom)
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <img
                src={ImagePaths.u1}
                alt="Image 1"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div>
              <img
                src={ImagePaths.u2}
                alt="Image 2"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div>
              <img
                src={ImagePaths.u3}
                alt="Image 3"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div>
              <img
                src={ImagePaths.u4}
                alt="Image 4"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-10 bg-unite-divide-mid bg-center bg-no-repeat bg-cover">
        {" "}
        {/* Optional background color */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="m-5">
              <h4 className="eventsubtitle-lineheight2 text-white text-2xl font-bold mb-3">
                <strong>AT THE G20 HELM AMID GLOBAL TURMOIL</strong>
              </h4>
              <div className="heading_border_white mb-4" />
              <p className="text-white text-base mb-2">
                The G20 grouping represents two-thirds of the world’s population
                and about 85% of the global GDP. India took over its presidency
                last year amid heightened tension over the Russia-Ukraine
                conflict and an uneasy relationship with China.
              </p>
              <p className="text-white text-base mb-2">
                Global economic upheaval and the road to recovery from the
                Covid-19 pandemic have also strained multilateralism. Over the
                course of the year, India has the opportunity to steer the G20
                grouping through these inflection points while looking out for
                its own strategic interests.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="mb-5">
              <h4 className="pseudo_border text-2xl font-bold mb-3">
                WHAT WILL BE COVERED
              </h4>
              <div className="heading_border mb-4" />
            </div>
            <div className="mb-5">
              <p className="text-base">
                In this episode of Let’s Talk Policy, our panel experts will
                discuss and answer questions which are at the core of this
                renewed policy and its impact on India and her citizens.
              </p>
              <ul className="entry_content">
                <li>
                  The G20 summit in Bali last year, where India took over the
                  presidency, saw a deeply divided grouping. Can India leverage
                  its unique position of sharing warm ties with both the US-led
                  West and Russia to bridge this divide?
                </li>
                <li>
                  Can India mediate between the warring sides to help negotiate
                  a resolution to the conflict?
                </li>
                <li>
                  How can the G20 presidency be an opportunity for India to
                  pitch its long-held proposition of a multipolar global order?
                </li>
                <li>
                  Can India lead the Global South (broadly covering regions of
                  Asia, Africa, Oceania and Latin America)?
                </li>
                <li>
                  What are the key challenges for its foreign policy in the year
                  ahead?
                </li>
                <li>
                  How can G20 address challenges left in the wake of the
                  pandemic, economic devastation and social upheaval?
                </li>
                <li>
                  How can India ensure that the G20 summit scheduled to be held
                  in Delhi in September results in fruitful negotiations?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section_bg py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="mb-5">
              <h4 className="pseudo_border text-2xl font-bold mb-3">
                WHO WILL BENEFIT
              </h4>
              <div className="heading_border mb-4" />
            </div>
            <div>
              <ul className="entry_content">
                <li>
                  Students of foreign trade, business, policy, and international
                  relations
                </li>
                <li>
                  Aspiring journalists, researchers, academicians, and
                  professionals
                </li>
                <li>Political commentators, public service professionals</li>
                <li>Entrepreneurs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default UniteIndia;

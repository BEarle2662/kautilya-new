import MainLayout from "@/components/MainContainer/MainLayout";

function UnpackingLaw() {
  return (
    <MainLayout>
      <section className="dataProtection bg-un-packing bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="m-3 p-3 w-full"></div>
            <div className="w-full">
              <div className="top-div text-left">
                <h4 className="ctext-black text-3xl mb-14">
                  Let’s Talk Policy
                </h4>
                <h4 className="k-h2 font-semibold text-dark text-4xl mb-12">
                  Data Protection
                  <br />
                  Bill 2022
                  <br />
                  Unpacking the
                  <br />
                  Revised Law
                </h4>
                <h4 className="cus-time text-dark text-xl mb-14">
                  07:00 pm – 8:00 pm IST
                  <br />
                  December 21, 2022
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/gupta.png"
                alt="Image 1"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/prasanth.png"
                alt="Image 2"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/muktesh.png"
                alt="Image 3"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/assets/img/talkseries/talkpolicy/smita_m.png"
                alt="Image 4"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 bg-un-packing-mid bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <div className="my-5">
                <h4 className="text-white text-2xl font-bold leading-tight mb-4">
                  <strong>The Data Protection Bill 2022 – An Overview</strong>
                </h4>
                <div className="heading_border_white mb-4"></div>
                <p className="text-white mb-4">
                  The draft Digital Personal Data Protection Bill 2022 was
                  introduced after the withdrawal of the Personal Data
                  Protection Bill, 2019. The draft Bill sets out the rights and
                  duties of the citizen and the obligations of the Data
                  Fiduciary to use the collected data lawfully.
                </p>
                <p className="text-white">
                  There are debates on whether this bill is an improvement over
                  its previous avatar or if it is attempting to balance national
                  security with global diplomacy and cross-border co-operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <h4 className="pseudo_border mb-3">What will be discussed?</h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="col-span-1">
              <p className="text-lg mb-4">
                In this episode of Let’s Talk Policy, our panel experts will
                discuss and answer questions which are at the core of this
                renewed policy and its impact on India and her citizens.
              </p>
              <ul className="entry_content">
                <li>
                  In this webinar, we will deliberate the grey areas and
                  significant upgrades of the proposed Bill.
                </li>
                <li>
                  One departure from the previous Bill are the concessions on
                  cross-border data flows and a softer stand on data
                  localisation requirements. What fostered this development as
                  the same government was not in favor of data transfer earlier?
                </li>
                <li>
                  The new Bill’s acknowledgement of ‘withdraw consent’
                  recognises the right of a person to postmortem privacy. An
                  important clause, that was missing from the 2019 Bill. What
                  impact does this have on our people?
                </li>
                <li>
                  The developments indicate India is strengthening its stance on
                  data protection, inspired by international best-practices, but
                  there are still complaints of lacunae. How can the Government
                  leverage its ever-strengthening role in the global order
                  against the backdrop of the nation’s G20 Presidency?
                </li>
                <li>
                  What is the role of the Data Fiduciary as global tech giants
                  continue to collect vast amounts of personal, private and
                  identifiable data?
                </li>
                <li>
                  Does the draft Bill accord substantial citizen recourse? How
                  accountable are the key stakeholders in the process of
                  collecting and passing private data through multiple
                  downstream channels?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <h4 className="pseudo_border mb-3">Who should attend?</h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="col-span-1">
              <ul className="entry_content">
                <li>
                  Young Indians who are committed to bringing about change and
                  building India
                </li>
                <li>
                  Those aspiring to build a career in politics, public policy,
                  public administration, journalism, political consulting,
                  public relations, image consulting and related fields
                </li>
                <li>
                  Researchers, academicians, journalists, and professionals in
                  the fields mentioned above
                </li>
                <li>Others who take a deep interest in the subject</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
export default UnpackingLaw;

import MainLayout from "@/components/MainContainer/MainLayout";
import { ImagePaths } from "@/Endpoints/imagePath";

function November() {
  return (
    <MainLayout>
      <section className="lets_talk oct_talk bg-nov-bg bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-2">
            <div className="mt-5">
              <p className="eventoutline text-white text-lg border border-white inline-block p-2">
                PANEL DISCUSSION
              </p>
              <div className="flex items-center">
                <span>
                  <img src={ImagePaths.quoteRed4Sep} alt="Quote Icon" />
                </span>
                <p className="LTP-txt ml-2 text-white text-2xl">
                  Let’s Talk <br />
                  <span className="font-bold mb-5">Policy</span>
                </p>
              </div>
              <p className="LTP-tit text-white text-2xl">
                INDIA’S CYBER SECURITY CHALLENGE: HOW CAN WE FIGHT BACK?
              </p>
              <div className="flex space-x-4 mb-5">
                <span className="flex items-center">
                  <img src={ImagePaths.calenderWhite} alt="Date Icon" />
                  <span className="LTP-tit ml-2 text-white text-xl">
                    November 25th, 2021
                  </span>
                </span>
                <span className="flex items-center">
                  <img src={ImagePaths.timeWhite} alt="Time Icon" />
                  <span className="LTP-tit ml-2 text-white text-xl">
                    7 – 8PM IST
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lets_talk modarate penalist bg-[#b51c21]">
        <div className="container mx-auto text-white">
          <h2 className="text-left text-4xl font-bold mb-8">
            About the Panelists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <img
                src={ImagePaths.nidhiRazdan}
                alt="Nidhi Razdan"
                class="max-w-[75%] h-auto align-top bg-white"
              />
              <div className="mt-12 ml-8">
                <h4 className="font-semibold mb-3">EVENT MODERATED BY</h4>
                <h5 className="font-bold">Nidhi Razdan</h5>
                <p className="text-white">
                  Visiting Faculty, Kautilya
                  <br />
                  Former Executive Editor, NDTV
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                src={ImagePaths.Pranesh}
                alt="Pranesh Prakash"
                class="max-w-[75%] h-auto align-top bg-white"
              />
              <div className="mt-12 ml-8">
                <h5 className="font-bold mb-3">Pranesh Prakash</h5>
                <p className="text-white">
                  Co-Founder, Centre for Internet &amp;
                  <br />
                  Society Affiliated Fellow – Yale Law
                  <br />
                  School’s Information Society Project
                </p>
              </div>
            </div>

            <div className="flex items-start mb-3">
              <img
                src={ImagePaths.jiten}
                alt="Jiten Jain"
                class="max-w-[75%] h-auto align-top bg-white"
              />
              <div className="mt-12 ml-8">
                <h5 className="font-bold mb-3">Jiten Jain</h5>
                <p className="text-white">
                  Director, Voyager Infosec <br />
                  Consortium
                </p>
              </div>
            </div>

            <div className="flex items-start mb-3">
              <img
                src={ImagePaths.trisha}
                alt="Trisha Ray"
                class="max-w-[75%] h-auto align-top bg-white"
              />
              <div className="mt-12 ml-8">
                <h5 className="font-bold mb-3">Trisha Ray</h5>
                <p className="text-white">
                  Associate Fellow, Centre for Security
                  <br />
                  Strategy and Technology, ORF
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_evnt">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-5">About the Event</h2>
          <p className="mb-4">
            In recent years, the government, corporations, and individuals have
            faced a huge challenge with cybersecurity, as hostile state and
            non-state actors use technology to launch a new kind of warfare. The
            pandemic has only made those challenges greater. Just days ago,
            India’s Chief of Defence Staff, General Bipin Rawat, said
            cyber-crimes went up by almost 500% in India during the global
            pandemic. He said emerging threats from new technologies such as
            drones, ransomware, and the role of nation-states in such
            cyber-attacks need to be addressed. Our dependence on technology has
            increased more than ever before.
          </p>
          <p className="mb-4">
            India is now in the final stages of clearing its first-ever National
            Cybersecurity Strategy in the wake of this threat. Indian officials
            say the time has come for a stand-alone cybersecurity law. Around
            80% of Indian organizations are likely to increase their
            cybersecurity budget in 2022, according to a survey by global
            consultancy firm PwC.
          </p>
          <p>
            So how can the country deal with this challenge, and what shape
            should the new policy take? Join us for the Let’s Talk Policy
            session on November 25th at 7 pm and hear from our panelists
            including Jiten Jain, Director, Voyager Infosec Consortium; Pranesh
            Prakash, co-founder, Centre for Internet &amp; Society; and Trisha
            Ray of ORF on the rising dependency of organizations on information
            technology and how the sensitive nature of digitally-stored data has
            raised the stakes for cyber attackers.
          </p>
        </div>
      </section>
      <section className="bg-black text-white">
        <div className="container mx-auto">
          <p className="mb-4 text-white text-lg">
            <span className="font-bold ">‘Let’s Talk Policy’</span>{" "}
            <b>
              is a panel discussion series initiated by Kautilya School of
              Public Policy
            </b>
            , that brings forth a select group of panellists, sharing differing
            views on key issues of national and global relevance, and building
            the dialogue into a conversation for the student community.
          </p>
          <p className="text-white text-lg">
            The series aims to unravel major themes around democracy, politics,
            and human rights, and explore the challenges and rewards of
            implementing practices. We aim to create a cohesive platform and
            call on thematic experts to foster a healthy dialogue around the
            most pressing issues.
          </p>
        </div>
      </section>
      <section className="attendees bg-nov-bg-footer bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-white">Attendees</h2>
          <p className="mb-2 text-white">
            Young Indians, passionate about bringing about positive change and
            building India.
          </p>
          <p className="mb-2 text-white">
            Those aspiring to build a career in public life, public policy and
            administration, social sector, media, journalism and communications,
            politics, and other related fields.
          </p>
          <p className="mb-2 text-white">
            Academicians, researchers, and journalists working in or following
            the fields mentioned above.
          </p>
          <p className="mb-4 text-white">
            Those watching the unfolding Afghanistan crisis closely – and are
            keen to hear from experts with relevant experience at the highest
            level.
          </p>
        </div>

        <section className="bg-black text-white">
          <div className="container mx-auto px-4">
            <p className="mb-4 text-white">
              <span>‘Let’s Talk Policy’</span>
              <b>
                {" "}
                is a panel discussion series initiated by Kautilya School of
                Public Policy
              </b>
              , that brings forth a select group of panellists, sharing
              differing views on key issues of national and global relevance,
              and building the dialogue into a conversation for the student
              community.
            </p>
            <p className="text-white">
              The series aims to unravel major themes around democracy,
              politics, and human rights, and explore the challenges and rewards
              of implementing practices. We aim to create a cohesive platform
              and call on thematic experts to foster a healthy dialogue around
              the most pressing issues.
            </p>
          </div>
        </section>
      </section>
    </MainLayout>
  );
}

export default November;

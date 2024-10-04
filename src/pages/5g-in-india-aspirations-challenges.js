import MainLayout from "@/components/MainContainer/MainLayout";

function IndiaAspirations() {
  return (
    <MainLayout>
      <div className="challange5g bg-five-bg bg-center bg-no-repeat bg-cover">
        <section className="py-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1">
              <div className="col-span-1">
                <div className="wpb_wrapper py-8">
                  <h2 className="text-white text-3xl md:text-4xl font-medium leading-tight text-left mb-4">
                    Let’s Talk Policy
                  </h2>
                  <h2 className="text-white text-4xl font-semibold leading-tight text-left mb-8">
                    5G In India – Aspirations & Challenges
                  </h2>
                  <p className="text-white mt-3 text-2xl">
                    24th August 2022 | 6:00 P.M – 7:00 P.M
                  </p>
                  <p className="text-white text-2xl">
                    Venue: Kautilya School of Public Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="social_icons container mx-auto">
          <div className="grid grid-cols-1 mb-4">
            <div className="col-span-1">
              <h2 className="text-2xl text-red-600 font-extrabold text-left">
                Join Us
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex-1">
              <img
                src="/assets/img/talkseries/talkpolicy/social_twitter.png"
                alt="Social Icon 1"
              />
            </div>
            <div className="flex-1">
              <img
                src="/assets/img/talkseries/talkpolicy/social_facebook.png"
                alt="Social Icon 2"
              />
            </div>
            <div className="flex-1">
              <img
                src="/assets/img/talkseries/talkpolicy/social_youtube.jpg"
                alt="Social Icon 3"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="challange5g2 bg-five-sep bg-center bg-no-repeat bg-cover">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 mb-4">
            <div className="col-span-1">
              <h2 className="text-2xl text-red-600 font-extrabold text-left">
                About the panelists
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex justify-center">
              <img
                src="/assets/img/talkseries/talkpolicy/5g_prashant.png"
                alt="Panelist 1"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/img/talkseries/talkpolicy/5g_puru.png"
                alt="Panelist 2"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/img/talkseries/talkpolicy/5g_nazeer.png"
                alt="Panelist 3"
                class="max-w-[75%] h-auto align-top"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/img/talkseries/talkpolicy/5g_smita.png"
                alt="Panelist 4"
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
              <p className="text-lg text-gray-700 mb-4">
                India is gearing up for the rollout of 5th generation or 5G
                technology in line after the 4G LTE. As the world’s second
                largest wireless market, 5G is expected to revolutionise several
                key sectors in India. The recently held auction for 5G spectrum
                in India ended with the biggest players in the telecom industry
                bidding a combined 19 billion US dollars. Reliance Jio was the
                highest bidder, spending 11 billion dollars on the upgraded
                technology, followed by major players Vodafone Idea and Bharti
                Airtel, and new entrant Adani Data Networks.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With 5G, signals run over new radio frequencies with three
                different methods, depending on the type of assets a wireless
                carrier has: low-band network, high-band network, and mid-band
                network. The roll-out of 5G, likely this October, is anticipated
                to unlock potential economic growth aided by improved mobile
                broadband and fixed wireless access.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                In the 5G ecosystem, how will AR/VR act as a building block for
                all emerging technologies? Can 5G propel India into a digital
                and technological powerhouse?
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This Let’s Talk Policy will see our experts discuss the
                potential of 5G technology and multiple challenges involved in
                the rollout related to privacy, security, legislation,
                infrastructure, monetisation, traffic management, and sensing.
                Listen in to insights on how these challenges can be tackled.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default IndiaAspirations;

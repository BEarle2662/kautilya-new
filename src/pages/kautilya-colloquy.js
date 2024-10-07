import MainLayout from "@/components/MainContainer/MainLayout";
import Image from "next/image";
import React from "react";
import aboutConclave from "../../public/assets/img/events/colloquy/banner.jpg";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";

function AboutConclave() {
  return (
    <MainLayout>
      {/* Banner Section */}
      <div className="financial-ad"></div>
      <div className="mt-[-120px] md:mt-[-160px]">
        <ScreenWidth layoutwidth="true">
          <div className="">
            <Image
              src={aboutConclave}
              alt="Conclave Banner"
              width={0}
              height={0}
              className="h-full w-full"
            />
          </div>
        </ScreenWidth>
      </div>
      <ScreenWidth layoutwidth="true">
        {/* Content Section */}
        <div className="container mt-3">
          {/* Aim Section */}
          <div className="mb-4 md:mb-8 headingWithBG">
            <h4 className="text-base md:text-2xl font-bold bg-gray-100 p-2 text-left">
              Aim
            </h4>
            <p className="mt-2 md:mt-4   text-justify">
              The objective of the policy event is to offer a platform for
              public policy professionals to come together, interact, and engage
              in collective learning.
            </p>
          </div>

          {/* Objective Section */}
          <div className="mb-4 md:mb-8 headingWithBG">
            <h4 className="text-base md:text-2xl font-bold bg-gray-100 p-2 text-left">
              Objective
            </h4>
            <div className="mt-2 md:mt-4 space-y-4 text-justify">
              <p>
                <b>Paper Presentation –</b> Public policy is a significant tool
                for growth for any country. Especially when it comes to aiming
                for equity in growth for a developing country like India. Thus,
                the purpose of the paper presentation is to invite public policy
                professionals in our country to share their ideas regarding
                policy initiatives that can foster equitable growth in India.
                This encompasses various areas- Government and Business; Human
                Rights, Law, and Democracy; Economics for Development;
                Governance and Society; and International Relations.
              </p>
              <p>
                <b>Simulation –</b> Climate change stands as the foremost and
                most critical challenge confronting the world in the present
                era. With the potential to have far-reaching, intersectional
                consequences which can have a devastating impact on life on
                Earth. Our international institutions have thus far failed to
                bring forth very fruitful results. The objective of the
                Simulation is to facilitate interaction among public policy
                professionals, allowing them to delve into the intricacies of
                international negotiations. Through this process, we aim to
                collectively explore potential solutions to address the global
                threat of climate change.
              </p>
            </div>
          </div>

          {/* Message from Core Committee Section */}
          <div className="mb-4 md:mb-8 headingWithBG">
            <h4 className="text-base md:text-2xl font-bold bg-gray-100 p-2 text-left">
              Message from the Core Committee
            </h4>
            <div className="mt-2 md:mt-4 space-y-4 text-justify">
              <p>
                India stands at a critical juncture in its history. It has
                reached the perch of geopolitical importance. The United States
                of America, once known for imposing sanctions in response to
                India’s nuclear tests in 1998, now actively collaborates with
                all levels of the Indian government, forging a formalized
                alliance. India has emerged as a prominent figure in the “Global
                South,” with neighboring South Asian nations and even African
                countries turning to India for support in advancing their
                interests on the global stage.
              </p>
              <p>
                Today, India possesses a formidable platform to redefine global
                norms and practices. With expanding export markets, rapidly
                urbanizing metropolitan areas, and highly competitive Indian
                professionals making their mark worldwide, India is experiencing
                significant success. However, it is important to acknowledge
                that along with these remarkable achievements, there are also
                profound challenges and setbacks that need to be addressed. As
                per a report from Oxfam, the top 10% of the Indian population
                holds 77% of the total national wealth. Our state’s capacity
                when it comes to resources and manpower to attend to the diverse
                needs of the country is highly limited. With different
                political, social, and economic dynamics in every state and
                Union Territory, the need of the hour is to decentralize policy
                formulation and implementation.
              </p>
              <p>
                This is exactly what we do in the classrooms of Kautilya School
                of Public Policy. Coming from highly diverse backgrounds, we are
                exposed to the development sector veterans (IAS officers,
                ThinkTanks, former ambassadors, academicians, practitioners)
                across various sectors. As students, we analyze and interpret
                this wealth of information through our own individual lenses.
                The ensuing discussions and debates from this exchange of ideas
                are truly stimulating and energizing.
              </p>
              <p>
                Our aspiration for this conference is to replicate the dynamics
                of our classroom on a larger scale. We truly believe that to
                make our democracy great, we need more of our country’s minds
                working on the ‘wicked problems’ of this country and sharing
                insights with each other. And while we are sharing insights,
                there is a possibility that you might unlock a personal or an
                intellectual roadblock of your professional journey. We are
                incredibly excited to be a part of that transformative
                experience.
              </p>
              <p>
                We extend our hopes that you thoroughly enjoy the event and
                eagerly anticipate your presence at Kautilya!
              </p>
              <p className="text-left font-semibold">
                Yours Sincerely, <br /> Core Committee
              </p>
            </div>
          </div>
        </div>
      </ScreenWidth>
    </MainLayout>
  );
}

export default AboutConclave;

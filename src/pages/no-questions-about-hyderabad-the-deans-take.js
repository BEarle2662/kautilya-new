import ScreenWidth from "@/components/MainContainer/ScreenWidth";

import blogIntro from "../../public/assets/img/blogs/blog_intro.jpg";
import syed from "../../public/assets/img/blogs/syed.jpg";
import Image from "next/image";
import { Avatar } from "@material-tailwind/react";
import MainLayout from "@/components/MainContainer/MainLayout";

function BlogsIntro() {
  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        <div className="blog_intro">
          <h4 className="text-base font-bold uppercase mb-4">OPINION</h4>
          <h1 className="text-[22px] md:text-[42px] font-extrabold leading-8 md:leading-10 mb-8">
            No Questions about Hyderabad: The Dean’s Take
          </h1>
          <div>
            <Image
              src={blogIntro}
              width={0}
              height={0}
              alt="blog-intro"
              className="h-full w-full"
            />
          </div>

          <div className="flex items-center  pt-6 pb-0 md:p-6">
            <Avatar
              size="lg"
              variant="circular"
              alt=""
              src={syed}
              className="border-2 border-white hover:z-10 mr-3"
            />
            <div className="font-extrabold text-[#424a53]">
              <span>
                By,
                <br />
                <span>
                  {" "}
                  Syed Akbaruddin,Dean – Kautilya School of Public Policy
                </span>
              </span>
            </div>
          </div>

          <div className="mt-4 mb-3"></div>

          <p>
            I never thought I would ever come back to Hyderabad. When I left in
            1985, the city of my upbringing, the not-so-big city at the time,
            was something I was eager to leave behind in the quest to be a
            global nomad. After 35 years I am back. Now, a Rip Van Winkle-like
            figure, I realize that the dusty lanes have been converted into
            expressways, and the neighbourhood shops have evolved into swanky
            malls. The quintessential heart of the{" "}
            <a href="https://www.telanganatourism.gov.in/partials/about/arts-crafts/pearls.html">
              city of pearls
            </a>{" "}
            though remains as it was. Along with its neighbour Bengaluru,
            Hyderabad has grown as a centre for{" "}
            <a href="https://www.india-briefing.com/news/indias-tech-hubs-bengaluru-vs-hyderabad-19023.html/">
              information technology
            </a>
            , a <a href="https://invest.telangana.gov.in/pharma/">pharma hub</a>{" "}
            and a boomtown attracting global investments. Still, the Ganga
            Jamuna Tehzeeb, a confluence of composite culture, the essence, the
            ‘Khusbhoo’ of the city, is still strong.
          </p>

          <p>
            As a ‘Hyderabadi’ who lived mainly outside the city,&nbsp;any
            reminder of the magic of Hyderabad, any reference would make my day.
            Ah, Hyderabad – my hometown! Of Course, I regularly saw references
            to the city in a document at the{" "}
            <a href="http://www.un.org/">United Nations</a>. If you guessed what
            I am alluding to, you deserve a commendation.
          </p>

          <p>
            It is the notification about the agenda of the{" "}
            <a href="https://www.un.org/securitycouncil/">
              United Nations Security Council
            </a>
            . There figures the so-called ‘Hyderabad Question’. It is in a list
            of items that need to be addressed as threats to international peace
            and security. Till then I had not realized that it warrants such
            global attention.
          </p>

          <p>
            The ‘Hyderabad Question’ came on the agenda in September 1948, i.e.,
            73 years ago. It was last considered by the Security Council 72
            years ago in May 1949. It remains a ‘matter’ that the&nbsp; Security
            Council is ‘seized of.’ The item pre-dates my birth, though I am
            already a senior citizen. It never was a topic discussed at the UN
            during my decades as a diplomat. Yet, it remains on the ‘active’
            agenda. Take a look at the agenda listed in{" "}
            <a href="https://undocs.org/S/2021/10">January 2021</a>. Hyderabad
            finds a mention at No:54.
          </p>

          <p>
            For the genesis of this story, consult the{" "}
            <a href="https://www.un.org/securitycouncil/content/repertoire/about-repertoire">
              Repertoire
            </a>
            . It is the official source of information about the practice of the
            UN Security Council. Check it out{" "}
            <a href="https://bit.ly/3BhYBLh">here</a>.&nbsp; Now that you have
            the background consider whether the situation in Hyderabad poses any
            threat to international peace and security? Or is it merely a
            reflection of how blind to ground realities some arcane diplomatic
            practices are? Instantly, you will conclude that Hyderabad has long
            left the situation of 1948 behind. None here live frozen in that
            era.
          </p>

          <p>
            Yet, the representative of a single country{" "}
            <a href="https://undocs.org/S/2021/3">annually writes</a> to the{" "}
            <a href="https://www.un.org/sg/en">UN Secretary-General</a>{" "}
            requesting to keep the matter on the agenda. It is just a case of an
            envious neighbour. Midnight’s other child could not stop Hyderabad’s
            integration into the Indian Union in 1948 (read V.P. Menon’s{" "}
            <a href="https://hidf1.files.wordpress.com/2011/02/the-story-of-the-integration-of-the-indian-states-by-v-p-menon.pdf">
              The Integration of the Indian States
            </a>
            ) and then{" "}
            <a href="https://mea.gov.in/press-releases.htm?dtl/31892/The+UK+High+Court+rules+in+the+favour+of+India+in+Hyderabad+Funds+case">
              lost its legal claim to the frozen Hyderabad Funds in a UK Court
            </a>{" "}
            more than 70 years later (read the{" "}
            <a href="https://www.blackstonechambers.com/documents/High_Commissioner_for_Pakistan_in_the_United_Kingdom_v_Prince_Muffakham_Jah_and_Other.docx">
              judgment
            </a>{" "}
            by Mr. Justice Marcus Smith). Nonetheless, it clings to the fiction
            of the ‘Hyderabad Question’ and wants its continuance on the agenda.
            No one else bothers. Let’s not waste time rummaging through the
            dustbin of history. You’ve got the context.
          </p>

          <p>
            There’s a subtext too. I shared this nugget of the follies of{" "}
            <a href="https://opil.ouplaw.com/view/10.1093/law/9780198739104.001.0001/law-9780198739104">
              diplomatic practice
            </a>{" "}
            as an example of how we at Kautilya will help you with the learning
            process. We will show you how to dig deep, but also how to sift the
            grain from the chaff. We will explain how ground realities change,
            but practice takes time to follow, and theory is way behind in
            catching up. That’s how we will approach the entire gamut of issues
            that encompass the term{" "}
            <a href="https://www.britannica.com/topic/governance/Public-policy">
              Public Policy
            </a>
            . Welcome to <a href="http://www.kautilya.org.in/">Kautilya</a>’s
            space for discussion and debate. It is a space to learn together and
            from each other. Everyone can respond or share their own stories and
            views. Let the conversations begin.
          </p>
        </div>
      </ScreenWidth>
    </MainLayout>
  );
}
export default BlogsIntro;

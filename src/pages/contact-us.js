import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";

import Antara from "../../public/assets/img/events/paperpresentation/organizing/1.png";
import Garima from "../../public/assets/img/events/paperpresentation/organizing/2.png";
import Rashika from "../../public/assets/img/events/paperpresentation/organizing/3.png";
import Sunidhi from "../../public/assets/img/events/paperpresentation/organizing/4.png";
import Akshit from "../../public/assets/img/events/paperpresentation/organizing/5.png";
import Lekhani from "../../public/assets/img/events/paperpresentation/organizing/6.png";
import Shitiz from "../../public/assets/img/events/paperpresentation/organizing/7.png";
import Vaibhavi from "../../public/assets/img/events/paperpresentation/organizing/8.png";
import ProfileCard from "@/components/common/Profile/ProfileCard";

function ContactConclave() {
  const facultydata = [
    {
      id: 1,
      imgURL: Antara,
      name: "Antara Maitra",
      linkdin_url: "https://www.linkedin.com/in/antaramaitra/",
    },
    {
      id: 2,
      imgURL: Garima,
      name: "Garima Goel",
      linkdin_url: "https://www.linkedin.com/in/garimagoel97/",
    },
    {
      id: 3,
      imgURL: Rashika,
      name: "Rashika Singh",
      linkdin_url: "https://www.linkedin.com/in/rashika-singh-5a2355248/",
    },
    {
      id: 4,
      imgURL: Sunidhi,
      name: "Sunidhi Singh",
      linkdin_url: "https://www.linkedin.com/in/singhsunidhi/",
    },
    {
      id: 5,
      imgURL: Akshit,
      name: "Akshit Dedha",
      linkdin_url: "https://www.linkedin.com/in/akshit-dedha-570831156/",
    },
    {
      id: 6,
      imgURL: Lekhani,
      name: "Lekhani Raja",
      linkdin_url: "https://www.linkedin.com/in/lekhani-raja-b3a77b166/",
    },
    {
      id: 7,
      imgURL: Shitiz,
      name: "Shitiz Jha",
      linkdin_url: "https://www.linkedin.com/in/shitiz-jha-84b96a122/",
    },
    {
      id: 8,
      imgURL: Vaibhavi,
      name: "Vaibhavi Awasthi",
      linkdin_url:
        "https://www.linkedin.com/in/vaibhavi-awasthi-4709a3152/?originalSubdomain=in",
    },
  ];

  return (
    <>
      <MainLayout>
        <ScreenWidth layoutwidth="true">
          <div className="">
            <h3 className="text-start mt-4 mb-4 text-2xl font-bold">
              GET IN TOUCH!
            </h3>

            <div className="mt-3 mb-3">
              <div className=" headingWithBG">
                <h4 className="font-semibold">Venue of the Conference:</h4>
              </div>
            </div>

            <p className="font-bold">KAUTILYA SCHOOL OF PUBLIC POLICY</p>
            <p className="kc-txt">
              GITAM (Deemed to be University)
              <br />
              Rudraram, Patancheru Mandal
              <br />
              Hyderabad, Telangana 502329
            </p>
            <p>
              Thank you for your interest in the Conference. We value your
              inquiries, feedback, and support. Please feel free to contact us
              using the following information:
            </p>
            <p>
              <strong>Email ID:</strong>{" "}
              <a href="mailto:kc@kautilya.org.in" className="text-blue-500">
                kc@kautilya.org.in
              </a>
            </p>
          </div>

          <div>
            <div className="headingWithBG">
              <h4 className="text-xl font-semibold">Organizing Team</h4>
            </div>
            {/* <Faculty faculty={facultydata} popup={false} /> */}
            <div className="grid md:grid-cols-3 lg:grid-cols-5">
              {facultydata.map((each) => (
                <ProfileCard profileData={each} popup={true} page="contactUs" />
              ))}
            </div>
          </div>
        </ScreenWidth>
      </MainLayout>
    </>
  );
}

export default ContactConclave;

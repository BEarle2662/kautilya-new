import CategoryHeading from "@/components/common/categoryHeading";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import Image from "next/image";
import banner from "../../../public/assets/img/kautilya-ICSSR-web-banner-min.jpg";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const projectContent = `
  <div class="mt-10">
    <p class="border_line">
      <span class="sub_title text-primary">Project Title:</span>
      <span>“A Comparative Assessment of the Impact of Beti Bachao Beti Padhao Scheme in the Gender-Critical Districts of Telangana and Uttar Pradesh”</span>
    </p>
    <p class="border_line">
      <span class="sub_title">Project Duration:</span>
      <span>06 Months</span>
    </p>
    <p class="border_line">
      <span class="sub_title">Project Approved By:</span>
      <span>Indian Council of Social Science Research</span>
    </p>
    <p>
      <span class="sub_title">Project Description:</span>
      <span>
        In June 2023, the <strong>Indian Council of Social Science Research</strong> invited research proposals under <strong>Special Call for Short-term Empirical Research 2023-24</strong> for short-term projects to be undertaken by Indian scholars/researchers/academicians on selected schemes and policy initiatives of the Indian government. The invite was for projects that undertake a rigorous assessment of the reach and socio-economic impact of a specific scheme/policy initiative focusing on a specific geographical region (urban, semi-urban, or rural). 
        <strong>Link: </strong>
        <a href="https://icssr.org/special-call-short-term-empirical-research-2023-24-guidelines" target="_blank" rel="noopener" class="text-blue-700">
          Special Call for Short-term Empirical Research 2023-24 — Guidelines
        </a>
      </span>
    </p>
    <p>
      <span>Under this call, the Kautilya School of Public Policy research proposal titled “<u>A Comparative Assessment of the Impact of Beti Bachao Beti Padhao Scheme in the Gender-Critical Districts of Telangana and Uttar Pradesh</u>” has been accepted by ICSSR and has been awarded a grant too. Through this project, we aim to compare the reach and socio-economic impact of <strong>Beti Bachao Beti Padhao</strong> in <strong>Telangana</strong> and <strong>Uttar Pradesh</strong>.</span>
    </p>
    <p class="sub_title">The project team intends to assess the shift in public attitude as a result of this scheme using Structural Equation Modelling and evaluate these effects through the lenses of gender, caste, age, and education.</p>
    <h4 class="sub_title">Project Team :</h4>
    <table class="border border-slate-400 border-collapse table-auto">
      <thead>
        <tr>
          <th class="border border-slate-300 p-4">Name</th>
          <th class="border border-slate-300  p-4">Present Position</th>
          <th class="border border-slate-300 p-4">Institution</th>
          <th class="border border-slate-300 p-4">Role in the Research Project</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-300 p-4">Dr. Amrendra Pandey</td>
          <td class="border border-slate-300 p-4" class="border border-slate-300">Associate Professor</td>
          <td class="border border-slate-300 p-4">Kautilya School of Public Policy, GITAM, Hyderabad</td>
          <td class="border border-slate-300 p-4">Project Coordinator and Project Director</td>
        </tr>
        <tr>
          <td class="border border-slate-300 p-4">Dr. Rahul Singh</td>
          <td class="border border-slate-300 p-4">Area Head – Strategy, Innovation, Entrepreneurship Professor in Strategy and Globalization</td>
          <td class="border border-slate-300 p-4">Birla Institute of Management Technology (BIMTECH), Greater Noida</td>
          <td class="border border-slate-300 p-4">Project Director</td>
        </tr>
        <tr>
          <td class="border border-slate-300 p-4">Dr. Vishnu S Pillai</td>
          <td class="border border-slate-300 p-4">Assistant Professor</td>
          <td class="border border-slate-300 p-4">Kautilya School of Public Policy, GITAM, Hyderabad</td>
          <td class="border border-slate-300 p-4">Project Director</td>
        </tr>
        <tr>
          <td class="border border-slate-300 p-4">Dr. Amarnath Bose</td>
          <td class="border border-slate-300 p-4">Professor of Operations, Decision Science & IT</td>
          <td class="border border-slate-300 p-4">Birla Institute of Management Technology (BIMTECH), Greater Noida</td>
          <td class="border border-slate-300 p-4">Project Director</td>
        </tr>
        <tr>
          <td class="border border-slate-300 p-4">Mr. Pritish Anand</td>
          <td class="border border-slate-300 p-4">Academic Associate</td>
          <td class="border border-slate-300 p-4">Kautilya School of Public Policy, GITAM, Hyderabad</td>
          <td class="border border-slate-300 p-4">Research Associate</td>
        </tr>
      </tbody>
    </table>
  </div>
`;

const ResearchProjects = ({metaTagsData}) => {
  return (
    <MainLayout
    title={metaTagsData.title}
        description={metaTagsData.description}
        keywords={metaTagsData.keywords}
        img={metaTagsData.meta_image}
    >
      <ScreenWidth layoutwidth="true">
        <CategoryHeading heading="Grants & Projects" />
        <Image
          src={banner}
          height={0}
          width={0}
          className="h-full w-full"
          alt="Research Banner"
        />
        <div dangerouslySetInnerHTML={{ __html: projectContent }} />
      </ScreenWidth>
    </MainLayout>
  );
};
export async function getStaticProps() {
  const metaComponentResponse = await MetaTagsComponent({ page: "research-projects" });

  console.log("research-projects Page Meta DAta", metaComponentResponse);

  return {
    props: { metaTagsData: metaComponentResponse },
    // Revalidate at most once every 60 seconds
    revalidate: 60, // In seconds
  };
}
export default ResearchProjects;

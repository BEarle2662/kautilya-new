import CategoryHeading from "@/components/common/categoryHeading";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const financialAidContent = `
  <div>
    <p>
      Kautilya offers <strong>up to 100% need-based scholarships in the form of tuition fee waivers</strong> to deserving candidates. Students seeking scholarships are encouraged to choose the scholarship option in the application form. Your scholarship application will not influence your acceptance to the program. The scholarship will be granted for 1st year only. Continuation of the scholarship in 2nd year will be purely based upon student academic performance and code of conduct.
    </p>
    <p>
      Apart from the scholarships, students will get a chance to explore their passion through a <strong>Teaching Assistantship (TA)</strong>, which is provisioned for the Final Year students of Kautilya School of Public Policy. This is an opportunity for students to subsidize their fees through Teaching Assistantship.
    </p>
    <h2 class="text-lg md:text-2xl mb-4"><b>OTHER FINANCIAL BENEFITS:</b></h2>
    <ul class="list-disc pl-4">
      <li class="mb-2">Documentation support to avail Education Loan from the Banks.</li>
      <li class="mb-2">Short-term EMI Facility from partnered NBFCs.</li>
      <li class="mb-2">Documentation support to avail loan from the state government Schemes.</li>
      <li class="mb-2">Documentation support to apply for Bihar Student Credit Card Scheme College Code: 16319.</li>
    </ul>
    <p>
      <strong>NOTE: </strong>Students will have to apply directly to the lending institutions of their choice to avail education loan or any other EMI facility. Kautilya has no role in EMI / loan grant, and doesn’t guarantee that, except providing documents as asked by the lending institution.
    </p>
    <h2 class="text-lg md:text-2xl mb-4"><b>REQUIRED DOCUMENTS:</b></h2>
    <ul class="list-disc pl-4">
      <li class="mb-2">Duly updated Curriculum Vitae of self (CV).</li>
      <li class="mb-2">Duly submitted Statement of Purpose (SOP).</li>
      <li class="mb-2">The latest Self ITR is used as proof of annual income. (If applicable).</li>
      <li class="mb-2">For income proof, the latest ITR of a self, spouse, and the parents, as proof of family annual income referring to the below-mentioned points from 01 to 05.</li>
    </ul>
    <ol class="list-decimal pl-8">
      <li class="mb-2">If the applicant is working & single, self ITR is a must along with parents ITR.</li>
      <li class="mb-2">If the applicant is working, married, and has a working spouse, the Spouse’s ITR must be submitted along with self ITR and Parents ITR.</li>
      <li class="mb-2">If the applicant has a non-working spouse, an affirmation email is a must from the applicant declaring that the spouse has no income along with the Self and parents ITR, but still, the Spouse’s ITR with zero income declaration is mandatory.</li>
      <li class="mb-2">If the applicant is not working & single, Parents ITR is a must.</li>
      <li class="mb-2">If the applicant has a non-working father/mother, an affirmation email is a must from the applicant’s parent declaring that the non-working mother/father has no income but a non-working parent ITR with zero income declaration is mandatory.</li>
    </ol>
    <h2 class="my-4"><b>Key Points to remember for TAship:</b></h2>
    <ul class="list-disc pl-4">
      <li class="mb-2">TAs must take one course per term for all three terms.</li>
      <li class="mb-2">The selection process for the TAship will open in May.</li>
      <li class="mb-2">The quantum of TAship will be informed before the end of June.</li>
      <li class="mb-2">The program manager will share a list of detailed instructions, KRAs, and SOPs with the selected TAs.</li>
    </ul>
  </div>
`;
const FinancialAid = ({ metaTagsData }) => {
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
    >
      <div className="bg-[#95131d] h-[20vh] pt-10 py-20 md:pt-20 md:py-40">
        <h1 className="text-white text-center text-2xl md:text-6xl font-normal">
          Scholarships & TAship
        </h1>
      </div>

      <div className="bg-white-shade p-4 md:p-20 bg-cover bg-no-repeat">
        <ScreenWidth layoutwidth="true">
          <div dangerouslySetInnerHTML={{ __html: financialAidContent }} />
        </ScreenWidth>
      </div>
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  // try {
  //   const metaTagsResponse = await MetaTagsComponent({
  //     page: "scholarships-financial-aid",
  //   });
  //   // console.log("metaTagsResponse", metaTagsResponse);

  //   return {
  //     props: {
  //       metaTagsResponse: metaTagsResponse || {},
  //     },
  //   };
  // } catch (error) {
  //   console.error("Error fetching data", error);
  //   return {
  //     props: {
  //       metaTagsResponse: {},
  //     },
  //   };
  // }
  const metaComponentResponse = await MetaTagsComponent({
    page: "scholarships-financial-aid",
  });

  console.log(
    "scholarships-financial-aid Page Meta DAta",
    metaComponentResponse
  );

  return {
    props: { metaTagsData: metaComponentResponse },
    // Revalidate at most once every 60 seconds
    revalidate: 60, // In seconds
  };
};

export default FinancialAid;

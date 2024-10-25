import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { ImagePaths } from "@/Endpoints/imagePath";
import Image from "next/image";
import React from "react";

const CashPolicies = () => {
  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        <div>
          <h2 className="pt-5 pb-5 md:my-10 font-semibold text-center text-2xl">
            Kautilya School of Public Policy Policy on Sexual Harassment
          </h2>

          <p>
            <b className="px-2"> 1. </b> The Kautilya School of Public Policy
            (KSPP) aims to create a safe, comfortable and productive learning
            and working environment for all students and staff. It recognizes
            sexual harassment prevents the creation of such an environment and
            therefore takes steps to prevent and redress instances of sexual
            harassment.
          </p>

          <p>
            <b className="px-2"> 2.</b> KSPP recognises that all members of its
            community must contribute to the creation of a safe, comfortable and
            productive learning and working environment, and must therefore take
            steps to understand and combat sexual harassment.
          </p>

          <p>
            <b className="px-2">3.</b> KSPP defines sexual harassment as any
            acts which include but are not limited to the following:
          </p>
          <ul className="list-[upper-roman] pl-8">
            <li>
              When submission to unwelcome sexual advances, requests for sexual
              favours, and verbal or physical conduct of a sexual nature are,
              implicitly or explicitly, made a term or condition of
              teaching/guidance, employment, promotion, participation or
              evaluation of a person’s engagement in any University activity;
            </li>
            <li>
              When unwelcome sexual advances, and/or verbal, non-verbal and/or
              physical conduct such as derogatory comments on physical
              appearance, character etc., loaded comments, remarks or jokes,
              letters, phone calls, text messages or e-mails, gestures,
              exhibition of sexually explicit or offensive material in any
              medium including pornography, lurid stares, physical contact,
              stalking, sounds or display of a derogatory nature have the
              purpose and/or effect of interfering with an individual’s
              performance or of creating a hostile environment;
            </li>
            <li>
              When deprecatory comments, conduct or any such behaviour is based
              on the gender identity/sexual orientation of the person(s) and/or
              when the classroom or other public forum or academic activities of
              the University is used to denigrate/discriminate against
              person(s), or create a hostile environment on the basis of a
              person’s gender identity/sexual orientation;
              <p className="mt-2">
                <b> Explanation:</b> A “hostile environment” is said to be
                created when any act of sexual harassment has the purpose or
                effect of interfering with an individual’s work performance or
                creating an intimidating, hostile or offensive employment,
                education or living environment.
              </p>
            </li>
          </ul>

          <p>
            <b> 4.</b> KSPP, therefore, establishes an Internal Complaints
            Committee (ICC), under the norms laid down by the University Grants
            Commission in the{" "}
            <b>
              Saksham Measures for Ensuring the Safety of Women and Programmes
              for Gender Sensitization on Campuses, 2013.
            </b>
          </p>

          <p>
            <b className="px-2">4.1</b> The composition of the ICC will be as
            follows:
          </p>
          <ul className="kc-policy-alpha">
            <li>
              A presiding officer who shall be the senior-most female faculty
              member employed by KSPP
            </li>
            <li>
              Two members of the KSPP/GITAM Hyderabad campus teaching staff
            </li>
            <li>
              Two members of the KSPP/GITAM Hyderabad campus non-teaching staff
            </li>
            <li>
              Student representatives: one from the KSPP MA first year batch;
              one from the KSPP MA second year batch; one from the KSPP PhD
              programme.
            </li>
            <li>
              One external member with legal expertise or experience working on
              women’s/gender issues or experience working in an NGO that works
              on women’s/gender issues
            </li>
          </ul>

          <p>
            <b className="px-2">4.2</b>The ICC shall:
          </p>
          <ul className="kc-policy-alpha">
            <li>
              Act to sensitise the KSPP and all residents of GITAM Residence for
              Block-C Residents on issues of sexual harassment, gender identity,
              sexual orientation, gender discrimination etc.
            </li>
            <li>
              Act to redress complaints raised regarding specific instances of
              sexual harassment
            </li>
            <li>
              Act to assess the gender-sensitivity of the KSPP community from
              time to time.
            </li>
          </ul>

          <p>
            <b className="px-2"> 4.2.1</b> The ICC shall conduct at least one
            gender-sensitization programme every trimester.
          </p>

          <p>
            <b className="px-2">4.2.2</b> Procedure for handling complaints:
          </p>
          <ul className="kc-policy-alpha">
            <li>
              Complaints may be raised by anyone, whether enrolled/employed at
              KSPP or not.
            </li>
            <li>
              Complaints may be made against any KSPP student or KSPP employee
              or resident of GITAM Residence for block-C Residents. Complaints
              may also be made against any student enrolled in a course at KSPP
              for any matter arising in their capacity as a student of the
              course or during their interaction with any student or staff
              member of KSPP. Complaints may be regarding incidents in
              KSPP/Block C premises or at any place where KSPP
              employees/students are present in any official capacity including
              but not limited to conferences, seminars, field visits,
              internships etc.
            </li>
            <li>
              Complaints may be made to the ICC via its email, or orally to any
              ICC member (in which case the complaint will be reduced to writing
              by the ICC member). ICC members may also take suo moto cognisance
              of instances of harassment (a) with the consent of those who have
              faced harassment or (b) where the person(s) facing harassment are
              unable to make complaints.
            </li>
            <li>
              Complaints may be made by persons of any gender, against persons
              of any gender.
            </li>
            <li>
              <mark>
                On receipt of a complaint, the ICC will activate the process of
                the redressal of the complaint either through the process of
                conciliation or through an inquiry. Outlines of the procedures
                for both conciliation and inquiry are given in Appendix 1.
              </mark>
            </li>
            <li>
              At least half the members of the ICC should be present for the
              examination of a complaint. Of these, at least half should be
              women.
            </li>
            <li>
              During or prior to the examination of a complaint, the ICC may
              recommend interim actions (e.g. removal of the respondent from
              supervisory positions especially over the complainant, removal of
              access of the complainant to KSPP facilities, etc.).
            </li>
            <li>
              After the examination of the complaint, the ICC will present a
              report of the complaint and its recommendations (if any) to the
              Dean, KSPP. Recommendations should be endorsed by at least 2/3rds
              of the committee members who examined the complaint. The
              presentation of the report should take place within sixty (60)
              days of the receipt of the complaint. Recommendations made will be
              binding on the Dean, KSPP and must be acted upon within fifteen
              (15) days of the receipt of the report.
            </li>
            <li>
              The details of the complaint (including but not limited to the
              text of the written complaint, testimony of complainant(s),
              respondent(s), and witnesses, details of the occurrence, status of
              the complaint, etc.) should be kept confidential by the committee
              members. Failure to maintain confidentiality may result in removal
              from the ICC and disciplinary action if recommended by the ICC.
            </li>
            <li>
              If the respondent is a member of the ICC, they will be relieved of
              all ICC duties till the report of the complaint is presented to
              the Dean, KSPP. Their access to ICC communications (email, google
              drive, etc.) and documents (previous reports, documents pertaining
              to ongoing complaints, sensitisation events etc.) will also be
              revoked during the period of the examination of the complaint.
            </li>
            <li>
              If the complainant is a member of the ICC, they will be relieved
              of all ICC duties till the report of the complaint is presented to
              the Dean, KSPP. Their access to ICC communications (email, google
              drive, etc.) and documents (previous reports, documents pertaining
              to ongoing complaints, sensitisation events etc.) will also be
              revoked during the period of the examination of the complaint.
            </li>
          </ul>

          <p>
            <b> 4.3 </b>The ICC shall maintain a record of all its activities
            and shall present an annual report of all activities, complaints
            etc. to the Dean KSPP. The presiding officer shall be responsible
            for the maintenance of records and preparation/submission of
            reports. Other members may be asked to assist in the maintenance of
            records and preparation of reports.
          </p>

          <p>
            <b>4.4 </b> The ICC email should be checked once a day. One member
            will have the responsibility of checking the email. This member will
            be determined on a rotational basis and will change once a month.
            ICC is to be informed of emails regarding complaints/any other mails
            which require action to be taken, by this member.
          </p>

          <p>
            <b>4.5</b> ICC members shall meet in person at least once a
            trimester. Other discussions/coordination etc. may take place over
            email.
          </p>

          <p>
            <b>4.6 </b> The ICC will ensure the prominent publicity of the
            Sexual Harassment Policy.
          </p>

          <div className="icc_appendix_src  px-2">
            <h5>Appendix 1: Outlines of Redressal Procedures</h5>
            <p>
              <b>Sources:</b> Ministry of Women and Child Development, Handbook
              on Sexual Harassment of Women at Workplace (Prevention,
              Prohibition and Redressal) Act, 2013 for Employers/
              Institutions/Organisations/Internal Complaints Committee/Local
              Complaints Committee, 2015, p. 35, and the Kautilya School of
              Public Policy Policy on Sexual Harassment.
            </p>

            <div className="flex justify-center">
              <div className="w-3/4">
                <Image
                  src={ImagePaths.appendix_1}
                  alt="icc-policy"
                  className="w-full h-full"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>

          <div className="icc_appendix_src  px-1">
            <h5>Appendix 2: The Sexual Harassment Complaint Process</h5>
            <p>
              <b>Sources:</b> Ministry of Women and Child Development, Handbook
              on Sexual Harassment of Women at Workplace (Prevention,
              Prohibition and Redressal) Act, 2013 for Employers/
              Institutions/Organisations/Internal Complaints Committee/Local
              Complaints Committee, 2015, p. 27
            </p>

            <div className="flex justify-center">
              <div className="w-3/4">
                <Image
                  src={ImagePaths.appendix_2}
                  alt="icc-policy"
                  className="w-full h-full"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>

          <p className="px-1 mt-5">
            You can reach out to them for any issues with regard to Sexual
            Harassment and in ensuring KSPP is an inclusive and welcoming place
            of learning.
          </p>
          <ul className="faculty_list px-3">
            <li>Dr. Vasudha Katju</li>
            <li>Dr. Ajay Kumar</li>
            <li>Dr. Amrendra Pandey</li>
            <li>Ranjeeta Sinha</li>
            <li>Shivangi Pandey</li>
            <li>Ms. Tehniyat Hasan Sajid</li>
            <li>Ms. Nandini Diwan</li>
            <li>Ms. Jisna Sabu</li>
            <li>Dr. A. Suneetha</li>
          </ul>
          <p className="px-3 slug-description">
            <b>Contact –</b>
            <a href="mailto:icc@kautilya.org.in" className="">
              icc@kautilya.org.in
            </a>
          </p>
        </div>
      </ScreenWidth>
    </MainLayout>
  );
};

export default CashPolicies;

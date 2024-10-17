import CategoryHeading from "@/components/common/categoryHeading";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { BsArrowRight } from "react-icons/bs";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

import { Card } from "@material-tailwind/react";

const TABLE_HEAD = ["Date and Month", "Day", "Event", ""];

const academicCalendar2024 = [
  {
    year: "2024",
    accordions: [
      {
        id: 1,
        title: "July to October",
        events: [
          {
            date: "23rd July 2024",
            day: "Tuesday",
            event: "Orientation Week Starts for 2024-26 batch",
          },
          {
            date: "30th July 2024",
            day: "Tuesday",
            event: "First day of Trimester 1 and 4",
          },
          {
            date: "15th August 2024",
            day: "Thursday",
            event: "Independence Day",
          },
          {
            date: "7th September 2024",
            day: "Saturday",
            event: "Ganesh Chaturthi",
          },
          {
            date: "2nd October 2024",
            day: "Wednesday",
            event: "Gandhi Jayanti",
          },
          { date: "3rd October 2024", day: "Thursday", event: "Bathukamma" },
          { date: "12th October 2024", day: "Saturday", event: "Dussehra" },
          {
            date: "25th October 2024",
            day: "Friday",
            event: "Last Day of Trimester 1 and 4",
          },
          {
            date: "26th October to 5th Nov",
            day: "–",
            event: "Trimester Holidays",
          },
        ],
      },
      {
        id: 2,
        title: "November to December",
        events: [
          {
            date: "6th Nov 2024",
            day: "Wednesday",
            event: "First Day of Trimester 2 and 5",
          },
          { date: "25th Dec 2024", day: "Wednesday", event: "Christmas" },
        ],
      },
    ],
  },
];

const academicCalendar2025 = [
  {
    year: "2025",
    accordions: [
      {
        id: 3,
        title: "January to March",
        events: [
          { date: "14th Jan 2025", day: "Tuesday", event: "Sankranti" },
          { date: "26th Jan 2025", day: "Sunday", event: "Republic Day" },
          {
            date: "31st Jan 2025",
            day: "Friday",
            event: "Last day of Trimester 2 and Trimester 5",
          },
          {
            date: "1st Feb to 16th Feb 2025",
            day: "-",
            event: "Trimester Holidays",
          },
          {
            date: "17th Feb 2025",
            day: "Monday",
            event: "First day of Trimester 3",
          },
        ],
      },
      {
        id: 4,
        title: "March to May",
        events: [
          { date: "14th Apr 2025", day: "Monday", event: "Ambedkar Jayanti" },
          { date: "18th Apr 2025", day: "Friday", event: "Good Friday" },
          {
            date: "13th May 2025",
            day: "Friday",
            event: "Last Day of Trimester 3",
          },
          {
            date: "14th May to 20th Jul 2025",
            day: "-",
            event: "Summer Holidays/Internship",
          },
        ],
      },
      {
        id: 5,
        title: "July to October",
        events: [
          {
            date: "15th Jul 2025",
            day: "Tuesday",
            event: "Orientation Week Starts for 2025-27 Batch",
          },
          {
            date: "21st Jul 2025",
            day: "Monday",
            event: "First day of Trimester 1 and 4",
          },
          { date: "15th Aug 2025", day: "Friday", event: "Independence Day" },
          { date: "2nd Oct 2025", day: "Tuesday", event: "Gandhi Jayanti" },
          {
            date: "16th Oct 2025",
            day: "Thursday",
            event: "Last Day of Trimester 1 and 4",
          },
          {
            date: "17th Oct to 26th Oct 2025",
            day: "-",
            event: "Trimester Holidays",
          },
        ],
      },
    ],
  },
];

const AcademicCalendar = ({metaTagsData}) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const image =
    "https://guprojects.gitam.edu/kautilya-admin/public/mmp_sliders/mpp_desktop_66b64f79d1f7d.jpg";
  return (
    <MainLayout
    title={metaTagsData.title}
    description={metaTagsData.description}
    keywords={metaTagsData.keywords}
    img={metaTagsData.meta_image}
    >
      <ScreenWidth layoutwidth="true">
        <CategoryHeading heading="Academic Calendar" />

        <div className="mb-16">
          <h1 className="text-2xl font-bold md:text-3xl md:font-extrabold text-[#00174d]  text-center">
            Year 2024-25:
          </h1>
          <h1 className="text-2xl font-bold md:text-3xl md:font-extrabold text-[#00174d] text-center">
            Start Date: 01st August 2024; End Date: 17th May 2025
          </h1>
        </div>

        {/* 2024 Calendar Data */}

        <div>
          <div className="flex justify-start items-center my-5">
            <spna className="text-2xl font-bold md:text-3xl md:font-extrabold text-[#00174d] mr-3">
              <BsArrowRight className="font-extrabold" />
            </spna>
            <h1 className="text-2xl font-bold md:text-3xl md:font-extrabold text-[#00174d]">
              2024
            </h1>
          </div>

          {academicCalendar2024[0].accordions.map((each, index) => {
            return (
              <Accordion open={open === each.id} key={index}>
                <AccordionHeader onClick={() => handleOpen(each.id)}>
                  <div className="w-full flex justify-between">
                    <h1 className="text-lg md:text-2xl font-semibold md:font-extrabold w-full text-center text-[#424141]">
                      {each.title}
                    </h1>
                    <span className="p-2">
                      {open === each.id ? (
                        <MinusIcon
                          className="h-5 w-5 text-dark"
                          strokeWidth={4}
                        />
                      ) : (
                        <PlusIcon
                          className="h-5 w-5 text-dark"
                          strokeWidth={4}
                        />
                      )}
                    </span>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <Card className="h-full w-full overflow-auto">
                    <table className="w-full min-w-max table-auto text-left">
                      <thead>
                        <tr>
                          {TABLE_HEAD.map((head) => (
                            <th key={head} className="bg-primary p-2">
                              <h1 className="font-semibold leading-2 text-base text-left">
                                {head}
                              </h1>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {each.events.map(({ date, day, event }, index) => {
                          const isLast = index === each.events.length - 1;
                          const classes = isLast
                            ? "p-3"
                            : "p-3 border-b border-blue-gray-50";

                          return (
                            <tr key={date}>
                              <td className={classes}>
                                <p className="font-normal text-base mb-0">
                                  {date}
                                </p>
                              </td>
                              <td className={classes}>
                                <p className="font-normal text-base mb-0">
                                  {day}
                                </p>
                              </td>
                              <td className={classes}>
                                <p className="font-semibold text-black text-base mb-0">
                                  {event}
                                </p>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Card>
                </AccordionBody>
              </Accordion>
            );
          })}
        </div>

        {/* 2025 Calendar Data */}
        <div>
          <div className="flex justify-start items-center my-5">
            <spna className="text-2xl font-bold md:text-3xl md:font-extrabold text-[#00174d] mr-3">
              <BsArrowRight className="font-extrabold" />
            </spna>
            <h1 className="text-2xl font-bold md:text-3xl md:font-extrabold text-[#00174d]">
              2025
            </h1>
          </div>

          {academicCalendar2025[0].accordions.map((each, index) => {
            return (
              <Accordion open={open === each.id} key={index}>
                <AccordionHeader onClick={() => handleOpen(each.id)}>
                  <div className="w-full flex justify-between">
                    <h1 className="text-lg md:text-2xl font-semibold md:font-extrabold w-full text-center text-[#424141]">
                      {each.title} 2025
                    </h1>
                    <span className="p-2">
                      {open === each.id ? (
                        <MinusIcon
                          className="h-5 w-5 text-dark"
                          strokeWidth={4}
                        />
                      ) : (
                        <PlusIcon
                          className="h-5 w-5 text-dark"
                          strokeWidth={4}
                        />
                      )}
                    </span>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <Card className="h-full w-full overflow-auto">
                    <table className="w-full min-w-max table-auto text-left">
                      <thead>
                        <tr>
                          {TABLE_HEAD.map((head) => (
                            <th key={head} className="bg-primary p-2">
                              <h1 className="font-semibold leading-2 text-base text-left">
                                {head}
                              </h1>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {each.events.map(({ date, day, event }, index) => {
                          const isLast = index === each.events.length - 1;
                          const classes = isLast
                            ? "p-3"
                            : "p-3 border-b border-blue-gray-50";

                          return (
                            <tr key={date}>
                              <td className={classes}>
                                <p className="font-normal text-base mb-0">
                                  {date}
                                </p>
                              </td>
                              <td className={classes}>
                                <p className="font-normal text-base mb-0">
                                  {day}
                                </p>
                              </td>
                              <td className={classes}>
                                <p className="font-semibold text-black text-base mb-0">
                                  {event}
                                </p>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Card>
                </AccordionBody>
              </Accordion>
            );
          })}
        </div>

        <p className="mt-10">
          * Classes will be conducted periodically on saturdays as well as per
          the management’s decision
        </p>
      </ScreenWidth>
    </MainLayout>
  );
};
export async function getStaticProps() {
  // const initialTeamData = {
  // }
const metaComponentResponse = await MetaTagsComponent({ page: "academic-calendar" });

console.log("academic-calendar Page Meta DAta", metaComponentResponse);

return {
  props: {  metaTagsData: metaComponentResponse },
  // Revalidate at most once every 60 seconds
  revalidate: 60, // In seconds
};
}
export default AcademicCalendar;

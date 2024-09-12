import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const Faq = ({ faqData, pageTitle }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const academicAsso = pageTitle === "Pubilication Academic Asso";

  return (
    <div>
      {faqData.map((eachFaq, index) => {
        return (
          <Accordion key={eachFaq.id} open={open === eachFaq.id}>
            <AccordionHeader
              className="flex justify-start items-center"
              onClick={() => handleOpen(eachFaq.id)}
            >
              <span className="bg-primary p-3">
                {open === eachFaq.id ? (
                  <MinusIcon className="h-5 w-5 text-white" strokeWidth={4} />
                ) : (
                  <PlusIcon className="h-5 w-5 text-white" strokeWidth={4} />
                )}
              </span>
              <h1 className="text-left font-normal ml-3">
                {academicAsso ? eachFaq.name : eachFaq.question}
              </h1>
            </AccordionHeader>
            <AccordionBody>
              <div
                dangerouslySetInnerHTML={{
                  __html: academicAsso ? eachFaq.description : eachFaq.answer,
                }}
                className="prose  text-primary"
              ></div>
            </AccordionBody>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Faq;

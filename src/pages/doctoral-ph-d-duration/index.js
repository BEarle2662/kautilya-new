import MainLayout from "@/components/MainContainer/MainLayout";
import { Button , Tabs, TabPanel,TabsHeader } from "@material-tailwind/react";
import Link from "next/link";


const DoctoralPhdProgram = () => {
  return (
    
      <MainLayout>
        <div className="p-12">

          <Link 
            href="https://kspp.edu.in/study-at-kautilya" 
            target="_blank"
            className=""
          >
            <Button>
            Download Brochure
            </Button>
          </Link>    
        <p className="text-p mt-4">
            The Ph.D. program at the Kautilya School of Public Policy will 
            equip scholars with the training that will allow them to contribute 
            through their research in academia, government, business, and society.
            </p>

            <p>
                <b>
                The school accepts Ph.D. applications in the following area:
                </b>
            </p>
            <ul>
                <li className="mt-1">
                   Economics for policy
                </li>
            </ul>


            <h5>
                <b> 
                Lead the way in public policy innovation with impactful research.
                </b> 
             </h5>
        
        <p>
        At the Kautilya School of Public Policy, we offer a comprehensive PhD
         program designed to equip you with the skills and knowledge
         needed to make a significant impact in academia, government, business, and beyond.
        </p>
        <h5>
            <b>
               Purpose-Driven Education
            </b>
       
        </h5>
        <p>
        Our PhD program is tailored to provide you with advanced training and
         research opportunities that align with your passions and career goals. 
         You'll be prepared to contribute to various sectors, including academia, government, business, and society.
        </p>

            </div>


            <div>
            <Tabs id="custom-animation" value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
 
            </div>
      </MainLayout>
   
  );
};

export default DoctoralPhdProgram;

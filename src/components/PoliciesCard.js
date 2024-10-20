import Link from "next/link";
import ScreenWidth from "./MainContainer/ScreenWidth";
import { docsPath } from "@/Endpoints/docsBasePath";

const PoliciesCard = ({ policiesData }) => {
  return (
    <ScreenWidth layoutwidth="true">
      <div className="grid md:grid-cols-12 gap-10">
        {policiesData.map((each, index) => {
          return (
            <>
              {each.type === "Scholarship Policy" ? (
                <div
                  key={index}
                  className="text-white hover:bg-[#b11116b0] md:col-span-4 bg-[#00000082] border-2 min-h-[180px] flex flex-col justify-center items-center text-center"
                >
                  <Link href="./scholarships-financial-aid" target="_blank">
                    <div>
                      <h4 className="text-sm md:text-lg font-semibold">
                        {each.type}
                      </h4>
                      <p className="text-sm md:text-lg font-medium text-center text-white">
                        {each.subtitle}
                      </p>
                    </div>
                  </Link>
                </div>
              ) : (
                <div
                  key={index}
                  className="text-white hover:bg-[#b11116b0] md:col-span-4 bg-[#00000082] border-2 min-h-[180px] flex flex-col justify-center items-center text-center"
                >
                  <a
                    href={`${docsPath.policyGuidelinesPath}${each.policypdf}`}
                    target="_blank"
                  >
                    <h4 className="text-sm md:text-lg font-semibold">
                      {each.type}
                    </h4>
                    <p className="text-sm md:text-lg font-medium  text-center text-white">
                      {each.subtitle}
                    </p>
                  </a>
                </div>
              )}
            </>
          );
        })}
      </div>
    </ScreenWidth>
  );
};

export default PoliciesCard;

import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="bg-[#b11016] py-24 px-12">
        <div className="flex justify-between text-white">
          <div>
            <span className="text-lg font-semibold mb-4 block">
              KAUTILYA SCHOOL OF PUBLIC POLICY
            </span>
            <div className="text-base">
              GITAM (Deemed to be University)
              <br />
              Rudraram, Patancheru Mandal
              <br />
              Hyderabad, Telangana 502329
            </div>
          </div>
          <ul className="text-lg font-semibold flex flex-col gap-y-2">
            <li>
              <Link href={"/"}>Work @ Kautilya</Link>
            </li>
            <li>
              <Link href={"/"}>Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

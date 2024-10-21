import Marquee from "react-fast-marquee";
import Image from "next/image";

const TopRecruiters = () => {
  const data = [
    { id: 1, src: "/assets/img/admission-process/logo/1.png" },
    { id: 2, src: "/assets/img/admission-process/logo/2.png" },
    { id: 3, src: "/assets/img/admission-process/logo/3.png" },
    { id: 4, src: "/assets/img/admission-process/logo/4.png" },
    { id: 5, src: "/assets/img/admission-process/logo/5.png" },
    { id: 6, src: "/assets/img/admission-process/logo/6.png" },
    { id: 7, src: "/assets/img/admission-process/logo/7.png" },
  ];

  return (
    <div className="w-full my-4 mb-4">
      <div className="flex justify-center">
        <Marquee pauseOnHover speed={100}>
          {data.map((item) => (
            <div key={item.id} className="mx-3 w-60">
              <Image
                src={item.src}
                alt={`Recruiter-${item.id}`}
                width={250}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TopRecruiters;

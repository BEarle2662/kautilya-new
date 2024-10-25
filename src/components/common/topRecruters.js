import Marquee from "react-fast-marquee";
import Image from "next/image";
import { ImagePaths } from "@/Endpoints/imagePath";

const TopRecruiters = () => {
  const data = [
    { id: 1, src: ImagePaths.top_rc_1_ADP },
    { id: 2, src: ImagePaths.top_rc_2_ADP },
    { id: 3, src: ImagePaths.top_rc_3_ADP },
    { id: 4, src: ImagePaths.top_rc_4_ADP },
    { id: 5, src: ImagePaths.top_rc_5_ADP },
    { id: 6, src: ImagePaths.top_rc_6_ADP },
    { id: 7, src: ImagePaths.top_rc_7_ADP },
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

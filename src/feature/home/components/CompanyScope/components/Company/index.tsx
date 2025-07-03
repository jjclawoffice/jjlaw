import Image from "next/image";
import dataCompany from "@/utils/constants/company-scope.json";
import { fadeInRight } from "@/utils/functions/motion";

const Company = () => {
  return (
    <div
      {...fadeInRight}
      className="grid grid-cols-2 gap-3 xl:grid-cols-3 xl:gap-24"
    >
      {dataCompany.map((item, id) => (
        <Card key={id} icon={item.icon} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
};

export default Company;

const Card: React.FC<{ icon: string; title: string; desc: string }> = ({
  icon,
  title,
  desc,
}) => {
  return (
    <div className="flex justify-center p-0.5 bg-gradient-to-b from-[#DFAC43] to-[#FBD381] items-center">
      <div className="flex flex-col p-3 lg:p-7 gap-3 bg-black justify-center items-center h-full text-center lg:aspect-square">
        <Image
          height={51}
          width={51}
          src={icon}
          alt={title}
          className="h-8 w-auto"
        />
        <p className="text-white font-bold text-[14px] md:text-[20px]">
          {title}
        </p>
        <p className="text-[#979797] font-normal text-[12px] md:text-[16px]">
          {desc}
        </p>
      </div>
    </div>
  );
};

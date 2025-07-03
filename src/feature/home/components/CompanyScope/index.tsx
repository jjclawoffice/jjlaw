import { Container } from "@/components/layout";
import { useState } from "react";
import { Else, If, Then, When } from "react-if";
import { twMerge } from "tailwind-merge";
import { Company, NonCompany } from "./components";

const buttonOptions = [
  {
    value: 0,
    label: "Perusahaan",
  },
  {
    value: 1,
    label: "Non Perusahaan",
  },
];

const CompanyScope = () => {
  const [isActive, setIsActive] = useState<number>(0);

  return (
    <Container>
      <div className="flex flex-col gap-8 w-full justify-center items-center">
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-[#DDA93D] text-[25px] lg:text-[45px] font-bold">
            Ruang Lingkup Keahlian
          </h2>
          <div className="flex gap-3 lg:gap-6">
            {buttonOptions.map((option, id) => (
              <button
                key={id}
                className={twMerge(
                  "p-3 rounded-full w-36 lg:w-3xs cursor-pointer font-bold text-[14px] lg:text-[16px]",
                  isActive === id
                    ? "bg-[#FFD98A] text-black"
                    : "bg-transparent border-2 border-[#FFD98A]"
                )}
                onClick={() => {
                  setIsActive(option.value);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center lg:text-[18px]">
          <div className="max-w-80 h-[2px] bg-[#FBD381] w-full" />
          <When condition={isActive === 0}>
            <p className="text-center">
              JJC & Associates Law Office memiliki keahlian pada bidang hukum
              yang dibutuhkan oleh orang perorangan <br /> berupa :
            </p>
          </When>
          <When condition={isActive === 1}>
            <p className="text-center">
              JJC & Associates Law Office dengan kekhususan utama dalam bidang
              bisnis berupaya meningkatkan nilai perusahaan <br /> Anda dengan
              memberikan 3P (Pengetahuan, Pendampingan dan Pengamanan) dalam
              setiap legal action yang dilakukan oleh <br /> perusahaan agar
              dapat bersaing dengan perusahaan-perusahaan lain, baik dalam skala{" "}
              <br /> nasional maupun internasional.
            </p>
          </When>
        </div>
        <If condition={isActive === 0}>
          <Then>
            <Company />
          </Then>
          <Else>
            <NonCompany />
          </Else>
        </If>
      </div>
    </Container>
  );
};

export default CompanyScope;

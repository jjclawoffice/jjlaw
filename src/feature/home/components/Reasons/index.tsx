import { Container } from "@/components/layout";
import competance from "@/utils/constants/competance.json";
import Image from "next/image";

const Reasons = () => {
  return (
    <Container className="py-20">
      <div className="flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-[#DDA93D] text-[25px] lg:text-[45px] font-bold">
            Why Chose Us
          </h2>
          <p className="text-[#979797] text-[14px] lg:text-[18px] font-normal text-center">
            JJC & Associates Law Office berkomitmen memberikan layanan hukum{" "}
            <br />
            berkualitas bagi masyarakat dan perusahaan, didukung oleh
            profesionalisme <br /> dan integritas. Kepercayaan klien adalah
            prioritas kami, dengan layanan yang <br /> terus disempurnakan untuk
            menjaga reputasi positif di berbagai kalangan.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full justify-around gap-2.5">
          {competance.map((item, index) => (
            <div key={index} className="flex justify-center items-center gap-3">
              <Image width={70} height={70} src={item.icon} alt={item.lable} />
              <div className="flex flex-col">
                <p className="text-white text-[25px] lg:text-[30px] font-bold">
                  {item.lable}
                </p>
                <p className="text-white text-[14px] lg:text-[18px] font-normal text-center">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Reasons;

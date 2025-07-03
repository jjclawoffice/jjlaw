import { Container } from "@/components/layout";
import Image from "next/image";
import dataValues from "@/utils/constants/companyValues.json";

const WhyTrustUs = () => {
  return (
    <Container className="flex py-20">
      <div className="relative w-full justify-center hidden lg:flex">
        <Image
          src="/bitmap/elipse_overlay.png"
          width={400}
          height={400}
          alt="section_overlay"
          className="absolute top-0 left-7"
        />
        <Image
          src="/bitmap/section1.png"
          width={400}
          height={400}
          alt="section1"
        />
      </div>
      <div className="w-full flex flex-col gap-7">
        <div>
          <h2 className="text-[#DDA93D] text-[45px] font-bold">
            Why Trust Us?
          </h2>
          <p>
            Berperan aktif dan berkontribusi memberikan layanan hukum bagi
            kepentingan masyarakat dan perusahaan. Kantor hukum ini bermodalkan
            intelektualitas yang tinggi dengan didukung profesionalitas dan
            integritas di bidang hukum. Kepercayaan klien menjadi hal yang
            terpenting bagi kantor hukum ini sehingga peningkatan kualitas
            layanan hukum selalu disempurnakan secara berkala. Kantor hukum ini
            telah berhasil dikenal dengan citra yang positif di kalangan
            masyarakat dan berbagai perusahaan.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {dataValues.map((item, id) => (
            <div key={id} className="flex gap-3.5">
              <div className="flex flex-none justify-center items-center bg-gradient-to-b from-[#DDA93D] to-[#FFD98A] h-24 w-24 rounded-full p-0.5">
                <div className="flex justify-center items-center bg-black h-[80px] w-[80px] rounded-full">
                  <Image src={item.icon} width={51} height={51} alt="focus" />
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="font-bold">{item.title}</p>
                <p className="text-[14px] font-normal text-[#979797]">
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

export default WhyTrustUs;

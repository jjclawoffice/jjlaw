import { Container } from "@/components/layout";
import { Services } from "./components";

const ScopeOfServices = () => {
  return (
    <Container className="py-20">
      <div className="bg-white h-0.5 w-[432px] absolute top-40 right-0 hidden lg:block" />
      <div className="flex flex-col gap-5 md:gap-16">
        <div className="flex flex-col gap-2.5">
          <h2 className="text-[#DDA93D] text-[25px] lg:text-[45px] font-bold">
            Ruang Lingkup Layanan
          </h2>
          <p className="text-[#979797] text-[14px]  lg:text-[18px] font-normal">
            Kami menyediakan layanan hukum menyeluruh, dari konsultasi hingga
            litigasi,
            <br /> dengan solusi profesional dan strategis untuk setiap
            kebutuhan hukum Anda.
          </p>
        </div>
        <Services />
      </div>
    </Container>
  );
};

export default ScopeOfServices;

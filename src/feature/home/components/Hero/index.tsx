import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex justify-center items-center p-4">
      <div className="w-full h-full absolute top-0 left-0 z-10 bg-gray-800 opacity-50" />
      <Image
        src="/bitmap/background.png"
        fill
        alt="background"
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
        loading="lazy"
      />
      <div className="flex flex-col justify-center w-fit items-center gap-8 z-50">
        <h1 className="text-center text-[40px] md:text-[55px]">
          Your One Stop Legal Platform
        </h1>
        <p className="text-center text-[14px] md:text-[16px] font-medium">
          Mulut orang benar mengucapkan hikmat dan lidahnya <br /> menegakkan
          keadilan
        </p>
        <Link href="https://wa.me/6285176901277" target="_blank">
          <div className="flex gap-1.5 items-center bg-[#DDA93D] text-[14px] md:text-[16px] w-fit p-2">
            Konsultasi Sekarang
            <FaWhatsapp className="h-3.5 md:h-5 w-auto" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

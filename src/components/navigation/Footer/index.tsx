import { FaRegCopyright, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { MdAlternateEmail, MdOutlineMailOutline } from "react-icons/md";
import navbarData from "@/utils/constants/navbar.json";
import Link from "next/link";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col px-4 pt-5 md:px-[100px] lg:pt-24 pb-10 gap-8">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
        <div className="flex flex-col gap-6">
          <img alt="logo" src="/bitmap/logo.png" className="h-auto w-[200px]" />
          <p className="font-bold text-[12px]">
            JJC menjadi One stop Legal Platform atas <br /> kebutuhan anda dalam
            bidang hukum dan <br /> perpajakan.
          </p>
          <div className="flex gap-3">
            <FiInstagram className="h-7 w-auto" />
            <MdAlternateEmail className="h-7 w-auto" />
            <FaWhatsapp className="h-7 w-auto" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[20px] font-bold">
            <span className="text-[#DDA93D]">Quick</span> Links
          </p>
          {navbarData.map((item, id) => (
            <Link href={item.link} key={id}>
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[20px] font-bold">
            <span className="text-[#DDA93D]">Hubungi</span> Kami
          </p>
          <Link
            href="mailto:info.jjclaw@gmail.com"
            target="_blank"
            className="flex gap-1.5 items-center"
          >
            <MdOutlineMailOutline />
            <p>info.jjclaw@gmail.com</p>
          </Link>
          <Link
            href="https://wa.me/6285176901277"
            target="_blank"
            className="flex gap-1.5 items-center"
          >
            <LuPhone />
            <p>+62 851-7690-1277</p>
          </Link>
        </div>
        <div className="hidden lg:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2832744910847!2d112.67117127476092!3d-7.322044192686061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fce4a1c6a07f%3A0x5d2e3f3835b5d8f6!2sJl.%20Royal%20Residence%2C%20Sumur%20Welut%2C%20Kec.%20Lakarsantri%2C%20Surabaya%2C%20Jawa%20Timur%2060215!5e0!3m2!1sid!2sid!4v1751021632516!5m2!1sid!2sid"
            width="400"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="flex w-full border-t-2 border-[#DDA93D]">
        <div className="flex items-center text-[12px] font-medium pt-7 gap-1.5">
          <FaRegCopyright />
          <p>2025 jjclaw | education & legal service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

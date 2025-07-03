import navbarData from "@/utils/constants/navbar.json";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  return (
    <nav
      className={twMerge(
        "sticky top-0 z-[99] px-4 md:px-[100px] py-2 flex justify-between items-center w-full bg-black"
      )}
    >
      <img src="/bitmap/logo.png" className="w-20 h-auto" />
      <div className="flex gap-16 justify-center items-center">
        {navbarData.map((item, id) => (
          <Link href={item.link} key={id}>
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
      <Link href="https://wa.me/6285176901277" target="_blank">
        <button className="border-2 border-[#DDA93D] text-[#DDA93D] rounded-lg p-2 h-fit cursor-pointer">
          Hubungi Kami
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;

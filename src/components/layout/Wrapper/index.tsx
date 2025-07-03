import { Navbar, Footer } from "@/components/navigation";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={twMerge("h-screen max-w-screen flex flex-col")}>
      <Navbar />
      <main
        className={twMerge(
          "relative flex-1 bg-linear-to-b from-[#363636] to-[#1A1A1A] min-w-[360px] overflow-auto",
          className
        )}
      >
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Wrapper;

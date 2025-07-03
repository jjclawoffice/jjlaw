import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={twMerge("relative w-full px-4 md:px-[100px]", className)}>
      {children}
    </div>
  );
};

export default Container;

import nonCompany from "@/utils/constants/noncompany-scope.json";

const NonCompany = () => {
  return (
    <div className="flex flex-col gap-5 text-[16px] lg:text-[20px] text-[#979797] text-center font-normal">
      {nonCompany.map((item, id) => (
        <p key={id}>{item}</p>
      ))}
    </div>
  );
};

export default NonCompany;

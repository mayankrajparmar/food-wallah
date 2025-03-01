import { LINKEDIN_URL } from "../utils/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full flex items-center justify-center gap-[2px] p-[18px] mt-[30px] bg-[#ffffff] shadow-[-2px_7px_5px_-6px_#0000009c]">
      Created By
      <span className="text-xl">❤️</span>
      <a
        className="text-purple-900 font-bold"
        href={LINKEDIN_URL}
        target="_blank"
      >
        Mayank Raj Parmar
      </a>
      <div>
        <span className="mx-[5px] text-[20px]">&copy;</span>
        {year}
      </div>
      <p className="font-bold pl-[5px]">
        Food <span className="text-[#ff4800]">Wallah</span>
      </p>
    </div>
  );
};

export default Footer;

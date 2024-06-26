import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
const DesignBy = () => {
  return (
    <section className="flex flex-col items-center my-4 lg:my-0 lg:justify-start lg:gap-2">
      <div className="text-[#5e5e5e] text-4xl flex gap-4 py-2 lg:py-0">
        <a
          href="
          https://www.linkedin.com/in/muhammad-malook-mahar/
        "
          target="_blank"
        >
          <BiLogoLinkedin className="ease-in-out duration-200 lg:hover:scale-110 cursor-pointer" />
        </a>
        <a href="https://github.com/MuhammadMalook" target="_blank">
          <BiLogoGithub className="ease-in-out duration-200 lg:hover:scale-110 cursor-pointer" />
        </a>
      </div>
      <p className="flex font-Jost gap-2 text-[#5e5e5e]">
        Developed by<strong className="text-[#166E80]">Muhammad Malook</strong>
      </p>
      <p className="flex font-Jost gap-4 text-[#5e5e5e]">
        Copyright ©{new Date().getFullYear()} All rights reserved
      </p>
    </section>
  );
};

export default DesignBy;

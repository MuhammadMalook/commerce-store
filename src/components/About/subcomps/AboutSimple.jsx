import { BiLogoGithub } from "react-icons/bi";
const AboutSimple = () => {
  return (
    <div className=" p-4 flex flex-col gap-4 2xl:w-[50%] lg:p-20 items-center ">
      <h2 className="font-Nunito font-bold text-xl">
        <strong className="text-[#166E80] lg:text-3xl"> COMMERCE-STORE </strong>
        PROJECT
      </h2>
      <img
        src="/assets/images/photo-girl-like.jpg"
        alt="Girl jumping"
        className="w-72"
      />
      <p className="font-Jost max-w-5xl text-xl font-light lg:text-2xl">
        <strong className="text-[#166E80]">Commerce Store</strong> is a fake
        e-commerce website that fetches all its information from the{" "}
        <strong className="text-[#166E80]">Fake Store API</strong>. The purpose
        of this project, in addition to continuing to{" "}
        <strong className="text-[#166E80]">practice coding</strong>,{" "}
        <strong className="text-[#166E80]">responsive design</strong>, and{" "}
        <strong className="text-[#166E80]">Redux logic</strong>, is to implement{" "}
        <strong className="text-[#166E80]">Front-end testing</strong>. With this
        project, I was able to perform unit testing for each component.
      </p>
      <a href="https://github.com/lucasgrav/simple-store-app" target="_blank">
        <BiLogoGithub className="text-5xl text-gray-500 ease-in-out duration-200 lg:hover:scale-110 cursor-pointer" />
      </a>
    </div>
  );
};

export default AboutSimple;

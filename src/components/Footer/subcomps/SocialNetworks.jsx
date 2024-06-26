import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";

const SocialNetworks = () => {
  return (
    <section className="flex flex-col gap-4 justify-center items-center py-7 lg:py-0 lg:justify-start">
      <BiSolidShoppingBagAlt className="text-4xl text-[#166E80] lg:text-6xl" />
      <div className="flex gap-4 text-xl text-[#9c9c9c] lg:text-2xl">
        <BsInstagram />
        <BsYoutube />
        <BsFacebook />
      </div>
    </section>
  );
};

export default SocialNetworks;

const CardCategory = ({ children }) => {
  return (
    <article className="h-36 text-center w-[150px] shadow-[1px_0px_7px_0px_#0000002b]  bg-[#166E80] lg:hover:bg-[#ff6d6d] rounded-full p-4 flex items-center justify-center font-Nunito font-bold text-white lg:h-56 lg:w-56 transition ease-in-out duration-300 lg:hover:scale-105 cursor-pointer">
      {children}
    </article>
  );
};

export default CardCategory;

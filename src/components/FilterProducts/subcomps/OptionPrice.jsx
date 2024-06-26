import useFilter from "../CustomHook/useFilter";

const OptionPrice = () => {
  const { price, handleFilterPrice } = useFilter();

  return (
    <section>
      <select
        onChange={handleFilterPrice}
        value={price}
        className="block p-2 px-1 text-sm text-[#166E80] font-Nunito cursor-pointer font-semibold border-[#166E8046] bg-transparent border rounded-lg border-b-2  appearance-non focus:outline-none focus:ring-0 focus:border-[#166E80] peer"
      >
        <option value="default" disabled>
          Price
        </option>
        <option value="lowest">Lowest</option>
        <option value="highest">Highest</option>
      </select>
    </section>
  );
};

export default OptionPrice;

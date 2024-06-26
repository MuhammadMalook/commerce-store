import { useSelector } from "react-redux";
import useFilter from "../CustomHook/useFilter";

const OptionProducts = () => {
  const CATEGORIES = useSelector((state) => state.allCategories);
  const { category, handleFilterCategory } = useFilter();
  return (
    <section>
      <select
        onChange={handleFilterCategory}
        value={category}
        className="block p-2 px-1 text-sm text-[#166E80] font-Nunito cursor-pointer font-semibold border-[#166E8046] bg-transparent border rounded-lg border-b-2  appearance-non focus:outline-none focus:ring-0 focus:border-[#166E80] peer capitalize"
      >
        <option value="default" disabled>
          Category
        </option>
        <option value="all">All products</option>
        {CATEGORIES?.map((title, index) => (
          <option value={title} key={index} className="capitalize">
            {title}
          </option>
        ))}
      </select>
    </section>
  );
};

export default OptionProducts;

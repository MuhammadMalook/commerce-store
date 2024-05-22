import useFilter from "../CustomHook/useFilter";

const ButtonResetFilters = () => {
  const { resetAllFilters } = useFilter();
  return (
    <button
      onClick={resetAllFilters}
      className="border border-[#166E8046] hover:border-[#166E80] rounded-lg p-1 px-2 text-sm text-[#166E80] font-Nunito font-semibold"
    >
      Reset
    </button>
  );
};
export default ButtonResetFilters;

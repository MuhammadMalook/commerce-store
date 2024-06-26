import { AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { motion } from "framer-motion";
import { addCart } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const CardProduct = ({ title, img, price, rating, id }) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        delay: 0.3,
      }}
      className=" flex w-full lg:w-[60%] gap-7 items-start p-4 border-b border-[#166E8046] sm:justify-center "
    >
      <Link to={`/details/${id}`}>
        <div className=" w-[100px] flex justify-center ">
          <img src={img} alt={title} className="w-[50px] md:w-[80px]" />
        </div>
      </Link>
      <div className="w-[60%] flex flex-col gap-4">
        <Link to={`/details/${id}`}>
          <h2 className="font-Nunito text-sm text-wrap truncate md:text-xl">
            {title}
          </h2>
        </Link>
        <section className="flex items-center font-Jost text-[#166E80] justify-between md:text-xl">
          <p>$ {price}</p>
          <p className="flex items-center gap-1">
            <AiOutlineStar />
            {rating}
          </p>
          <BsCartPlus
            className="text-xl  md:text-2xl cursor-pointer"
            data-testid="cart-icon"
            onClick={() => {
              dispatch(addCart(id));
            }}
          />
          <Link to={`/details/${id}`}>
            <AiOutlineEye className="hidden sm:flex" />
          </Link>
        </section>
      </div>
    </motion.div>
  );
};

export default CardProduct;

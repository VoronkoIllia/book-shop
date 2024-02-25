import { useDispatch } from "react-redux";
import { BookInCart } from "../../../types/cart-types";
import s from "./CartItem.module.css";
import { AppDispatch } from "../../../state-managment/store";
import { CartActionCreators } from "../../../state-managment/reducers/cart-reducer";

export const CartItem: React.FC<BookInCart> = ({
  id,
  image,
  title,
  price,
  count,
  cost,
}) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <img src={image} alt={title} />
      <div>{title}</div>
      <div>Price: {price}$</div>
      <div>Count: {count}</div>
      <div>Cost: {cost}$</div>
      <button
        onClick={() => dispatch(CartActionCreators.removeBookFromCart(id))}
      >
        Delete
      </button>
    </div>
  );
};

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state-managment/store";
import { useSelector } from "react-redux";
import { getBooksInCart } from "../../utils/selectors";
import { CartActionCreators } from "../../state-managment/reducers/cart-reducer";
import { CartItem } from "./CartItem/CartItem";
import { useAuthRedirect } from "../../hocs/withAuthRedirect";

export const CartPage: React.FC = () => {
  useAuthRedirect();

  const dispatch: AppDispatch = useDispatch();
  const booksInCart = useSelector(getBooksInCart);

  return (
    <div>
      <button
        disabled={booksInCart.length === 0}
        onClick={() => dispatch(CartActionCreators.purchaseCart())}
      >
        Purchase
      </button>
      {booksInCart.length ? (
        booksInCart.map((book) => <CartItem key={book.id} {...book} />)
      ) : (
        <div>Hui tebe</div>
      )}
    </div>
  );
};

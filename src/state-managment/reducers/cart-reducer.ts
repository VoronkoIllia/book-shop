import { ActionTypes } from "../../types/actions-types";
import { SpecificBook } from "../../types/book-types";
import { BookInCart } from "../../types/cart-types";

const ADD_BOOK_TO_CART = "books-shop/cart-page/add-book-to-cart";
const REMOVE_BOOK_FROM_CART = "books-shop/cart-page/remove-book-to-cart";
const UPDATE_COUNT_OF_SPECIFIC_BOOK_IN_CART =
  "books-shop/cart-page/update-count-of-specific-book-in-cart";
const PURCHASE_CART = "books-shop/cart-page/purchase-cart";

export type CartStateType = {
  books: Array<BookInCart>;
};
type CartActionType = ReturnType<ActionTypes<typeof CartActionCreators>>;

const cartInitialState: CartStateType = {
  books: [],
};

export default function cartReducer(
  state = cartInitialState,
  action: CartActionType
): CartStateType {
  switch (action.type) {
    case ADD_BOOK_TO_CART:
      const newBook = {
        ...action.book,
        count: action.count,
        cost: action.book.price * action.count,
      };
      return {
        ...state,
        books: [...state.books, newBook],
      };
    case REMOVE_BOOK_FROM_CART:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
      };
    case UPDATE_COUNT_OF_SPECIFIC_BOOK_IN_CART:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.id ? { ...book, count: action.count } : book
        ),
      };
    case PURCHASE_CART:
      return {
        ...state,
        books: [],
      };
    default:
      return state;
  }
}

export const CartActionCreators = {
  addBookToCart: (book: SpecificBook, count: number) =>
    ({ type: ADD_BOOK_TO_CART, book, count } as const),
  removeBookFromCart: (id: number) =>
    ({ type: REMOVE_BOOK_FROM_CART, id } as const),
  updateSpecificBookCount: (id: number, count: number) =>
    ({ type: UPDATE_COUNT_OF_SPECIFIC_BOOK_IN_CART, id, count } as const),
  purchaseCart: () => ({ type: PURCHASE_CART } as const),
};

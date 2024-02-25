import { ThunkAction } from "redux-thunk";
import { getBooksFromJSON } from "../../api/api";
import { ActionTypes } from "../../types/actions-types";
import { SpecificBook } from "../../types/book-types";
import { AppState } from "../store";

const addBooksToList = "books-shop/books-list/add-books-to-list";
const purchaseBookList = "books-shop/books-list/purchase-book-list";

type BooksListState = {
  books: Array<SpecificBook>;
};
type BooksListActionType = ReturnType<
  ActionTypes<typeof booksListActionCreators>
>;

export type BooksListThunk = ThunkAction<
  Promise<void>,
  AppState,
  undefined,
  BooksListActionType
>;

const booksListInitialState: BooksListState = {
  books: [],
};

export default function booksListReducer(
  state = booksListInitialState,
  action: BooksListActionType
): BooksListState {
  switch (action.type) {
    case addBooksToList:
      return {
        ...state,
        books: [...state.books, ...action.books],
      };
    case purchaseBookList:
      return {
        ...state,
        books: [],
      };
    default:
      return state;
  }
}

export const booksListActionCreators = {
  addBooksToList: (books: Array<SpecificBook>) =>
    ({ type: addBooksToList, books } as const),
  purchaseBookList: () => ({ type: purchaseBookList } as const),
};

export const requestBooks = (): BooksListThunk => async (dispatch) => {
  const books = await getBooksFromJSON();
  console.log(books);
  dispatch(booksListActionCreators.addBooksToList(books));
};

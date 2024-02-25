import { AppState } from "../state-managment/store";

export const getBooks = (state: AppState) => {
    return state.booksPage.books;
}
export const getUsername = (state:AppState)=> state.auth.username
export const getIsAuth = (state: AppState) => state.auth.isAuth
export const getBooksInCart = (state: AppState) => state.cartPage.books;
export const getCountOfBooksFromCart = (state: AppState) => state.cartPage.books.reduce((acc,el)=>acc+el.count,0);

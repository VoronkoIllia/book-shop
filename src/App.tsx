import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Books } from "./components/BooksList/BooksList";
import { Header } from "./components/Header/Header";
import { LoginForm } from "./components/Login/Login";
import { SpecificBookPage } from "./components/SpecificBook/SpecificBook";
import {
  booksListActionCreators,
  requestBooks,
} from "./state-managment/reducers/books-list-reducer";
import { AppDispatch } from "./state-managment/store";
import { CartPage } from "./components/Cart/Cart";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(requestBooks());
    return () => {
      dispatch(booksListActionCreators.purchaseBookList());
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="routes-wrapper">
          <Routes>
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<SpecificBookPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
        <div style={{ height: "20px", background: "yellow" }}>ddsdsds</div>
      </div>
    </BrowserRouter>
  );
}

export default App;

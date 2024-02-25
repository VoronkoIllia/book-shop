// import { useState } from "react";
import { MenuItem, Select, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useAuthRedirect } from "../../hocs/withAuthRedirect";
import { getBooks } from "../../utils/selectors";
import { BookItem } from "./BookItem/BookItem";
import s from "./BooksList.module.css";
import { useCallback, useState } from "react";
import { SpecificBook } from "../../types/book-types";

export const Books = () => {
  useAuthRedirect();

  const [beginString, setBeginString] = useState("");
  const [costFilter, setCostFilter] = useState("any");

  const filterBookByPrice = useCallback(
    (book: SpecificBook, filter: string) => {
      switch (filter) {
        case "under 10":
          return book.price < 10;
        case "between 10 and 30":
          return book.price >= 10 && book.price <= 30;
        case "high then 30":
          return book.price >= 30;
        default:
          return true;
      }
    },
    []
  );

  const allBooks = useSelector(getBooks);
  const filtredBooks = allBooks.filter((book) => {
    return (
      book.title.toLowerCase().startsWith(beginString) &&
      filterBookByPrice(book, costFilter)
    );
  });

  return (
    <div className={s.wrapper}>
      <div>
        <TextField
          placeholder="Input title of book"
          onChange={(e) => {
            setBeginString(e.currentTarget.value.toLowerCase());
          }}
        />
        <Select
          autoWidth
          variant="filled"
          value={costFilter}
          onChange={(e) => setCostFilter(e.target.value)}
        >
          <MenuItem value="any">----</MenuItem>
          <MenuItem value="under 10">Under $10</MenuItem>

          <MenuItem value="between 10 and 30">Between 10 and 30</MenuItem>
          <MenuItem value="high then 30">High then 30</MenuItem>
        </Select>
      </div>
      <div className={s.bookList}>
        {filtredBooks.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
            price={book.price}
            shortDescription={book.shortDescription}
          />
        ))}
      </div>
    </div>
  );
};

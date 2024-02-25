import { Box, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import defaultBookImage from "../../assets/defaultCover.png";
import { useAuthRedirect } from "../../hocs/withAuthRedirect";
import { CartActionCreators } from "../../state-managment/reducers/cart-reducer";
import { AppDispatch } from "../../state-managment/store";
import { getBooks, getBooksInCart } from "../../utils/selectors";

export const SpecificBookPage: React.FC = () => {
  useAuthRedirect();

  const books = useSelector(getBooks);
  const booksFromCart = useSelector(getBooksInCart);
  const params = useParams();
  const currentBookId = Number(params.id);

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const [isCurrentBookInCart, setIsCurrentBookInCart] = useState(true);

  const [bookCount, setBookCount] = useState<number>(1);

  const currentBook = useMemo(() => {
    let resultBook;
    resultBook = booksFromCart.find((book) => book.id === currentBookId);
    setIsCurrentBookInCart(true);
    if (!resultBook) {
      resultBook = books.find((book) => book.id === currentBookId);
      setIsCurrentBookInCart(false);
    } else {
      setBookCount(resultBook.count);
    }
    return resultBook;
  }, [books, booksFromCart, currentBookId]);

  if (!currentBook) return <div>Idi nahui</div>;

  const { title, author, tags, description, image, price, amount } =
    currentBook;

  const chanheHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentCount = Number(e.target.value);

    if (currentCount >= amount) {
      setBookCount(amount);
    } else if (currentCount <= 0 || !currentCount) {
      setBookCount(1);
    } else {
      setBookCount(currentCount);
    }
  };

  return (
    <Box
      sx={{ borderBottom: "solid 1px black", margin: "0 48px 0 48px" }}
      maxWidth="xl"
      maxHeight="100%"
      flexGrow="2"
    >
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "16px",
        }}
      >
        <Box sx={{ width: "20%" }}>
          <img width="100%" src={image || defaultBookImage} alt={title} />
        </Box>
        <Box>
          <Typography data-testid="title" variant="h4">
            {title}
          </Typography>
          <Typography variant="body1">Author: {author}</Typography>
          <Typography variant="body1">Tags: {tags.join(", ")}</Typography>
          <Typography variant="body1">Price: ${price}</Typography>
        </Box>
      </Box>
      <div>
        Cost:
        <span data-testid="cost field">
          {(currentBook.price * bookCount).toFixed(2)} $
        </span>
      </div>
      <button
        data-testid="decrease by 1"
        disabled={bookCount === 1}
        onClick={() => setBookCount(bookCount - 1)}
      >
        -
      </button>
      <input
        data-testid="count value"
        style={{ width: "24px", textAlign: "center" }}
        value={bookCount}
        onChange={chanheHandler}
      ></input>
      <button
        data-testid="increase by 1"
        disabled={bookCount === currentBook.amount}
        onClick={() => setBookCount(bookCount + 1)}
      >
        +
      </button>
      <button
        disabled={bookCount === 0}
        onClick={() => {
          if (isCurrentBookInCart) {
            dispatch(
              CartActionCreators.updateSpecificBookCount(
                currentBook.id,
                bookCount
              )
            );
          } else
            dispatch(CartActionCreators.addBookToCart(currentBook, bookCount));
        }}
      >
        Add To Cart
      </button>
    </Box>
  );
};

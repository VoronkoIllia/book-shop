import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import defaultBookImage from "../../../assets/defaultCover.png";
import { ItemBook } from "../../../types/book-types";
import s from "./BookItem.module.css";

export const BookItem: React.FC<ItemBook> = ({
  id,
  author,
  title,
  image,
  price,
  shortDescription,
}) => {
  const navigate = useNavigate();

  const onClickHandler = useCallback(() => navigate(`/books/${id}`), []);

  return (
    <Card className={s.card}>
      <CardActionArea
        sx={{
          flexGrow: "2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
        onClick={onClickHandler}
      >
        <CardMedia
          component="img"
          image={image || defaultBookImage}
          alt={title}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            component="span"
            sx={{ maxHeight: "120px", overflow: "hidden" }}
            gutterBottom
            variant="body2"
          >
            {shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button onClick={onClickHandler} size="small">
        View
      </Button>
    </Card>
  );
};

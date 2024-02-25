import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCountOfBooksFromCart, getUsername } from "../../../utils/selectors";
import s from "./Navbar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../state-managment/store";
import { AuthActionCreators } from "../../../state-managment/reducers/auth-reducer";

export const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector(getUsername);
  const countOfBooksInCart = useSelector(getCountOfBooksFromCart);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Button
          onClick={() => navigate("/books")}
          sx={{ my: 2, color: "white", display: { md: "block", xs: "none" } }}
        >
          All Books
        </Button>
      </Box>
      <Box sx={{ flexGrow: 0, display: "flex", gap: "8px" }}>
        <IconButton
          onClick={() => navigate("/cart")}
          className={s.cartButton}
          style={{ background: "#000", color: "white" }}
        >
          <Badge badgeContent={countOfBooksInCart} color="error" showZero>
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        {/* <div className={s.cartItemsCount}>{countOfBooksInCart}</div> */}
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar>{username[0].toUpperCase()}</Avatar>
        </IconButton>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          // anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem
            onClick={() => {
              dispatch(AuthActionCreators.signOut());
            }}
          >
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );

  {
    /* <div className={s.wrapper}>
      <div className={s.cart}>
        <IconButton
          onClick={() => navigate("/cart")}
          className={s.cartButton}
          style={{ background: "#000", color: "white" }}
        >
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <div className={s.cartItemsCount}>{countOfBooksInCart}</div>
      </div> */
  }
  //   <div>
  //     <Button
  //       aria-controls="menu"
  //       onClick={(e) => setAnchorEl(e.currentTarget)}
  //     >
  //       {username}
  //     </Button>
  //     {anchorEl && (
  //       <Menu
  //         id="menu"
  //         anchorEl={anchorEl}
  //         open={Boolean(anchorEl)}
  //         onClose={() => setAnchorEl(null)}
  //       >
  //         <MenuItem
  //           onClick={() => {
  //             dispatch(AuthActionCreators.signOut());
  //           }}
  //         >
  //           Sign Out
  //         </MenuItem>
  //       </Menu>
  //     )}
  // </div>
  // </div>
};

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIsAuth } from "../../utils/selectors";
import s from "./Header.module.css";
import { Navbar } from "./Navbar/Navbar";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
  Icon,
} from "@mui/material";
import logo from "../../assets/logo.png";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // useAuthRedirect();
  // const username = useSelector(getUsername)
  const isAuth = useSelector(getIsAuth);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
    // eslint-disable-next-line
  }, []);

  // if(!isAuth){ navigate("/login")}

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <img src={logo} width="100%" /> */}
          <Avatar src={logo} />

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MyLibrary
          </Typography>

          {isAuth && <Navbar />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

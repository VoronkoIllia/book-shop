import { Avatar, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { AuthActionCreators } from "../../state-managment/reducers/auth-reducer";
import { AppDispatch } from "../../state-managment/store";
import s from "./Login.module.css";

const validationSchema = object({
  username: string()
    .required("Username is required")
    .min(8, "Username should be of minimum 8 characters length")
    .max(16, "Username should be of maximum 8 characters length"),
});

export const LoginForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { username: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(AuthActionCreators.signIn(values.username));
      navigate("/books");
    },
  });
  return (
    <div className={s.wrapper}>
      <div className={s.formContainer}>
        <Avatar
          sx={{
            alignSelf: "center",
            width: { xs: "30vw", md: "13vw", sm: "20vw" },
            height: { xs: "30vw", md: "13vw", sm: "20vw" },
            background: "red",
          }}
        />
        <form className={s.loginForm} onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.errors.username}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

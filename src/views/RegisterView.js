import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import s from "./Views.module.css";

import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";

export default function RegisterView() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    amount: "",
    name: "",
    email: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleChangePassword = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      authOperations.register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div className={s.align}>
      <h2 className={s.page_title}>Registration page</h2>

      <form
        onSubmit={handleSubmit}
        className={s.form}
        autoComplete="off"
        noValidate
      >
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <HowToRegIcon />
          </Grid>
          <Grid item>
            <TextField
              className={s.input}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <MailOutlineRoundedIcon />
          </Grid>
          <Grid item>
            <TextField
              className={s.input}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <VpnKeyRoundedIcon />
          </Grid>
          <Grid item>
            <FormControl variant="outlined" size="medium">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChangePassword("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Button variant="outlined" type="submit" className={s.btn_submit}>
          Log In
        </Button>

        {/* <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label> */}

        {/* <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={s.btn_submit} type="submit">
          Register
        </button> */}
      </form>
    </div>
  );
}

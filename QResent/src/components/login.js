import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import StudentProfile from './studentProfile';
const Login = ({ setValue }) => {
  const paperStyle = {
    padding: 60,
    height: "75%",
    width: 500,
    margin: "0 auto", 
  };
  const avatarStyle = { backgroundColor: "#003049" };
  const btnStyle = { margin: "8px 0", backgroundColor: "#003049", opacity: "100%"};

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

 const history = useHistory();
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const handleChangeToSignup = () => setValue = 1;
  const handleSubmit = async (values) => {
    const { email, password } = values;
    const user = {
      email,
      password,
    };
    axios
      .post("http://localhost:8080/login", user)
      .then((response) => {
      const jsonData =JSON.stringify(response.data);
      localStorage.setItem("USER", jsonData);  
      localStorage.setItem("GROUP", "NOT_SET_UP");
      localStorage.setItem("LDAP", "NOT_SET_UP");
      
      const data = JSON.parse(jsonData);
      if(data.userType === "2") {
        history.push("/pprofile");
      } else if(data.userType === "3") {
        history.push("/sprofile");
      } else {
        history.push("/aprofile");
      }
    })
      .catch((error) => {
        alert("Bad credentials");
      });
  };

  return (
    <Grid container>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Log in</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form>
              <Grid container direction={"column"} spacing={1}>
                <Grid item>
                  <TextField
                    name="email"
                    label="Email"
                    placeholder="Enter email"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("email")}
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Grid>

                <Grid item>
                  <TextField
                    name="password"
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("password")}
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  />
                </Grid>

                <Grid item>
                  <Field
                    as={FormControlLabel}
                    name="remember"
                    control={<Checkbox color="primary" />}
                    label="Remember me"
                  />
                </Grid>

                <Grid item>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnStyle}
                    fullWidth
                  >
                    Sign in
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>

        <Grid container direction={"column"} spacing={1}>
          <Grid item>
            <Typography>
              Do you have an account?{" "}
              <Link to="/signup" onClick={handleChangeToSignup}>
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;

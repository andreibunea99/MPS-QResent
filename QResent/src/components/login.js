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
      .required("Password is required"),
  });

 const history = useHistory();
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const initialCourse = {
    description : "",
    minReqHomework : "",
    minReqProject : "",
    minReqExam : "",
    bonus : "",
    timetable : [],
  }

  const handleChangeToSignup = () => setValue = 1;
  const handleSubmit = async (values) => {
    const { email, password } = values;
    const user = {
      email,
      password,
    };
  
    axios
      .post("http://5090-89-136-175-3.ngrok.io/login", user)
      .then((response) => {
      const jsonData =JSON.stringify(response.data);
      localStorage.setItem("USER", jsonData);
      const user = JSON.parse(jsonData);

      console.log(jsonData);

      if(user.userType == "1") {
        // const infoCourse = user.courseInfo;
        // console.log(infoCourse);
        // localStorage.setItem("INFO_COURSE", infoCourse);
        history.push('/teacher/profile');
      } else if(user.userType == "2") {
        history.push('/student/profile');
      } else {
        history.push('/admin/profile');
      }

    })
      .catch((error) => {
        alert(error);
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

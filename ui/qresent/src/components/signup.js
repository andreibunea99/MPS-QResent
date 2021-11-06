import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = ({ setValue }) => {
  const paperStyle = {
    padding: 60,
    height: "75%",
    width: 500,
    margin: "0 auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "green" };
  const marginTop = { marginTop: 5 };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    userType: Yup.string().required("Please select an option"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const [users, setUsers] = useState([]);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };

  const handleSubmit = async (values) => {
    const { firstName, lastName, email, password, userType, verifyUserType } =
      values;
    const employee = {
      firstName,
      lastName,
      email,
      password,
      userType,
      role: {
        id: verifyUserType,
      },
    };
    axios
      .post("http://localhost:8080/employees/register", employee)
      .then(() => {
        alert("Register completed!");
        setValue(0);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const getUsers = async () => {
    await axios
      .get("http://localhost:8080/users")
      .then((response) => {
        let usersArray = [];
        for (let i = 0; i < response.data.length; i++) {
          usersArray.push(response.data[i]);
        }
        setUsers(usersArray);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Grid container>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Register</h2>
          <Typography variant="caption">Create an account here!</Typography>
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
                    name="firstName"
                    label="First Name"
                    placeholder="Enter first name"
                    fullWidth
                    onChange={handleChange("firstName")}
                    error={errors.firstName && touched.firstName}
                    helperText={
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : null
                    }
                  />
                </Grid>

                <Grid item>
                  <TextField
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter last name"
                    fullWidth
                    onChange={handleChange("lastName")}
                    error={errors.lastName && touched.lastName}
                    helperText={
                      errors.lastName && touched.lastName
                        ? errors.lastName
                        : null
                    }
                  />
                </Grid>

                <Grid item>
                  <TextField
                    name="email"
                    label="Email"
                    placeholder="Enter email"
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
                  <TextField
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Confirm password"
                    type="password"
                    fullWidth
                    onChange={handleChange("confirmPassword")}
                    error={errors.confirmPassword && touched.confirmPassword}
                    helperText={
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : null
                    }
                  />
                </Grid>

                <Grid item>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <TextField
                        value={values.userType}
                        id="demo-simple-select"
                        name="userType"
                        label="Select your function"
                        onChange={handleChange("userType")}
                        error={errors.userType && touched.userType}
                        helperText={
                          errors.userType && touched.userType
                            ? errors.userType
                            : null
                        }
                        select
                      >
                        <MenuItem value={0} key={0}>
                          Administrator
                        </MenuItem>
                        <MenuItem value={1} key={1}>
                          Student
                        </MenuItem>
                        <MenuItem value={2} key={2}>
                          Professor
                        </MenuItem>
                        {users.map(({ id, firstName, lastName }) => (
                          <MenuItem value={id} key={id}>
                            {firstName} {lastName}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Box>
                </Grid> 

                {/* <Grid item>
                  <FormControl component="fieldset" style={marginTop}>
                    <FormLabel component="legend">
                      Are you a manager? *
                    </FormLabel>
                    <RadioGroup
                      aria-label="Are you a manager? *"
                      name="isManager"
                      style={{ display: "initial" }}
                      onChange={handleChange("isManager")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                    <ErrorMessage name="isManager">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </FormControl>
                </Grid>

                {/* <Grid item>
                  {values.isManager === "1" && (
                    <TextField
                      name="managerCode"
                      label="Insert the code"
                      id="ifYes"
                      placeholder="Enter the code"
                      onChange={handleChange("managerCode")}
                      error={errors.managerCode && touched.managerCode}
                      helperText={
                        errors.managerCode && touched.managerCode
                          ? errors.managerCode
                          : null
                      }
                    />
                  )}
                </Grid> */}
                <Grid item>
                  <FormControlLabel
                    name="acceptTerms"
                    control={<Checkbox name="checkedA" />}
                    label="I accept the terms and conditions *"
                    onChange={handleChange("acceptTerms")}
                  />
                  <ErrorMessage name="acceptTerms">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </Grid>

                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={marginTop}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Signup;

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
import FormControl from "@mui/material/FormControl";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {useHistory } from "react-router-dom";


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
    userType: Yup.string().required("Please select an option"),
    course: Yup.string().required("Please choose a course"),
  });
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const initialValues = {
    firstName: "",
    lastName: "",
    password:"",
    email: "",
    userType: "",
    course: ""
  };

  const handleSubmit = async (values) => {
    const { firstName, lastName, email, password, userType, course} = values;
    //values.password = Math.random().toString(36).slice(-8);
    const user = {
      firstName,
      lastName,
      email,
      password,
      userType,
      course
    };
    axios
      .post("http://cbb3-89-136-175-3.ngrok.io/register", user)
      .then(() => {
        alert('User was added!');
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
          <h2 style={headerStyle}>Add user</h2>
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
                </Grid> <Grid item>
                  <TextField
                    name="password "
                    label="Password"
                    placeholder="Enter password"
                    fullWidth
                    onChange={handleChange("password")}
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : null
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
                        label="Select user type"
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
                          Professor
                        </MenuItem>
                        <MenuItem value={2} key={2}>
                          Student
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
                <Grid item>
                {values.userType == "1" && (
                  <TextField
                    name="course"
                    label="Course"
                    placeholder="Enter course"
                    fullWidth
                    onChange={handleChange("course")}
                    error={errors.course && touched.course}
                    helperText={
                      errors.course && touched.course ? errors.course : null
                    }
                  />
                                )}                </Grid>
                <Grid item>
                  {/* <Link to="/done"> */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={marginTop}
                  >
                    Sign Up
                  </Button>
                  {/* </Link> */}
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Link, useHistory } from "react-router-dom";

import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


class QrSubmit extends React.Component {
    render() { 
        const paperStyle = {
            padding: 60,
            height: "75%",
            width: 500,
            margin: "0 auto",
          };
          const headerStyle = { margin: 10 };
          const btnStyle = { margin: "8px 0", backgroundColor: "violet" };

          const avatarStyle = { backgroundColor: "violet" };

         // const history = useHistory();

         const validationSchema = Yup.object().shape({
            email: Yup.string().required("Email is required").email("Email is invalid"),
            token: Yup.string()
              .required("Token is required"),
            course: Yup.string()
            .required("Course is required"),
            date: Yup.string()
              .required("Date is required")
          });

          const initialValues = {
            email: "",
            token: "",
            course: "",
            date: ""
          };

          const handleSubmit = async (values) => {
            const { email, token, course, date} =
              values;
            const user = {
              email,
              token,
              course,
              date
            };
            axios
              .post("http://localhost:8080/qrSubmit", user)
              .then(() => {
               // history.push("/success")
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
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Submit</h2>
        </Grid>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form>
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
                    name="token"
                    label="Token"
                    placeholder="Enter token"
                    type="token"
                    fullWidth
                    onChange={handleChange("token")}
                    error={errors.token && touched.token}
                    helperText={
                      errors.token && touched.token
                        ? errors.token
                        : null
                    }
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name="course"
                    label="Course"
                    placeholder="Course"
                    type="course"
                    fullWidth
                    onChange={handleChange("course")}
                    error={errors.course && touched.course}
                    helperText={
                      errors.course && touched.course
                        ? errors.course
                        : null
                    }
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name="Date"
                    type="date"
                    fullWidth
                    onChange={handleChange("date")}
                    error={errors.date && touched.date}
                    helperText={
                      errors.date && touched.date
                        ? errors.date
                        : null
                    }
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
                    Submit
                  </Button>
                </Grid>
                </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
        );     
    }
}
 
export default QrSubmit;
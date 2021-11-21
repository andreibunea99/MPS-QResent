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

import { Formik, Form } from "formik";
import * as Yup from "yup";

const QrSubmit = ({ }) => {
      const paperStyle = {
          padding: 60,
          height: "75%",
          width: 500,
          margin: "0 auto",
        };
        const headerStyle = { margin: 10 };
        const btnStyle = { margin: "8px 0", backgroundColor: "violet" };

        const tokenQr = localStorage.getItem("QRToken");


        let data = localStorage.getItem("USER");
        const user = JSON.parse(data);
        const avatarStyle = { backgroundColor: "violet" };

        const history = useHistory();

        const validationSchema = Yup.object().shape({
          email: Yup.string().required("Email is required").email("Email is invalid"),
          token: Yup.string()
            .required("Token is required"),
        });

        const initialValues = {
          email: "",
          token: "",
        };
        
        const handleSubmit = async (values) => {
          const { email, token} =
            values;
          const infoStudent = {
            email,
            token,
          };
          console.log(tokenQr + "       - " + infoStudent);
          axios
            .post("http://localhost:8080/qrSubmit/" + user.ID + "/" + tokenQr, infoStudent)
            .then(() => {
              console.log("ok frontend1");
              history.push('/done');
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
};

export default QrSubmit;
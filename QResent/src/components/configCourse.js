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
import { Link, useHistory } from "react-router-dom";


import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ConfigCourse = ({ setValue }) => {
  const paperStyle = {
    padding: 60,
    height: "75%",
    width: 500,
    margin: "0 auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "purple" };
  const marginTop = { marginTop: 5 };
  const history = useHistory();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    userType: Yup.string().required("Please select an option"),
  });

  const [info, setInfo] = useState([]);
  const initialValues = {
    description: "",
    minreq: "",
    bonus: "",
    timetable: ""
  };
  let data = localStorage.getItem("USER");
  const user= JSON.parse(data);
  const handleSubmit = async (values) => {
    const { description, minreq, bonus, timetable} = values;
    //values.password = Math.random().toString(36).slice(-8);
    const info = {
        description,
        minreq,
        bonus,
        timetable,
    };
    axios
      .post("http://localhost:8080/configCourse/" + user.courseID, info)
      .then((response) => {
        localStorage.setItem("INFO_COURSE", response.data);
        history.push('./pprofile');
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
          <h2 style={headerStyle}>Configure course</h2>
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
                    name="description"
                    label="Description"
                    placeholder="Enter Description"
                    fullWidth
                    onChange={handleChange("description")}
                    multiline
                  />
                </Grid>

                <Grid item>
                  <TextField
                    name="minreq"
                    label="Minimum Requirements"
                    placeholder="Enter minimum requirements"
                    fullWidth
                    onChange={handleChange("minreq")}
                    multiline
                  />
                </Grid>

                <Grid item>
                  <TextField
                    name="bonus"
                    label="Bonus"
                    placeholder="Enter bonus"
                    fullWidth
                    onChange={handleChange("bonus")}
                    multiline
                  />
                  </Grid>
            
                  <Grid item>
                  <TextField
                    name="timetable"
                    label="Timetable"
                    placeholder="Enter schedule"
                    fullWidth
                    onChange={handleChange("timetable")}
                    multiline
                  />
                  </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={marginTop}
                  >
                    Submit
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

export default ConfigCourse;

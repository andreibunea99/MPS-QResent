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
const ConfigCourse = ({ setValue }) => {
  const paperStyle = {
    padding: 60,
    height: "75%",
    width: 500,
    margin: "0 auto", 
  };
  const avatarStyle = { backgroundColor: "#003049" };
  const btnStyle = { margin: "8px 0", backgroundColor: "#003049", opacity: "100%"};

  const validationSchema = Yup.object().shape({
    
  });

  let data = localStorage.getItem("USER");
  const user = JSON.parse(data);

 const history = useHistory();
  const initialValues = {
    description: "",
    minReqHomework: "",
    minReqProject: "",
    minReqExam: "",
    bonus: "",
    timetable: "",
  };
  const handleSubmit = async (values) => {
    const {  description,
      minReqHomework,
      minReqProject,
      minReqExam,
      bonus,
      timetable, token, courseName } = values;
    const info = {
      description,
        minReqHomework,
        minReqProject,
        minReqExam,
        bonus,
        timetable,
        token,
        courseName
    };
    info.token = user.token;
    info.courseName = user.courseName;

    axios
      .post("http://e4c2-89-136-175-3.ngrok.io/configCourse/" + user.ID, info)
      .then((response) => {
        const jsonData =JSON.stringify(response.data);
        localStorage.setItem("USER", jsonData);
        console.log(jsonData);
        history.push('/teacher/profile');
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
          <h2>Manage Account</h2>
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
                    placeholder="Enter description"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("description")}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    name="minReqHomework"
                    label="minReqHomework"
                    placeholder="Enter minReqHomework"
                    type="minReqHomework"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("minReqHomework")}
                   
                  />
                </Grid>

                <Grid item>
                  <TextField
                    name="minReqProject"
                    label="minReqProject"
                    placeholder="Enter minReqProject"
                    type="minReqProject"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("minReqProject")}
                   
                  />
                </Grid>

                <Grid item>
                  <TextField
                    name="minReqExam"
                    label="minReqExam"
                    placeholder="Enter minReqExam"
                    type="minReqExam"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("minReqExam")}
                   
                  />
                </Grid>

                <Grid item>
                  <TextField
                    name="bonus"
                    label="bonus"
                    placeholder="Enter bonus"
                    type="bonus"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("bonus")}
                   
                  />
                </Grid>

                <Grid item>
                  <TextField
                    name="timetable"
                    label="timetable"
                    placeholder="Enter timetable"
                    type="timetable"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("timetable")}
                   
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
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default ConfigCourse;
 

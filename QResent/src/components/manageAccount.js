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
const ManageAccount = ({ setValue }) => {
  const paperStyle = {
    padding: 60,
    height: "75%",
    width: 500,
    margin: "0 auto", 
  };
  const avatarStyle = { backgroundColor: "#003049" };
  const btnStyle = { margin: "8px 0", backgroundColor: "#003049", opacity: "100%"};

  const validationSchema = Yup.object().shape({
    group: Yup.string().required("Group is required"),
    ldap: Yup.string()
      .required("Ldap is required")
  });

 const history = useHistory();
  const initialValues = {
      group:"",
      ldap:"",
  };

  const handleChangeToSignup = () => setValue = 1;
  let data = localStorage.getItem("USER");
  const user_g = JSON.parse(data);
  const handleSubmit = async (values) => {
    const { group, ldap } = values;
    const user = {
      group,
      ldap,
    };
    axios
      .post("http://840f-188-25-105-59.ngrok.io/manageAccount/" + user_g.ID, user)
      .then((response) => {
        const jsonData =JSON.stringify(response.data);
        localStorage.setItem("USER", jsonData);
        history.push('/student/profile');
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
                    name="group"
                    label="Group"
                    placeholder="Enter group"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("group")}
                    error={errors.group && touched.group}
                    helperText={
                      errors.group && touched.group ? errors.group : null
                    }
                  />
                </Grid>

                <Grid item>
                  <TextField
                    name="ldap"
                    label="Ldap"
                    placeholder="Enter ldap"
                    type="ldap"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("ldap")}
                    error={errors.ldap && touched.ldap}
                    helperText={
                      errors.ldap && touched.ldap
                        ? errors.ldap
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
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default ManageAccount;
 

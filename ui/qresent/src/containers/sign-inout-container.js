import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Login from "../components/login";
import Signup from "../components/signup";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//import { Redirect } from "react-router";

//const SignInOutContainer = () => {
//   const [value, setValue] = useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const paperStyle = { width: 620, margin: "20px auto" };

//   const TabPanel = (props) => {
//     const { children, value, index, ...other } = props;

//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box>
//             <Typography component={"span"}>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   };

//   let sessionId = localStorage.getItem("SESSION_ID");

//   if (sessionId) {
//     return <Redirect to="/home" />;
//   } else {
//     return (
//       <Paper elevation={20} style={paperStyle}>
//         <Tabs
//           centered
//           variant="fullWidth"
//           value={value}
//           indicatorColor="primary"
//           textColor="primary"
//           onChange={handleChange}
//           aria-label="disabled tabs example"
//         >
//           <Tab label="Sign In" />

//           <Tab label="Sign Up" />
//         </Tabs>
//         <TabPanel value={value} index={0}>
//           <Login setValue={setValue} />
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           <Signup setValue={setValue} />
//         </TabPanel>
//       </Paper>
//     );
//   }
// };

//export default SignInOutContainer;

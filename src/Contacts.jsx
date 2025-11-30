// import { Grid } from '@mui/material'
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CircularProgress,
  Divider,
  Drawer,
  Grid,
  LinearProgress,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

import ForwardIcon from "@mui/icons-material/Forward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSendMailMutation } from "./redux/AdminApi";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import MyForm from "./Temp";

// import Skill from './Skill';

const validationSchema = yup.object().shape({
  to: yup.string().required("Name is required"),
  message: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
});
const Contacts = () => {
  const [sedmail, { isLoading }] = useSendMailMutation();

  const handleChanges = (e) => {
    // handle your changes here if needed
  };

  const handleSubmit = (values) => {
    // handle your form submission logic here
    console.log(values);
    sedmail(values);
  };

  return (
    <>
      <Grid
        item
        lg={8.2}
        md={7.3}
        xs={12}
        sx={{
          transition: "ease-in",
          height: { xs: "80vh", lg: "92vh", md: "93vh" },
          overflowY: "scroll",
          "&::-webkit-scrollbar": { display: "none" },
          marginX: { md: 0, xs: 1 },
        }}
      >
        <motion.div
          initial={{ translateX: "30%", opacity: 10 }}
          animate={{ translateX: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            sx={{
              fontSize: 25,
              fontFamily: "sans-serif",
              fontWeight: "bold",
              marginY: { md: 3, xs: 1 },
            }}
          >
            Contact Information
          </Typography>
          <Grid container gap={1}>
            <Grid
              item
              lg={3.8}
              md={5.9}
              sm={5.9}
              xs={12}
              sx={{
                padding: 5,
                border: "1px solid white",
                boxShadow: "0px 0px 2px 0px gray",
                backgroundColor: "white",
                marginX: { xs: 1, sm: 1 },
              }}
            >
              <Box
                sx={{
                  color: "gray",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Country:</Typography>
                <Typography>India</Typography>
              </Box>
              <Box
                sx={{
                  marginY: 1,
                  color: "gray",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>City:</Typography>
                <Typography>SambhajiNagar</Typography>
              </Box>
              <Box
                sx={{
                  marginY: 1,
                  color: "gray",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Streat:</Typography>
                <Typography>Maharashtra</Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={3.8}
              md={5.9}
              sm={5.9}
              xs={12}
              sx={{
                // padding: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid white",
                boxShadow: "0px 0px 2px 0px gray",
                backgroundColor: "white",
                // backgroundColor: "red",
                marginX: { xs: 1, sm: 0 },
              }}
            >
              <Box
                sx={{
                  paddingY: { lg: 0, xs: "30px" },
                }}
              >
                <Box
                  sx={{
                    color: "gray",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>Email: </Typography>
                  <Typography>stupe200@gmail.com</Typography>
                </Box>
                <Box
                  sx={{
                    color: "gray",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingY: 1,
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>Mobile:</Typography>
                  <Typography>+91 7498187088</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              lg={3.8}
              md={5.9}
              sm={5.9}
              xs={12}
              sx={{
                padding: 5,
                border: "1px solid white",
                boxShadow: "0px 0px 2px 0px gray",
                backgroundColor: "white",
                marginX: { xs: 1, sm: 0 },
              }}
            >
              <Box
                sx={{
                  color: "gray",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Social Media Accounts{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { md: "center", sm: "left" },
                  marginTop: 2,
                  gap: 2,
                }}
              >
                <Link
                  href="https://www.linkedin.com/in/shubham-tupe-23a33427b/"
                  target="_blank"
                >
                  <LinkedInIcon sx={{ color: "gray" }} />{" "}
                </Link>
                <Link href="https://github.com/stupe9730" target="_blank">
                  <GitHubIcon sx={{ color: "gray" }} />{" "}
                </Link>
                <Link href="https://twitter.com/Stupe200" target="_blank">
                  <TwitterIcon sx={{ color: "gray" }} />{" "}
                </Link>
              </Box>
            </Grid>
          </Grid>
          <MyForm />
        </motion.div>
      </Grid>
    </>
  );
};

export default Contacts;

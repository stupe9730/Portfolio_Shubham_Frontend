import {
  Avatar,
  Backdrop,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  Drawer,
  Grid,
  LinearProgress,
  Link,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GetAppIcon from "@mui/icons-material/GetApp";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  Brightness1,
  Close,
  Code,
  Css,
  Fullscreen,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import bgImage from "../src/image/bg.jpg";
import pro1 from "../src/image/Restorant_MUI.png";
import pro2 from "../src/image/ecom_FIREBASE.png";

import Naukri from "../src/image/Naukri_Search.png";
import URL from "../src/image/URL_Shotnar.png";
import { color, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CssProgress, JsProgress, LinearProgressCountUp } from "./Texst";
import CheckIcon from "@mui/icons-material/Check";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TwitterIcon from "@mui/icons-material/Twitter";
import resumee from "./Resume_Full.pdf";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ForwardIcon from "@mui/icons-material/Forward";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ContactsIcon from "@mui/icons-material/Contacts";

import { Document, Page, pdfjs } from "react-pdf";
import jsPDF from "jspdf";
import { ReactTyped } from "react-typed";
import Skill from "./Skill";
import Contacts from "./Contacts";
import Admin from "./Admin";
import { useGetProjectQuery } from "./redux/projectApi";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Loading from "./Loading";

const Home = () => {
  const [redmore, setRedmore] = useState();
  const [redopen, setRedopen] = useState(false);
  const [drower, setDrower] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [projectState, setProjectState] = useState([""]);
  const handleDownload = () => {
    const link = document.createElement(`a`);
    link.href = resumee;
    link.download = `Resume_Shubham.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePages = (pages) => {
    setCurrentPage(pages);
    toggleDrawer(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };
  const { data: productData, isSuccess, isLoading } = useGetProjectQuery();

  const [open, setOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  const handleClose = () => {
    setRedmore(null);
    setRedopen(false);
  };

  useEffect(() => {
    if (isSuccess) {
      setProjectState(productData);
    }
    // if (isLoading) {
    //   <Loading />;
    // }
  }, [isSuccess, isLoading]);

  console.log(currentPage);
  return (
    <>
      {/* NAVBAR  👇👇*/}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          position: "sticky",
          justifyContent: "space-between",
          boxShadow: "0px 0px 2px",
          alignItems: "center",
          backgroundColor: "white",
          padding: 1,
          overflow: "hidden",
        }}
      >
        <MoreVertIcon
          onClick={(e) => setDrower(!drower)}
          sx={{ cursor: "pointer" }}
        />
        <Box
          sx={{
            backgroundColor: "rgba(247, 246, 246)",
            boxShadow: "0px 0px 2px 0px",
            height: 40,
            width: 40,
            overflow: "hidden",
          }}
        >
          <Card
            onClick={(e) => setIsOpen(true)}
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingY: 1,
              cursor: "pointer",
            }}
          >
            <MenuIcon />
          </Card>
          <Drawer
            anchor="right"
            open={isOpen}
            // variant="persistent"
            onClose={(e) => setIsOpen(false)}
            sx={{
              marginRight: 10,
              display: "flex",
              justifyContent: "center",
              paddingY: 2,
              transition: "5s ease-in-out",
            }}
          >
            {" "}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                boxShadow: "0px 0px 4px 0px",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                backgroundColor: "rgba(65, 248, 255,0.1)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CloseIcon
                  onClick={(e) => setIsOpen(false)}
                  sx={{ cursor: "pointer", margin: 2 }}
                />
                <Typography
                  onClick={(e) => {
                    setCurrentPage("admin"), setIsOpen(false);
                  }}
                  sx={{
                    marginX: "20px",
                    cursor: "pointer",
                    display: { md: "block", sm: "none" },
                  }}
                >
                  <AdminPanelSettingsIcon />
                </Typography>
              </Box>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              ></motion.div>
              <motion.div
                onClick={(e) => {
                  handlePages(""), setIsOpen(false);
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
              >
                {/* <Button variant='text' sx={{ marginY: 1, width: "10rem", display: "block", color: "gray", backgroundColor: "red" }}>HOME</Button> */}

                <Button
                  variant="text"
                  sx={{
                    marginY: 1,
                    width: "10rem",
                    display: "flex",
                    alignItems: "center",
                    color: "gray",
                    backgroundColor: "rgba(65, 248, 255,0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(65, 248, 255,0.4)",
                    },
                    marginX: 2,
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                  }}
                >
                  <HomeIcon />{" "}
                  <Typography sx={{ marginX: 2.3 }}>Home</Typography>
                </Button>
              </motion.div>
              <motion.div
                onClick={(e) => {
                  handlePages("resume"), setIsOpen(false);
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
              >
                <Button
                  variant="text"
                  sx={{
                    marginY: 1,
                    width: "10rem",
                    display: "flex",
                    color: "gray",
                    backgroundColor: "rgba(65, 248, 255,0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(65, 248, 255,0.4)",
                    },
                    marginX: 2,
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                  }}
                >
                  <LibraryBooksIcon />{" "}
                  <Typography sx={{ marginX: 1.3 }}>Resume</Typography>
                </Button>
              </motion.div>
              <motion.div
                onClick={(e) => {
                  handlePages("contact"), setIsOpen(false);
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
              >
                {/* <Button variant='text' sx={{ marginY: 1, width: "20vw", display: "block", color: "gray", backgroundColor: "red" }}>Contact</Button> */}

                <Button
                  variant="text"
                  sx={{
                    marginY: 1,
                    width: "10rem",
                    display: "flex",
                    color: "gray",
                    backgroundColor: "rgba(65, 248, 255,0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(65, 248, 255,0.4)",
                    },
                    marginX: 2,
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                  }}
                >
                  <ContactsIcon />{" "}
                  <Typography sx={{ marginX: 1 }}>Contact</Typography>
                </Button>
              </motion.div>
            </motion.div>
          </Drawer>
        </Box>
      </Box>
      {/* NAVBART 👆👆 */}

      <motion.Box
        initial={{ translateY: "-100%", opacity: 10 }}
        animate={{ translateY: 0, opacity: 100 }}
        transition={{ duration: 1 }}
        style={{
          margin: 1,
          marginTop: 2,
          //   backgroundColor: "#C9D7FC",
          backgroundColor: "#e604f1ff",
        }}
      >
        {/* MAIN  GRID  👇👇*/}
        <Grid container gap={2}>
          {/* MEAN FIRST GRID  👇👇 */}
          <Grid
            item
            sx={{
              transition: "all 0.5s ease",
              paddingX: 0,
              backgroundColor: "white",
              padding: 0,
              boxShadow: "1px 1px 6px 0px",
              zIndex: 4,
              backgroundColor: "white",
              width: "100vw",
              height: "80%",
              transition: "all 0.3s ease",
              marginLeft: 1,
            }}
            position={{
              sm: "absolute",
              md: "relative",
              lg: "relative",
              xs: "absolute",
            }}
            lg={2.8}
            md={3.5}
            xs={7}
            sm={5}
            display={{ sm: "none", md: "block", xs: "none" }}
          >
            <motion.div
              animate={{ translateY: 0, opacity: 100 }}
              initial={{ translateY: "-30%", opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  transition: "all 2s ease",
                  // paddingX: 0,
                  backgroundColor: "white",
                  // padding: 0,
                  height: "87vh",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{ display: "flex", justifyContent: "center", marginY: 2 }}
                >
                  <Avatar
                    sx={{ height: 90, width: 90 }}
                    src="https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"
                  />
                  <Box
                    sx={{
                      width: 15,
                      height: 15,
                      backgroundColor: "red",
                      borderRadius: "50%",
                      top: 63,
                      left: -15,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        backgroundColor: "red",
                        borderRadius: "50%",
                        zIndex: 1,
                        animation:
                          "pulse 1000ms cubic-bezier(0.9, 0.7, 0.5, 0.9) infinite",
                      },
                      "@keyframes pulse": {
                        "0%": {
                          opacity: 0,
                        },
                        "50%": {
                          transform: "scale(1.4)",
                          opacity: 0.4,
                        },
                      },
                    }}
                  ></Box>
                </Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginY: 1,
                    fontSize: "clamp(18px, 3vw, 24px)",
                  }}
                >
                  SHUBHAM TUPE
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    fontSize: "clamp(10px, 2vw, 14px)",
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  Full-Stack Web Developer
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    fontSize: "clamp(10px, 2vw, 14px)",
                    color: "gray",
                    textAlign: "center",
                    marginBottom: 0,
                  }}
                >
                  Ui/UX Designer
                </Typography>

                <Box
                  sx={{
                    backgroundColor: "rgba(218, 218, 208,0.3 )",
                    paddingX: 3,
                    overflowY: "scroll",
                    "&::-webkit-scrollbar": {
                      width: "7px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#D5CACA",
                      borderRadius: "6px",
                    },
                    "&::-webkit-scrollbar-track": {
                      backgroundColor: "#f1f1f1",
                    },
                  }}
                  height={{ md: "55% ", xs: "47vh" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingY: 1.5,
                      color: "gray",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: 15, fontWeight: "bold", color: "black" }}
                    >
                      Resume:
                    </Typography>
                    <Button
                      variant="text"
                      size="sm"
                      sx={{
                        color: "gray",
                        display: "s",
                        justifyContent: "end",
                      }}
                      modscolor="primary"
                      onClick={handleDownload}
                    >
                      Download <GetAppIcon />
                    </Button>
                  </Box>
                  <Box borderBottom={2} borderColor="grey.400" my={0} />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "revert",
                      fontSize: "clamp(14px, 2vw, 18px)",
                    }}
                  >
                    My Skills
                  </Typography>
                  {/* 🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩 */}
                  {/* progress Code  */}
                  {/* <LinearProgressCountUp /> */}
                  {/* <CssProgress /> */}
                  {/* <JsProgress /> */}
                  {/* <Box
                                    borderBottom={2}
                                    borderColor="grey.400"
                                    my={2}
                                /> */}
                  <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                    <CheckIcon
                      sx={{
                        color: "orange",
                      }}
                    />
                    <Typography>HTML, CSS, JavaScript</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                    <CheckIcon sx={{ color: "orange" }} />
                    <Typography>ReactJs, React-Redux</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                    <CheckIcon sx={{ color: "orange" }} />
                    <Typography>Firebase, Git & GitHub</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                    <CheckIcon sx={{ color: "orange" }} />
                    <Typography>Bootstrap, Material-UI</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                    <CheckIcon sx={{ color: "orange" }} />
                    <Typography>TailwindCss, Sass</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                    <CheckIcon sx={{ color: "orange" }} />
                    <Typography>Redux Toolkit, RTK Query, Rest API</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                    <CheckIcon sx={{ color: "orange" }} />
                    <Typography>NodeJs, Express, Mongodb,TypeScript</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                    <CheckIcon sx={{ color: "orange" }} />
                    <Typography>NextJs, ReactNetive</Typography>
                  </Box>
                  <Box borderBottom={2} borderColor="grey.400" my={2} />

                  {/* progress Code  */}
                </Box>

                <Box sx={{}}>
                  <Box sx={{ textAlign: "center", paddingTop: 1 }}>
                    <Link
                      href="https://www.linkedin.com/in/shubham-tupe-23a33427b/"
                      target="_blank"
                    >
                      <LinkedInIcon sx={{ color: "gray", marginX: 1 }} />{" "}
                    </Link>
                    <Link href="https://github.com/stupe9730" target="_blank">
                      <GitHubIcon sx={{ color: "gray", marginX: 1 }} />{" "}
                    </Link>
                    <Link href="https://twitter.com/Stupe200" target="_blank">
                      <TwitterIcon sx={{ color: "gray", marginX: 1 }} />{" "}
                    </Link>
                  </Box>
                </Box>
              </Box>
            </motion.div>

            <Drawer
              anchor="right"
              open={isOpen}
              variant="persistent"
              onClose={(e) => setIsOpen(false)}
              sx={{
                marginRight: 10,
                display: "flex",
                justifyContent: "center",
                paddingY: 2,
                transition: "5s ease-in-out",
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  boxShadow: "0px 0px 4px 0px",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "red",
                }}
              >
                <CloseIcon
                  onClick={(e) => setIsOpen(false)}
                  sx={{ cursor: "pointer", margin: 2 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0, ease: "easeInOut", delay: 0.1 }}
                ></motion.div>
                <motion.div
                  onClick={(e) => {
                    handlePages("");
                    setIsOpen(false);
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0, ease: "easeInOut", delay: 0.2 }}
                >
                  <Button
                    variant="text"
                    sx={{
                      marginX: "0vw",
                      display: "block",
                      color: "gray",
                      backgroundColor: "red",
                    }}
                  >
                    HOME
                  </Button>
                </motion.div>
                <motion.div
                  onClick={(e) => {
                    handlePages("resume"), setIsOpen(false);
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0, ease: "easeInOut", delay: 0.3 }}
                >
                  <Button
                    variant="text"
                    sx={{
                      marginX: "0vw",
                      display: "block",
                      color: "gray",
                      backgroundColor: "red",
                    }}
                  >
                    Resume
                  </Button>
                </motion.div>
                <motion.div
                  onClick={(e) => {
                    handlePages("contact"), setIsOpen(false);
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                >
                  <Button
                    variant="text"
                    sx={{
                      marginX: "0vw",
                      display: "block",
                      color: "gray",
                      backgroundColor: "red",
                    }}
                  >
                    Contact
                  </Button>
                </motion.div>
              </motion.div>
            </Drawer>
          </Grid>
          {/* MEAN FIRST GRID  👆👆 */}

          {
            currentPage === "" ? (
              // MEAN SECOND GRID FAST PAGE 👇👇
              <Grid
                item
                lg={8.2}
                md={7.3}
                sm={12}
                sx={{
                  transition: "ease-in",
                  height: { xs: "80vh", lg: "92vh", md: "93vh" },
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                <motion.div
                  initial={{ translateY: "-30%", opacity: 10 }}
                  animate={{ translateY: 0, opacity: 100 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box
                    sx={{
                      height: { lg: "50vh", md: "45vh", xs: "40vh" },
                      margin: { md: 0, xs: 0 },
                      border: "black",
                    }}
                  >
                    <Box
                      sx={{
                        // backgroundImage: `url(${bgImage})`,
                        backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdV3gay6lVBU2XvR5OJpiGvZBqgF57-2e9Q&s"})`,
                        height: { sm: "100%", xs: "100%" },
                        width: { sm: "100%", xs: "100%" },
                        borderColor: "",
                        // opacity: "0.2",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          textAlign: "center",
                          display: "flex",
                          justifyContent: "center",
                          height: "100%",
                          width: { md: "100%", xs: "100%" },
                          position: "absolute",
                          alignItems: "center",
                          opacity: 1,
                          backgroundColor: " rgba(0,0,0,0.4)",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontSize: { lg: "7vh", sm: "5vh", xs: "3vh" },
                              color: "white",
                              fontWeight: "bold",
                              alignSelf: "center",
                            }}
                          >
                            Full Stack Web Developer
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: { lg: "6vh", md: "5vh", xs: "3vh" },
                              color: "white",
                              fontWeight: "bold",
                              alignSelf: "center",
                            }}
                          >
                            ReactJs Developer
                          </Typography>
                          <Box
                            sx={{ display: "flex", justifyContent: "start" }}
                          >
                            <Typography
                              sx={{
                                color: "orange",
                                fontSize: { sm: 20, xs: 15 },
                                marginLeft: "5vw",
                              }}
                            >
                              &lt;code&gt;{" "}
                              <Typography
                                display={"inline"}
                                sx={{
                                  color: "white",
                                  fontSize: { sm: 20, xs: 15 },
                                }}
                              >
                                I'm a
                              </Typography>
                              <ReactTyped
                                style={{ marginLeft: 5, color: "white" }}
                                strings={[
                                  "Designer",
                                  "UI/UX Developer",
                                  "Mobile App Developer",
                                  "React Developer",
                                ]}
                                typeSpeed={100}
                                loop
                                backSpeed={20}
                                cursorChar="|"
                                showCursor={true}
                              />
                              &lt;code&gt;
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Button></Button>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      marginY: 2,
                      fontWeight: "bold",
                      fontSize: 20,
                      marginX: 2,
                    }}
                  >
                    My Projects
                  </Typography>
                  {productData ? (
                    <Grid
                      container
                      columnSpacing={2}
                      sx={{ paddingX: { md: 0, sm: 4, xs: 2 } }}
                    >
                      {productData &&
                        productData.map((item, index) => (
                          <Grid
                            item
                            key={index}
                            lg={4}
                            md={6}
                            sm={6}
                            xs={12}
                            marginTop={1}
                            // sx={{backgroundColor:"white"}}
                          >
                            {/* <Box>{item.name}</Box> */}
                            <Card
                              sx={{
                                position: "relative",
                                // backgroundColor: "transparant",
                                overflow: "hidden",
                                transition: "transform 0.3s ease",
                                "&:hover": { transform: "translateY(-5px)" },
                              }}
                            >
                              <Typography
                                sx={{
                                  display: { sm: "none", xs: "block" },
                                  backgroundColor: "none",
                                  textAlign: "center",
                                  fontSize: "7vw",
                                }}
                              >
                                {item.name}
                              </Typography>
                              <Box sx={{ position: "relative" }}>
                                <CardMedia
                                  component="img"
                                  sx={{ height: 200, objectFit: "cover" }}
                                  image={item.hero}
                                  title={item.name}
                                />

                                {/* Hover overlay */}
                                <motion.div
                                  initial={{ opacity: 0, y: 40 }}
                                  whileHover={{ opacity: 1, y: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                  }}
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background: "rgba(0, 0, 0, 0.6)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                  // sx={{ display: { xs: "none", sm: "block" } }}
                                >
                                  <Box sx={{}}>
                                    <Button
                                      component="a"
                                      target="_blank"
                                      href={item.projectLink}
                                      variant="contained"
                                      sx={{
                                        bgcolor: "#FF415B",
                                        color: "white",
                                        fontWeight: "bold",
                                        borderRadius: "25px",
                                        px: 3,
                                        py: 1,
                                        "&:hover": { bgcolor: "#ff6a7a" },
                                      }}
                                    >
                                      Visit Website
                                      <ChevronRightIcon
                                        sx={{ ml: 1, color: "white" }}
                                      />
                                    </Button>
                                    <Box
                                      sx={{
                                        bgColor: "red",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <Button
                                        onClick={(e) => {
                                          setRedmore(item), setRedopen(true);
                                        }}
                                        size="small"
                                        sx={{
                                          textAlign: "center",
                                          color: "white",
                                          textTransform: "none",
                                        }}
                                      >
                                        Read More <KeyboardDoubleArrowRight />
                                      </Button>
                                    </Box>
                                  </Box>
                                </motion.div>
                              </Box>

                              <CardContent>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    fontWeight: "bold",
                                    // position: { xs: "absolute", sm: "static" },
                                    bottom: 40,
                                    // bgcolor: "lightblue",
                                    // textAlign: "center",
                                    // borderRadius: "20px",
                                    paddingY: "1vh",
                                    display: { sm: "block", xs: "none" },
                                  }}
                                >
                                  {item.name}
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    // width: "100px",
                                    // background: "red",
                                  }}
                                >
                                  <Button
                                    component="a"
                                    target="_blank"
                                    href={item.projectLink}
                                    size="small"
                                    variant="contained"
                                    sx={{
                                      color: "white",
                                      bgcolor: "red",
                                      marginY: 0,
                                      display: { sm: "none", xs: "block" },
                                    }}
                                  >
                                    VisitLink
                                  </Button>
                                  <Box
                                    onClick={(e) => {
                                      setRedmore(item), setRedopen(true);
                                    }}
                                    size="small"
                                    variant="outline"
                                    sx={{
                                      text: "blue",
                                      width: "100px",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      // marginY: 0,
                                      display: {
                                        sm: "none",
                                        xs: "flex",
                                      },
                                    }}
                                  >
                                    <Box sx={{}}>RedMore</Box>{" "}
                                    <KeyboardDoubleArrowRight />
                                    {/* RedMore */}
                                  </Box>
                                </Box>

                                {/* <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ mb: 1 }}
                                              >
                                                {item.desc.length > 100
                                                  ? `${item.desc.slice(0, 100)}...`
                                                  : item.desc}
                                              </Typography> */}

                                {/* Bottom buttons */}
                              </CardContent>
                            </Card>
                          </Grid>
                        ))}
                    </Grid>
                  ) : (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <CircularProgress color="secondary" />
                    </Box>
                  )}
                </motion.div>
              </Grid>
            ) : // <></>
            //    MEAN SECOND GRID FAST PAGE 👆👆

            currentPage === "resume" ? (
              // MEAN SECOND GRID SECOND PAGE 👇👇
              <Skill />
            ) : currentPage === "admin" ? (
              <>
                <Admin />
              </>
            ) : (
              // MEAN SECOND GRID THARD PAGE 👇👇
              <Contacts />
            )
            // MEAN SECOND GRID THARD PAGE 👆👆
          }

          {/*MEAN THARD GRID 👇👇 */}
          <Grid
            item
            lg={0.6}
            md={0.6}
            xs={0}
            sx={{
              backgroundColor: "rgba(247, 246, 246)",
              boxShadow: "0px 0px 1px 0px",
              display: { xs: "none", md: "block" },
            }}
          >
            <Card
              onClick={(e) => setIsOpen(true)}
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingY: 2,
                overflowX: "hidden",
                cursor: "pointer",
              }}
            >
              <MenuIcon />
            </Card>
            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <Typography sx={{ transform: "rotate(90deg)", marginTop: 10 }}>
                {currentPage === ""
                  ? "Home"
                  : currentPage === "resume"
                  ? "Resume"
                  : "Contact"}
              </Typography>
            </Box>
            <Typography
              onClick={(e) => setCurrentPage("admin")}
              sx={{
                position: "absolute",
                top: "90vh",
                marginX: "20px",
                cursor: "pointer",
              }}
            >
              <AdminPanelSettingsIcon />
            </Typography>
          </Grid>
          {/*MEAN THARD GRID 👆👆 */}
        </Grid>
        {/* MAIN GRID 👆👆 */}

        {/* left site modal start*/}
        <Drawer
          anchor="left"
          open={drower}
          // variant="persistent"
          onClose={(e) => setDrower(false)}
          sx={{
            marginRight: 10,
            display: { md: "none", xs: "flex" },
            justifyContent: "center",
            paddingY: 2,
            transition: "5s ease-in-out",
            width: "100vw",
          }}
        >
          {" "}
          <motion.div
            // initial={{ opacity: 0, x: 50 }}
            // animate={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: 50 }}
            // transition={{ duration: 0.5, ease: 'easeInOut' }}
            sx={{
              boxShadow: "0px 0px 4px 0px",
              height: "100%",
              width: "100vw",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                transition: "all 0.5s ease",
                paddingX: 0,
                backgroundColor: "white",
                padding: 0,
                boxShadow: "1px 1px 6px 0px",
                zIndex: 4,
                backgroundColor: "white",
                width: { sm: "40vw", xs: "80vw" },
                height: "80%",
                transition: "all 0.3s ease",
              }}
              position={{
                sm: "relative",
                md: "relative",
                lg: "relative",
                xs: "relative",
              }}
              display={{
                sm: drower ? "block" : "none",
                md: "block",
                xs: drower ? "block" : "none",
              }}
            >
              <motion.div
                animate={{ translateX: 0, opacity: 100 }}
                initial={{ translateX: "-30%", opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box sx={{ textAlign: "right" }}>
                  <CloseIcon
                    onClick={(e) => setDrower(false)}
                    sx={{ cursor: "pointer", marginX: 2, marginTop: 1 }}
                  />
                </Box>
                <Box
                  sx={{
                    transition: "all 2s ease",
                    paddingX: 0,
                    backgroundColor: "white",
                    padding: 0,
                    height: "88vh",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginY: 2,
                    }}
                  >
                    <Avatar
                      sx={{ height: 90, width: 90 }}
                      src="https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"
                    />
                    <Box
                      sx={{
                        width: 15,
                        height: 15,
                        backgroundColor: "red",
                        borderRadius: "50%",
                        top: 63,
                        left: -15,
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          top: 0,
                          left: 0,
                          backgroundColor: "red",
                          borderRadius: "50%",
                          zIndex: 1,
                          animation:
                            "pulse 1000ms cubic-bezier(0.9, 0.7, 0.5, 0.9) infinite",
                        },
                        "@keyframes pulse": {
                          "0%": {
                            opacity: 0,
                          },
                          "50%": {
                            transform: "scale(1.4)",
                            opacity: 0.4,
                          },
                        },
                      }}
                    ></Box>
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      marginY: 1,
                      fontSize: 20,
                    }}
                  >
                    SHUBHAM TUPE
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "sans-serif",
                      fontSize: 13,
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Full-Stack Web Developer
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "sans-serif",
                      fontSize: 13,
                      color: "gray",
                      textAlign: "center",
                      marginBottom: 0,
                    }}
                  >
                    Ui/UX Designer
                  </Typography>

                  <Box
                    sx={{
                      backgroundColor: "rgba(218, 218, 208,0.3 )",
                      paddingX: 3,
                      overflowY: "scroll",
                      "&::-webkit-scrollbar": {
                        width: "7px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#D5CACA",
                        borderRadius: "6px",
                      },
                      "&::-webkit-scrollbar-track": {
                        backgroundColor: "#f1f1f1",
                      },
                    }}
                    height={{ md: "55% ", xs: "100%" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        My Skills
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingY: 1.5,
                          color: "gray",
                          alignItems: "center",
                        }}
                      >
                        {/* <Typography sx={{ fontSize: 15, fontWeight: "bold", color: 'black' }}>Resume:</Typography> */}
                        <Button
                          variant="text"
                          size="small"
                          sx={{
                            color: "gray",
                            display: "s",
                            justifyContent: "end",
                          }}
                          modscolor="primary"
                          onClick={handleDownload}
                        >
                          Download CV <GetAppIcon />
                        </Button>
                      </Box>
                    </Box>
                    {/* <Box borderBottom={2} borderColor="grey.400" my={2} /> */}
                    {/* progress Code  */}
                    {/* <LinearProgressCountUp />
                    <CssProgress />
                    <JsProgress /> */}
                    <Box borderBottom={2} borderColor="grey.400" my={2} />
                    <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                      <CheckIcon sx={{ color: "orange" }} />
                      <Typography>ReactJs, React-Redux</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                      <CheckIcon sx={{ color: "orange" }} />
                      <Typography>Firebase, Git & GitHub</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                      <CheckIcon sx={{ color: "orange" }} />
                      <Typography>Bootstrap, Material-UI</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                      <CheckIcon sx={{ color: "orange" }} />
                      <Typography>TailwindCss, Sass</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                      <CheckIcon sx={{ color: "orange" }} />
                      <Typography>
                        Redux Toolkit, RTK Query, Rest API
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                      <CheckIcon sx={{ color: "orange" }} />
                      <Typography>
                        NodeJs, Express, Mongodb,TypeScript
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2, marginTop: 1 }}>
                      <CheckIcon sx={{ color: "orange" }} />
                      <Typography>NextJs</Typography>
                    </Box>
                    <Box borderBottom={2} borderColor="grey.400" my={2} />

                    {/* progress Code  */}
                  </Box>

                  <Box sx={{}}>
                    <Box sx={{ display: "flex", justifyContent: "end" }}></Box>

                    <Box sx={{ textAlign: "center", paddingTop: 1 }}>
                      <Link
                        href="https://www.linkedin.com/in/shubham-tupe-23a33427b/"
                        target="_blank"
                      >
                        <LinkedInIcon sx={{ color: "gray", marginX: 1 }} />{" "}
                      </Link>
                      <Link href="https://github.com/stupe9730" target="_blank">
                        <GitHubIcon sx={{ color: "gray", marginX: 1 }} />{" "}
                      </Link>
                      <Link href="https://twitter.com/Stupe200" target="_blank">
                        <TwitterIcon sx={{ color: "gray", marginX: 1 }} />{" "}
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </motion.div>
        </Drawer>

        {/* left site modal end*/}
      </motion.Box>

      {/* Red more backDore start*/}
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={redopen}
        onClick={handleClose} // closes when backdrop is clicked
      >
        <Card
          sx={{ padding: "30px", maxWidth: 500 }}
          onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside card
        >
          <Box
            sx={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ textDecoration: "underline", fontWeight: "bold" }}>
              {redmore?.name}
            </Box>
            <Close onClick={handleClose} sx={{ cursor: "pointer" }} />
          </Box>

          <Typography>{redmore?.desc}</Typography>
        </Card>
      </Backdrop>
    </>
  );
};

export default Home;

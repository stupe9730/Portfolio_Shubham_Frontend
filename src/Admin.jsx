import React, { useEffect, useState } from "react";
import { useDeleteEmailMutation, useGetEmailQuery } from "./redux/AdminApi";
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
  Grid,
  Input,
  Modal,
  Table,
  TextField,
  Typography,
} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { toast } from "react-toastify";
import {
  useAddProjectMutation,
  useDeleteProjectMutation,
  useGetProjectQuery,
} from "./redux/projectApi";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { animate, color, motion } from "framer-motion";

import bgImage from "../src/image/bg.jpg";
import pro1 from "../src/image/Restorant_MUI.png";
import pro2 from "../src/image/ecom_FIREBASE.png";
import URL from "../src/image/URL_Shotnar.png";
import { blueGrey } from "@mui/material/node/colors";
import IconButton from "@mui/material/node/IconButton";
import {
  Close,
  KeyboardDoubleArrowRight,
  RampRight,
} from "@mui/icons-material";

const Admin = () => {
  const [toggle, setToggle] = useState(true);
  const [deleteUser, { isLoading, isSuccess }] = useDeleteEmailMutation();
  const { data } = useGetEmailQuery();
  const { data: addedData } = useGetProjectQuery();
  const [redmore, setRedmore] = useState();
  const [redopen, setRedopen] = useState(false);
  // product code
  const [secure, setSecure] = useState("1");
  const [modal, setModal] = useState(false);
  const [
    deleteProject,
    { isSuccess: deleteProSuccess, isLoading: ProDelLoading },
  ] = useDeleteProjectMutation();
  const { data: productData } = useGetProjectQuery();
  const [addProject, { isSuccess: ProSuccess, isLoading: ProLoadding, error }] =
    useAddProjectMutation();
  const [handleInput, setHandleInput] = useState(false);
  const handleSubmit = (e) => {
    const fd = new FormData();
    fd.append("name", handleInput.name);
    // fd.append("name", handleInput.name)
    fd.append("projectLink", handleInput.projectLink);
    fd.append("desc", handleInput.desc);
    fd.append("hero", handleInput.hero);
    addProject(fd);
    console.log(handleInput);
    // setHandleInput(false);
  };

  const [handleUpdate, setHandleUpdate] = useState();
  const [itemupdate, setItemupdate] = useState({});
  const [secredPrint, setSecredPrint] = useState();
  const handleUpdateCode = (item) => {
    setHandleUpdate(true);
    setItemupdate(item);
  };
  // console.log(redmore.desc);
  const handleReadMore = (item) => {
    setRedmore(item);
    setRedopen(true);
  };

  // Close handler
  const handleClose = () => {
    setRedmore(null);
    setRedopen(false);
  };

  const handlePrinte = (e) => {
    setSecredPrint(e.target.value);
  };
  const handleSubmitPrinte = () => {
    setSecure(secredPrint);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Delete Success");
    }
  }, [isSuccess]);
  useEffect(() => {
    if (ProSuccess) {
      toast.success("Project Add Success");
    }
  }, [ProSuccess]);
  console.log(error && error.data && error?.data.message);

  useEffect(() => {
    if (error) {
      // toast.success(JSON.stringify(error));
      toast.error(error && error?.data?.message);
    }
  }, [error]);
  useEffect(() => {
    if (deleteProSuccess) {
      toast.success("Project Delete Success");
    }
  }, [deleteProSuccess]);
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
          initial={{ translateY: "-60%", opacity: 10 }}
          animate={{ translateY: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
        >
          {secure == true ? (
            <Card>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "20px",
                }}
              >
                <Box
                  sx={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Admin Panel
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "center", padding: 2 }}
              >
                <TextField
                  name="secret key"
                  type="password"
                  onChange={handlePrinte}
                  sx={{ width: "50%", marginY: 1 }}
                  id="outlined-basic"
                  label="Enter Secret Key"
                  variant="filled"
                />
              </Box>
              {!secure === "123" && (
                <>
                  <Typography sx={{ textAlign: "center", marginY: 0 }}>
                    Enter Valid Password
                  </Typography>
                </>
              )}
              <Button
                onClick={(e) => handleSubmitPrinte()}
                variant="contained"
                sx={{ margin: 2 }}
              >
                Submit
              </Button>
            </Card>
          ) : (
            <>
              {secure !== "123" && (
                <Card>
                  <Typography
                    sx={{ textAlign: "center", marginY: 5, color: "red" }}
                  >
                    Enter Valid Password
                  </Typography>
                  <Button
                    sx={{ margin: 2, borderColor: "red" }}
                    onClick={(e) => setSecure(true)}
                    variant="outlined"
                  >
                    Try Again
                  </Button>
                </Card>
              )}
            </>
          )}
          {secure === "123" && (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginY: 4,
                }}
              >
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  sx={{ height: 40, textAlign: "center" }}
                  aria-label="Disabled button group"
                >
                  <Button
                    onClick={(e) => setToggle(true)}
                    variant={`${toggle ? "contained" : "outlined"}`}
                  >
                    Visited Information
                  </Button>
                  <Button
                    onClick={(e) => setToggle(false)}
                    variant={`${toggle ? "outlined" : "contained"}`}
                  >
                    Add New Project{" "}
                  </Button>
                </ButtonGroup>
              </Box>
              {toggle ? (
                <>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell align="right">Name</TableCell>
                          <TableCell align="right">Email</TableCell>
                          <TableCell align="right">Subject</TableCell>
                          <TableCell align="right">Message</TableCell>
                          <TableCell align="right">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data &&
                          data.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell align="left">
                                {row.createdAt}
                              </TableCell>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="left">{row.email}</TableCell>
                              <TableCell align="left">{row.subject}</TableCell>
                              <TableCell align="left">{row.message}</TableCell>
                              <TableCell align="left">
                                <Button
                                  onClick={(e) => deleteUser(row._id)}
                                  variant="contained"
                                  sx={{
                                    backgroundColor: "red",
                                    "&:hover": {
                                      backgroundColor: "#EF2D41", // Change to the desired color on hover
                                    },
                                  }}
                                >
                                  Delete
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              ) : (
                <>
                  <Button variant="contained" onClick={(e) => setModal(true)}>
                    + Add Project
                  </Button>
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
                        >
                          <Card
                            sx={{
                              position: "relative",
                              overflow: "hidden",
                              transition: "transform 0.3s ease",
                              "&:hover": { transform: "translateY(-5px)" },
                            }}
                          >
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
                                transition={{ duration: 0.4, ease: "easeOut" }}
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
                              >
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
                              </motion.div>
                            </Box>

                            <CardContent>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold" }}
                              >
                                {item.name}
                              </Typography>

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
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: "5px",
                                }}
                              >
                                <Button
                                  variant="contained"
                                  size="small"
                                  sx={{
                                    bgcolor: "#ff0000ff",
                                    "&:hover": { bgcolor: "#b20e0eff" },
                                    color: "white",
                                  }}
                                  onClick={() => deleteProject(item)}
                                >
                                  Delete
                                </Button>
                                {item.desc.length && (
                                  <Button
                                    onClick={(e) => {
                                      setRedmore(item), setRedopen(true);
                                    }}
                                    size="small"
                                    sx={{
                                      color: "#3108adff",
                                      textTransform: "none",
                                    }}
                                  >
                                    Read More <KeyboardDoubleArrowRight />
                                  </Button>
                                )}
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                  </Grid>

                  {/* <Grid
                    container
                    columnSpacing={2}
                    sx={{ paddingX: { md: 0, sm: 4, xs: 2 } }}
                  >
                    {productData &&
                      productData.map((item) => (
                        <>
                          <Grid item lg={4} md={6} sm={6} xs={12} marginTop={1}>
                            <Card sx={{ margin: 0 }}>
                              <CardMedia
                                sx={{ height: 140 }}
                                image={`https://shubham-tupe-portfolio2.onrender.com/${item.hero}`}
                                title="Restorant_UI"
                              ></CardMedia>
                              <CardContent>
                                <Typography sx={{ marginY: 0 }}>
                                  {item.desc}
                                </Typography>
                                <Box
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <Button
                                    component="a"
                                    target="_blank"
                                    href={item.projectLink}
                                    variant="text"
                                    sx={{
                                      color: "#FF415B",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Visit Website
                                    <ChevronRightIcon
                                      sx={{ color: "#FF415B" }}
                                    />
                                  </Button>
                                </Box>
                              </CardContent>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  margin: 1,
                                }}
                              >
                                <Button
                                  onClick={(e) => deleteProject(item._id)}
                                  variant="contained"
                                  size="small"
                                  sx={{
                                    backgroundColor: "red",
                                    "&:hover": {
                                      backgroundColor: "#EF2D41", // Change to the desired color on hover
                                    },
                                  }}
                                >
                                  Delete
                                </Button>
                              </Box>
                            </Card>
                          </Grid>
                        </>
                      ))}
                  </Grid> */}
                  <Modal
                    open={modal}
                    onClose={(e) => setModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                      }}
                    >
                      <TextField
                        name="name"
                        onChange={(e) =>
                          setHandleInput({
                            ...handleInput,
                            name: e.target.value,
                          })
                        }
                        sx={{ width: "100%", marginY: 1 }}
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                      />
                      <TextField
                        name="projectLink"
                        onChange={(e) =>
                          setHandleInput({
                            ...handleInput,
                            projectLink: e.target.value,
                          })
                        }
                        sx={{ width: "100%", marginY: 1 }}
                        id="outlined-basic"
                        label="ProjectLink"
                        variant="outlined"
                      />
                      <TextField
                        name="desc"
                        onChange={(e) =>
                          setHandleInput({
                            ...handleInput,
                            desc: e.target.value,
                          })
                        }
                        sx={{ width: "100%", marginY: 1 }}
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                      />
                      <TextField
                        name="hero"
                        onChange={(e) =>
                          setHandleInput({
                            ...handleInput,
                            hero: e.target.files[0],
                          })
                        }
                        sx={{ width: "100%", marginY: 1 }}
                        id="outlined-basic"
                        type="file"
                        variant="standard"
                      />
                      <Button
                        onClick={(e) => {
                          handleSubmit(), setModal(false);
                        }}
                        variant="contained"
                        sx={{ marginTop: 3 }}
                      >
                        Add Project
                      </Button>
                    </Box>
                  </Modal>

                  {/* edit modal */}
                  <Modal
                    open={handleUpdate}
                    onClose={(e) => setHandleUpdate(false)}
                    sx={{ margin: 3 }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                      }}
                    >
                      <TextField
                        value={itemupdate && itemupdate.name}
                        name="name"
                        onChange={(e) =>
                          setHandleInput({
                            ...handleInput,
                            name: e.target.value,
                          })
                        }
                        sx={{ width: "100%", marginY: 1 }}
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                      />
                      <TextField
                        value={itemupdate && itemupdate.projectLink}
                        name="projectLink"
                        onChange={(e) =>
                          setHandleInput({
                            ...handleInput,
                            projectLink: e.target.value,
                          })
                        }
                        sx={{ width: "100%", marginY: 1 }}
                        id="outlined-basic"
                        label="ProjectLink"
                        variant="outlined"
                      />
                      <TextField
                        value={itemupdate && itemupdate.desc}
                        name="desc"
                        onChange={(e) =>
                          setHandleInput({
                            ...handleInput,
                            desc: e.target.value,
                          })
                        }
                        sx={{ width: "100%", marginY: 1 }}
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                      />
                      <TextField
                        name="hero"
                        onChange={(e) =>
                          setHandleInput({
                            ...handleInput,
                            hero: e.target.files[0],
                          })
                        }
                        sx={{ width: "100%", marginY: 1 }}
                        id="outlined-basic"
                        type="file"
                        variant="standard"
                      />
                      <Button
                        onClick={(e) => {
                          handleSubmit(), setModal(false);
                        }}
                        variant="contained"
                        sx={{ marginTop: 3 }}
                      >
                        Update Project
                      </Button>
                    </Box>
                  </Modal>
                </>
              )}
            </>
          )}
        </motion.div>
      </Grid>
      {/* loading page start */}
      {(ProLoadding || ProDelLoading || isLoading) && (
        <>
          {/* <Button onClick={ProLoaddin}>Show backdrop</Button> */}
          <Backdrop
            sx={(theme) => ({
              color: "#fff",
              zIndex: theme.zIndex.drawer + 1,
              flexDirection: "column",
              gap: 2,
            })}
            open={open}
          >
            <CircularProgress color="inherit" />
            <Box
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                animation: "moveUpDown 1.5s ease-in-out infinite",
              }}
            >
              Loading...
            </Box>
          </Backdrop>
        </>
      )}
      {/* loading page end */}

      {/* Red More Contend start */}
      {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
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
      {/* Red More Contend end */}
    </>
  );
};

export default Admin;

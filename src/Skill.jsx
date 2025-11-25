// import { Grid } from '@mui/material'
import React from 'react'
import { Avatar, Box, Button, ButtonGroup, Card, CircularProgress, Divider, Drawer, Grid, LinearProgress, Link, Stack, Typography } from '@mui/material'
import { motion } from "framer-motion"

import ForwardIcon from '@mui/icons-material/Forward';

// import Skill from './Skill';

const Skill = () => {
    return <>
        <Grid item lg={8.2} md={7.3} xs={12} sx={{ transition: "ease-in", height: { xs: "80vh", lg: "92vh", md: "93vh" }, overflowY: "scroll", '&::-webkit-scrollbar': { display: 'none', }, }} >
            <motion.div

                initial={{ translateX: "30%", opacity: 10 }}
                animate={{ translateX: 0, opacity: 100 }}
                transition={{ duration: 0.5 }}
            >


                <Grid container sx={{ marginY: 3 }}>
                    <Grid item md={6} xs={12} ><Typography sx={{ fontSize: { md: "2vw", xs: "6vw", sm: "5vw" }, marginX: 2, fontWeight: "bold" }}>Education</Typography></Grid>
                    <Grid item md={6} xs={12} ><Typography sx={{ fontSize: "2vw", fontWeight: "bold", display: { xs: "none", md: "block" } }}>Self Introduction</Typography></Grid>

                </Grid>
                <Grid container >
                    <Grid lg={5} md={10} xs={11} item sx={{ position: "relative" }}>
                        <Box sx={{ transition: "all 4s ease-in", }}>
                            <ForwardIcon sx={{ position: "absolute", right: 4, zIndex: -1, color: "gray", }} />
                            <Card sx={{ paddingX: 2, marginX: 2, paddingY: 2, zIndex: 7 }}>
                                <Typography sx={{ marginY: 1, fontSize: 20, fontWeight: "bold" }}>Web Developer Course</Typography>
                                {/* <Typography sx={{ color: "gray", marginY: 0 }}>Student</Typography> */}
                                <Typography sx={{ marginY: 1, backgroundColor: "#ECECEC ", display: "inline-block", paddingX: 2, borderRadius: 5 }}>April 2023 - Apri 2024</Typography>
                                <Typography sx={{ color: "gray", marginY: 2 }}>
                                    Full Stack Web Developer At Skillhub UI/UX Designer
                                </Typography>
                            </Card>
                            <Box sx={{ marginTop: 4 }}>
                                <ForwardIcon sx={{ position: "absolute", right: 4, zIndex: -1, color: "gray", }} />
                                <Card sx={{ paddingX: 2, marginX: 2, paddingY: 2, zIndex: 7 }}>
                                    <Typography sx={{ marginY: 1, fontSize: 20, fontWeight: "bold" }}>Computer Science BCS</Typography>
                                    {/* <Typography sx={{ color: "gray", marginY: 0 }}>Student</Typography> */}
                                    <Typography sx={{ marginY: 1, backgroundColor: "#ECECEC ", display: "inline-block", paddingX: 2, borderRadius: 5 }}>Sap 2022 - Sap 2025</Typography>
                                    <Typography sx={{ color: "gray", marginY: 2 }}>
                                        Rajarshi Shahu Arts, Commerce & Science College Pathri Tq. Phulambri Dist. Sambhajinagar
                                    </Typography>
                                </Card>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid lg={1} md={2} xs={1} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: 7, height: "100%", backgroundColor: "gray" }}>
                            <Box
                                sx={{
                                    width: 15,
                                    height: 15,
                                    backgroundColor: 'red',
                                    borderRadius: '50%',
                                    top: -1,
                                    left: -4,
                                    position: 'relative',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        top: 0,
                                        left: 0,
                                        backgroundColor: 'red',
                                        borderRadius: '50%',
                                        zIndex: 1,
                                        animation: 'pulse 1000ms cubic-bezier(0.9, 0.7, 0.5, 0.9) infinite',
                                    },
                                    '@keyframes pulse': {
                                        '0%': {
                                            opacity: 0,
                                        },
                                        '50%': {
                                            transform: 'scale(1.4)',
                                            opacity: 0.4,
                                        },
                                    },
                                }}
                            ></Box>
                            <Box
                                sx={{
                                    width: 15,
                                    height: 15,
                                    backgroundColor: 'red',
                                    borderRadius: '50%',
                                    top: "50%",
                                    left: -4,
                                    position: 'relative',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        top: 0,
                                        left: 0,
                                        backgroundColor: 'red',
                                        borderRadius: '50%',
                                        zIndex: 1,
                                        animation: 'pulse 1000ms cubic-bezier(0.9, 0.7, 0.5, 0.9) infinite',
                                    },
                                    '@keyframes pulse': {
                                        '0%': {
                                            opacity: 0,
                                        },
                                        '50%': {
                                            transform: 'scale(1.4)',
                                            opacity: 0.4,
                                        },
                                    },
                                }}
                            ></Box>
                        </Box>

                    </Grid>

                    <Grid container sx={{ marginY: 3, display: { sm: "block", md: "none" }, }}>
                        <Grid item md={6} xs={12} >

                            <Typography sx={{ fontSize: { md: "2vw", xs: "6vw", sm: "5vw" }, fontWeight: "bold", marginX: 2 }}>Self Introduction</Typography>
                        </Grid>
                    </Grid>

                    <Grid lg={5} md={10} xs={11} item sx={{ position: "relative", marginTop: { xs: 0, lg: 0, sm: 3 } }}>
                        <ForwardIcon sx={{ position: "absolute", right: 4, zIndex: -1, color: "gray", }} />
                        <Card sx={{ paddingX: 2, marginX: 2, paddingY: 2, zIndex: 7 }}>
                            <Box sx={{ display: "flex", }}>
                                <Typography sx={{ marginY: 1, fontWeight: "bold" }}>Name: </Typography>
                                <Typography sx={{ marginY: 1 }}>SHUBHAM SAKHARAM TUPE</Typography>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ marginY: 1, fontWeight: "bold" }}>Age: </Typography>
                                <Typography sx={{ marginY: 1, marginLeft: 1 }}>20</Typography>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ marginY: 1, fontWeight: "bold" }}>City: </Typography>
                                <Typography sx={{ marginY: 1, marginLeft: 1 }}>Chatrapati Sambhajinagar  </Typography>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ marginY: 1, fontWeight: "bold" }}>Address:</Typography>
                                <Typography sx={{ marginY: 1, marginLeft: 1 }}>Aadgaon  Tq. Phulambri Dist. Sambhajinagar</Typography>
                            </Box>

                        </Card>
                        <Box sx={{ marginTop: 4 }}>
                            <ForwardIcon sx={{ position: "absolute", right: 4, zIndex: -1, color: "gray", }} />
                            <Card sx={{ paddingX: 2, marginX: 2, paddingY: 2, zIndex: 7 }}>
                                <Box sx={{ display: "flex" }}>
                                    <Typography sx={{ marginY: 1, fontWeight: "bold" }}>Residence: </Typography>
                                    <Typography sx={{ marginY: 1, marginLeft: 1 }}>INDIA</Typography>
                                </Box>
                                <Box sx={{ display: "flex" }}>
                                    <Typography sx={{ marginY: 1, fontWeight: "bold" }}> State:  </Typography>
                                    <Typography sx={{ marginY: 1, marginLeft: 1 }}>Maharashtra </Typography>
                                </Box>
                                <Box sx={{ display: "flex" }}>
                                    <Typography sx={{ marginY: 1, fontWeight: "bold" }}> Phone:  </Typography>
                                    <Typography sx={{ marginY: 1, marginLeft: 1 }}>+91 7498187088 </Typography>
                                </Box>

                            </Card>
                        </Box>

                    </Grid>
                    <Grid lg={1} md={2} xs={1} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: 7, height: "100%", backgroundColor: "gray" }}>
                            <Box
                                sx={{
                                    width: 15,
                                    height: 15,
                                    backgroundColor: 'red',
                                    borderRadius: '50%',
                                    top: "0%",
                                    left: -4,
                                    position: 'relative',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        top: 0,
                                        left: 0,
                                        backgroundColor: 'red',
                                        borderRadius: '50%',
                                        zIndex: 1,
                                        animation: 'pulse 1000ms cubic-bezier(0.9, 0.7, 0.5, 0.9) infinite',
                                    },
                                    '@keyframes pulse': {
                                        '0%': {
                                            opacity: 0,
                                        },
                                        '50%': {
                                            transform: 'scale(1.4)',
                                            opacity: 0.4,
                                        },
                                    },
                                }}
                            ></Box>
                            <Box
                                sx={{
                                    width: 15,
                                    height: 15,
                                    backgroundColor: 'red',
                                    borderRadius: '50%',
                                    top: "53%",
                                    left: -4,
                                    position: 'relative',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        top: 0,
                                        left: 0,
                                        backgroundColor: 'red',
                                        borderRadius: '50%',
                                        zIndex: 1,
                                        animation: 'pulse 1000ms cubic-bezier(0.9, 0.7, 0.5, 0.9) infinite',
                                    },
                                    '@keyframes pulse': {
                                        '0%': {
                                            opacity: 0,
                                        },
                                        '50%': {
                                            transform: 'scale(1.4)',
                                            opacity: 0.4,
                                        },
                                    },
                                }}
                            ></Box>
                        </Box>

                    </Grid>
                </Grid>
            </motion.div>
        </Grid >
    </>
}

export default Skill
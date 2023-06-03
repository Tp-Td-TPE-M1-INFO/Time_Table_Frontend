import React from "react";
import "../../index.css";
import Box from "@mui/material/Box";
import Sidebarr from "./sidebar";
import Topbar from "./topbar";
import BoxCard from "./components/BoxCard";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

const UeScreen = () => {
    
    return (
        <div className="content">
            <Sidebarr />
            <Box width="100%" justifyContent="space-between">
                <Topbar />
                <main className="mainSection">
                    {/* Here we will write this section's code */}
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                        <Box
                            sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            }}
                        >
                            <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                alignContent: "center",
                            }}
                            >
                            <IconButton>
                                <div className="homeIconBox">
                                <HomeIcon sx={{ color: "#fff" }} />
                                </div>
                            </IconButton>

                            <div>
                                <h1 className="TitlePage">Unités d'enseignement</h1>
                            </div>
                            </Box>
                            <Box>
                            <IconButton>
                                <div className="addIconBox">
                                <AddIcon sx={{ color: "#fff" }} />
                                </div>
                            </IconButton>
                            </Box>
                        </Box>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <BoxCard title="INF2021" subTitle="Introduction aux bases de données" />
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <BoxCard title="CHM3020" subTitle="Conception du Benzène" />
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <BoxCard title="MATH4040" subTitle="Systèmes d'équations trigonométrique" />
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <BoxCard title="INF4188" subTitle="Web sémentique" />
                        </Grid>
                    </Grid>

                </main>
            </Box>
        </div>
    );
};

export default UeScreen
import React, { useState, useEffect } from "react";
import "../../index.css";
import axios from "axios";
import Box from "@mui/material/Box";
import Sidebarr from "./sidebar";
import Topbar from "./topbar";
import BoxCard from "./components/BoxCard";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

const ClasseScreen = () => {
    
    const [data, setData] = useState([])
    const [level, setLevel] = useState([])
    const [sector, setSector] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        
        try{
            const response1 = await axios.get('https://timetable-4qip.onrender.com/api/class')
            const response2 = await axios.get('https://timetable-4qip.onrender.com/api/level')
            const response3 = await axios.get('https://timetable-4qip.onrender.com/api/sector')
            setData(response1.data)
            setLevel(response2.data)
            setSector(response3.data)
        }catch(e){
            console.log('errrrrrrrrr')
        }

    }

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
                                    <h1 className="TitlePage">Classes</h1>
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

                        {
                            data && data.map((d) => {
                                return(
                                    <Grid item md={3} xs={12}>
                                        <BoxCard 
                                            title={
                                                level.filter((l) => {
                                                    return l._id === d.level
                                                })
                                                .map((l) => {
                                                    return sector.filter((s) => {
                                                        return s._id === d.sector
                                                    }).map((s) => {
                                                        return s.name.substring(0, 4) + " " + l.name
                                                    })
                                                })
                                            }
                                            subTitle={d.effectif}
                                        />
                                    </Grid>
                                )
                            })
                        }
                        
                    </Grid>

                </main>
            </Box>
        </div>
    );
};

export default ClasseScreen
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllUE } from '../../redux/slices/UESlice'
import ContainerC from '../../components/Container';
import UECreate from './components/CreateUEForm';
import {useDeleteUEMutation} from '../../redux/api'
import "../../index.css";
import axios from "../../axios";
import Box from "@mui/material/Box";
import Sidebarr from "./sidebar";
import Topbar from "./topbar";
import BoxCard from "./components/BoxCard";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

const UeScreen = () => {

    const data = useSelector((state) => state.UE.value)
    const dispatch = useDispatch()
    const [deleteUE] = useDeleteUEMutation();

    // State when loading
    const [isDone, setIsDone] = useState(false)

    useEffect(() => {
        axios.get("/ue").then(({ data }) => dispatch(getAllUE(data)));
    }, [dispatch])    
    
    const del = (id) => {
        setIsDone(false)
        console.log(id)
        deleteUE(id).then(({ res }) => {
            axios.get("/ue").then(({ data }) => dispatch(getAllUE(data)));
        });
        setIsDone(true)
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
                                <h1 className="TitlePage">Unités d'enseignement</h1>
                            </div>
                            </Box>
                            <Box>
                            <IconButton>
                                <div className="addIconBox">
                    <ContainerC component={ 
                                <AddIcon sx={{ color: "#fff" }} />
                    } formToDisplay={<UECreate/>} heading="Create UE"/>
                                </div>
                            </IconButton>
                            </Box>
                        </Box>
                        </Grid>
                        {
                            data && data.map((d) => {
                                return(
                                    <Grid item md={3} xs={12}>
                                        <BoxCard title={d.code} subTitle={d.intitule} method={() => del(d._id)} />
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

export default UeScreen
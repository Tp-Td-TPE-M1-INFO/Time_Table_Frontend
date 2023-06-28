import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllSector } from '../../redux/slices/sectorSlice'
import ContainerC from '../../components/Container';
import SectorCreate from './components/CreateSectorForm';
import {useDeleteSectorMutation, useUpdateSectorMutation} from '../../redux/api'
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
import _ from "lodash";
import Skeleton from "react-loading-skeleton";

const SectorScreen = () => {

    const data = useSelector((state) => state.sector.value)
    const dispatch = useDispatch()
    const [deleteSector] = useDeleteSectorMutation();
    const [updateSector] = useUpdateSectorMutation();

    // State when processing
    const [isEditing, setIsEditing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get("/sector").then(({ data }) => {
            dispatch(getAllSector(data))
            setIsLoading(false)
        });
    }, [dispatch])   

    const del = (id) => {
        deleteSector(id).then(() => {
            axios.get("/sector").then(({ data }) => dispatch(getAllSector(data)));
        });
    }
    const update = (data) => {
        updateSector(data).then(() => {
            axios.get("/sector").then(({ data }) => dispatch(getAllSector(data)));
        });
    }

    const editing = () =>{
        setIsEditing(true)
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
                                <h1 className="TitlePage">Filères</h1>
                            </div>
                            </Box>
                            <Box>
                            <IconButton>
                            <div className="addIconBox">
                    <ContainerC component={ 
                                <AddIcon sx={{ color: "#fff" }} />
                    } formToDisplay={<SectorCreate/>} heading="Create Sector"/>
                                </div>
                            </IconButton>
                            </Box>
                        </Box>
                        </Grid>
                        {   
                            !data ?
                            (_.range(8).map((index) => (
                                <Grid key={index} md={3} xs={12} style={{margin:"1rem 0 0 2rem",}}>
                                    <Skeleton width={"15rem"} height={"8rem"}/>
                                </Grid>
                              ))):
                            data.map((d) => {
                                return(
                                    <Grid item md={3} xs={12}>
                                    <BoxCard title={d.name} subTitle='' deleteAction={() => del(d._id)} updateAction={() => update(d)} isEditing={isEditing} editingToggle={() => editing()}/>
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

export default SectorScreen
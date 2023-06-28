import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllUE } from '../../redux/slices/UESlice'
import ContainerC from '../../components/Container';
import UECreate from './components/CreateUEForm';
import {useDeleteUEMutation, useUpdateUEMutation} from '../../redux/api'
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

const UeScreen = () => {

    const data = useSelector((state) => state.UE.value)
    const dispatch = useDispatch()
    const [deleteUE] = useDeleteUEMutation();
    const [updateUE] = useUpdateUEMutation();

    // State when processing
    const [isEditing, setIsEditing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get("/ue").then(({ data }) => {
            dispatch(getAllUE(data))
            setIsLoading(false)
        });
    }, [dispatch])    
    
    const del = (d) => {
        console.log(d)
        deleteUE(d._id).then(() => {
            axios.get("/ue").then(({ data }) => dispatch(getAllUE(data)));
        });
    }
    const update = (data) => {
        updateUE(data).then(() => {
            axios.get("/ue").then(({ data }) => dispatch(getAllUE(data)));
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
                            !data ?
                            (_.range(8).map((index) => (
                                <Grid key={index} md={3} xs={12} style={{margin:"1rem 0 0 2rem",}}>
                                    <Skeleton width={"15rem"} height={"8rem"}/>
                                </Grid>
                              ))):
                            data.map((d, key) => {
                                return(
                                    <Grid item md={3} xs={12} key={key}>
                                        <BoxCard object={d} title={d.code} subTitle={d.intitule} deleteAction={() => del(d)} updateAction={() => update(d)} isEditing={isEditing} editingToggle={() => editing()}/>
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
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ContainerC from '../../components/Container';
import ClassCreate from './components/CreateClassForm';
import { getAllClass } from '../../redux/slices/classSlice'
import { getAllSector } from '../../redux/slices/sectorSlice'
import { getAllLevel } from '../../redux/slices/levelSlice'
import {useCreateClassMutation, useDeleteClassMutation, useUpdateClassMutation} from '../../redux/api'
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
import BorderColorIcon from '@mui/icons-material/BorderColor';
import _ from "lodash";
import Skeleton from "react-loading-skeleton";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

const ClasseScreen = () => {

    const data = useSelector((state) => state.class.value)

    const [lev, setLev] = useState([])
    const [sect, setSect] = useState([])

    const dispatch = useDispatch()
    const [deleteClass] = useDeleteClassMutation();
    const [updateClass] = useUpdateClassMutation();
    const [createClass] = useCreateClassMutation();

    
    const generateSuccess = (msg) =>
    toast.success(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    })


    const generateError = (err) =>
    toast.error(err, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    })
    // State when processing
    const [isEditing, setIsEditing] = useState(false)
    const [terminated, setTerminated] = useState(true)

    const del = (id) => {
        deleteClass(id).then(() => {
            axios.get("/class").then(({ data }) => dispatch(getAllClass(data)));
        });
    }
    const update = (data) => {
        updateClass(data).then(() => {
            axios.get("/class").then(({ data }) => dispatch(getAllClass(data)));
        });
    }

    const editing = () =>{
        setIsEditing(true)
    }

    const autoCreateClasses = () => {
            generateError(`Unstable for the moment, stay tuned...`)
            // TODO
        // setTerminated(false)
        //     for (let index = 0; index < sect.length; index++) {
        //     const sector = sect[index];
            
        //         for (let index = 0; index < lev.length; index++) {
        //             const level = lev[index];
        //             const  effectif = 0
        //             console.log(`${sector} - ${level} - ${effectif}`)
        //             createClass({ sector, level, effectif}).then(({ data }) => {
        //             });
                    
        //         }
        //     }
            setTerminated(true)
        //     generateSuccess(`Succesfully autogenerated`)
    }

    useEffect(() => {
        axios.get("/sector").then(({ data }) => {
            var sectors = []
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                sectors.push(element.name)
                
            }
            setSect(sectors)
        });

        axios.get("/level").then(({ data }) => {
            var levels = []
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                levels.push(element.name)
            }
            setLev(levels)
        });
        axios.get("/class").then(({ data }) => {
            dispatch(getAllClass(data))
        });
        
    }, []) 
        

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
                                {terminated ?
                                <div className="addIconBox" style={{width:"20rem",color:"white", cursor:"pointer"}} onClick={() => {
                                    setTerminated(false)
                                    autoCreateClasses()}}>
                                    Autogenerate<AddIcon sx={{ color: "#fff" }} />
                                </div>:<Spinner color="white" sx={{color:"white"}}/>
                                }
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
                                        <BoxCard title={`${d.sector} - ${d.level}`} subTitle={d.effectif} deleteAction={() => del(d._id)} updateAction={() => update(d)} isEditing={isEditing} editingToggle={() => editing()}/>
                                    </Grid>
                                )
                            })
                        }
                        
                    </Grid>

                </main>
            </Box>
            <ToastContainer/>
        </div>
    );
};

export default ClasseScreen
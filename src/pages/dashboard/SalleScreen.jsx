import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ContainerC from '../../components/Container';
import HallCreate from './components/CreateHallForm';
import { getAllHall } from '../../redux/slices/hallSlice'
import {useDeleteHallMutation, useUpdateHallMutation} from '../../redux/api'
import "../../index.css";
import Box from "@mui/material/Box";
import Sidebarr from "./sidebar";
import Topbar from "./topbar";
import BoxCard from "./components/BoxCard";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import axios from "../../axios";
import _ from "lodash";
import Skeleton from "react-loading-skeleton";

const SalleScreen = () => {

  const data = useSelector((state) => state.hall.value)
  const dispatch = useDispatch()
  const [deleteHall] = useDeleteHallMutation();
  const [updateHall] = useUpdateHallMutation();

  // State when processing
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get("/hall/allHalls").then(({ data }) => {
        dispatch(getAllHall(data))
        setIsLoading(false)
    });
  }, [dispatch])    

  const del = (d) => {
      console.log(d)
      deleteHall(d._id).then(() => {
          axios.get("/hall/allHalls").then(({ data }) => dispatch(getAllHall(data)));
      });
  }
  const update = (data) => {
      updateHall(data).then(() => {
          axios.get("/hall/allHalls").then(({ data }) => dispatch(getAllHall(data)));
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
                    <h1 className="TitlePage">Salles de classe</h1>
                  </div>
                </Box>
                <Box>
                  <IconButton>
                    <div className="addIconBox">
                      <ContainerC component={ 
                                  <AddIcon sx={{ color: "#fff" }} />
                      } formToDisplay={<HallCreate/>} heading="Create hall"/>
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
                          <BoxCard title={d.name} subTitle={d.capacity} deleteAction={() => del(d)} updateAction={() => update(d)} isEditing={isEditing} editingToggle={() => editing()}/>
                      </Grid>
                  )
              })
          }
          </Grid>
          {/* <p>Je suis dans la composante salle</p> */}
        </main>
      </Box>
    </div>
  );
};

export default SalleScreen;

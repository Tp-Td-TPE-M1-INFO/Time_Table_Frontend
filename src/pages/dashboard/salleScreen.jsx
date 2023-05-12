import React from "react";
import "../../index.css";
import Box from "@mui/material/Box";
import Sidebarr from "./sidebar";
import Topbar from "./topbar";
import BoxCard from "./components/BoxCard";
import Grid from "@mui/material/Grid";

const SalleScreen = () => {
  return (
    <div className="content">
      <Sidebarr />
      <Box width="100%" justifyContent="space-between">
        <Topbar />
        <main className="mainSection">
          {/* Here we will write this section's code */}
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <BoxCard title="S006" subTitle="40" />
            </Grid>
            <Grid item md={3} xs={12}>
              <BoxCard title="S006" subTitle="40" />
            </Grid>
            <Grid item md={3} xs={12}>
              <BoxCard title="S006" subTitle="40" />
            </Grid>
            <Grid item md={3} xs={12}>
              <BoxCard title="S006" subTitle="40" />
            </Grid>
          </Grid>
          {/* <p>Je suis dans la composante salle</p> */}
        </main>
      </Box>
    </div>
  );
};

export default SalleScreen;

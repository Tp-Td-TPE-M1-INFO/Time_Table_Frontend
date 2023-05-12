import React from "react";
import "../../index.css";
import Box from "@mui/material/Box";
import Sidebarr from "./sidebar";
import Topbar from "./topbar";

const SalleScreen = () => {
  return (
    <div className="content">
      <Sidebarr />
      <Box width="100%" justifyContent="space-between">
        <Topbar />
        <main className="mainSection">
          {/* Here we will write this section's code */}
          <p>Je suis dans la composante salle</p>
        </main>
      </Box>
    </div>
  );
};

export default SalleScreen;

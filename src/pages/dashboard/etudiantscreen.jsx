import React from "react";
import Topbar from "./topbar";
import Sidebarr from "./sidebar";
import "../../index.css";
import { Box } from "@mui/material";

const Etudiantscreen = () => {
  return (
    <div className="content">
      <Sidebarr />
      <Box width="100%" justifyContent="space-between">
        <Topbar />
        <main className="mainSection">
          {/* Here we will write this section's code */}
          <p>Je suis dans la section Etudiant</p>
        </main>
      </Box>
    </div>
  );
};

export default Etudiantscreen;

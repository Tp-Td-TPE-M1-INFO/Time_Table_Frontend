import React from "react";
import Topbar from "./dashboard/topbar";
import Sidebarr from "./dashboard/sidebar";
import TimetableList from "./dashboard/TimetableList";
import "../index.css";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <div className="content">
      <Sidebarr />
      <Box width="100%" justifyContent="space-between">
        <Topbar />
        <main className="mainSection">
          
          <TimetableList />
          
        </main>
      </Box>
    </div>
  );
}

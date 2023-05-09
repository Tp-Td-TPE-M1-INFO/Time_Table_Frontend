import React from "react";
import Topbar from "./dashboard/topbar";
import Sidebarr from "./dashboard/sidebar";
import { Route, Routes } from "react-router-dom";
import UserSignUp from "./signUp";
import "../index.css";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <div className="content">
      <Sidebarr />
      <Box width="100%" justifyContent="space-between">
        <Topbar />
        <main className="mainSection">
          {/* Here we will write this section's code */}
          <p>Je suis jocelyn pyw</p>
        </main>
      </Box>
    </div>
  );
}

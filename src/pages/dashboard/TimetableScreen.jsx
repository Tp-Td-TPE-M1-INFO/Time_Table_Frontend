import React from "react"
import Topbar from "./topbar"
import Sidebarr from "./sidebar"
import "../../index.css"
import { Box } from "@mui/material"
import Index from "../Index"

const TimetableScreen = () => {
    return (
        <div className="content">
            <Sidebarr />
            <Box width="100%" justifyContent="space-between">
                <Topbar />
                <main className="mainSection">
                    <Index />
                </main>
            </Box>
        </div>
    )
}

export default TimetableScreen

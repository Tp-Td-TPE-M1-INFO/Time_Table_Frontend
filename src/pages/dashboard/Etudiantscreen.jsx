import React from "react"
import Topbar from "./topbar"
import Sidebarr from "./sidebar"
import "../../index.css"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import UserTable from "./components/UserTable"
import HomeIcon from "@mui/icons-material/Home"
import AddIcon from "@mui/icons-material/Add"
import IconButton from "@mui/material/IconButton"


const Etudiantscreen = () => {

	return (
		<div className="content">
			<Sidebarr />
			<Box width="100%" justifyContent="space-between">
				<Topbar />
				<main className="mainSection">
					<Grid item md={12} xs={12} sx={{ marginBottom: 4 }}>
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
									<h1 className="TitlePage">Etudiants</h1>
								</div>
							</Box>
							<Box>
								<IconButton>
									<div className="addIconBox">
										<AddIcon sx={{ color: "#fff" }} />
									</div>
								</IconButton>
							</Box>
						</Box>
					</Grid>

					<UserTable />
				</main>
			</Box>
		</div>
	)
}

export default Etudiantscreen

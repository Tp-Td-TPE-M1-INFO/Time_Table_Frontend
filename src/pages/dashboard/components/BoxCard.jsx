import React from "react";
import "../../../styles/BoxCard.css";
import bg from '../../../media/circle.svg'
import { Box } from "@mui/system";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import IconButton from "@mui/material/IconButton";
import { useAlert } from 'react-alert-with-buttons'
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";


const BoxCard = ({title, subTitle, method }) => {
	const alert = useAlert()
	return (
		<Box
			sx={{
					backgroundColor: "rgba(0,49,102,.5)",
					backgroundImage: `url(${bg})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					margin: 1,
					padding: 2,
					borderRadius: 1,
					display: "flex",
					flexDirection: "column",
					position: "relative",
			}}
		>
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				marginBottom: 2
			}}
		>
			<div>
				<p className="salleName">{title}</p>
			</div>
			<div className="">
				<DeleteRoundedIcon sx={{ color: "#000", cursor:"pointer" }} onClick={() => 
                    alert.open({
                    message: `Really delete ${title} ?`,
                    buttons: [
                      {
                        label: "Yes",
                        onClick: () => {
							method()
                        },
                        style: {
                          backgroundColor: "var(--primary)",
                          marginRight: "1rem",
                          color: "white",
                        },
                      },
                      {
                        label: "No",
                        onClick: () => {
                          alert.close() 
                        },
                      },
                    ],
                  })}/>
			</div>
		</Box>
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<div>
				<p className="">{subTitle} { subTitle != '' ? 'Places': null}</p>
			</div>
			<div>
				<DriveFileRenameOutlineRoundedIcon sx={{ color: "#fff" }} />
			</div>
		</Box>
		</Box>
	)
}

export default BoxCard

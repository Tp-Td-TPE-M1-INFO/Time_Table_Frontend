import React, {useState} from "react";
import "../../../styles/BoxCard.css";
import bg from '../../../media/circle.svg'
import { Box } from "@mui/system";
import DoneIcon from "@mui/icons-material/Done";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import IconButton from "@mui/material/IconButton";
import { useAlert } from 'react-alert-with-buttons'
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import { useDeleteUEMutation } from "../../../redux/api";
import { useDispatch } from "react-redux";
import axios from "../../../axios";
import { getAllUE } from "../../../redux/slices/UESlice";


const BoxCard = ({title, subTitle, deleteAction, updateAction }) => {
	const alert = useAlert()
    const dispatch = useDispatch()
    const [deleteUE] = useDeleteUEMutation();
	
    // State when loading
    const [isEditing, setIsEditing] = useState(false)
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
				{
					isEditing ?
					<input type='text' placeholder={title}/>:
					<p className="salleName">{title}</p>
				}
			</div>
			<div className="">
				<DeleteRoundedIcon sx={{ color: "#000", cursor:"pointer" }} onClick={() => 
                    alert.open({
                    message: `Really delete ${title} ?`,
                    buttons: [
                      {
                        label: "Yes",
                        onClick: () => {
							// console.log(object)
							deleteAction()
    
							alert.close() 
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
				{
					isEditing && subTitle !== '' ?
					<input type='text' placeholder={subTitle}/>:
					<p className="">{subTitle} { typeof subTitle != 'string' ? 'Places': null}</p>
				}
			</div>
			<div>
				{
					isEditing ?
					<IconButton sx={{color:'green', marginLeft:"10px",backgroundColor:"white","&:hover": {
						background: "var(--primary)",
						color:"white"
					  },}} onClick={() => {
						updateAction()
						setIsEditing(false)

					}}><DoneIcon/></IconButton>:
					<DriveFileRenameOutlineRoundedIcon sx={{ color: "#fff", cursor:'pointer' }} onClick={() => setIsEditing(true)}/>
				}
			</div>
		</Box>
		</Box>
	)
}

export default BoxCard

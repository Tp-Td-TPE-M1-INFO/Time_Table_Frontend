import React from "react";
import "../../../styles/BoxCard.css";
import { Box } from "@mui/system";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import IconButton from "@mui/material/IconButton";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";

const BoxCard = ({ title, subTitle }) => {
  return (
    <Box
      sx={{
        height: 130,
        // width: 300,
        backgroundColor: "purple",
        margin: 5,
        p: 1,
        borderRadius: 3,
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
        }}
      >
        <div>
          <p className="salleName">{title}</p>
        </div>
        <div className="deleteIconBox">
          <IconButton sx={{ color: "red" }}>
            <DeleteRoundedIcon size={12} />
          </IconButton>
        </div>
      </Box>
      {/* /////////////////////////////////////// */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          width: "95%",
        }}
      >
        <div>
          <p className="salleNombreDePlace">{subTitle} Places</p>
        </div>
        <div>
          <IconButton>
            <DriveFileRenameOutlineRoundedIcon sx={{ color: "#fff" }} />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default BoxCard;

import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { InputBase } from "@mui/material";
import { useProSidebar } from "react-pro-sidebar";
// import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutLinedIcon";
// import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutLinedIcon";
// import NotificationsModeOutLinedIcon from "@mui/icons-material/NotificationsModeOutLinedIcon";
// import SettingModeOutLinedIcon from "@mui/icons-material/SettingModeOutLinedIcon";
// import PersonModeOutLinedIcon from "@mui/icons-material/PersonModeOutLinedIcon";
// import SearchIcon from "@mui/icons-material/SearchIcon";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const Topbar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <Box
      display="flex"
      width="100%"
      height="60px"
      justifyContent="space-between"
      p={2}
      backgroundColor="lime"
    >
      {/* SEARCH */}
      <Box display="flex">
        <Box>
          <MenuOutlinedIcon
            onClick={() => collapseSidebar()}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <Box display="flex" backgroundColor="red" borderRadius="3px">
          <InputBase placeholder="Search..." sx={{ ml: 2, flex: 1 }} />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchOutlinedIcon />
          </IconButton>
        </Box>
      </Box>

      {/* ICON  */}
      <Box display="flex">
        <IconButton>
          <LightModeOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <Person2OutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;

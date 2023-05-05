import React, { useState } from "react";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { InputBase, Typography, useTheme } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";

const Sidebarr = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <Link to={to}>
        <MenuItem
          active={selected === title}
          style={{ color: "grey" }}
          onClick={() => setSelected(title)}
          icon={icon}
        >
          <Typography>{title}</Typography>
        </MenuItem>
      </Link>
    );
  };
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: "green",
        },
        "& .pro-icon-wrapper": {
          background: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar>
        {/* User Section */}

        <Box mb="25px">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img
              alt="profile-user"
              width="50px"
              height="50px"
              // src={`../../assets/user.png`}
              src="data:image/jpeg;base64,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"
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
          </Box>
          <Box textAlign="center">
            <Typography
              variant="h10"
              color="green"
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
            >
              Ed Roh
            </Typography>
            <Typography variant="h9" color="green">
              VP Fancy Admin
            </Typography>
          </Box>

          <Menu>
            <Item
              title="Home"
              to="/"
              icon={<Person2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Student"
              to="/etudiant"
              icon={<Person2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Administration"
              to="/admin"
              icon={<Person2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="TimeTable"
              to="/etudiant"
              icon={<Person2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Jocelyn Pyw"
              to="/etudiant"
              icon={<Person2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Dashboard"
              to="/log-in"
              icon={<Person2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Dashboard"
              to="/log-in"
              icon={<Person2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Dashboard"
              to="/log-in"
              icon={<Person2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Dashboard"
              to="/log-in"
              icon={<Person2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Dashboard"
              to="/log-in"
              icon={<Person2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Dashboard"
              to="/log-in"
              icon={<Person2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Menu>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default Sidebarr;

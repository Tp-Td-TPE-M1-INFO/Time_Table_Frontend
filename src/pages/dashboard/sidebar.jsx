import React, { useState } from "react";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { InputBase, Typography, useTheme } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { jocelynLogo, logo } from "../../utils/images";
// import "react-pro-sidebar/dist/css/styles.css";
import "../../index.css";

const Sidebarr = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <NavLink to={to} activeClasseName="active">
        <MenuItem
          active={selected === title}
          style={{ color: "grey" }}
          onClick={() => setSelected(title)}
          icon={icon}
        >
          <Typography>{title}</Typography>
        </MenuItem>
      </NavLink>
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
        {/* Title Section */}
        <Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            height="80px"
          >
            <img
              alt="profile-user"
              width="50px"
              height="50px"
              // src={`../../assets/user.png`}
              src={logo}
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                backgroundSize: "cover",
                marginRight: "5px",
              }}
            />
            {/* <Box textAlign="center"> */}
            <Typography variant="h5" color="green" fontWeight="bold">
              TP BD
            </Typography>
            {/* </Box> */}
          </Box>
        </Box>
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
              src={jocelynLogo}
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                backgroundSize: "cover",
              }}
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
              to="/etudiant1"
              icon={<Person2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Jocelyn Pyw"
              to="/etudiant1"
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

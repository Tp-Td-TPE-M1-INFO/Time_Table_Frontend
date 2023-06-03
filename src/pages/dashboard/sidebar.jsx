import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { InputBase, Typography, menuClasses, useTheme } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { jocelynLogo, logo } from "../../utils/images";
import "../../index.css";
import colors from "../../utils/color.js";

const Sidebarr = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [activeMenuItem, setActiveMenuItem] = useState("/");
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const currentUrl = window.location.pathname;

  return (
    <Box>
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
              src={logo}
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                backgroundSize: "cover",
                marginRight: "5px",
              }}
            />
            {!collapsed && (
              <Typography variant="h5" color="#00009cb3" fontWeight="bold">
                TIME TABLE
              </Typography>
            )}
          </Box>
        </Box>
        {/* User Section */}

        <Box mb="25px">
          {!collapsed && (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              marginTop="5px"
              marginBottom="20px"
            >
              <Box>
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={jocelynLogo}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    backgroundSize: "cover",
                  }}
                />
              </Box>

              <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                marginLeft="5px"
              >
                <Typography variant="h10" fontWeight="bold" color="#3E4B5B">
                  Jocelyn Pyw
                </Typography>
                <Typography variant="h9" color="#d8d8d8" fontSize="12px">
                  Project Manager
                </Typography>
              </Box>
            </Box>
          )}
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                  return {
                    color: active ? "#fff" : "",
                    backgroundColor: active ? colors.app.primary : undefined,
                    "&:hover": {
                      background: active ? colors.app.primary : "",
                    },
                  };
              },
            }}
          >
            <NavLink to="/">
              <MenuItem
                active={currentUrl === "/" ? true : false}
                icon={
                  <GridViewOutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
              >
                <Typography color={currentUrl === "/" ? "#fff" : "#3E4B5B"}>Home</Typography>
              </MenuItem>
            </NavLink>

            <NavLink to="/student">
              <MenuItem
                icon={
                  <SchoolOutlinedIcon style={{ color: colors.app.secondary }} />
                }
                active={currentUrl === "/student" ? true : false}
              >
                <Typography color={currentUrl === "/student" ? "#fff" : "#3E4B5B"}>Etudiants</Typography>
              </MenuItem>
            </NavLink>

            <NavLink to="/admin">
              <MenuItem
                icon={
                  <SupervisorAccountOutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
                active={currentUrl === "/admin" ? true : false}
              >
                <Typography color={currentUrl === "/admin" ? "#fff" : "#3E4B5B"}>Administration</Typography>
              </MenuItem>
            </NavLink>

            <NavLink to="/timetable">
              <MenuItem
                icon={
                  <CalendarMonthOutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
                active={currentUrl === "/timetable" ? true : false}
              >
                <Typography color={currentUrl === "/timetable" ? "#fff" : "#3E4B5B"}>TimeTable</Typography>
              </MenuItem>
            </NavLink>

            <NavLink to="/salles">
              <MenuItem
                icon={
                  <OtherHousesOutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
                active={currentUrl === "/salles" ? true : false}
              >
                <Typography color={currentUrl === "/salles" ? "#fff" : "#3E4B5B"}>Salles</Typography>
              </MenuItem>
            </NavLink>
            <NavLink to="/classes">
              <MenuItem
                icon={
                  <EditCalendarOutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
                active={currentUrl === "/classes" ? true : false}
              >
                <Typography color={currentUrl === "/classes" ? "#fff" : "#3E4B5B"}>Classes</Typography>
              </MenuItem>
            </NavLink>
            <NavLink to="/teachers">
              <MenuItem
                icon={
                  <Person2OutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
                active={currentUrl === "/teachers" ? true : false}
              >
                <Typography color={currentUrl === "/teachers" ? "#fff" : "#3E4B5B"}>Teachers</Typography>
              </MenuItem>
            </NavLink>
            <NavLink to="/ues">
              <MenuItem
                icon={
                  <Person2OutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
                active={currentUrl === "/ues" ? true : false}
              >
                <Typography color={currentUrl === "/ues" ? "#fff" : "#3E4B5B"}>UE</Typography>
              </MenuItem>
            </NavLink>
            <NavLink to="/etudiant2">
              <MenuItem
                icon={
                  <Person2OutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
                active={currentUrl === "/etudiant2" ? true : false}
              >
                <Typography color="#3E4B5B">Jocelyn Pyw</Typography>
              </MenuItem>
            </NavLink>
            <NavLink to="/etudiant2">
              <MenuItem
                icon={
                  <HistoryToggleOffOutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
              >
                <Typography color="#3E4B5B">Planning</Typography>
              </MenuItem>
            </NavLink>
            <NavLink to="/etudiant2">
              <MenuItem
                icon={
                  <InventoryOutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
              >
                <Typography color="#3E4B5B">Evenement</Typography>
              </MenuItem>
            </NavLink>
          </Menu>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default Sidebarr;

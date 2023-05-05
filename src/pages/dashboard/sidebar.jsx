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
              <Typography variant="h5" color="green" fontWeight="bold">
                TP BD
              </Typography>
            )}
          </Box>
        </Box>
        {/* User Section */}

        <Box mb="25px">
          {!collapsed && (
            <>
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
            </>
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
                <Typography color="#3E4B5B">Home</Typography>
              </MenuItem>
            </NavLink>

            <NavLink to="/etudiant">
              <MenuItem
                icon={
                  <SchoolOutlinedIcon style={{ color: colors.app.secondary }} />
                }
                active={currentUrl === "/etudiant" ? true : false}
              >
                <Typography color="#3E4B5B">Student</Typography>
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
                <Typography color="#3E4B5B">Administration</Typography>
              </MenuItem>
            </NavLink>

            <NavLink to="/etudiant1">
              <MenuItem
                icon={
                  <CalendarMonthOutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
                active={currentUrl === "/etudiant1" ? true : false}
              >
                <Typography color="#3E4B5B">TimeTable</Typography>
              </MenuItem>
            </NavLink>
            <NavLink to="/etudiant2">
              <MenuItem
                icon={
                  <Person2OutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
              >
                <Typography color="#3E4B5B">Jocelyn Pyw</Typography>
              </MenuItem>
            </NavLink>
            <NavLink to="/etudiant2">
              <MenuItem
                icon={
                  <OtherHousesOutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
              >
                <Typography color="#3E4B5B">Salles</Typography>
              </MenuItem>
            </NavLink>
            <NavLink to="/etudiant2">
              <MenuItem
                icon={
                  <EditCalendarOutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
              >
                <Typography color="#3E4B5B">Classes</Typography>
              </MenuItem>
            </NavLink>
            <NavLink to="/etudiant2">
              <MenuItem
                icon={
                  <Person2OutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
              >
                <Typography color="#3E4B5B">Teachers</Typography>
              </MenuItem>
            </NavLink>
            <NavLink to="/etudiant2">
              <MenuItem
                icon={
                  <Person2OutlinedIcon
                    style={{ color: colors.app.secondary }}
                  />
                }
              >
                <Typography color="#3E4B5B">UE</Typography>
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

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import SportsMotorsportsOutlinedIcon from '@mui/icons-material/SportsMotorsportsOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography, colors } from '@mui/material';
import { images } from "../../assets";
import Animate from "./Animate";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';



const menus = [
  {
    title: "Inbox",
    icon: <MailOutlinedIcon />,
    state: "inbox"
  },
  {
    title: "Overview",
    icon: <DashboardCustomizeOutlinedIcon />,
    state: "dashboard"
  },
  {
    title: "Notification",
    icon: <NotificationsOutlinedIcon />,
    state: "notification"
  }
];

const pages = [
  {
    title: "Home",
    icon: <OtherHousesOutlinedIcon />,
    state: "home"
  },
  {
    title: "Profile",
    icon: <AccountBoxIcon />,
    state: "profile"
  },
  {
    title: "About",
    icon: <InfoIcon />,
    state: "about"
  },
  {
    title: "Search",
    icon: <SearchIcon />,
    state: "search"
  },
  {
    title: "Connect Account",
    icon: <PhonelinkRingIcon />,
    state: "connectAccount"
  }
];

const investmentMenus = [

  {
    title: "ExtraTwo",
    icon: <ChatBubbleOutlineOutlinedIcon />,
    state: "extraTwo"
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    state: "settings"
  }
];

const Sidebar = ({ sidebarWidth }) => {
    // Use state to manage the active state
  const [activeState, setActiveState] = useState("overview");

  // const container = window !== undefined ? () => window.document.body : undefined;

  const MenuItem = (props) => {
    const navigate = useNavigate();

    const handleItemClick = () => {
      navigate(`/${props.item.state}`);

      // Update the active state when an item is clicked
      setActiveState(props.item.state);
    };

    return (
      <ListItem key={props.index} disableGutters disablePadding sx={{ py: 0.5, }}>
        <ListItemButton
          onClick={handleItemClick}
          sx={{
            borderRadius: "10px",
            bgcolor: props.isActive ? '#ffffff' : "",
            color: props.isActive ? '#ED1504' : "",
            "&:hover": {
              bgcolor: props.isActive ? '#e0e0e0' : "",
              color: props.isActive ? '#ED1504' : "",
            },
          }}
        >
          <ListItemIcon sx={{
            minWidth: "40px",
            color: props.isActive ? '#ED1504' : "white"
          }}>
            {props.item.icon}
          </ListItemIcon>
          <ListItemText primary={
            <Typography fontWeight={600}>
              {props.item.title}
            </Typography>
          } />
        </ListItemButton>
      </ListItem>
    );
  };

  const drawer = (
    <Box
      padding={3}
      paddingBottom={0}
      display="flex"
      flexDirection="column"
      height="100vh"
      sx={{
        "::-webkit-scrollbar": {
          display: "none"
        }, bgcolor: "#ED1504"
      }}
    >
      {/* logo */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Animate type="fade" delay={1}>
          <Typography variant="h3" fontWeight="bold" color="white" fontFamily="Your-Cool-Font">
            JTierney Tech
          </Typography>
          {/* Add the font-family property with the desired cool font name */}
          {/* <img src={images.logo} alt="logo" height={60} /> */}
        </Animate>
      </Box>
      {/* logo */}

      <Animate sx={{ flexGrow: 1 }}>
        <Paper
          elevation={0}
          square
          sx={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            p: 2,
            bgcolor: '#ED1504',
            height: "100%",
            boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px"
          }}
        >
          {/* menu group 1 */}
          <List sx={{color: "white"}}>
            {menus.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                isActive={item.state === activeState}
              />
            ))}
          </List>
          {/* menu group 1 */}

          {/* menu group 2 */}
          <List sx={{color: "white"}}>
            <ListItem>
              <Typography fontWeight={600} mt={1} color={'#ffffff'}>
                Pages
              </Typography>
            </ListItem>
            {pages.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                isActive={item.state === activeState}
              />
            ))}
          </List>
          {/* menu group 2 */}

          {/* menu group 3 */}
          <List sx={{color: "white"}}>
            <ListItem>
              <Typography fontWeight={600} mt={1} color={'#ffffff'}>
                Extras
              </Typography>
            </ListItem>
            {investmentMenus.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                isActive={item.state === activeState}
              />
            ))}
          </List>
          {/* menu group 3 */}
        </Paper>
      </Animate>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { md: sidebarWidth },
        flexShrink: { md: 0 }
      }}
    >
      {/* large screen */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidebarWidth,
            borderWidth: 0,
            bgcolor: "transparent",
            "::-webkit-scrollbar": {
              display: "none"
            }
          }
        }}
        open
      >
        {drawer}
      </Drawer>
      {/* large screen */}
    </Box>
  );
};

export default Sidebar;
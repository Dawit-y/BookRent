import * as React from "react";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CustomListItemButton, CustomListItemIcon } from "./Item";

export const mainListItems = (
  <React.Fragment>
    <CustomListItemButton>
      <CustomListItemIcon>
        <DashboardIcon />
      </CustomListItemIcon>
      <ListItemText primary="Dashboard" />
    </CustomListItemButton>
    <CustomListItemButton>
      <CustomListItemIcon>
        <LibraryBooksIcon />
      </CustomListItemIcon>
      <ListItemText primary="Books" />
    </CustomListItemButton>
    <CustomListItemButton>
      <CustomListItemIcon>
        <PeopleIcon />
      </CustomListItemIcon>
      <ListItemText primary="Owners" />
    </CustomListItemButton>
    <CustomListItemButton>
      <CustomListItemIcon>
        <AddBoxIcon />
      </CustomListItemIcon>
      <ListItemText primary="Others" />
    </CustomListItemButton>
    <CustomListItemButton>
      <CustomListItemIcon>
        <AddBoxIcon />
      </CustomListItemIcon>
      <ListItemText primary="Others" />
    </CustomListItemButton>
  </React.Fragment>
);
export const secondaryListItems = (
  <React.Fragment>
    <CustomListItemButton>
      <CustomListItemIcon>
        <NotificationsNoneOutlinedIcon />
      </CustomListItemIcon>
      <ListItemText primary="Notification" />
    </CustomListItemButton>
    <CustomListItemButton>
      <CustomListItemIcon>
        <SettingsIcon />
      </CustomListItemIcon>
      <ListItemText primary="Settings" />
    </CustomListItemButton>
    <CustomListItemButton>
      <CustomListItemIcon>
        <AccountCircleIcon />
      </CustomListItemIcon>
      <ListItemText primary="Login as Book Owner" />
    </CustomListItemButton>
  </React.Fragment>
);

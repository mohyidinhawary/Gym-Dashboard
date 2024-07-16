import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";

import PeopleIcon from "@mui/icons-material/People";
import MailIcon from "@mui/icons-material/Mail";

import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Logout, SportsGymnasticsTwoTone } from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";

export function MainListItems() {
  return (
    <React.Fragment>
      <ListItemButton component={Link} to="/dashboard">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton component={Link} to="/tariners">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Trainers" />
      </ListItemButton>
      {/* <ListItemButton component={Link} to="/mail">
        <ListItemIcon>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Mail" />
      </ListItemButton> */}
      <ListItemButton component={Link} to="/account-statement">
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Account Statement" />
      </ListItemButton>
      <ListItemButton component={Link} to="/settings">
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="settings" />
      </ListItemButton>
      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <Logout />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItemButton>
    </React.Fragment>
  );
}

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);

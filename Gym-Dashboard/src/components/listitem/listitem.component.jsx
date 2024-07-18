
import {
  ListItemButton,
ListItemIcon,
ListItemText,
DashboardIcon, 
PeopleIcon ,
 
SettingsIcon 
} from "./index"

import { Group } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";


export default function MainListItems() {
  return (
    <>
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
      
      <ListItemButton component={Link} to="/account-statement">
        <ListItemIcon>
          < Group />
        </ListItemIcon>
        <ListItemText primary="users managment" />
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
    </>
  );
}


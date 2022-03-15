import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import SettingsIcon from "@mui/icons-material/Settings";
import { Paths } from "../../config/Paths";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import fireBaseApp from "../../config/Credentials";
import AddIcon from "@mui/icons-material/Add";
import Notes from "../Notes";

const drawerWidth = 220;

export default function ClippedDrawer() {
  const [logout, setLogout] = React.useState(false);
  let navigate = useNavigate();
  const auth = getAuth(fireBaseApp);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            NoteBook
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflow: "auto",
            height: "100vh",
            background: (theme) => theme.global.mainBlue,
            color: "white",
          }}
        >
          <List>
            {Paths.map((path) => (
              <ListItem
                button
                key={path.name}
                onClick={() => navigate(path.pathname)}
              >
                <ListItemIcon sx={{ color: "white" }}>{path.icon}</ListItemIcon>
                <ListItemText primary={path.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{
              mt: 2,
              lineHeight: "20px",
              background: (theme) => theme.global.mainBlue,
              color: "white",
            }}
          >
            Settings
          </ListSubheader>
          <List>
            <ListItem
              button
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    navigate("/login");
                  })
                  .catch((error) => {
                    console.log("error");
                  });
              }}
            >
              <ListItemIcon>
                <SettingsIcon
                  sx={{
                    background: (theme) => theme.global.mainBlue,
                    color: "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Cerrar Sesión" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box
          component="div"
          sx={{
            textAlign: "right",
            "& a": {
              backgroundColor: (theme) => theme.global.mainBlue,
              color: (theme) => theme.global.secondaryBlue,
              textDecoration: "none",
              display: "inline-flex",
              borderRadius: 4,
              py: 1,
              px: 3,
              "&:hover": {
                backgroundColor: (theme) => theme.global.secondaryBlue,
                color: (theme) => theme.global.mainBlue,
              },
            },
          }}
        >
          <Link to="add">
            <AddIcon /> note
          </Link>
        </Box>
        <Box
          component="div"
          sx={{
            textAlign: "right",
          }}
        >
          <Notes />
        </Box>
      </Box>
    </Box>
  );
}

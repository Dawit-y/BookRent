import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import { mainListItems, secondaryListItems } from "../components/listItem";
import bookIcon from "../assets/book-icon.png";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    borderRight: "none",
    backgroundColor: "#171B36",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex", backgroundColor: "grey[900]" }}>
        <CssBaseline />
        <Drawer
          sx={{
            backgroundColor: "#171B36",
            color: "#171B36",
            margin: 1,
            padding: 2,
            borderRadius: 3,
          }}
          variant="permanent"
          open={open}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#171B36",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: 2,
                gap: 1,
              }}
            >
              <Box component="img" src={bookIcon} width={33} height={18} />
              <Typography color="#00ABFF" component="h3" variant="h6">
                Book Rent
              </Typography>
            </Box>
          </Toolbar>
          <Divider />
          <List component="nav" sx={{ backgroundColor: "#171B36" }}>
            {mainListItems}
            <Divider sx={{ my: 1, backgroundColor: "white" }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            padding: 1,
          }}
        >
          <Container disableGutters maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
            <Stack
              direction="row"
              elevate={2}
              sx={{
                // pr: "24px", // keep right padding when drawer closed
                backgroundColor: "#fff",
                padding: 2,
                borderRadius: 3,
                mb: 2,
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1, fontWeight: 600 }}
              >
                Admin Dashboard
              </Typography>
            </Stack>
            <Grid container spacing={2}>
              <Typography variant="h1">Main Content</Typography>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

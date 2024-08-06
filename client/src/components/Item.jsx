import { styled } from "@mui/system";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

export const CustomListItemButton = styled(ListItemButton)({
  color: "white",
  "&:hover": {
    backgroundColor: "#00ABFF",
    borderRadius: 5,
  },
});

// Create a styled ListItemIcon
export const CustomListItemIcon = styled(ListItemIcon)({
  color: "white",
});

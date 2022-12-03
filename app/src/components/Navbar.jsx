import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Pets } from "@mui/icons-material";
import Mail from "@mui/icons-material/Mail";
import Notification from "@mui/icons-material/Notifications";
import React, { useState } from "react";

const StyleTdToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyleTdToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Be Social
        </Typography>

        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notification />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: 30, height: 30 }}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant="span">Rajesh</Typography>
        </UserBox>
      </StyleTdToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

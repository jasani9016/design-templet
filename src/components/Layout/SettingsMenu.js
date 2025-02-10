import React, { useContext } from "react";
import {
  MenuItem,
  Menu,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ColorModeContext } from "../../App";
import CustomSwitch from "../CustomSwitch/CustomSwitch";

const SettingsMenu = ({ anchorEl, open, handleClose }) => {
  const { logOut } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();
  const colorMode = useContext(ColorModeContext);

  const handleRouting = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <React.Fragment>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleRouting("/thrifty-wallet/FAQ")}>
          <Typography variant="caption">FAQ</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleRouting("/thrifty-wallet/about")}>
          <Typography variant="caption">About Us</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleRouting("/thrifty-wallet/privacy-policy")}
        >
          <Typography variant="caption">Privacy Policy</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleRouting("/thrifty-wallet/terms-and-condition")}
        >
          <Typography variant="caption">Terms & Condition</Typography>
        </MenuItem>
        <MenuItem onClick={logOut}>
          <Typography variant="caption" color="error">
            Logout
          </Typography>
        </MenuItem>
        {isMobile && (
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {theme.palette.mode === "dark" && (
              <CustomSwitch
                defaultChecked
                onChange={colorMode.toggleColorMode}
              />
            )}
            {theme.palette.mode === "light" && (
              <CustomSwitch onChange={colorMode.toggleColorMode} />
            )}
          </MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
};

export default SettingsMenu;

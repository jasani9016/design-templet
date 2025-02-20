import React, { useState } from "react";
import {
  Modal,
  Divider,
  Zoom,
  Tooltip,
  InputAdornment,
  Typography,
  useTheme,
  IconButton,
  Button,
  Input,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LightUIButtonPrimary } from "../../../../Utilities/LightUIButtons";

// Styles
import styles from "../Account.module.css";

// Logout authentication
import useAuth from "../../../../hooks/useAuth";

const ChangePasswordModal = ({ open, handleClose }) => {
  const [passError, setPassError] = useState("");
  const [userPassword, setUserPassword] = useState({});
  const [showPasswordNew, setShowPasswordNew] = useState(false);
  const [showPasswordCurrent, setShowPasswordCurrent] = useState(false);
  const [showPasswordConfirmed, setShowPasswordConfirmed] = useState(false);

  const theme = useTheme();
  const { logOut } = useAuth();

  const handleChangePassword = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newUserPassword = { ...userPassword };
    newUserPassword[name] = value;
    setUserPassword(newUserPassword);
  };

  const handleSubmitUserPassword = (e) => {
    e.preventDefault();

    if (userPassword?.passwordNew !== userPassword?.passwordNewConfirmed) {
      setPassError("Password doesn't match!");
    } else if (!userPassword.passwordNew) {
      setPassError("You can't save unless you enter a new password");
    } else {
      setPassError("");
      setUserPassword({});
      handleClose();
      logOut();
    }
  };

  return (
    <Modal
      open={open}
      keepMounted
      disableAutoFocus
      disableEnforceFocus
      onClose={handleClose}
    >
      <Box
        bgcolor="background.paper"
        className={styles.changePasswordModalBody}
      >
        <Box className={styles.modalTopBar}>
          <Typography variant="h6" component="h2">
            Change Password
          </Typography>
          <IconButton color="secondary" onClick={handleClose}>
            <Tooltip
              placement="right"
              title="Close"
              TransitionComponent={Zoom}
            >
              <CloseIcon fontSize="medium" />
            </Tooltip>
          </IconButton>
        </Box>
        <Divider />
        <Box
          component="form"
          onSubmit={handleSubmitUserPassword}
          className={styles.changePasswordModalContentBox}
        >
          <Stack spacing={1} mb={2}>
            <Typography
              variant="body2"
              color={
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "common.black"
              }
            >
              Current Password
            </Typography>
            <Input
              disableUnderline
              className={styles.inputField}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPasswordCurrent(!showPasswordCurrent)}
                  >
                    {showPasswordCurrent ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              name="passwordOld"
              variant="filled"
              color="secondary"
              size="small"
              type={showPasswordCurrent ? "text" : "password"}
              onChange={handleChangePassword}
            />
          </Stack>
          <Stack spacing={1} mb={2}>
            <Typography
              variant="body2"
              color={
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "common.black"
              }
            >
              New Password
            </Typography>
            <Input
              disableUnderline
              className={styles.inputField}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPasswordNew(!showPasswordNew)}
                  >
                    {showPasswordNew ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              name="passwordNew"
              variant="outlined"
              color="secondary"
              size="small"
              type={showPasswordNew ? "text" : "password"}
              onChange={handleChangePassword}
            />
          </Stack>
          <Stack spacing={1} mb={2}>
            <Typography
              variant="body2"
              color={
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "common.black"
              }
            >
              Confirm Password
            </Typography>
            <Input
              disableUnderline
              className={styles.inputField}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPasswordConfirmed(!showPasswordConfirmed)
                    }
                  >
                    {showPasswordConfirmed ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              error={passError ? true : false}
              name="passwordNewConfirmed"
              variant="outlined"
              color="secondary"
              size="small"
              type={showPasswordConfirmed ? "text" : "password"}
              onChange={handleChangePassword}
            />
            <Typography variant="caption" color="error">
              {passError && passError}
            </Typography>
          </Stack>
          {theme.palette.mode === "dark" ? (
            <Button 
              fullWidth
              type="submit" 
              color="primary"
              variant="contained" 
             >
              Save
            </Button>
          ) : (
            <LightUIButtonPrimary fullWidth type="submit" >
              Save
            </LightUIButtonPrimary>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ChangePasswordModal;

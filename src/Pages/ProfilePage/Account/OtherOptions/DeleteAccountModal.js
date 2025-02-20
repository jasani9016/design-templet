import React from "react";
import {
  Modal,
  Divider,
  IconButton,
  Zoom,
  useTheme,
  Tooltip,
  Button,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

// Styles
import styles from "../Account.module.css";

// Authentication
import { useNavigate } from "react-router-dom";
import { LightUIButtonPrimary } from "../../../../Utilities/LightUIButtons";

const DeleteAccountModal = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Modal
      open={open}
      keepMounted
      disableAutoFocus
      disableEnforceFocus
      onClose={handleClose}
    >
      <Box bgcolor="background.paper" className={styles.deleteAccountModalBody}>
        <Box className={styles.modalTopBar}>
          <Typography variant="h6" component="h2">
            Delete Account
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
        <Box className={styles.deleteAccountModalContentBox}>
          <Typography
            mb={3}
            lineHeight={2}
            variant="body2"
            color="secondary"
            textAlign="center"
          >
            Are you sure you want to delete your account? Once deleted, it can't be recovered again.
          </Typography>
        </Box>
        {theme.palette.mode === "dark" ? (
          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={() => navigate("/registration/sign-up")}
          >
            <Typography
              className={styles.deleteAccountModalButton}
              variant="caption"
              color="common.black"
              fontWeight={700}
            >
              Yes, delete my account!
            </Typography>
          </Button>
        ) : (
          <LightUIButtonPrimary
            fullWidth
            onClick={() => navigate("/registration/sign-up")}
          >
            <Typography
              variant="caption"
              className={styles.deleteAccountModalButton}
              color="common.white"
              fontWeight={700}
            >
              Yes, delete my account!
            </Typography>
          </LightUIButtonPrimary>
        )}
      </Box>
    </Modal>
  );
};

export default DeleteAccountModal;

import React from "react";
import { Typography, Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";

// Styles
import styles from "../Account.module.css";

// Authentication
import { useNavigate } from "react-router-dom";
import { LightUIButtonPrimary } from "../../../../Utilities/LightUIButtons";

const DeleteAccountModalMobile = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      px={2}
      py={2}
      height={"100%"}
      bgcolor="background.paper"
      className={styles.deleteAccountModalBodyMobile}
    >
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
          fullWidth
          color="primary"
          variant="contained"
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
            className={styles.deleteAccountModalButton}
            variant="caption"
            color="common.white"
            fontWeight={700}
          >
            Yes, delete my account!
          </Typography>
        </LightUIButtonPrimary>
      )}
    </Box>
  );
};

export default DeleteAccountModalMobile;

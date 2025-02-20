import React, { Suspense, useEffect, useState } from "react";
import { Box } from "@mui/system";
import styles from "./Account.module.css";
import {
  Snackbar,
  Alert,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import Close from "@mui/icons-material/Close";
import SettingsMenu from "../../../components/Layout/SettingsMenu";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import AuthProgress from "../../../components/AuthProgress/AuthProgress";
import TwoFAPinModal from "../../Registration/TwoFAPage/TwoFAPinModal/TwoFAPinModal";
import { AccountCardSkeletons } from "../../../components/Skeletons/ComponentSkeletons";

// Lazy
const KYCInfo = React.lazy(() => import("./KYCInfo/KYCInfo"));
const BankInfo = React.lazy(() => import("./BankInfo/BankInfo"));
const ProfileInfo = React.lazy(() => import("./ProfileInfo/ProfileInfo"));
const OtherOptions = React.lazy(() => import("./OtherOptions/OtherOptions"));

const Account = () => {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const [openAuthProgressModal, setOpenAuthProgressModal] = useState(false);
  const [showAuthenticationSnackbar, setShowAuthenticationSnackbar] = useState(false);
  const openMenu = Boolean(anchorElMenu);

  // Handler for auth progress
  const handleOpenAuthProgressModal = () => {
    setOpenAuthProgressModal(true);
  };

  const handleCloseAuthProgressModal = () => {
    setOpenAuthProgressModal(false);
  };

  // Handler for authentication successfull
  const handleCloseAuthenticationSnackbar = () => {
    setShowAuthenticationSnackbar(false);
  };


  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  // Close the authorization modal
  useEffect(() => {
    if (openAuthProgressModal) {
      const closeTheAuthorization = setTimeout(() => {
        setOpenAuthProgressModal(false);
        setShowAuthenticationSnackbar(true);
      }, 5000);

      return () => clearTimeout(closeTheAuthorization);
    }
  }, [openAuthProgressModal]);

  return (
    <Box className={styles.mainBox}>
      <Snackbar
        anchorOrigin={
          !isMobile
            ? { vertical: "top", horizontal: "right" }
            : { vertical: "bottom", horizontal: "center" }
        }
        autoHideDuration={3000}
        open={showAuthenticationSnackbar}
        onClose={handleCloseAuthenticationSnackbar}
      >
        <Alert
          action={
            <IconButton
              onClick={handleCloseAuthenticationSnackbar}
              sx={{ mt: -0.5 }}
            >
              <Close sx={{ fontSize: "1.5rem" }} />
            </IconButton>
          }
          icon={<CheckCircleOutline sx={{ fontSize: "1.5rem" }} />}
          sx={!isMobile ? { fontSize: "1rem" } : { width: "100%" }}
          severity="success"
          onClose={handleCloseAuthenticationSnackbar}
        >
          Authentication Successfull!
        </Alert>
      </Snackbar>
      <AuthProgress
        open={openAuthProgressModal}
        onClose={handleCloseAuthProgressModal}
      />
      <TwoFAPinModal
        open={
          false
        }
        openAuthorizationModal={handleOpenAuthProgressModal}
      />
      <Box >
        <Suspense
          fallback={<AccountCardSkeletons width={!isMobile ? "58%" : "100%"} />}
        >
          <ProfileInfo handleClickMenu={handleClickMenu} />
        </Suspense>
      </Box>
      <Divider />
      <Box>
        <Suspense
          fallback={<AccountCardSkeletons width={!isMobile ? "58%" : "100%"} />}
        >
          <BankInfo handleClickMenu={handleClickMenu} />
        </Suspense>
      </Box>
      <Divider />
      <Box>
        <Suspense
          fallback={<AccountCardSkeletons width={!isMobile ? "58%" : "100%"} />}
        >
          <KYCInfo handleClickMenu={handleClickMenu} />
        </Suspense>
      </Box>
      <Divider />
      <Box>
        <Suspense
          fallback={<AccountCardSkeletons width={!isMobile ? "58%" : "100%"} />}
        >
          <OtherOptions handleClickMenu={handleClickMenu} />
        </Suspense>
      </Box>
      {isMobile && (
        <Box>
          <SettingsMenu
            open={openMenu}
            anchorEl={anchorElMenu}
            handleClose={handleCloseMenu}
          />
        </Box>
      )}
    </Box>
  );
};

export default Account;

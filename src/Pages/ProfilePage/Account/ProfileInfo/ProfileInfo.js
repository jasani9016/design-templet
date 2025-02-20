import React, { Suspense, useState } from "react";
import { Box } from "@mui/system";
import {
  Grid,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import UserProfileI from "../../../../assets/Account/userProfileI.svg";
import ComponentLoader from "../../../../components/ProgressLoader/ComponentLoader";
import MobileNavDrawer from "../../../../components/Layout/MobileNavDrawer";
import styles from "../Account.module.css";
import { ModalSkeletons } from "../../../../components/Skeletons/ComponentSkeletons";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
// Lazy Image Component
const LazyImageComponent = React.lazy(() => import("../../../../components/LazyImageComponent/LazyImageComponent"));
const ProfileInfoModal = React.lazy(() => import("../ProfileInfo/ProfileInfoModal/ProfileInfoModal"));
const ProfileInfoModalMobile = React.lazy(() => import("../ProfileInfo/ProfileInfoModal/ProfileInfoModalMobile"));

const ProfileInfo = ({ handleClickMenu }) => {

  // Editing Personal Info
  const [isEditing, setIsEditing] = useState(false);
  const [userAvatar, setUserAvatar] = useState(null);
  const [profileInformation, setProfileInformation] = useState({});
  const [openProfileInfoModal, setOpenProfileInfoModal] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setOpenProfileInfoModal(false);
  };

  const handleImageUpload = (e) => {
    setUserAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const handleProfileInformationChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newProfileInformation = { ...profileInformation };
    newProfileInformation[field] = value;
    setProfileInformation(newProfileInformation);
  };

  // Modal
  const handleOpenProfileInfoModal = () => {
    setOpenProfileInfoModal(true);
  };
  const handleCloseProfileInfoModal = () => {
    setOpenProfileInfoModal(false);
  };

  // Drawer
  const handleProfileInfoDrawer = () => {
    setOpenProfileInfoModal(!openProfileInfoModal);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Grid container columns={{ xs: 1, sm: 12, md: 12 }}>
        <Grid item xs={12} sm={12} md={12}>
          <Box className={styles.profileInfo}>
            {/* Header */}
            <Box className={styles.infoContentTitleBox}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant={!isMobile ? "h6" : "subtitle1"}
                  color="secondary"
                >
                  Personal Info
                </Typography>
                <Box
                  onClick={handleOpenProfileInfoModal}
                  p={"2px"}
                  bgcolor={
                    theme.palette.mode === "dark"
                      ? theme.palette.background.paper
                      : "rgba(234, 234,234, 0.3)"
                  }
                  borderRadius="2px"
                >
                  <IconButton
                    size={isMobile ? "small" : "medium"}
                    color="secondary"
                  >
                    <ModeEditIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Stack>
            </Box>
            <Paper variant="outlined">
              {/* Photo */}
              <Box
                bgcolor={theme.palette.background.default}
                className={styles.infoContentBox}
              >
                <Box>
                    <Typography
                      variant={!isMobile ? "body1" : "body2"}
                      color="secondary"
                    >
                      Photo
                    </Typography>
                </Box>
                <Box>
                  {userAvatar ? (
                    <Suspense
                      fallback={
                        <Skeleton
                          width={40}
                          height={40}
                          animation="wave"
                          variant="circular"
                        />
                      }
                    >
                      <LazyImageComponent
                        src={userAvatar}
                        className={styles.avatarImage}
                      />
                    </Suspense>
                  ) : (
                    <Suspense
                      fallback={
                        <Skeleton
                          width={40}
                          height={40}
                          animation="wave"
                          variant="circular"
                        />
                      }
                    >
                      <LazyImageComponent
                        className={styles.avatarImage}
                        src={UserProfileI}
                      />
                    </Suspense>
                  )}
                </Box>
              </Box>
              {/* Name */}
              <Box
                bgcolor={theme.palette.background.default}
                className={styles.infoContentBox}
              >
                <Typography
                  variant={!isMobile ? "body1" : "body2"}
                  color="secondary"
                >
                  Name
                </Typography>
                <Typography
                  color="text.secondary"
                  variant={!isMobile ? "body1" : "body2"}
                >
                  {profileInformation.userName ? profileInformation.userName : "John Doe"}
                </Typography>
              </Box>
              {/* Email */}
              <Box
                bgcolor={theme.palette.background.default}
                className={styles.infoContentBox}
              >
                <Typography
                  variant={!isMobile ? "body1" : "body2"}
                  color="secondary"
                >
                  Email
                </Typography>
                <Typography
                  variant={!isMobile ? "body1" : "body2"}
                  color="text.secondary"
                >
                  {profileInformation.userEmail ? profileInformation.userEmail : "john@doe.com"}
                </Typography>
              </Box>
              {/* Phone */}
              <Box
                bgcolor={theme.palette.background.default}
                className={styles.infoContentBox}
              >
                <Typography
                  variant={!isMobile ? "body1" : "body2"}
                  color="secondary"
                >
                  Phone
                </Typography>
                <Typography
                  variant={!isMobile ? "body1" : "body2"}
                  color="text.secondary"
                >
                  {profileInformation.userPhone ? profileInformation.userPhone : "+91 9876543210"}
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
      {isMobile && (
        <MobileNavDrawer
          topBarContent={"Edit Your Info"}
          drawerOpen={openProfileInfoModal}
          handleClickMenu={handleClickMenu}
          handleDrawerToggle={handleProfileInfoDrawer}
        >
          <Suspense fallback={<ComponentLoader />}>
            <ProfileInfoModalMobile
              userAvatar={userAvatar}
              profileInformation={profileInformation}
              setUserAvatar={setUserAvatar}
              handleEdit={handleEdit}
              handleImageUpload={handleImageUpload}
              handleProfileInformationChange={handleProfileInformationChange}
            />
          </Suspense>
        </MobileNavDrawer>
      )}
      {!isMobile && (
        <Suspense fallback={<ModalSkeletons width={500} />}>
          <ProfileInfoModal
            userAvatar={userAvatar}
            open={openProfileInfoModal}
            setUserAvatar={setUserAvatar}
            profileInformation={profileInformation}
            handleEdit={handleEdit}
            handleImageUpload={handleImageUpload}
            handleClose={handleCloseProfileInfoModal}
            handleProfileInformationChange={handleProfileInformationChange}
          />
        </Suspense>
      )}
    </React.Fragment>
  );
};

export default ProfileInfo;

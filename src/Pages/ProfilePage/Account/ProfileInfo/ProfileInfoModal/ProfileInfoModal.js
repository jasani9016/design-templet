import React from "react";
import {
  Button,
  Divider,
  IconButton,
  Modal,
  Stack,
  Tooltip,
  Typography,
  Zoom,
  styled,
  Input,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import styles from "../../Account.module.css";

// Custom Theme
import { useTheme } from "@mui/material/styles";
import { LightUIButtonPrimary } from "../../../../../Utilities/LightUIButtons";

// Custom input style
const ImageInput = styled("input")({
  display: "none",
});

const ProfileInfoModal = ({
  open,
  userAvatar,
  handleEdit,
  handleClose,
  setUserAvatar,
  handleImageUpload,
  profileInformation,
  handleProfileInformationChange,
}) => {
  const theme = useTheme();
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      keepMounted
      disableAutoFocus
      disableEnforceFocus
    >
      <Box bgcolor="background.paper" className={styles.profileInfoModalBody}>
        <Box className={styles.modalTopBar}>
          <Box>
            <Typography
              variant="h5"
              component="h2"
              color="primary"
              fontWeight={600}
              letterSpacing={1}
            >
              Edit Your Info
            </Typography>
            <Typography className={styles.textUnderScore}></Typography>
          </Box>
          <IconButton color="secondary" onClick={handleClose}>
            <Tooltip
              title="Close"
              placement="right"
              TransitionComponent={Zoom}
            >
              <CloseIcon fontSize="medium" />
            </Tooltip>
          </IconButton>
        </Box>
        <Divider />
        <Box className={styles.profileInfoModalContentBox}>
          {/* Photo */}
          <Box className={styles.imageUploadBox}>
            {!userAvatar ? (
              <Box>
                <Box
                  sx={{
                    border: `${
                      theme.palette.mode === "dark"
                        ? "2px dashed #f5f5f5"
                        : "2px dashed #c4c4c4"
                    }`,
                  }}
                  className={styles.imageBox}
                >
                  <Typography
                    sx={{
                      color: `${
                        theme.palette.mode === "dark" ? "#f5f5f5" : "#c4c4c4"
                      }`,
                    }}
                  >
                    <AddPhotoAlternateIcon sx={{ fontSize: "2.5rem" }} />
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box className={styles.uploadedImageBorder}>
                <img src={userAvatar} alt="User Name" />
              </Box>
            )}
            <Box>
              <Typography variant="body2" mb={2}>
                Upload your image
              </Typography>
              <Box>
                {!userAvatar ? (
                  <label htmlFor="icon-button-file-upload">
                    <ImageInput
                      type="file"
                      accept="image/*"
                      id="icon-button-file-upload"
                      onChange={handleImageUpload}
                    />
                    <Tooltip
                      placement="right"
                      title="Upload Image"
                      TransitionComponent={Zoom}
                    >
                      <Button
                        variant="outlined"
                        aria-label="upload picture"
                        component="span"
                      >
                        Upload
                      </Button>
                    </Tooltip>
                  </label>
                ) : (
                  <Tooltip
                    placement="right"
                    title="Remove Image"
                    TransitionComponent={Zoom}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => setUserAvatar(null)}
                    >
                      Remove
                    </Button>
                  </Tooltip>
                )}
              </Box>
            </Box>
          </Box>
          {/* Name */}
          <Stack spacing={1} mb={2}>
            <Typography
              variant="body2"
              color={
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "common.black"
              }
            >
              Name
            </Typography>
            <Input
              disableUnderline
              name="userName"
              className="inputField"
              variant="filled"
              size="small"
              color="secondary"
              value={profileInformation.userName ? profileInformation.userName : ""}
              onChange={handleProfileInformationChange}
            />
          </Stack>
          {/* Email */}
          <Stack spacing={1} mb={2}>
            <Typography
              variant="body2"
              color={
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "common.black"
              }
            >
              Email
            </Typography>
            <Input
              disableUnderline
              name="userEmail"
              className="inputField"
              type="email"
              variant="filled"
              size="small"
              color="secondary"
              value={profileInformation.userEmail ? profileInformation.userEmail : "" }
              onChange={handleProfileInformationChange}
            />
          </Stack>
          {/* Phone */}
          <Stack spacing={1} mb={2}>
            <Typography
              variant="body2"
              color={
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "common.black"
              }
            >
              Phone
            </Typography>
            <Input
              disableUnderline
              name="userPhone"
              className="inputField"
              variant="filled"
              size="small"
              color="secondary"
              type="number"
              value={profileInformation.userPhone ? profileInformation.userPhone : ""}
              onChange={handleProfileInformationChange}
            />
          </Stack>
        </Box>
        {theme.palette.mode === "dark" ? (
          <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={handleEdit}
          >
            Save
          </Button>
        ) : (
          <LightUIButtonPrimary color="primary" fullWidth onClick={handleEdit} >
            Save
          </LightUIButtonPrimary>
        )}
      </Box>
    </Modal>
  );
};

export default ProfileInfoModal;

import React from "react";
import {
  Button,
  Stack,
  Tooltip,
  Typography,
  Zoom,
  styled,
  Input,
} from "@mui/material";
import { Box } from "@mui/system";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

// Styles
import styles from "../../Account.module.css";

// Custom Theme
import { useTheme } from "@mui/material/styles";
import { LightUIButtonPrimary } from "../../../../../Utilities/LightUIButtons";

// Custom input style
const ImageInput = styled("input")({
  display: "none",
});

const ProfileInfoModalMobile = ({
  profileInformation,
  userAvatar,
  setUserAvatar,
  handleEdit,
  handleImageUpload,
  handleProfileInformationChange,
}) => {
  const theme = useTheme();
  return (
    <Box
      px={2}
      height={"100%"}
      bgcolor="background.paper"
      className={styles.profileInfoModalBodyMobile}
    >
      <Box>
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
                  <AddPhotoAlternateIcon sx={{ fontSize: "32px" }} />
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
                    title="Upload Photo"
                    TransitionComponent={Zoom}
                  >
                    <Button
                      component="span"
                      variant="outlined"
                      aria-label="upload picture"
                    >
                      Upload
                    </Button>
                  </Tooltip>
                </label>
              ) : (
                <Tooltip
                  placement="right"
                  title="Remove Photo"
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
              theme.palette.mode === "dark" ? "text.secondary" : "common.black"
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
            onChange={handleProfileInformationChange}
            value={profileInformation.userName ? profileInformation.userName : ""}
          />
        </Stack>
        {/* Email */}
        <Stack spacing={1} mb={2}>
          <Typography
            variant="body2"
            color={theme.palette.mode === "dark" ? "text.secondary" : "common.black"}
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
            value={profileInformation.userEmail ? profileInformation.userEmail : ""}
            onChange={handleProfileInformationChange}
          />
        </Stack>
        {/* Phone */}
        <Stack spacing={1} mb={2}>
          <Typography
            variant="body2"
            color={theme.palette.mode === "dark" ? "text.secondary" : "common.black"}
          >
            Phone
          </Typography>
          <Input
            disableUnderline
            name="userPhone"
            className="inputField"
            type="number"
            variant="filled"
            size="small"
            color="secondary"
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
        <LightUIButtonPrimary onClick={handleEdit} color="primary" fullWidth>
          Save
        </LightUIButtonPrimary>
      )}
    </Box>
  );
};

export default ProfileInfoModalMobile;

import React, { Suspense } from "react";
import {
  Grid,
  Box,
  Chip,
  Button,
  Alert,
  Stack,
  Skeleton,
  Snackbar,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import Close from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import styles from "./RewardTabArea.module.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Bitcoin from "../../../assets/Bitcoin.svg";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import { ModalSkeletons } from "../../../components/Skeletons/ComponentSkeletons";

const LazyImageComponent = React.lazy(() => import("../../../components/LazyImageComponent/LazyImageComponent"));
const ClaimRewardModal = React.lazy(() => import("../ClaimRewardModal/ClaimRewardModal"));

const availableRewardData = [
  {
    id: "1",
    title: "Upto ₹200 off",
    from: "from Amazon Pay",
    points: "70",
    status: "unlocked",
  },
  {
    id: "2",
    title: "Upto ₹200 off",
    from: "from Amazon Pay",
    points: "70",
    status: "unlocked",
  },
  {
    id: "3",
    title: "Upto ₹200 off",
    from: "from Amazon Pay",
    points: "70",
    status: "unlocked",
  },
  {
    id: "4",
    title: "Upto ₹200 off",
    from: "from Amazon Pay",
    points: "70",
    status: "unlocked",
  },
  {
    id: "5",
    title: "Upto ₹200 off",
    from: "from Amazon Pay",
    points: "70",
    status: "locked",
  },
];
const AvailableRewards = () => {
  const [openRewardModal, setOpenRewardModal] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenRewardModal = () => {
    setOpenRewardModal(true);
  };

  const handleCloseRewardModal = () => {
    setOpenRewardModal(false);
  };

  const handleOpenSnackBar = () => {
    setOpenRewardModal(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <React.Fragment>
      <Suspense fallback={<ModalSkeletons />}>
        <ClaimRewardModal
          open={openRewardModal}
          handleClose={handleCloseRewardModal}
          handleOpenSnackBar={handleOpenSnackBar}
        />
      </Suspense>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          action={
            <IconButton onClick={handleCloseSnackbar} sx={{ mt: -0.5 }}>
              <Close sx={{ fontSize: "1.5rem" }} />
            </IconButton>
          }
          severity="success"
          sx={{ fontSize: "1rem" }}
          onClose={handleCloseSnackbar}
          icon={<CheckCircleOutline sx={{ fontSize: "1.5rem" }} />}
        >
          Reward Successfully Claimed!
        </Alert>
      </Snackbar>
      <Box
        px={isTablet ? 3 : ""}
        mt={isTablet ? 2 : ""}
        className={styles.availableReward}
      >
        <Grid
          container
          columns={{ md: 12, xl: 12, sm: 1 }}
          rowGap={{ md: 2, xl: 2, sm: 3 }}
          spacing={{ md: 2, xl: 2, sm: 3 }}
        >
          {availableRewardData.map((data) => (
            <Grid key={data.id} item md={6} xl={4} sm={12}>
              <Box className={styles.availableRewardCard}>
                <Box
                  bgcolor={theme.palette.common.white}
                  className={styles.availableRewardImageArea}
                >
                  <Suspense
                    fallback={
                      <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={"100%"}
                        sx={{
                          background: `${
                            theme.palette.mode === "dark" ? "#111" : "#fff"
                          }`,
                        }}
                      />
                    }
                  >
                    <LazyImageComponent
                      className={
                        data.status === "locked" ? styles.lockedImage : {}
                      }
                      style={{width: '80px'}}
                      src={Bitcoin}
                    />
                  </Suspense>
                  {data.status === "locked" && (
                    <Box className={styles.lockKey}>
                      <LockOutlinedIcon className={styles.lockKeyIcon} />
                    </Box>
                  )}
                </Box>
                <Box
                  bgcolor={theme.palette.background.paper}
                  className={styles.availableRewardContentArea}
                >
                  <Typography variant="h6">{data.title}</Typography>
                  <Typography variant="body2">{data.from}</Typography>
                  <Stack direction="row" justifyContent="flex-end" mt={1}>
                    {data.status === "locked" ? (
                      <Chip
                        label={`${data.points} Points`}
                        className={styles.chipStyleLocked}
                      />
                    ) : (
                      <Chip
                        label={`${data.points} Points`}
                        className={styles.chipStyle}
                      />
                    )}
                  </Stack>
                  <Stack justifyContent="flex-end" alignItems="flex-end">
                    {data.status === "locked" ? (
                      <Button
                        disabled
                        variant="text"
                        color="secondary"
                        className={styles.availableRewardButton}
                      >
                        <Typography variant="body2" color="text.secondary">
                          Claim Reward
                        </Typography>
                      </Button>
                    ) : (
                      <Button
                        onClick={handleOpenRewardModal}
                        variant="text"
                        color="success"
                        className={styles.availableRewardButton}
                      >
                        <Typography variant="body2" color="text.success">
                          Claim Reward
                        </Typography>
                      </Button>
                    )}
                  </Stack>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default AvailableRewards;

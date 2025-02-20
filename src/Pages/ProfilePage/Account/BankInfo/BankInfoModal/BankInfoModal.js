import React from "react";
import {
  Modal,
  Divider,
  IconButton,
  Button,
  Input,
  Typography,
  Stack,
  Zoom,
  Tooltip,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

// Styles
import styles from "../../Account.module.css";
import { LightUIButtonPrimary } from "../../../../../Utilities/LightUIButtons";

const BankInfoModal = ({
  open,
  handleEdit,
  handleClose,
  bankInformation,
  handleBankInformationChange,
}) => {
  const theme = useTheme();

  return (
    <Modal
      open={open}
      keepMounted
      disableAutoFocus
      disableEnforceFocus
      onClose={handleClose}
    >
      <Box bgcolor="background.paper" className={styles.bankInfoModalBody}>
        <Box className={styles.modalTopBar}>
          <Box>
            <Typography
              variant="h5"
              component="h2"
              color="primary"
              fontWeight={600}
              letterSpacing={1}
            >
              Edit Bank Info
            </Typography>
            <Typography className={styles.textUnderScore}></Typography>
          </Box>
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
        <Box className={styles.bankInfoModalContentBox}>
          {/* Bank Name */}
          <Stack spacing={1} mb={2}>
            <Typography
              variant="body2"
              color={
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "common.black"
              }
            >
              Bank Name
            </Typography>
            <Input
              disableUnderline
              name="bankName"
              className="inputField"
              variant="filled"
              size="small"
              color="secondary"
              value={bankInformation.bankName ? bankInformation.bankName : ""}
              onChange={handleBankInformationChange}
            />
          </Stack>
          {/* IFSC */}
          <Stack spacing={1} mb={2}>
            <Typography
              variant="body2"
              color={
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "common.black"
              }
            >
              IFSC
            </Typography>
            <Input
              disableUnderline
              name="bankIFSC"
              className="inputField"
              variant="filled"
              size="small"
              color="secondary"
              value={bankInformation.bankIFSC ? bankInformation.bankIFSC : ""}
              onChange={handleBankInformationChange}
            />
          </Stack>
          {/* Account Holder */}
          <Stack spacing={1} mb={2}>
            <Typography
              variant="body2"
              color={
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "common.black"
              }
            >
              Account Holder Name
            </Typography>
            <Input
              disableUnderline
              name="bankAccountHolderName"
              className="inputField"
              variant="filled"
              size="small"
              color="secondary"
              value={ bankInformation.bankAccountHolderName ? bankInformation.bankAccountHolderName : "" }
              onChange={handleBankInformationChange}
            />
          </Stack>
          {/* Account Type */}
          <Stack spacing={1} mb={2}>
            <Typography
              variant="body2"
              color={
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "common.black"
              }
            >
              Account Type
            </Typography>
            <Input
              disableUnderline
              name="bankAccountType"
              className="inputField"
              variant="filled"
              size="small"
              color="secondary"
              value={ bankInformation.bankAccountType ? bankInformation.bankAccountType : "" }
              onChange={handleBankInformationChange}
            />
          </Stack>
        </Box>
        {theme.palette.mode === "dark" ? (
          <Button
            onClick={handleEdit}
            color="primary"
            variant="contained"
            fullWidth
          >
            Save
          </Button>
        ) : (
          <LightUIButtonPrimary onClick={handleEdit} color="primary" fullWidth>
            Save
          </LightUIButtonPrimary>
        )}
      </Box>
    </Modal>
  );
};

export default BankInfoModal;

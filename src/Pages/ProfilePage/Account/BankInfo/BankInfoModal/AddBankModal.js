import React from "react";
import {
  Modal,
  Divider,
  Input,
  IconButton,
  useTheme,
  Zoom,
  Stack,
  Typography,
  Button,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

// Styles
import styles from "../../Account.module.css";
import { LightUIButtonPrimary } from "../../../../../Utilities/LightUIButtons";

const AddBankModal = ({
  open,
  handleClose,
  handleAddBankInformationChange,
  addBankInformation,
}) => {
  const theme = useTheme();

  return (
    <Modal
      open={open}
      disableAutoFocus
      disableEnforceFocus
      keepMounted
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
              Add Bank Info
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
              value={addBankInformation.bankName ? addBankInformation.bankName : ""}
              onChange={handleAddBankInformationChange}
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
              size="small"
              color="secondary"
              variant="filled"
              value={addBankInformation.bankIFSC ? addBankInformation.bankIFSC : ""}
              onChange={handleAddBankInformationChange}
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
              value={addBankInformation.bankAccountHolderName ? addBankInformation.bankAccountHolderName : ""}
              onChange={handleAddBankInformationChange}
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
              value={addBankInformation.bankAccountType ? addBankInformation.bankAccountType : "" }
              onChange={handleAddBankInformationChange}
            />
          </Stack>
        </Box>
        {theme.palette.mode === "dark" ? (
          <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={handleClose}
          >
            Save
          </Button>
        ) : (
          <LightUIButtonPrimary color="primary" fullWidth>
            Save
          </LightUIButtonPrimary>
        )}
      </Box>
    </Modal>
  );
};

export default AddBankModal;

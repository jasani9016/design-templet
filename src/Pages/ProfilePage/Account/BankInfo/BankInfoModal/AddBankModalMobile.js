import React from "react";
import { Button, Input, Stack, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

// Styles
import styles from "../../Account.module.css";
import { LightUIButtonPrimary } from "../../../../../Utilities/LightUIButtons";

const AddBankModalMobile = ({
  handleClose,
  addBankInformation,
  handleAddBankInformationChange,
}) => {
  const theme = useTheme();

  return (
    <Box
      px={2}
      py={2}
      height={"100%"}
      bgcolor="background.paper"
      className={styles.bankInfoModalBodyMobile}
    >
      <Box className={styles.bankInfoModalContentBoxMobile}>
        {/* Bank Name */}
        <Stack spacing={1} mb={2}>
          <Typography
            variant="body2"
            color={
              theme.palette.mode === "dark" ? "text.secondary" : "common.black"
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
            value={ addBankInformation.bankName ? addBankInformation.bankName : "" }
            onChange={handleAddBankInformationChange}
          />
        </Stack>
        {/* IFSC */}
        <Stack spacing={1} mb={2}>
          <Typography
            variant="body2"
            color={
              theme.palette.mode === "dark" ? "text.secondary" : "common.black"
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
            value={ addBankInformation.bankIFSC ? addBankInformation.bankIFSC : "" }
            onChange={handleAddBankInformationChange}
          />
        </Stack>
        {/* Account Holder */}
        <Stack spacing={1} mb={2}>
          <Typography
            variant="body2"
            color={
              theme.palette.mode === "dark" ? "text.secondary" : "common.black"
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
            value={ addBankInformation.bankAccountHolderName ? addBankInformation.bankAccountHolderName : "" }
            onChange={handleAddBankInformationChange}
          />
        </Stack>
      </Box>
      {theme.palette.mode === "dark" ? (
        <Button
          fullWidth
          color="primary"
          variant="contained"
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
  );
};

export default AddBankModalMobile;

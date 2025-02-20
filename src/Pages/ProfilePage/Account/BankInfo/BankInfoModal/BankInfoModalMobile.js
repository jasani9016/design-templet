import React from "react";
import { Button, Input, Stack, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

// Styles
import styles from "../../Account.module.css";
import { LightUIButtonPrimary } from "../../../../../Utilities/LightUIButtons";

const BankInfoModalMobile = ({
  handleEdit,
  bankInformation,
  handleBankInformationChange,
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
            value={bankInformation.bankName ? bankInformation.bankName : ""}
            onChange={handleBankInformationChange}
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
            value={bankInformation.bankIFSC ? bankInformation.bankIFSC : ""}
            onChange={handleBankInformationChange}
          />
        </Stack>
        {/* Account Holder */}
        <Stack spacing={1} mb={2}>
          <Typography
            color={
              theme.palette.mode === "dark" ? 
              "text.secondary" :
              "common.black"
            }
            variant="body2"
          >
            Account Holder Name
          </Typography>
          <Input
            className="inputField"
            name="bankAccountHolderName"
            disableUnderline
            variant="filled"
            size="small"
            color="secondary"
            value={ bankInformation.bankAccountHolderName ? bankInformation.bankAccountHolderName : "" }
            onChange={handleBankInformationChange}
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
            Account Type
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
        <LightUIButtonPrimary 
          color="primary"
          fullWidth 
          onClick={handleEdit}
        >
          Save
        </LightUIButtonPrimary>
      )}
    </Box>
  );
};

export default BankInfoModalMobile;

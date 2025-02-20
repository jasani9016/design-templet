import React, { Suspense, useEffect } from "react";
import { Box } from "@mui/system";
import { useMediaQuery, useTheme } from "@mui/material"
import ComponentLoader from "../../components/ProgressLoader/ComponentLoader";
const CryptoWalletTopCards = React.lazy(() => import("../CryptoWallet/CryptoWalletTopCards/CryptoWalletTopCards"));
const CryptoWalletTopCardsMobile = React.lazy(() => import("./CryptoWalletTopCards/CryptoWalletTopCardsMobile"));
const FundsAndTransferArea = React.lazy(() => import("../CryptoWallet/FundsAndTransferArea/FundsAndTransferArea"));
const FundsAndTransferAreaMobile = React.lazy(() => import("../CryptoWallet/FundsAndTransferArea/FundsAndTransferAreaMobile"));

const CryptoWalletInterface = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box px={3}>
        <Suspense fallback={<ComponentLoader />}>
          {!isMobile ? (
            <CryptoWalletTopCards />
          ) : (
            <CryptoWalletTopCardsMobile />
          )}
        </Suspense>
      </Box>
      <Box px={3}>
        <Suspense fallback={<ComponentLoader />}>
          {!isMobile ? (
            <FundsAndTransferArea />
          ) : (
            <FundsAndTransferAreaMobile />
          )}
        </Suspense>
      </Box>
    </>
  );
};

export default CryptoWalletInterface;

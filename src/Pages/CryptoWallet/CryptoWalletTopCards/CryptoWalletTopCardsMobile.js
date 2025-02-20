import React, { Suspense } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import styles from "./DigitalWalletLeftCards.module.css";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LightUIButtonPrimary } from "../../../Utilities/LightUIButtons";
import DigitalWalletCardImg from "../../../assets/DigitalWallet/digitalWalletCartImg.svg";
import DigitalWalletCardImgLight from "../../../assets/DigitalWallet/digitalWalletCartImgLight.svg";
import ComponentLoader from "../../../components/ProgressLoader/ComponentLoader";
import DigitalWalletTotalmgLight from "../../../assets/DigitalWallet/digitalWalletTotalImgLight.svg";
import DigitaltotalFundImg from "../../../assets/DigitalWallet/digitaltotalFundImg.svg";

const LazyImageComponent = React.lazy(() => import("../../../components/LazyImageComponent/LazyImageComponent"));

const CryptoWalletTopCardsMobile = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const onClickBuyDigitalCrypto = () => {
    navigate("/wallets/top-up")
  };

  return (
    <Box mt={1}>
      <Box
        bgcolor={theme.palette.background.paper}
        className={styles.fundCardMobileView}
      >
        <Box>
          <Typography color="secondary" variant="caption">
            Total fund value
          </Typography>
          <Typography variant="h4" className={styles.cardTitleFirstMobile}>
            $50,000
          </Typography>
        </Box>
        <Box className={styles.imgCartContainerMobile}>
          <Suspense fallback={<ComponentLoader />}>
            {theme.palette.mode === "dark" ? (
              <LazyImageComponent
                className={styles.imgMobileCart}
                src={DigitaltotalFundImg}
              />
            ) : (
              <LazyImageComponent
                className={styles.imgMobileCart}
                src={DigitalWalletTotalmgLight}
              />
            )}
          </Suspense>
        </Box>
      </Box>
      <Box
        className={styles.cartBuyContainerBox}
        bgcolor={theme.palette.background.paper}
      >
        <Box>
          <Typography color="secondary" variant="caption">
            Buy Digital Crypto online
          </Typography>
          {theme.palette.mode === "dark" ? (
            <Button
              fullWidth
              sx={{ mt: 4 }}
              color="primary"
              variant="outlined"
              onClick={() => onClickBuyDigitalCrypto()}
            >
              <Typography
                color="primary"
                sx={{ textTransform: "capitalize"}}
                variant="caption"
              >
                Buy Digital Crypto
              </Typography>
            </Button>
          ) : (
            <LightUIButtonPrimary
              color="primary"
              sx={{ mt: 4 }}
              onClick={() => onClickBuyDigitalCrypto()}
              variant="text"
              fullWidth
            >
              <Typography
                color="#ffffff"
                sx={{ textTransform: "capitalize" }}
                variant="caption"
              >
                Buy Digital Crypto
              </Typography>
            </LightUIButtonPrimary>
          )}
        </Box>
        <Box>
          <Suspense fallback={<ComponentLoader />}>
            {theme.palette.mode === "dark" ? (
              <LazyImageComponent
                className={styles.imgMobileCart}
                src={DigitalWalletCardImg}
              />
            ) : (
              <LazyImageComponent
                className={styles.imgMobileCart}
                src={DigitalWalletCardImgLight}
              />
            )}
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default CryptoWalletTopCardsMobile;

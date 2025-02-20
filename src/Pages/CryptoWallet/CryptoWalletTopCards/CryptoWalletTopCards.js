import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import styles from "./DigitalWalletLeftCards.module.css";
import {
  Button,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { LightUIButtonPrimary } from "../../../Utilities/LightUIButtons";
import DigitaltotalFundImg from "../../../assets/DigitalWallet/digitaltotalFundImg.svg";
import DigitalWalletCardImg from "../../../assets/DigitalWallet/digitalWalletCartImg.svg";
import DigitalWalletCardImgLight from "../../../assets/DigitalWallet/digitalWalletCartImgLight.svg";
import DigitalWalletTotalmgLight from "../../../assets/DigitalWallet/digitalWalletTotalImgLight.svg";

const LazyImageComponent = React.lazy(() => import("../../../components/LazyImageComponent/LazyImageComponent"));

const CryptoWalletTopCards = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isTabletMode = useMediaQuery(theme.breakpoints.down("md"));

  const onClickBuyDigitalCrypto = () => {
    navigate("/wallets/top-up")
  };

  return (
    <>
      <Box className={styles.cardBoxContainer} bgcolor={theme.palette.background.card}>
        <Stack
          direction={isTabletMode ? "column" : "row"}
          spacing={6}
          alignItems="stretch"
        >
          <Box>
            <Stack
              bgcolor={theme.palette.background.paper}
              direction="row"
              justifyContent="space-between"
              className={styles.cardStack}
            >
              <Box>
                <Typography
                  color="secondary"
                  variant="body2"
                  sx={{ fontSize: { xs: "12px", sm: "12px", md: "17px" } }}
                >
                  Digital value of your wallet
                </Typography>
                <Typography
                  mt={5}
                  mb={2}
                  variant="h2"
                  className={styles.cardTitleFirst}
                  sx={{ fontSize: { xs: "10px", sm: "24px", md: "24px" } }}
                >
                  $50,000
                </Typography>
              </Box>
              <Box className={styles.cardImageContainer}>
                <Suspense
                  fallback={
                    <Skeleton
                      variant="rectangular"
                      className={styles.cardImageSkeleton}
                      animation="wave"
                    />
                  }
                >
                  {theme.palette.mode === "dark" ? (
                    <LazyImageComponent
                      className={styles.cardRightImage}
                      src={DigitaltotalFundImg}
                    />
                  ) : (
                    <LazyImageComponent
                      className={styles.cardRightImage}
                      src={DigitalWalletTotalmgLight}
                    />
                  )}
                </Suspense>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack
              className={styles.cardStack}
              bgcolor={theme.palette.background.paper}
              justifyContent="space-between"
              direction="row"
            >
              <Box>
                <Typography
                  color="secondary"
                  sx={{ fontSize: { xs: "12px", sm: "12px", md: "17px" } }}
                  variant="body2"
                >
                  Buy Digital Crypto online
                </Typography>
                {theme.palette.mode === "dark" ? (
                  <Box mt={3} className={styles.digitalBuyButton}>
                    <Box
                      bgcolor={theme.palette.background.paper}
                      className={styles.digitalCryptoInnerBox}
                    >
                      <Button
                        onClick={() => onClickBuyDigitalCrypto()}
                        sx={{ py: 1.5 }}
                        color="primary"
                        variant="text"
                        fullWidth
                      >
                        <Typography
                          className={styles.digitalBTNText}
                          color="primary"
                          sx={{
                            fontSize: { xs: "10px", md: "14px" },
                          }}
                          variant="body2"
                        >
                          Buy Digital Crypto
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <LightUIButtonPrimary
                    variant="text"
                    color="primary"
                    sx={{ py: 1.5, mt: 3 }}
                    fullWidth
                    onClick={() => onClickBuyDigitalCrypto()}
                  >
                    <Typography
                      className={styles.digitalBTNText}
                      variant="body2"
                      color="#ffffff"
                      sx={{
                        fontSize: { xs: "10px", md: "14px" },
                        textTransform: "capitalize",
                      }}
                    >
                      Buy Digital Crypto
                    </Typography>
                  </LightUIButtonPrimary>
                )}
              </Box>
              <Box className={styles.cardImageContainer}>
                <Suspense
                  fallback={
                    <Skeleton
                      animation="wave"
                      className={styles.cardImageSkeleton}
                      variant="rectangular"
                    />
                  }
                >
                  {theme.palette.mode === "dark" ? (
                    <LazyImageComponent
                      className={styles.cardRightImage}
                      src={DigitalWalletCardImg}
                    />
                  ) : (
                    <LazyImageComponent
                      className={styles.cardRightImage}
                      src={DigitalWalletCardImgLight}
                    />
                  )}
                </Suspense>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default CryptoWalletTopCards;

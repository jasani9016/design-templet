import React, { createContext, Suspense, useState } from "react";
import firebaseConfig from "./Firebase/firebase.config";
import NoFirebase from "./components/NoFirebase";
import Box from "@mui/system/Box";
import CustomTheme from "./Theme/CustomTheme";
import { ThemeProvider } from "@mui/system";
import Helmet from "react-helmet";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProgressLoader from "./components/ProgressLoader/ProgressLoader";
import AuthProvider from "./contexts/AuthProvider";
import { appTitle, appDescription } from "./Utilities/Customs";
import NavRoutes from "./NavigationRoutes";

const Registration = React.lazy(() => import("./Pages/Registration/Registration"));
const SignUpInterface = React.lazy(() => import("./Pages/Registration/SignUpInterface/SignUpInterface"));
const TwoFAPage = React.lazy(() => import("./Pages/Registration/TwoFAPage/TwoFAPage"));
const TwoFAPin = React.lazy(() =>import("./Pages/Registration/TwoFAPage/TwoFAPin"));
const Login = React.lazy(() => import("./Pages/Login/Login"));
const SignInInterface = React.lazy(() => import("./Pages/Login/SignInInterface/SignInInterface"));
const ForgotPass = React.lazy(() => import("./Pages/Login/ForgotPass/ForgotPass"));
const ResetPass = React.lazy(() => import("./Pages/Login/ResetPass/ResetPass"));
const AccountSetup = React.lazy(() => import("./Pages/AccountSetup/AccountSetup"));
const OTPVerification = React.lazy(() => import("./Pages/Login/OTPVerification/OTPVerification"));
const PrivateRoute = React.lazy(() => import("./Private/PrivateRoute"));
const Wallets = React.lazy(() => import("./Pages/Wallets/Wallets"));
const CryptoWallet = React.lazy(() => import("./Pages/CryptoWallet/CryptoWalletInterface"));
const FiatWallet = React.lazy(() => import("./Pages/FiatWallet/FiatWalletInterface"));
const LoyaltyWallet = React.lazy(() => import("./Pages/LoyaltyWallet/LoyaltyWalletInterface"));
const TopUpPage = React.lazy(() => import("./Pages/TopUpPage/TopUpPage"));
const CoinDetails = React.lazy(() => import("./Pages/CoinDetails/CoinDetails"));
const ProfileInterface = React.lazy(() => import("./Pages/ProfilePage/ProfileInteface"));
const StaticPageInterface = React.lazy(() => import("./Pages/StaticPages/StaticPageInterface"));
const TermsAndCondition = React.lazy(() => import("./Pages/StaticPages/TermsAndCondition"));
const PrivacyPolicy = React.lazy(() => import("./Pages/StaticPages/PrivacyPolicy"));
const About = React.lazy(() => import("./Pages/StaticPages/About"));
const FAQ = React.lazy(() => import("./Pages/StaticPages/FAQ"));
const OnboardingPage = React.lazy(() => import("./Pages/Onboarding/OnboardingPage.js"));
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const title = appTitle();
  const description = appDescription();
  const { theme, colorMode } = CustomTheme();

  const colorModeTheme = localStorage.getItem("colorMode");
  if (!colorModeTheme) {
    if (theme.palette.mode === "dark") {
      localStorage.setItem("colorMode", "dark");
    } else {
      localStorage.setItem("colorMode", "light");
    }
  } else if (colorModeTheme) {
    if (theme.palette.mode === "dark") {  
      localStorage.setItem("colorMode", "dark");
    } else {
      localStorage.setItem("colorMode", "light");
    }
  }

  return (
    <div>
      {firebaseConfig?.apiKey ? (
        <AuthProvider>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <Helmet
                bodyAttributes={
                  theme.palette.mode === "dark"
                    ? { style: "background-color:rgb(208, 220, 243)" }
                    : { style: "background-color: #fbfbfb" }
                }
                title={title ? title : "Thrifty Wallet"}
                description={description ? description : "Thrifty Description"}
                link={[
                  {
                    rel: "icon",
                    type: "image/png",
                    href: "../src/assets/mainLogo.svg",
                    sizes: "16x16",
                  },
                ]}
              />
              <Box bgcolor={theme.palette.background.default} className="App">
                <div className="container">
                  <BrowserRouter>
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <Navigate replace to="/wallets/crypto-wallet" />
                        }
                      />
                      <Route
                        path={NavRoutes.OnboardingPage.path}
                        element={
                          <Suspense fallback={<ProgressLoader />}>
                            <OnboardingPage />
                          </Suspense>
                        }
                      />
                      {/* Registration Page */}
                      <Route
                        path={NavRoutes.Registration.path}
                        element={
                          <Suspense fallback={<ProgressLoader />}>
                            <Registration />
                          </Suspense>
                        }
                      >
                        {/* Sign Up Page */}
                        <Route
                          path={NavRoutes.SignUp.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <SignUpInterface />
                            </Suspense>
                          }
                        />
                        {/* TwoFa Page */}
                        <Route
                          path={NavRoutes.TwoFactorAuth.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <TwoFAPage />
                            </Suspense>
                          }
                        />
                        {/* TwoFa Pin */}
                        <Route
                          path={NavRoutes.TwoFactorPin.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <TwoFAPin />
                            </Suspense>
                          }
                        />
                        {/* Login Page */}
                      </Route>
                      <Route
                        path={NavRoutes.Login.path}
                        element={
                          <Suspense fallback={<ProgressLoader />}>
                            <Login />
                          </Suspense>
                        }
                      >
                        {/* Sign In Page */}
                        <Route
                          path={NavRoutes.SignIn.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <SignInInterface />
                            </Suspense>
                          }
                        />
                        {/* Forgot Pass Page */}
                        <Route
                          path={NavRoutes.ForgotPass.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <ForgotPass />
                            </Suspense>
                          }
                        />
                        {/* Reset Pass Page */}
                        <Route
                          path={NavRoutes.ResetPass.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <ResetPass />
                            </Suspense>
                          }
                        />
                        {/* OTP Verification Page */}
                        <Route
                          path={NavRoutes.OtpVerification.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <OTPVerification />
                            </Suspense>
                          }
                        />
                      </Route>
                      {/* Account Setup Page */}
                      <Route
                        path={NavRoutes.AccountSetup.path}
                        element={
                          <Suspense fallback={<ProgressLoader />}>
                            <PrivateRoute>
                              <AccountSetup />
                            </PrivateRoute>
                          </Suspense>
                        }
                      />
                      {/* Wallets */}
                      <Route
                        path={NavRoutes.Wallets.path}
                        element={
                          <Suspense fallback={<ProgressLoader />}>
                            <PrivateRoute>
                              <Wallets />
                            </PrivateRoute>
                          </Suspense>
                        }
                      >
                        <Route
                          path="/wallets/:coinName"
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <PrivateRoute>
                                <CoinDetails />
                              </PrivateRoute>
                            </Suspense>
                          }
                        />
                        Crypto Wallet
                        <Route
                          path={NavRoutes.CryptoWallet.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <CryptoWallet />
                            </Suspense>
                          }
                        />
                        {/* Top Up */}
                        <Route
                          path={NavRoutes.TopUp.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <TopUpPage />
                            </Suspense>
                          }
                        />
                        {/* Fiat Wallet */}
                        <Route
                          path={NavRoutes.FiatWallet.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <FiatWallet />
                            </Suspense>
                          }
                        />
                        {/* Loyalty Wallet */}
                        <Route
                          path={NavRoutes.LoyaltyWallet.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <LoyaltyWallet />
                            </Suspense>
                          }
                        />
                      </Route>
                      <Route
                        path={NavRoutes.Account.path}
                        element={
                          <Suspense fallback={<ProgressLoader />}>
                            <PrivateRoute>
                              <ProfileInterface />
                            </PrivateRoute>
                          </Suspense>
                        }
                      ></Route>
                      {/* Static Pages */}
                      <Route
                        path={NavRoutes.ThriftyWallet.path}
                        element={
                          <Suspense fallback={<ProgressLoader />}>
                            <StaticPageInterface />
                          </Suspense>
                        }
                      >
                        {/* Terms and Condition */}
                        <Route
                          path={NavRoutes.TermsAndConditions.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <TermsAndCondition />
                            </Suspense>
                          }
                        />
                        {/* Terms and Condition */}
                        <Route
                          path={NavRoutes.PrivacyPolicy.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <PrivacyPolicy />
                            </Suspense>
                          }
                        />
                        {/* About */}
                        <Route
                          path={NavRoutes.AboutPage.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <About />
                            </Suspense>
                          }
                        />
                        {/* FAQ */}
                        <Route
                          path={NavRoutes.FAQ.path}
                          element={
                            <Suspense fallback={<ProgressLoader />}>
                              <FAQ />
                            </Suspense>
                          }
                        />
                      </Route>
                    </Routes>
                  </BrowserRouter>
                </div>
              </Box>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </AuthProvider>
      ) : (
        <NoFirebase />
      )}
    </div>
  );
}

export default App;

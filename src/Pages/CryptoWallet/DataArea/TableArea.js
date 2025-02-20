import React, { Suspense, useEffect, useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import styles from "./TableArea.module.css";
import {
  Skeleton,
  Stack,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Button,
  Typography,
  TablePagination,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/StyledTable/StyledTable";
import { Link, useNavigate } from "react-router-dom";
import { rowsPerPage } from "../../../components/Utils/common";
const LazyImageComponent = React.lazy(() => import("../../../components/LazyImageComponent/LazyImageComponent"));

const headerData = ["Coin", "Price", "Balance", "Value", "Action"];

const TableArea = () => {
  const navigate = useNavigate();
  const [coinAllData, setcoinAllData] = useState([]);
  const [tablePage, setTablePage] = useState(0);

  useEffect(() => {
    axios.get("/CryptoWalletData.json").then((res) => setcoinAllData(res.data));
  }, []);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleChangePage = (event, newPage) => {
    setTablePage(newPage);
  };

  const onClickNavigate = (coinName) => {
    navigate(`/wallets/${coinName}`)
  };

  return (
    <Box className={styles.mainBox}>
      <Box className={!isTablet ? styles.tableAreaContainer : styles.tableAreaTabContainer}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headerData.map((items) => (
                  <StyledTableCell key={items}>{items}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {coinAllData
                .slice(
                  tablePage * rowsPerPage,
                  tablePage * rowsPerPage + rowsPerPage
                )
                .map((cd) => (
                  <StyledTableRow key={cd.id}>
                    <StyledTableCell
                      sx={{ cursor: "pointer" }}
                      scope="row"
                      component="th"
                      onClick={() => onClickNavigate(cd.coinName)}
                    >
                      <Stack direction="row" spacing={3}>
                        {!isTablet && (
                          <Box>
                            <Suspense
                              fallback={
                                <Skeleton
                                  animation="wave"
                                  variant="circular"
                                  width={20}
                                  height={20}
                                />
                              }
                            >
                              <LazyImageComponent
                                style={{ width: "20px", height: "20px" }}
                                src={cd.coinIcon}
                              />
                            </Suspense>
                          </Box>
                        )}
                        <Box mt={-0.5}>{cd.coinName}</Box>
                      </Stack>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      $ {cd.coinPrice}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {cd.coinBTC} {cd.coinCode}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      ${" "}
                      {(
                        parseFloat(cd.coinPrice) * parseFloat(cd.coinBTC)
                      ).toFixed(2)}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Stack direction="row" spacing={2}>
                        <Button
                          disableElevation
                          color="success"
                          className={styles.depositbtnText}
                          variant="text"
                          onClick={() => onClickNavigate(cd.coinName)}
                        >
                          <Typography
                            variant="caption"
                            fontWeight={500}
                            color="text.success"
                          >
                            deposit
                          </Typography>
                        </Button>
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          to={`/wallets/${cd.coinName}`}
                          state={{ isSending: true }}
                        >
                          <Button
                            disableElevation
                            color="error"
                            className={styles.textWithdrowbtn}
                            variant="text"
                          >
                            <Typography
                              variant="caption"
                              fontWeight={500}
                              color="error"
                            >
                              withdraw
                            </Typography>
                          </Button>
                        </Link>
                      </Stack>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={coinAllData.length}
          rowsPerPage={rowsPerPage}
          page={tablePage}
          onPageChange={handleChangePage}
        />
      </Box>
    </Box>
  );
};

export default TableArea;

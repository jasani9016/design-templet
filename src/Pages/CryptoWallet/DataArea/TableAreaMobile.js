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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/StyledTable/StyledTable";
import { Link, useNavigate } from "react-router-dom";
import { rowsPerPage } from "../../../components/Utils/common";
const LazyImageComponent = React.lazy(() => import("../../../components/LazyImageComponent/LazyImageComponent"));

const tableHeader = ["Coin", "Balance", "Action"]

const TableAreaMobile = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [coinData, setCoinData] = useState([]);
  const [tablePerPage, setTablePerPage] = useState(0);

  const handleChangePagination = (event, newPage) => {
    setTablePerPage(newPage);
  };

  useEffect(() => {
    axios.get("/CryptoWalletData.json").then((res) => setCoinData(res.data));
  }, []);

  const onClickNavigate = (coinName) => {
    navigate(`/wallets/${coinName}`)
  };

  return (
    <Box className={styles.mainBox}>
      <Box className={styles.tableAreaContainerMobile}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {tableHeader.map((th) => (
                  <StyledTableCell key={th.name}>
                    <Typography variant="caption">{th.name}</Typography>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {coinData
                .slice(
                  tablePerPage * rowsPerPage,
                  tablePerPage * rowsPerPage + rowsPerPage
                )
                .map((cd) => (
                  <StyledTableRow key={cd.id}>
                    <StyledTableCell
                      onClick={() => onClickNavigate(cd.coinName)}
                      component="th"
                      scope="row"
                      sx={{ cursor: "pointer" }}
                    >
                      <Stack direction="row" spacing={3}>
                        <Box>
                          <Suspense
                            fallback={
                              <Skeleton
                                animation="wave"
                                variant="circular"
                                width={20}
                                height={20}
                                sx={{
                                  backgroundColor: `${
                                    theme.palette.mode === "dark"
                                      ? "#111"
                                      : "#f5f5f5"
                                  }`,
                                }}
                              />
                            }
                          >
                            <LazyImageComponent
                              style={{ width: "20px", height: "20px" }}
                              src={cd.coinIcon}
                            />
                          </Suspense>
                        </Box>
                        <Box mt={-0.5}>
                          <Typography variant="caption">
                            {cd.coinName}
                          </Typography>
                        </Box>
                      </Stack>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography variant="caption">
                        {cd.coinBTC} {cd.coinCode}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Stack direction="row" spacing={2}>
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          to={`/wallets/${cd.coinName}`}
                          state={{ isReceiving: true }}
                        >
                          <Button
                            color="success"
                            size="small"
                            disableElevation
                            className={styles.depositButton}
                            variant="text"
                          >
                            <Typography
                              variant="caption"
                              fontWeight={500}
                              color="text.success"
                            >
                              deposit
                            </Typography>
                          </Button>
                        </Link>
                        <Button
                          size="small"
                          disableElevation
                          color="error"
                          className={styles.withdrawButton}
                          variant="text"
                          onClick={() => onClickNavigate(cd.coinName)}
                        >
                          <Typography
                            variant="caption"
                            fontWeight={500}
                            color="error"
                          >
                            withdraw
                          </Typography>
                        </Button>
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
          count={coinData.length}
          rowsPerPage={rowsPerPage}
          page={tablePerPage}
          onPageChange={handleChangePagination}
        />
      </Box>
    </Box>
  );
};

export default TableAreaMobile;

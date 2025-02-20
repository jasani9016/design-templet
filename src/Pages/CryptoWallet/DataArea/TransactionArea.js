import React, { Suspense, useEffect, useState } from "react";
import {
  Input,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { Box } from "@mui/system";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/StyledTable/StyledTable";
import { useTheme } from "@mui/material/styles";
import BitcoinLogo from "../../../assets/bitCoinIcon.svg";
import styles from "./TableArea.module.css";
import { rowsPerPage } from "../../../components/Utils/common";
const LazyImageComponent = React.lazy(() => import("../../../components/LazyImageComponent/LazyImageComponent"));

const tableHeader = ["Name", "Amount", "Activity", "Address"];

const TransactionArea = () => {
  const theme = useTheme();

  const [tablePerPage, setTablePerPage] = useState(0);
  const [copyText, setCopyText] = useState(false);
  const [transactionAllData, setTransactionAllData] = useState([]);

  useEffect(() => {
    const getTransactionData = () => {
      axios.get("/CryptoWalletTransactionHistoryData.json")
      .then((res) => setTransactionAllData(res.data));
    };

    getTransactionData();
  }, []);

  useEffect(() => {
    if (copyText) {
      const changeStatus = setTimeout(() => {
        setCopyText(false);
      }, 1000);

      return () => clearInterval(changeStatus);
    }
  }, [copyText]);

  const blankRows =
    tablePerPage > 0
      ? Math.max(0, (1 + tablePerPage) * rowsPerPage - transactionAllData.length)
      : 0;

  const handleChangePage = (event, newPage) => {
    setTablePerPage(newPage);
  };

  return (
    <Box>
      <Box>
        <Typography variant="button" color="secondary">
          Transactions
        </Typography>
        <Box mt={3} className={styles.tableArea}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {tableHeader.map((header) => (
                    <StyledTableCell key={header}>{header}</StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {transactionAllData
                  .slice(
                    tablePerPage * rowsPerPage,
                    tablePerPage * rowsPerPage + rowsPerPage
                  )
                  .map((td) => (
                    <StyledTableRow key={td.id}>
                      <StyledTableCell component="th" scope="row">
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
                                src={BitcoinLogo}
                              />
                            </Suspense>
                          </Box>
                          <Box mt={-0.5}>{td.asset}</Box>
                        </Stack>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {td.transactionType === "deposit" ? (
                          <Typography variant="body2" color="text.success">
                            {td.transactionAmount}
                          </Typography>
                        ) : (
                          <Typography variant="body2" color="error">
                            {td.transactionAmount}
                          </Typography>
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Tooltip
                          TransitionComponent={Zoom}
                          placement="bottom-start"
                          title={
                            copyText ? (
                              <Typography
                                variant="caption"
                                color="text.success"
                              >
                                Your Address copied!
                              </Typography>
                            ) : "Copy"
                          }
                        >
                          <Box>
                            <CopyToClipboard
                              text={td.transactionAddress}
                              onCopy={() => setCopyText(true)}
                            >
                              <Input
                                inputProps={{
                                  style: {
                                    fontSize: "14px",
                                    cursor: "pointer",
                                  },
                                }}
                                size="small"
                                fullWidth
                                disableUnderline
                                value={td.transactionAddress}
                                readOnly
                              />
                            </CopyToClipboard>
                          </Box>
                        </Tooltip>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {td.transactionTimeStamp}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                {blankRows > 0 && (
                  <StyledTableRow>
                    <StyledTableCell colSpan={6} />
                  </StyledTableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            rowsPerPageOptions={[]}
            count={transactionAllData.length}
            rowsPerPage={rowsPerPage}
            page={tablePerPage}
            onPageChange={handleChangePage}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionArea;

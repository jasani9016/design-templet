import React from "react";
import {
  TableBody,
  useTheme,
  Table,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/StyledTable/StyledTable";
import styles from "./RewardTabArea.module.css";

const transactionData = [
  {
    id: "1",
    transactionType: "Reward",
    coin: "100",
    transactionId: "98765",
    timeStamp: "Today, 10:30 AM",
  },
  {
    id: "2",
    transactionType: "Redeem",
    coin: "75",
    transactionId: "12345",
    timeStamp: "Yesterday, 04:45 PM",
  },
  {
    id: "3",
    transactionType: "Reward",
    coin: "200",
    transactionId: "55544",
    timeStamp: "2 days ago, 02:15 PM",
  },
  {
    id: "4",
    transactionType: "Redeem",
    coin: "50",
    transactionId: "44433",
    timeStamp: "Today, 01:00 PM",
  },
  {
    id: "5",
    transactionType: "Reward",
    coin: "150",
    transactionId: "99988",
    timeStamp: "3 days ago, 06:20 PM",
  },
  {
    id: "6",
    transactionType: "Redeem",
    coin: "125",
    transactionId: "33322",
    timeStamp: "Yesterday, 11:10 AM",
  },
  {
    id: "7",
    transactionType: "Reward",
    coin: "300",
    transactionId: "22211",
    timeStamp: "Today, 08:50 AM",
  },
  {
    id: "8",
    transactionType: "Redeem",
    coin: "90",
    transactionId: "11100",
    timeStamp: "4 days ago, 09:35 PM",
  },
  {
    id: "9",
    transactionType: "Reward",
    coin: "50",
    transactionId: "77766",
    timeStamp: "Yesterday, 05:25 PM",
  },
  {
    id: "10",
    transactionType: "Reward",
    coin: "175",
    transactionId: "66655",
    timeStamp: "Today, 12:05 PM",
  },
  {
    id: "11",
    transactionType: "Redeem",
    coin: "60",
    transactionId: "55544",
    timeStamp: "5 days ago, 07:15 AM",
  },
];


const tableHeader = [
  {
    name: "Transaction Type",
  },
  {
    name: "Coin",
  },
  {
    name: "Transaction Id",
  },
  {
    name: "Timestamp",
  },
];

const Transaction = () => {
  const [tablePage, setTablePage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChangePage = (newPage) => {
    setTablePage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setTablePage(0);
  };

  return (
    <React.Fragment>
      {!isMobile && (
        <Box className={styles.availableReward}>
          <Typography variant="button" color="secondary">
            Transactions
          </Typography>
          <Box className={styles.tableArea} mt={3}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {tableHeader.map((data) => (
                      <StyledTableCell key={data.name}>{data.name}</StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactionData
                    .slice(
                      tablePage * rowsPerPage,
                      tablePage * rowsPerPage + rowsPerPage
                    )
                    .map((item) => (
                      <StyledTableRow key={item.id}>
                        <StyledTableCell align="left">
                          <Typography
                            variant="body2"
                            color={
                              item.transactionType === "Redeem"
                                ? "error"
                                : "text.success"
                            }
                          >
                            {item.transactionType}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {item.coin}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {item.transactionId}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {item.timeStamp}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={transactionData.length}
              rowsPerPage={rowsPerPage}
              page={tablePage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Box>
      )}
      {isMobile && (
        <Box px={3}>
          <Typography variant="button" color="secondary">
            Transactions
          </Typography>
          <Box className={styles.tableAreaMobile} mt={3}>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {tableHeader.map((data) => (
                      <StyledTableCell key={data.name}>
                        <Typography variant="caption">
                          {data.name.split(" ").slice(0, 1)}
                        </Typography>
                      </StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactionData
                    .slice(
                      tablePage * rowsPerPage,
                      tablePage * rowsPerPage + rowsPerPage
                    )
                    .map((item) => (
                      <StyledTableRow key={item.id}>
                        <StyledTableCell align="left">
                          <Typography
                            variant="caption"
                            color={
                              item.transactionType === "Redeem"
                              ? "error"
                              : "text.success"
                            }
                          >
                            {item.transactionType}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <Typography variant="caption">{item.coin}</Typography>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <Typography variant="caption">
                            {item.transactionId}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <Typography variant="caption">
                            {item.timeStamp}
                          </Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={transactionData.length}
              rowsPerPage={rowsPerPage}
              page={tablePage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default Transaction;

import React, { Suspense, useState } from "react";
import {
  Tab,
  Tabs,
  Typography,
  InputAdornment,
  IconButton,
  Divider,
  Stack,
  Button,
  Input,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import styles from "./FundsAndTransferArea.module.css";
import { useTheme } from "@mui/material/styles";
import TabPanel from "../../../components/TabPanel/TabPanel";
import { DatePickerTextField } from "../../../components/DatePickerTextField/DatePickerTextField";
import { TableSkeleton } from "../../../components/Skeletons/ComponentSkeletons";
const TableArea = React.lazy(() => import("../DataArea/TableArea"));
const TransactionArea = React.lazy(() => import("../DataArea/TransactionArea"));

const FundsAndTransferArea = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [selectTab, setSelectTab] = useState(0);
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [isFocusReadOnly, setIsFocusReadOnly] = useState(true);

  const focusReadOnlyTrue = () => {
    setIsFocusReadOnly(true);
  };

  const changeTab = (e, newValue) => {
    setSelectTab(newValue);
  };

  const focusReadOnlyFalse = () => {
    setIsFocusReadOnly(false);
  };

  return (
    <Box className={styles.fundandtransferContainer}>
      <Typography variant="button" color="secondary">
        Digital Fund and Transaction
      </Typography>
      <Box className={styles.tabContainer}>
        <Tabs
          value={selectTab}
          onChange={changeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Digital Funds" />
          <Tab label="Transaction History" />
        </Tabs>
      </Box>
      <Box>
        <TabPanel value={selectTab} index={0}>
          <Box className={styles.searchArea}>
            <Input
              disableUnderline
              readOnly={isFocusReadOnly}
              color="secondary"
              className="inputField"
              size="small"
              sx={!isTablet ? { width: "30%" } : { width: "100%" }}
              placeholder="Search"
              startAdornment={
                <InputAdornment position="start">
                  <Box className={styles.userSearchBox}>
                    <IconButton edge="start">
                      <SearchIcon color="secondary" />
                    </IconButton>
                  </Box>
                </InputAdornment>
              }
              onFocus={focusReadOnlyFalse}
              onBlur={focusReadOnlyTrue}
            />
          </Box>
          <Divider />
          <Box mt={3}>
            <Suspense fallback={<TableSkeleton />}>
              <TableArea />
            </Suspense>
          </Box>
        </TabPanel>
        <TabPanel value={selectTab} index={1}>
          <Stack
            direction={!isTablet ? "row" : "column"}
            justifyContent={!isTablet ? "space-between" : ""}
            className={styles.filterArea}
          >
            <Box>
              <Input
                placeholder="Transaction Hash or Address"
                disableUnderline
                readOnly={isFocusReadOnly}
                size="small"
                className="inputField"
                sx={!isTablet ? { width: "130%" } : { width: "100%" }}
                startAdornment={
                  <InputAdornment position="start">
                    <Box>
                      <IconButton edge="start">
                        <SearchIcon color="secondary" />
                      </IconButton>
                    </Box>
                  </InputAdornment>
                }
                onFocus={focusReadOnlyFalse}
                onBlur={focusReadOnlyTrue}
              />
            </Box>
            <Box>
              <Stack
                mt={!isTablet ? "" : 3}
                direction="row"
                spacing={4}
                alignItems="center"
                justifyContent={!isTablet ? "flex-end" : "flex-start"}
              >
                <Box className={styles.datePickerArea}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack
                      direction="row"
                      spacing={3}
                      justifyContent={!isTablet ? "flex-end" : "flex-start"}
                      alignItems="stretch"
                    >
                      <DatePicker
                        disableFuture
                        label="From Date"
                        value={selectedFromDate}
                        onChange={(newValue) => setSelectedFromDate(newValue)}
                        renderInput={(params) => (
                          <DatePickerTextField
                            autoComplete="off"
                            sx={!isTablet ? { width: "30%" } : { width: "50%" }}
                            variant="outlined"
                            size="small"
                            color="secondary"
                            className="dateInputField"
                            {...params}
                          />
                        )}
                      />
                      <DatePicker
                        disablePast
                        label="To Date"
                        value={selectedToDate}
                        onChange={(newValue) => setSelectedToDate(newValue)}
                        renderInput={(params) => (
                          <DatePickerTextField
                            size="small"
                            autoComplete="off"
                            variant="outlined"
                            color="secondary"
                            sx={!isTablet ? { width: "30%" } : { width: "50%" }}
                            {...params}
                          />
                        )}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Box>
                <Box>
                  <Button sx={{ py: 1.2 }} variant="outlined" color="primary">
                    Search
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Divider />
          <Box mt={3}>
            <Suspense fallback={<TableSkeleton />}>
              <TransactionArea />
            </Suspense>
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default FundsAndTransferArea;

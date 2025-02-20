import React from "react";
import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "./TimeLineArea.module.css";

const timelineData = [
  {
    number: 101,
    type: "USDT",
    message: "Deposit at least 50 USDT",
  },
  {
    number: 102,
    type: "USDT",
    message: "Deposit at least 100 USDT",
  },
  {
    number: 103,
    type: "BTC",
    message: "Trade a minimum of 0.005 BTC",
  },
  {
    number: 104,
    type: "ETH",
    message: "Trade a minimum of 0.02 ETH",
  },
  {
    number: 105,
    type: "ETH",
    message: "Hold at least 0.05 ETH",
  },
  {
    number: 106,
    type: "BTC",
    message: "Hold at least 0.01 BTC",
  },
];


const TimeLineArea = () => {
  const theme = useTheme();
  return (
    <Box className={styles.mainBox}>
      <Box className={styles.timeLineArea}>
        {timelineData.map((data) => (
          <Box className={styles.timeLineBox} key={data.number}>
            <Box
              bgcolor={theme.palette.mode === "dark" ? "#fff" : "#111"}
              className={styles.timeLineDivider}
            ></Box>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Box
                className={styles.numberArea}
                bgcolor={data.type === "BTC" ? "#6C63FF" : "#F9E006"}
              >
                <Typography color={theme.palette.common.white}>
                  {data.number}
                </Typography>
              </Box>
              <Box className={styles.messageArea}>
                <Typography variant="body1" color="secondary">
                  {data.message}
                </Typography>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TimeLineArea;

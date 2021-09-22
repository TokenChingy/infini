import { Box, Stack, Typography, useTheme } from "@mui/material";

import React from "react";
import UserCenter from "../UserCenter";

export default function Topbar(): JSX.Element {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
      }}
    >
      <Box>
        <Typography variant={"h2"}>Dashboard</Typography>
      </Box>
      <Box>
        <UserCenter />
      </Box>
    </Stack>
  );
}

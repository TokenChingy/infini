import { Box, Stack, useTheme } from "@mui/material";

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
        padding: theme.spacing(2),
      }}
    >
      <Box />
      <Box>
        <UserCenter />
      </Box>
    </Stack>
  );
}

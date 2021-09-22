import { Box, Container, useTheme } from "@mui/material";

import React from "react";
import Sidebar from "../../Components/Sidebar";
import Topbar from "../../Components/Topbar";

interface MainProps {
  children: React.ReactNode;
}

export default function Main(props: MainProps): JSX.Element {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component={"main"}
        sx={{ flexGrow: 1, marginLeft: theme.spacing(6) }}
      >
        <Topbar />
        <Container maxWidth={"lg"}>{props.children}</Container>
      </Box>
    </Box>
  );
}

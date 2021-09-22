import { Box, Container } from "@mui/material";

import React from "react";
import Sidebar from "../../Components/Sidebar";
import Topbar from "../../Components/Topbar";

export default function Dashboard({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component={"main"} sx={{ flexGrow: 1 }}>
        <Topbar />
        <Container maxWidth={"xl"}>{children}</Container>
      </Box>
    </Box>
  );
}

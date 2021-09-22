import { Grid, Stack, Typography, useTheme } from "@mui/material";

import ModuleTile from "../../Components/ModuleTile";
import { NewReleasesSharp } from "@mui/icons-material";
import React from "react";

interface DashboardProps {}

export default function Dashboard(props: DashboardProps): JSX.Element {
  const theme = useTheme();

  console.log({
    fontSize: theme.typography.h2.fontSize,
    lineHeight: theme.typography.h2.lineHeight,
  });

  return (
    <Grid container={true} spacing={2} alignItems={"stretch"}>
      <Grid item={true} xs={12} sm={6} md={4}>
        <ModuleTile
          module={"120 Day Planning"}
          content={[
            {
              display: <Typography variant={"h2"}>0/1</Typography>,
              title: "Inputs Received for Forecasting",
              subheading: "Starting 4 Oct 2021",
            },
            {
              display: (
                <NewReleasesSharp
                  sx={{
                    fontSize: theme.typography.h2.fontSize,
                    lineHeight: theme.typography.h2.lineHeight,
                  }}
                />
              ),
              title: "120 Day Planning Released",
              subheading: "Released 13 Jan 2021",
            },
          ]}
        />
      </Grid>
      <Grid item={true} xs={12} sm={6} md={4}>
        <ModuleTile
          module={"Annual Planning"}
          content={[
            {
              display: <Typography variant={"h2"}>0/2</Typography>,
              title: "ORO Inputs Received",
            },
          ]}
        />
      </Grid>
      <Grid item={true} xs={12} sm={6} md={4}>
        <ModuleTile
          module={"120 Day Planning"}
          content={[
            {
              display: <Typography variant={"h2"}>10</Typography>,
              title: "Unactioned Notices",
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}

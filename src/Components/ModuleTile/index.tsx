import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { ChevronRightSharp } from "@mui/icons-material";
import React from "react";

interface ModuleTileProps {
  module: string;
  content: {
    display: JSX.Element;
    title: string;
    subheading?: string;
    link?: string;
  }[];
}

export default function ModuleTile(props: ModuleTileProps): JSX.Element {
  const theme = useTheme();

  return (
    <Card sx={{ width: "100%", height: "100%" }} variant={"outlined"}>
      <CardHeader
        title={props.module}
        action={
          <IconButton>
            <ChevronRightSharp />
          </IconButton>
        }
        titleTypographyProps={{
          sx: {
            fontSize: theme.typography.pxToRem(16),
          },
        }}
        sx={{
          background: `linear-gradient(to right bottom, ${theme.palette.common.white}, ${theme.palette.grey[100]})`,
        }}
      />
      <Divider />
      <CardContent>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {props.content.map((statistic, index) => {
            return (
              <React.Fragment key={index}>
                <Stack direction={"column"} alignItems={"center"}>
                  <Box>{statistic.display}</Box>
                  <Box
                    sx={{
                      fontSize: theme.typography.pxToRem(20),
                      textAlign: "center",
                    }}
                  >
                    {statistic.title}
                  </Box>
                  {statistic.subheading && (
                    <Box
                      sx={{
                        fontSize: theme.typography.pxToRem(12),
                        textTransform: "uppercase",
                        textAlign: "center",
                        marginTop: theme.spacing(1),
                      }}
                    >
                      {statistic.subheading}
                    </Box>
                  )}
                </Stack>
                {index < props.content.length - 1 && (
                  <Divider
                    orientation={"vertical"}
                    variant={"middle"}
                    flexItem={true}
                  />
                )}
              </React.Fragment>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
}

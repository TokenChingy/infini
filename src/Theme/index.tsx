import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import { getDesignTokens, getThemedComponents } from "./theme";

import React from "react";
import { deepmerge } from "@mui/utils";

export default function Theme({ children }: { children: React.ReactNode }) {
  const mode = useTheme().palette.mode;
  const theme = React.useMemo(() => {
    const designTokens = getDesignTokens(mode);

    let newTheme = createTheme(designTokens);

    newTheme = deepmerge(newTheme, getThemedComponents(newTheme));

    return newTheme;
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

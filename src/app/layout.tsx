"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/components/theme";
import Header from "@/components/header/header";
import { Box, Grid } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "@/components/AuthContext/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta name="description" content="My App Description" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid container direction="column">
              <Box sx={{ flex: 1, padding: 5 }}>{children}</Box>
            </Grid>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

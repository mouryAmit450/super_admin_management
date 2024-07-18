'use client';
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/components/theme";
import Header from "@/components/header/header";
import { Box, Container } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "@/components/AuthContext/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box>
             {children}
          </Box>
        </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

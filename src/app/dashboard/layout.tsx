"use client";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/components/theme";
import Header from "@/components/header/header";
import { Box, Container } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <style>{`
        body, html, #__next {
          height: 100%;
          margin: 0;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1100 }}>
              <Header />
            </Box>
            <Box sx={{ display: "flex", flex: 1, marginTop: "64px" }}>
              <Sidebar />
              <Box sx={{ flex: 1, padding: 5 }}>
                {children}
              </Box>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Footer />
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}

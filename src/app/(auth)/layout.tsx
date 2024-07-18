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
          <Box >
            <Box>
              <Header />
            </Box>
              <Box sx={{ flex: 1, padding: 5,  }}>
                {children}
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

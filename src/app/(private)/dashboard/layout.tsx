import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/components/theme";
import Header from "@/components/header/header";
import { Box } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const token :any =cookies().get('token')
  if(!token.value){
    redirect('/')
  }
  return (
    <html lang="en">
      <head />
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

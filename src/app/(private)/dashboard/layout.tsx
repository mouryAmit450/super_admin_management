import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/components/theme";
import Header from "@/components/header/header";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Sidebar2 from "@/components/sidebar2";
import { colors } from "@/utils/colors";
export default function RootLayout({
  children,title
}: {
  title: string;

  children: React.ReactNode;
}) {

  const token: any = cookies().get('token')
  const type: any = cookies().get('type')
  if (!token?.value) {
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
            <Box sx={{ display: "flex", marginTop: "64px" }}>
              <Box sx={{ width: '20%' }}>{type?.value === '1' ? <Sidebar /> : <Sidebar2 />}</Box>
              <Box sx={{ width: '80%', padding: 5 }}>
                <Card>
                  <CardHeader
                    title={title}
                    sx={{ backgroundColor: colors.primary, color: '#fff'}}
                  />
                  <CardContent>

                    {children}
                  </CardContent>
                </Card>
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

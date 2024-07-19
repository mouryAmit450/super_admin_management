import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/components/theme";
import Header from "@/components/header/header";
import { Box, Grid } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "@/components/AuthContext/AuthContext";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Ensure that the component only renders on the client side
  const token :any =cookies().get('token')
  console.log('------->>>>',token.value)
  if(token?.value){
    redirect('/dashboard')
  } 
  return (
    <html lang="en">
      <head />
      <body>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
              <Header />
              <Box sx={{ flex: 1, padding: 5 }}>
                {children}
              </Box>
              <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

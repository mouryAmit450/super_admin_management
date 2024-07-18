"use client";
import * as React from "react";
import { styled} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Container } from "@mui/material";
import Link from "next/link";
import { upscLogo } from "@/assets/images";
import Image from "next/image";

const HeaderStyle = styled(Box)`
  width: 100%
`;

export default function Header() {
  return (
    <>
      <HeaderStyle>
        <Box
          sx={{
            background: "#2947A3",
            width: "100%",
            padding:'10px'
          }}
        >
          <Container>
            <AppBar
              position="static"
              sx={{
                boxShadow: "none",
                backgroundColor: "#2947A3",
              }}
            >
              <Toolbar
                sx={{
                  pl: `0!important`,
                  pr: `0!important`,
                }}
              >
                <Box
                  sx={{
                    display: { xs: "flex", sm: "flex" },
                    alignItems: "center",
                  }}
                >
                  <Typography
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "block", sm: "block" },
                    }}
                  >
                    {/* <HeaderLogo /> */}
                    <Link href={"/"}>
                      <Image
                        src={upscLogo}
                        alt="LOGO"
                        style={{
                          height: "60px",
                        }}
                        // layout="responsive"
                        // width={100} // Provide a default width
                        // height={100} // Provide a default height
                      />
                    </Link>
                  </Typography>
                  <Typography
                    fontSize={"16px"}
                    sx={{
                      color: "#FFF",
                      textAlign: "left",
                      // -webkit-text-stroke-width: 0.5;
                      // -webkit-text-stroke-color: #FFF;
                      fontFamily: "DevLys 010 Thin",
                      fontSize: { xs: "14px", sm: "22px" },
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "30px" /* 93.75% */,
                      marginLeft: "20px",
                    }}
                    variant="h1"
                  >
                    संघ लोक सेवा आयोग
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FFF",
                        textAlign: "left",
                        fontFamily: "Roboto",
                        fontSize: { xs: "14px", sm: "24px" },
                        fontStyle: "normal",
                        fontWeight: "900",
                        lineHeight: "30px",
                        textTransform: "uppercase",
                      }}
                    >
                      UNION PUBLIC SERVICE COMMISSION
                    </Typography>
                  </Typography>
                </Box>

                <Box sx={{ flexGrow: 1 }} />
               
              </Toolbar>
            </AppBar>
          </Container>
        </Box>
      </HeaderStyle>
    </>
  );
}

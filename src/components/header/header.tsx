"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";
import { upscLogo } from "@/assets/images";

const HeaderWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  background: "#2947A3",
  padding: '10px 2px',
  
  '& .appBar': {
    boxShadow: 'none',
    backgroundColor: '#2947A3',
  },
  '& .toolbar': {
    // paddingLeft: '0!important',
    paddingRight: '0!important',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    paddingLeft: '5px',
  },
  '& .logoBox': {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    paddingLeft: '5px',
  },
  '& .mainTypography': {
    color: '#FFF',
    textAlign: 'left',
    fontFamily: 'DevLys 010 Thin',
    fontSize: theme.typography.pxToRem(22),
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '30px',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(14),
    },
  },
  '& .subTypography': {
    color: '#FFF',
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: theme.typography.pxToRem(24),
    fontStyle: 'normal',
    fontWeight: 900,
    lineHeight: '30px',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(14),
    },
  },
}));

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <AppBar position="static" className="appBar">
          <Toolbar className="toolbar">
            <Box className="logoBox">
              <Link href="/">
                <Image
                  src={upscLogo}
                  alt="LOGO"
                  style={{ height: "60px" }}
                />
              </Link>
              <Typography variant="h1" className="mainTypography">
                संघ लोक सेवा आयोग
                <Typography variant="body2" className="subTypography">
                  UNION PUBLIC SERVICE COMMISSION
                </Typography>
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
      </Container>
    </HeaderWrapper>
  );
}

"use client";
import * as React from "react";
import { styled } from "@mui/system";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { colors } from "@/utils/colors";
import { SidebarData } from "@/types/sidebarType";

const SidebarContainer = styled("div")({
  width: "20%",
  marginTop: "23px",
  marginLeft: "5px",
});

const AccordionStyled = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const AccordionSummaryStyled = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: colors.primary,
  color: theme.palette.primary.contrastText,
}));

const AccordionDetailsStyled = styled(AccordionDetails)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  ".css-xzi2o0-MuiAccordionDetails-root": {
    padding: "4px 8px 0px ",
  },
}));

const NestedItem = styled(Typography)(({ theme }) => ({
  padding: 10,
  backgroundColor: "#eee",
  ".css-xzi2o0-MuiAccordionDetails-root": {
    padding: "4px 8px 0px !important",
  },
}));

const sidebarData = [
  {
    name: "Masters",
    items: [
      { name: "Module", link: "/dashboard/module" },
      { name: "Designation", link: "#" },
      { name: "Roles", link: "#" },
      { name: "Designation Modules", link: "#" },
      { name: "Designation Roles", link: "#" },
      { name: "Location Masters", link: "#" },
    ],
  },
  {
    name: "Users",
    items: [
      { name: "Module", link: "#" },
      { name: "Designation", link: "#" },
    ],
  },
  {
    name: "Reports",
    items: [
      { name: "Module", link: "#" },
      { name: "Designation", link: "#" },
    ],
  },
  {
    name: "Logs",
    items: [
      { name: "Module", link: "#" },
      { name: "Designation", link: "#" },
    ],
  },
];

const Sidebar = () => {
  return (
    <SidebarContainer>
      {sidebarData.map((item, index) => {
        return (
          <AccordionStyled>
            <AccordionSummaryStyled
              expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
            >
              <Typography>{item.name}</Typography>
            </AccordionSummaryStyled>
            {item?.items?.map((route, index) => (
              <AccordionDetailsStyled>
                <Link href={route.link}>
                  <NestedItem>{route.name}</NestedItem>
                </Link>
              </AccordionDetailsStyled>
            ))}
          </AccordionStyled>
        );
      })}

      {/* Repeat similar structure for Accordion 3 to 6 */}
    </SidebarContainer>
  );
};

export default Sidebar;

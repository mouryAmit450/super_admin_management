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

const SidebarWrapper = styled("div")(({ theme }) => ({
  width: "20%",
  marginTop: "23px",
  position: "sticky",
  top: 0,
  height: "calc(100vh - 23px)", 
  // overflowY: "auto",
  backgroundColor: "#fff",
  zIndex: 1000, 
  "& .accordion": {
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  "& .accordionSummary": {
    backgroundColor: colors.primary,
    color: theme.palette.primary.contrastText,
  },
  "& .accordionDetails": {
    display: "flex",
    flexDirection: "column",
    padding: "1px 4px 0px",
  },
  "& .nestedItem": {
    padding: 10,
    textDecoration: "none",
    transition: "background-color 0.3s, color 0.3s", // Smooth color transition
    "&:hover": {
      color: "#2947A3", // Change text color on hover
    },
    "&:active": {
      color: "#333", // Change text color on click
    },
  },
}));

const sidebarData = [
  {
    name: "Masters",
    items: [
      { name: "Department", link: "/dashboard/department" },
      { name: "Designation", link: "/dashboard/designation" },
      { name: "Roles", link: "/dashboard/roles" },
      { name: "Module", link: "/dashboard/module" },
      { name: "Sub Module", link: "/dashboard/sub-module" },
    ],
  },
  {
    name: "Users",
    items: [
      { name: "Add New", link: "/dashboard/add-new" },
      { name: "Role Assignment", link: "/dashboard/role-assignment" },
      { name: "Change Password", link: "/dashboard/change-password" }
    ],
  },
  {
    name: "Reports",
    items: [
      { name: "Candidate Reports", link: "/dashboard/candidate-reports" },
      { name: "Exam Reports", link: "/dashboard/exam-reports" },
      { name: "Soap", link: "/dashboard/soap" },
      { name: "Ora", link: "/dashboard/ora" },
    ],
  },
  {
    name: "Logs",
    items: [
      { name: "Sms", link: "/dashboard/sms" },
      { name: "Email", link: "/dashboard/email" },
      { name: "Bank Payment", link: "/dashboard/bank-payment" },
    ],
  },
];

const Sidebar = () => {
  return (
    <SidebarWrapper>
      {sidebarData.map((item, index) => (
        <Accordion className="accordion" key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
            className="accordionSummary"
          >
            <Typography>{item.name}</Typography>
          </AccordionSummary>
          {item.items.map((route, index) => (
            <AccordionDetails className="accordionDetails" key={index}>
              <Link href={route.link} style={{ textDecoration: "none" }}>
                <Typography className="nestedItem">{route.name}</Typography>
              </Link>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;

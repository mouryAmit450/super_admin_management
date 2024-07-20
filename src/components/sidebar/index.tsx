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
  position: "relative",
  top: 0,
  // height: "100vh",

  height: "calc(100vh - 23px)",
  backgroundColor: "#fff",
  zIndex: 1000,
  overflowY: "auto",
  "& .accordion": {
    boxShadow: "none",
    // "&:not(:last-child)": {
    //   borderBottom: `1px solid ${theme.palette.divider}`,
    // },
  },
  "& .accordionSummary": {
    backgroundColor:'#eaeef5 ',
    color: '#2947A3',
  },
  "& .accordionDetails": {
    display: "flex",
    flexDirection: "column",
    padding: "0 8px",

  },
  "& .nestedItem": {
    padding: "10px 16px",
    textDecoration: "none",
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${theme.palette.divider}`, // Add bottom border

    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      color: "#2947A3",
      backgroundColor:' #eaeef5',
    },
    "&:active": {
      color: "#333",
    },
  },
  "& .subAccordion": {
    width: "100%",
    "& .accordionDetails": {
      paddingLeft: "24px",
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
      

      {  name: "Add New", link: "/dashboard/users" },
      { name: "Role Assignment", link: "/dashboard/role-assignment" },
      { name: "Change Password", link: "/dashboard/change-password" }
    ],
  },
  {
    name: "Reports",
    items: [
      {
        name: "OTR",
        items: [
          { name: "Audit Reports", link: "/dashboard/reports/audit-report" },
          { name: "Candidate Report ", link: "/dashboard/reports/candidate-report" },
        ],
      },
      // {
      //   name: "ORA",
      //   items: [
      //     { name: "ORA Sub Report 1", link: "/dashboard/reports/ora/sub-report-1" },
      //     { name: "ORA Sub Report 2", link: "/dashboard/reports/ora/sub-report-2" },
      //   ],
      // },
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
        <Accordion className="accordion" 
        key={index}
        
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#2947A3' }} />}
            className="accordionSummary"
          >
            <Typography>{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordionDetails">
            {item.items.map((route, subIndex) => {
              if (route.items) {
                return (
                  <Accordion className="subAccordion" key={subIndex}>
                    <AccordionSummary
 expandIcon={<ExpandMoreIcon sx={{ color: "#2947A3" }} />}                    >
                      <Typography>{route.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {route.items.map((subRoute, nestedIndex) => (
                        <Link href={subRoute.link} key={nestedIndex} style={{ textDecoration: "none" }}>
                          <Typography className="nestedItem">{subRoute.name}</Typography>
                        </Link>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                );
              }
              return (
                <Link href={route.link} key={subIndex} style={{ textDecoration: "none" }}>
                  <Typography className="nestedItem">{route.name}</Typography>
                </Link>
              );
            })}
          </AccordionDetails>
        </Accordion>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;

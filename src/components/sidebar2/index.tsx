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

type SidebarItem = {
  name: string;
  link?: string;
  items?: SidebarItem[];
};

const SidebarWrapper = styled("div")(({ theme }) => ({
  width: "20%",
  marginTop: "23px",
  position: "relative",
  top: 0,
  height: "calc(100vh - 23px)",
  backgroundColor: "#fff",
  zIndex: 1000,
  overflowY: "auto",
  "& .accordion": {
    boxShadow: "none",
  },
  "& .accordionSummary": {
    backgroundColor: "#eaeef5",
    color: "#2947A3",
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
    borderBottom: `1px solid ${theme.palette.divider}`,
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      color: "#2947A3",
      backgroundColor: " #eaeef5",
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

const sidebarData: SidebarItem[] = [
  
  {
    name: "Audit Logs",
    items: [
      { name: "Admin Logs", link: "/dashboard/audit-logs/admin-logs" },
      { name: "Candidate Logs", link: "/dashboard/audit-logs/candidate-logs" },
    ],
  },
  {
    name: "Reports",
    items: [
      {
        name: "OTR",
        items: [
          { name: "Detailed Reports", link: "/dashboard/reports/detailed-report" },
          { name: "Summary Reports", link: "/dashboard/reports/summary-report" },
        ],
      },
    ],
  },
];

const Sidebar2 = () => {
  const renderItems = (items: SidebarItem[]) => {
    return items.map((item, index) => {
      if (item.items) {
        return (
          <Accordion className="subAccordion" key={index}>
            {<AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#2947A3" }} />} >
              <Typography>{item.name}</Typography>
            </AccordionSummary>}
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#2947A3" }} />} >
              <Typography>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderItems(item.items)}
            </AccordionDetails>
          </Accordion>
        );
      }
      return (
        <Link href={item.link ?? "#"} key={index} style={{ textDecoration: "none" }}>
          <Typography className="nestedItem">{item.name}</Typography>
        </Link>
      );
    });
  };

  return (
    <SidebarWrapper>
      {sidebarData.map((item, index) => (
        <Accordion className="accordion" key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#2947A3" }} />}
            className="accordionSummary"
          >
            <Typography>{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordionDetails">
            {renderItems(item.items || [])}
          </AccordionDetails>
        </Accordion>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar2;

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
import { Margin } from "@mui/icons-material";

const SidebarWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: "23px",
  position: "relative",
  top: 0,
  height: "calc(100vh - 23px)",
  backgroundColor: "#2947A3",
  zIndex: 1000,
  overflowY: "auto",
  "& .accordion": {
    boxShadow: "none",
    color: "#eaeef5",
    backgroundColor: "#2947A3",
  },
  "& .accordionSummary": {
    backgroundColor: "#223E92",
    color: "#eaeef5",
    borderRadius: "4px",
    "&:hover": {
      color: "#2947A3",
      backgroundColor: " #eaeef5",
    },
  },
  "& .accordionDetails": {
    display: "flex",
    flexDirection: "column",
    padding: "0 8px",
  },
  "& .nestedItem": {
    padding: "10px 16px",
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#425CAB",
    borderBottom: `1px solid ${theme.palette.divider}`,
    borderRadius: "3px",
    marginBottom: "1px",
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

const sidebarData = [
  {
    name: "Dashboard",
    link: "/",
  },
  {
    name: "Audit Logs",
    items: [
      { name: "Admin Logs", link: "/dashboard/reports/audit-report" },
      {
        name: "Candidate Logs ",
        link: "/dashboard/reports/candidate-report",
      },
    ],
  },
  {
    name: "Reports",
    items: [
      {
        name: "Detailed Reports",
        link: "/dashboard/reports/detailed-report",
      },
      {
        name: "Summary Report ",
        link: "/dashboard/reports/candidate-report",
      },
    ],
  },
];

const Sidebar2 = () => {
  return (
    <SidebarWrapper>
      {sidebarData.map((item, index) => (
        <Accordion className="accordion" key={index}>
          {item.name !== "Dashboard" ? (
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#2947A3" }} />}
              className="accordionSummary"
            >
              <Typography>{item.name}</Typography>
            </AccordionSummary>
          ) : (
            <Link
              href={item?.link}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <AccordionSummary className="accordionSummary">
                <Typography>{item.name}</Typography>
              </AccordionSummary>
            </Link>
          )}
          <AccordionDetails className="accordionDetails">
            {item.items &&
              item.items.map((route, subIndex) => {
                if (route?.items) {
                  return (
                    <Accordion className="subAccordion" key={subIndex}>
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon sx={{ color: "#2947A3" }} />
                        }
                      >
                        <Typography>{route.name}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {route?.items.map((subRoute, nestedIndex) => (
                          <Link
                            href={subRoute.link}
                            key={nestedIndex}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography className="nestedItem">
                              {subRoute.name}
                            </Typography>
                          </Link>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  );
                }
                return (
                  <Link
                    href={route.link}
                    key={subIndex}
                    style={{ textDecoration: "none" }}
                  >
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

export default Sidebar2;

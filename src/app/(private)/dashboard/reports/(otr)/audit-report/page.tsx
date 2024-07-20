"use client";
import React, { useState, useMemo } from "react";
import { GridColDef } from "@mui/x-data-grid";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
  Grid,
} from "@mui/material";
import MUITable from "@/components/datatable";
import {auditReport} from '../../../../../../service/report'
const Audit =async () => {
  const data = await auditReport()
  console.log('thi is data',data)
  const [searchText, setSearchText] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'otrId', headerName: 'OTR ID', width: 150, headerClassName: "super-app-theme--header" },
    { field: 'candidateNameEn', headerName: 'Candidate Name', width: 200, headerClassName: "super-app-theme--header" },
    { field: 'genderNameEn', headerName: 'Gender', width: 100, headerClassName: "super-app-theme--header" },
    { field: 'candidateDateOfBirth', headerName: 'Date of Birth', width: 150, headerClassName: "super-app-theme--header" },
    { field: 'singleParentNameEn', headerName: 'Single Parent', width: 150, headerClassName: "super-app-theme--header" },
    { field: 'minorityCategoryFlag', headerName: 'Minority Flag', width: 150, headerClassName: "super-app-theme--header" },
    { field: 'familyTypeNameEn', headerName: 'Family Type', width: 150, headerClassName: "super-app-theme--header" },
    { field: 'familyMemberName', headerName: 'Family Member Name', width: 200, headerClassName: "super-app-theme--header" },
    { field: 'familyMemberGenderNameEn', headerName: 'Family Member Gender', width: 200, headerClassName: "super-app-theme--header" },
  ];

  const rows = [
    {
      id: 1,
      otrId: "124000000004071",
      candidateNameEn: "SARVESH GUPTA",
      genderNameEn: "Male",
      candidateDateOfBirth: "1997-01-13",
      singleParentNameEn: "no",
      minorityCategoryFlag: "N",
      familyTypeNameEn: "Father",
      familyMemberName: "KRISHAN GUPTA",
      familyMemberGenderNameEn: "Male",
    },
    {
      id: 2,
      otrId: "124000000004072",
      candidateNameEn: "PRIYA SINGH",
      genderNameEn: "Female",
      candidateDateOfBirth: "1995-06-21",
      singleParentNameEn: "no",
      minorityCategoryFlag: "N",
      familyTypeNameEn: "Mother",
      familyMemberName: "ANITA SINGH",
      familyMemberGenderNameEn: "Female",
    },
    {
      id: 3,
      otrId: "124000000004073",
      candidateNameEn: "ROHAN VERMA",
      genderNameEn: "Male",
      candidateDateOfBirth: "1998-04-11",
      singleParentNameEn: "no",
      minorityCategoryFlag: "N",
      familyTypeNameEn: "Father",
      familyMemberName: "RAKESH VERMA",
      familyMemberGenderNameEn: "Male",
    },
    {
      id: 4,
      otrId: "124000000004074",
      candidateNameEn: "ANJALI SHARMA",
      genderNameEn: "Female",
      candidateDateOfBirth: "1999-09-30",
      singleParentNameEn: "no",
      minorityCategoryFlag: "N",
      familyTypeNameEn: "Mother",
      familyMemberName: "SUNITA SHARMA",
      familyMemberGenderNameEn: "Female",
    },
    {
      id: 5,
      otrId: "124000000004075",
      candidateNameEn: "AMAN KUMAR",
      genderNameEn: "Male",
      candidateDateOfBirth: "1996-12-19",
      singleParentNameEn: "no",
      minorityCategoryFlag: "N",
      familyTypeNameEn: "Father",
      familyMemberName: "RAHUL KUMAR",
      familyMemberGenderNameEn: "Male",
    },
    {
      id: 6,
      otrId: "124000000004076",
      candidateNameEn: "RAHUL MEHTA",
      genderNameEn: "Male",
      candidateDateOfBirth: "1994-05-17",
      singleParentNameEn: "no",
      minorityCategoryFlag: "N",
      familyTypeNameEn: "Father",
      familyMemberName: "MOHAN MEHTA",
      familyMemberGenderNameEn: "Male",
    },
    {
      id: 7,
      otrId: "124000000004077",
      candidateNameEn: "SNEHA PATEL",
      genderNameEn: "Female",
      candidateDateOfBirth: "1993-07-24",
      singleParentNameEn: "no",
      minorityCategoryFlag: "N",
      familyTypeNameEn: "Mother",
      familyMemberName: "MEENA PATEL",
      familyMemberGenderNameEn: "Female",
    },
    {
      id: 8,
      otrId: "124000000004078",
      candidateNameEn: "VIJAY RAO",
      genderNameEn: "Male",
      candidateDateOfBirth: "1992-03-15",
      singleParentNameEn: "no",
      minorityCategoryFlag: "N",
      familyTypeNameEn: "Father",
      familyMemberName: "SUNIL RAO",
      familyMemberGenderNameEn: "Male",
    },
    {
      id: 9,
      otrId: "124000000004079",
      candidateNameEn: "NISHA YADAV",
      genderNameEn: "Female",
      candidateDateOfBirth: "1991-11-05",
      singleParentNameEn: "no",
      minorityCategoryFlag: "N",
      familyTypeNameEn: "Mother",
      familyMemberName: "HEMA YADAV",
      familyMemberGenderNameEn: "Female",
    },
    {
      id: 10,
      otrId: "124000000004080",
      candidateNameEn: "ARJUN CHOPRA",
      genderNameEn: "Male",
      candidateDateOfBirth: "1990-08-29",
      singleParentNameEn: "no",
      minorityCategoryFlag: "N",
      familyTypeNameEn: "Father",
      familyMemberName: "VIKRAM CHOPRA",
      familyMemberGenderNameEn: "Male",
    },
  ];

  const handleSearchChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleFilterChange = (event: any) => {
    setRoleFilter(event.target.value);
  };

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const matchesSearchText = searchText
        ? Object.values(row).some((value) =>
            value.toString().toLowerCase().includes(searchText.toLowerCase())
          )
        : true;
      const matchesRoleFilter = roleFilter
        ? row[roleFilter as keyof typeof row].toString().toLowerCase().includes(searchText.toLowerCase())
        : true;
      return matchesSearchText && matchesRoleFilter;
    });
  }, [rows, searchText, roleFilter]);

  return (
    <Card
      sx={{
        boxShadow:
          "0px 4px 8px rgba(0, 0, 0, 0.05), 0px -4px 8px rgba(0, 0, 0, 0.05)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", mb: 2, padding: "15px 10px 0 10px" }}>
          <FormControl variant="outlined" sx={{ width: "200px" }}>
            <InputLabel>Filter By</InputLabel>
            <Select value={roleFilter} onChange={handleFilterChange} label="Role">
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {columns.map((column) => (
                <MenuItem key={column.field} value={column.field}>
                  {column.headerName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
            sx={{ paddingLeft: "5px" }}
          />
        </Box>
        <Box sx={{ overflow: 'auto', width: '900px' }}>
          <MUITable rows={filteredRows} columns={columns} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Audit;

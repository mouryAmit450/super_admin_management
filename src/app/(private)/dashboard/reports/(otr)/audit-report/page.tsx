"use client";
import React, { useState, useMemo, useEffect } from "react";
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
} from "@mui/material";
import MUITable from "@/components/datatable";
import { auditReport } from "@/services/report";

export default function Audit() {
  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [candidateReport, setCandidateReport] = useState<any[]>([]);

  const handleSearchChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleFilterChange = (event: any) => {
    setRoleFilter(event.target.value);
  };

  const auditReportApi = async () => {
    try {
      let report = await auditReport();
      setCandidateReport(report.data);
      const reportData = report.data;
      setRowsAndColumns(reportData);
    } catch (err) {
      alert("Something went wrong");
    }
  };

  const setRowsAndColumns = (data: any) => {
    const sampleData = data[0];
    if (!sampleData) return;

    const generatedColumns: GridColDef[] = Object.keys(sampleData).map(
      (key) => ({
        field: key,
        headerName: key,
        width: 110,
        headerClassName: "super-app-theme--header",
      })
    );

    const generatedRows = data.map((row: any, index: number) => ({
      id: index,
      ...row,
    }));

    setColumns(generatedColumns);
    setRows(generatedRows);
  };

  useEffect(() => {
    auditReportApi();
  }, []);

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const matchesSearchText = searchText
        ? Object.values(row).some((value) =>
            value?.toString().toLowerCase().includes(searchText.toLowerCase())
          )
        : true;
      const matchesRoleFilter = roleFilter
        ? row[roleFilter as keyof typeof row]
            .toString()
            .toLowerCase()
            .includes(searchText.toLowerCase())
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
            <Select
              value={roleFilter}
              onChange={handleFilterChange}
              label="Role"
            >
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
        <Box sx={{ overflow: "auto", width: "900px" }}>
          <MUITable rows={filteredRows} columns={columns} />
        </Box>
      </CardContent>
    </Card>
  );
}

"use client";
import React, { useState, useMemo, useEffect } from "react";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
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
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MUITable from "@/components/datatable";
import { auditReport } from "@/services/report";
import CustomizedDialogs from "@/components/Modal";

export default function Audit() {
  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  const [roleFilter, setRoleFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [modalData, setModelData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [dobSearch, setDobSearch] = useState<Date | null>(null);
  const [fatherNameSearch, setFatherNameSearch] = useState("");
  const [rollNoSearch, setRollNoSearch] = useState("");
  const [requestedByFilter, setRequestedByFilter] = useState("");
  const [ipSearch, setIpSearch] = useState("");

  const reqWith = [
    {
      value: "",
      label: "",
    },
    {
      value: "Y",
      label: "Aadhar",
    },
    {
      value: "N",
      label: "Non-Aaadhar",
    },
  ];
  const handleEyeButtonClick = (params: GridRenderCellParams) => {
    setOpen(true);
    console.log("Eye button clicked", params.row);
    setModelData(params.row);
  };

  const auditReportApi = async () => {
    try {
      let report = await auditReport();
      const reportData = report.data;

      setRowsAndColumns(reportData);
    } catch (err) {
      // alert("Something went wrong");
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

    // Add the custom column for the eye button
    generatedColumns.push({
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton
          color="primary"
          aria-label="view"
          onClick={() => handleEyeButtonClick(params)}
        >
          <VisibilityIcon />
        </IconButton>
      ),
    });

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
      const matchesDobSearch = dobSearch
        ? row.dob.toString().toLowerCase().includes(dobSearch)
        : true;
      const matchesFatherNameSearch = fatherNameSearch
        ? row.fatherName
            .toString()
            .toLowerCase()
            .includes(fatherNameSearch.toLowerCase())
        : true;
      const matchesRollNoSearch = rollNoSearch
        ? row.rollNo
            .toString()
            .toLowerCase()
            .includes(rollNoSearch.toLowerCase())
        : true;
      const matchesRequestedByFilter = requestedByFilter
        ? row.requestedBy
            .toString()
            .toLowerCase()
            .includes(requestedByFilter.toLowerCase())
        : true;
      const matchesIpSearch = ipSearch
        ? row.ip.toString().toLowerCase().includes(ipSearch.toLowerCase())
        : true;
      return (
        matchesSearchText &&
        matchesDobSearch &&
        matchesFatherNameSearch &&
        matchesRollNoSearch &&
        matchesRequestedByFilter &&
        matchesIpSearch
      );
    });
  }, [
    rows,
    searchText,
    dobSearch,
    fatherNameSearch,
    rollNoSearch,
    requestedByFilter,
    ipSearch,
  ]);

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
        <Box
          sx={{
            display: "flex",
            mb: 2,
            padding: "15px 10px 0 10px",
            justifyContent: "space-between",
          }}
        >
          <Grid container spacing={2}>
            {/* 1. Search by Name */}
            <Grid item xs={4} md={2}>
              <FormControl sx={{ mr: 2 }}>
                <TextField
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  label="Name"
                  variant="standard"
                  size="small"
                />
              </FormControl>
            </Grid>

            <Grid item xs={4} md={2}>
              <FormControl sx={{ mr: 2 }}>
                <TextField
                  value={fatherNameSearch}
                  onChange={(e) => setFatherNameSearch(e.target.value)}
                  label="Father Name"
                  variant="standard"
                  size="small"
                />
              </FormControl>
            </Grid>

            <Grid item xs={4} md={2}>
              <FormControl sx={{ mr: 2 }}>
                <TextField
                  value={rollNoSearch}
                  onChange={(e) => setRollNoSearch(e.target.value)}
                  label="Roll No."
                  variant="standard"
                  size="small"
                />
              </FormControl>
            </Grid>

            <Grid item xs={4} md={2}>
              <FormControl sx={{ mr: 2 }}>
                {/* <Select
              value={requestedByFilter}
              onChange={(e) => setRequestedByFilter(e.target.value)}
              label="Requested By"
              variant="standard"
              size="small"
            >
              <MenuItem value="request_with_adhar">Request with Adhar</MenuItem>
              <MenuItem value="request_with_non_adhar">Request with Non Adhar</MenuItem>
            </Select> */}

                <TextField
                  id="standard-select-currency-native"
                  select
                  label="Request with"
                  defaultValue="EUR"
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Select Request with"
                  variant="standard"
                >
                  {reqWith.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </FormControl>
            </Grid>

            <Grid item xs={4} md={2}>
              <FormControl sx={{ mr: 2 }}>
                <TextField
                  value={ipSearch}
                  onChange={(e) => setIpSearch(e.target.value)}
                  label="IP"
                  variant="standard"
                  size="small"
                />
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ overflow: "auto", maxWidth: "1000px" }}>
          <MUITable rows={filteredRows} columns={columns} />
        </Box>
        {open && (
          <CustomizedDialogs open={open} setOpen={setOpen} data={modalData} />
        )}
      </CardContent>
    </Card>
  );
}

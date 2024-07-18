"use client";
import * as React from "react";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import Form from "@/app/dashboard/users/form";

const columns: GridColDef[] = [
  { field: "user_id", headerName: "User Id", width: 90 },
  { field: "name", headerName: "Name", width: 150, editable: true },
  { field: "designation", headerName: "Designation", width: 150, editable: true },
  {
    field: "module",
    headerName: "Module",
    width: 150,
    editable: true,
    renderCell: (params) => <div>{params.row.module}</div>,
  },
  { field: "role", headerName: "Role", width: 150 },
  { field: "status", headerName: "Status", width: 150, editable: true },
  { field: "creation_date", headerName: "Creation Date", width: 150, editable: true },
  {
    field: "action",
    headerName: "Action",
    renderCell: (params) => (
      <div>
        <IconButton>
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <EditIcon fontSize="small" />
        </IconButton>
      </div>
    ),
  },
];

const rows = [
  { user_id: "1", name: "Snow", designation: "Jon", module: "Module 1", role: "admin", status: "active", creation_date: "21-02-2022" },
  { user_id: "2", name: "Doe", designation: "Jane", module: "Module 2", role: "user", status: "inactive", creation_date: "10-03-2021" },
  { user_id: "3", name: "Smith", designation: "John", module: "Module 3", role: "admin", status: "active", creation_date: "15-05-2020" },
  { user_id: "4", name: "Brown", designation: "Charlie", module: "Module 4", role: "user", status: "active", creation_date: "02-07-2019" },
  { user_id: "5", name: "Johnson", designation: "Emily", module: "Module 5", role: "moderator", status: "inactive", creation_date: "29-08-2018" },
  { user_id: "6", name: "Williams", designation: "Michael", module: "Module 6", role: "user", status: "active", creation_date: "11-09-2017" },
  { user_id: "7", name: "Taylor", designation: "Jessica", module: "Module 7", role: "admin", status: "inactive", creation_date: "18-10-2016" },
  { user_id: "8", name: "Anderson", designation: "David", module: "Module 8", role: "user", status: "active", creation_date: "23-11-2015" },
  { user_id: "9", name: "Thomas", designation: "Daniel", module: "Module 9", role: "moderator", status: "inactive", creation_date: "30-12-2014" },
  { user_id: "10", name: "Jackson", designation: "Sarah", module: "Module 10", role: "user", status: "active", creation_date: "05-01-2013" },
  { user_id: "11", name: "White", designation: "Robert", module: "Module 11", role: "admin", status: "inactive", creation_date: "12-02-2012" },
  { user_id: "12", name: "Harris", designation: "Laura", module: "Module 12", role: "user", status: "active", creation_date: "19-03-2011" },
];

const DataGridDemo = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  // const handleAddUser = (data: any) => {
  //   console.log("User Added", data);
  //   setOpen(false);
  // };

  return (
    <Box sx={{ width: "90%" }}>
      <Button color="primary" onClick={handleClickOpen}>
      <Typography
            
            sx={{
              backgroundColor: "#2947A3",
              color: "white",
              padding: "8px",
              borderRadius: "10px",
            
             
            }}
          >
            Add User
          </Typography>
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.user_id}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        sx={{
          '.css-yrdy0g-MuiDataGrid-columnHeaderRow': {
            backgroundColor: '#0f0f0f ',
          },
        }}
      />
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          <Typography
            variant="h5"
            sx={{
              backgroundColor: "#2947A3",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
             
            }}
          >
            Add User
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Form  />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DataGridDemo;
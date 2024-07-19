"use client";
import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Container,
} from "@mui/material";
import MUITable from "@/components/datatable";
import Form from "./form";
import { NumbersOutlined } from "@mui/icons-material";

function Department() {
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "department_id",
      headerName: "ID",
      width: 70,
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
    {
      field: "department_name",
      headerName: "Department Name",
      width: 150,
      editable: true,
      headerClassName: "super-app-theme--header",
      flex: 2,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      editable: true,
      headerClassName: "super-app-theme--header",
      flex: 2,
    },

    {
      field: "creation_by",
      headerName: "Creation By",

      width: 130,
      editable: true,
      headerClassName: "super-app-theme--header",
      flex: 2,
    },
    {
      field: "Created_DT",
      headerName: "Created Date",
      width: 130,
      editable: true,
      headerClassName: "super-app-theme--header",
      flex: 2,
    },
    {
      field: "Modified_BY",
      headerName: "Modified BY",
      width: 130,
      editable: true,
      headerClassName: "super-app-theme--header",
      flex: 2,
    },
    {
      field: "Modified_DT",
      headerName: "Modified DT",
      width: 130,
      editable: true,
      headerClassName: "super-app-theme--header",
      flex: 2,
    },

    {
      field: "action",
      headerName: "Action",
      width: 120,

      renderCell: (params) => (
        <div>
          <IconButton>
            <VisibilityIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      ),
      editable: true,
      headerClassName: "super-app-theme--header",
      flex: 2,
    },
  ];

  const rows = [
    {
      id: "1",
      department_id: "1",
      department_name: "Snow",
      status: "active",
      Created_DT: "21-02-2022",
      creation_by: "07-08-2024",
      Modified_BY: "21-02-2022",
      Modified_DT: "07-08-2024",
    },
    {
      id: "2",
      department_id: "2",
      department_name: "Doe",
      status: "inactive",
      Created_DT: "21-02-2022",
      creation_by: "07-08-2024",
      Modified_BY: "21-02-2022",
      Modified_DT: "07-08-2024",
      Record_Version: "4",
      Audit_Log_Id: "76ru",
    },
    {
      id: "3",
      department_id: "3",
      department_name: "Smith",

      status: "active",
      Created_DT: "21-02-2022",
      creation_by: "07-08-2024",
      Modified_BY: "21-02-2022",
      Modified_DT: "07-08-2024",
      Record_Version: "4",
      Audit_Log_Id: "76ru",
    },
    {
      id: "4",
      department_id: "4",
      department_name: "Brown",

      status: "active",
      Created_DT: "21-02-2022",
      creation_by: "07-08-2024",
      Modified_BY: "21-02-2022",
      Modified_DT: "07-08-2024",
      Record_Version: "4",
      Audit_Log_Id: "76ru",
    },
    {
      id: "5",
      department_id: "5",
      department_name: "Johnson",

      status: "inactive",
      Created_DT: "21-02-2022",
      creation_by: "07-08-2024",
      Modified_BY: "21-02-2022",
      Modified_DT: "07-08-2024",
      Record_Version: "4",
      Audit_Log_Id: "76ru",
    },
    {
      id: "6",
      department_id: "6",
      department_name: "Williams",

      status: "active",
      Created_DT: "21-02-2022",
      creation_by: "07-08-2024",
      Modified_BY: "21-02-2022",
      Modified_DT: "07-08-2024",
      Record_Version: "4",
      Audit_Log_Id: "76ru",
    },
    {
      id: "7",
      department_id: "7",
      department_name: "Taylor",

      status: "inactive",
      Created_DT: "21-02-2022",
      creation_by: "07-08-2024",
      Modified_BY: "21-02-2022",
      Modified_DT: "07-08-2024",
      Record_Version: "4",
      Audit_Log_Id: "76ru",
    },
    {
      id: "8",
      department_id: "8",
      department_name: "Anderson",

      status: "active",
      Created_DT: "21-02-2022",
      creation_by: "07-08-2024",
      Modified_BY: "21-02-2022",
      Modified_DT: "07-08-2024",
      Record_Version: "4",
      Audit_Log_Id: "76ru",
    },
    {
      id: "9",
      department_id: "9",
      department_name: "Thomas",

      status: "inactive",
      Created_DT: "21-02-2022",
      creation_by: "07-08-2024",
      Modified_BY: "21-02-2022",
      Modified_DT: "07-08-2024",
      Record_Version: "4",
      Audit_Log_Id: "76ru",
    },
    {
      id: "10",
      department_id: "10",
      department_name: "Jackson",

      status: "active",
      Created_DT: "21-02-2022",
      creation_by: "07-08-2024",
      Modified_BY: "21-02-2022",
      Modified_DT: "07-08-2024",
      Record_Version: "4",
      Audit_Log_Id: "76ru",
    },
    {
      id: "11",
      department_id: "11",
      department_name: "White",

      status: "inactive",
      Created_DT: "21-02-2022",
      creation_by: "07-08-2024",
      Modified_BY: "21-02-2022",
      Modified_DT: "07-08-2024",
      Record_Version: "4",
      Audit_Log_Id: "76ru",
    },
    {
      id: "12",
      department_id: "12",
      department_name: "Harris",

      status: "active",
      Created_DT: "21-02-2022",
      creation_by: "07-08-2024",
      Modified_BY: "21-02-2022",
      Modified_DT: "07-08-2024",
      Record_Version: "4",
      Audit_Log_Id: "76ru",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
<Card   
    sx={{
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05), 0px -4px 8px rgba(0, 0, 0, 0.05)',
      borderRadius: '8px',
      overflow: 'hidden', 
    }}>  
<CardContent>
    <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <Typography variant="h6" sx={{fontWeight:'bold'}}> Departments</Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add Department
        </Button>
      </Container>

      <MUITable rows={rows} columns={columns} />
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <Typography
            variant="h5"
            sx={{
              backgroundColor: "#2947A3",
              color: "white",
              padding: "8px",
              borderRadius: "5px",
              justifySelf: "end",
              fontSize:'20px'
            }}
          >
            Add Department
          </Typography>
        </DialogTitle>
        <DialogContent>{<Form />}</DialogContent>
      </Dialog>
      </CardContent>


    </Card>
  );
}

export default Department;

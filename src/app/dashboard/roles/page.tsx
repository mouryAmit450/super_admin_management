"use client";
import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
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
  Container
} from "@mui/material";
import MUITable from "@/components/datatable";
import Form from "./form";
function Roles() {
  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "role_id", headerName: "Role Id", width: 90 },
    {
      field: "role_name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "role_description",
      headerName: "Role Description",
      width: 150,
      editable: true,
    },
    {
      field: "role_shortCode",
      headerName: "Role Short Code",
      width: 80,
      editable: true,
    },

    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "creation_by",
      headerName: "Creation By",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "Created_DT",
      headerName: "Created Date",
      width: 150,
      editable: true,
    },
    {
      field: "Modified_BY",
      headerName: "Modified BY",
      width: 150,
      editable: true,
    },
    {
      field: "Modified_DT",
      headerName: "Modified DT",
      width: 150,
      editable: true,
    },
    {
      field: "Record_Version",
      headerName: "Record Version",
      width: 150,
      editable: true,
    },
    {
      field: "Audit_Log_Id",
      headerName: "Audit Log Id",
      width: 150,
      editable: true,
    },

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
      editable: true,
    },
  ];

  const rows = [
    {
      id: "1",
      role_id: "1",
      role_name: "Deputy Director",
      role_description: "Deputy Director",
      role: "Venue Supervisor",
      role_shortCode: "OTR",
      status: "active",
      Created_DT: "21-02-2022",
      creation_by:'07-08-2024',
      Modified_BY:"21-02-2022",
      Modified_DT:'07-08-2024',
      Record_Version:'4',
      Audit_Log_Id:'76ru',
      
    },
    {
      id: "2",
      role_id: "2",
      role_name: "Deputy Director",
      role_description: "Deputy Director",
      role_shortCode: "OTR",
      role: "Venue Supervisor",
      status: "inactive",
      Created_DT: "21-02-2022",
      creation_by:'07-08-2024',
      Modified_BY:"21-02-2022",
      Modified_DT:'07-08-2024',
      Record_Version:'4',
      Audit_Log_Id:'76ru',
    },
    {
      id: "3",
      role_id: "3",
      role_name: "Deputy Director",
      role_shortCode: "OTR",
      role_description: "Deputy Director",
      status: "active",
      Created_DT: "21-02-2022",
      creation_by:'07-08-2024',
      Modified_BY:"21-02-2022",
      Modified_DT:'07-08-2024',
      Record_Version:'4',
      Audit_Log_Id:'76ru',
    },
    {
      id: "4",
      role_id: "4",
      role_name: "Deputy Director",
      role_shortCode: "OTR",
      role_description: "Deputy Director",
      status: "active",
      Created_DT: "21-02-2022",
      creation_by:'07-08-2024',
      Modified_BY:"21-02-2022",
      Modified_DT:'07-08-2024',
      Record_Version:'4',
      Audit_Log_Id:'76ru',
    },
    {
      id: "5",
      role_id: "5",
      role_name: "Deputy Director",
      role_description: "Deputy Director",
      role_shortCode: "OTR",
      status: "inactive",
      Created_DT: "21-02-2022",
      creation_by:'07-08-2024',
      Modified_BY:"21-02-2022",
      Modified_DT:'07-08-2024',
      Record_Version:'4',
      Audit_Log_Id:'76ru',
    },
    {
      id: "6",
      role_id: "6",
      role_name: "Deputy Director",
      role_description: "Deputy Director",
      role: "Venue Supervisor",
      role_shortCode: "OTR",
      status: "active",
      Created_DT: "21-02-2022",
      creation_by:'07-08-2024',
      Modified_BY:"21-02-2022",
      Modified_DT:'07-08-2024',
      Record_Version:'4',
      Audit_Log_Id:'76ru',
    },
    {
      id: "7",
      role_id: "7",
      role_name: "Deputy Director",
      role_description: "Deputy Director",
      role: "Venue Supervisor",
      role_shortCode: "OTR",
      status: "inactive",
      Created_DT: "21-02-2022",
      creation_by:'07-08-2024',
      Modified_BY:"21-02-2022",
      Modified_DT:'07-08-2024',
      Record_Version:'4',
      Audit_Log_Id:'76ru',
    },
    {
      id: "8",
      role_id: "8",
      role_name: "Deputy Director",
      role_description: "Deputy Director",
      role: "Venue Supervisor",
      role_shortCode: "OTR",
      status: "active",
      Created_DT: "21-02-2022",
      creation_by:'07-08-2024',
      Modified_BY:"21-02-2022",
      Modified_DT:'07-08-2024',
      Record_Version:'4',
      Audit_Log_Id:'76ru',
    },
    {
      id: "9",
      role_id: "9",
      role_name: "Deputy Director",
      role_description: "Deputy Director",
      role: "Venue Supervisor",
      role_shortCode: "OTR",
      status: "inactive",
      Created_DT: "21-02-2022",
      creation_by:'07-08-2024',
      Modified_BY:"21-02-2022",
      Modified_DT:'07-08-2024',
      Record_Version:'4',
      Audit_Log_Id:'76ru',
    },
    {
      id: "10",
      role_id: "10",
      role_name: "Deputy Director",
      role_description: "Deputy Director",
      role: "Venue Supervisor",
      role_shortCode: "OTR",
      status: "active",
      Created_DT: "21-02-2022",
      creation_by:'07-08-2024',
      Modified_BY:"21-02-2022",
      Modified_DT:'07-08-2024',
      Record_Version:'4',
      Audit_Log_Id:'76ru',
    },
    {
      id: "11",
      role_id: "11",
      role_name: "Deputy Director",
      role_description: "Deputy Director",
      role: "Venue Supervisor",
      role_shortCode: "OTR",
      status: "inactive",
      Created_DT: "21-02-2022",
      creation_by:'07-08-2024',
      Modified_BY:"21-02-2022",
      Modified_DT:'07-08-2024',
      Record_Version:'4',
      Audit_Log_Id:'76ru',
    },
    {
      id: "12",
      role_id: "12",
      role_name: "Deputy Director",
      role_description: "Deputy Director",
      role: "Venue Supervisor",
      role_shortCode: "OTR",
      status: "active",
      Created_DT: "21-02-2022",
      creation_by:'07-08-2024',
      Modified_BY:"21-02-2022",
      Modified_DT:'07-08-2024',
      Record_Version:'4',
      Audit_Log_Id:'76ru',
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
    <>
   <Container sx={{display:'flex', justifyContent:"space-between"}}>
      <Typography variant="h6" component="div">
        Heading
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Button
      </Button>
    </Container>
      <MUITable rows={rows} columns={columns} />
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          <Typography
            variant="h5"
            sx={{
              backgroundColor: "#2947A3",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
             justifySelf:'end'
            }}
          >
         Add Roles
          </Typography>
        </DialogTitle>
        <DialogContent>
     {<Form/>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Roles;

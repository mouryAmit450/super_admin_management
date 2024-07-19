"use client";
import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import {
  Typography,
  Container,
} from "@mui/material";
import MUITable from "@/components/datatable";
// import Form from "./form";

function RoleAssignment() {
    const rows = [
        {
            id: '1',
            userRoleMasterId:'1',
            userUuid: 'aa51383e-0359-42ec-ac1a-f3458166b949',
            roleId: 10,
            roleIdNameEn: 'Checker',
            moduleId: 2,
            moduleNameEN: 'SOAP',
            moduleSubId: 4,
            moduleSubNameEn: 'Master Rule',
            isActive: 'Y',
            createdBy: 1,
            createdDt: '19-Jul-2024 15:32',
            modifiedBy: 1,
            modifiedDt: '19-Jul-2024 15:32'
        },
        {
            id: '2',
            userRoleMasterId:'2',
            userUuid: 'aa51383e-0359-42ec-ac1a-985643853',
            roleId: 11,
            roleIdNameEn: 'Approver',
            moduleId: 2,
            moduleNameEN: 'SOAP',
            moduleSubId: 5,
            moduleSubNameEn: 'Candidate Profilling',
            isActive: 'Y',
            createdBy: 1,
            createdDt: '19-Jul-2024 15:32',
            modifiedBy: 1,
            modifiedDt: '19-Jul-2024 15:32'
        }
    ];
    
    // Columns configuration for DataGrid (assuming these are the headers)
    const columns: GridColDef[] = [
        { field: 'userRoleMasterId', headerName: 'User Role Master Id', width: 150 },
        { field: 'userUuid', headerName: 'User Uuid', width: 200 },
        { field: 'roleId', headerName: 'Role Id', width: 120 },
        { field: 'roleIdNameEn', headerName: 'Role Id Name', width: 180 },
        { field: 'moduleId', headerName: 'Module Id', width: 120 },
        { field: 'moduleNameEN', headerName: 'module Name', width: 150 },
        { field: 'moduleSubId', headerName: 'module Sub Id', width: 150 },
        { field: 'moduleSubNameEn', headerName: 'module Sub Name', width: 200 },
        { field: 'isActive', headerName: 'Status', width: 120 },
        { field: 'createdBy', headerName: 'CreatedBy', width: 120 },
        { field: 'createdDt', headerName: 'Created Dt', width: 180 },
        { field: 'modifiedBy', headerName: 'Modified By', width: 120 },
        { field: 'modifiedDt', headerName: 'Modified Dt', width: 180 }
    ]
  
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <Typography variant="h6"> Role Assignment</Typography>
        {/* <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add Submodule
        </Button> */}
      </Container>

      <MUITable rows={rows} columns={columns} />
      {/* <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
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
      </Dialog> */}
    </div>
  );
}

export default RoleAssignment;

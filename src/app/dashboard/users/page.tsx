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
} from "@mui/material";
import MUITable from "@/components/datatable";
import Form from "./form";

function Module() {
    const columns: GridColDef<(typeof rows)[number]>[] = [
        { field: "user_id", headerName: "User Id", width: 90 },
        {
          field: "user_name",
          headerName: "Name",
          width: 150,
          editable: true,
        },
        {
            field: "designation",
            headerName: "Designation",
            width: 150,
            editable: true,
          },
          {
            field: "module",
            headerName: "Module",
            width: 150,
            editable: true,
          },
          {
            field: "role",
            headerName: "role",
            width: 150,
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
          field: "creation_date",
          headerName: "Creation Date",
          type: "number",
          width: 110,
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
          user_id: "1",
          user_name: "Snow",
          designation:'Deputy Director',
          role:'Venue Supervisor',
          module:'OTR',
          status: "active",
          creation_date: "21-02-2022",
        },
        {
          id: "2",
          user_id: "2",
          user_name: "Doe",
          designation:'Deputy Director',
          module:'OTR',
          role:'Venue Supervisor',
          status: "inactive",
          creation_date: "10-03-2021",
        },
        {
          id: "3",
          user_id: "3",
          user_name: "Smith",
          module:'OTR',
          designation:'Deputy Director',
          role:'Venue Supervisor',
          status: "active",
          creation_date: "15-05-2020",
        },
        {
          id: "4",
          user_id: "4",
          user_name: "Brown",
          module:'OTR',
          role:'Venue Supervisor',
          designation:'Deputy Director',
          status: "active",
          creation_date: "02-07-2019",
        },
        {
          id: "5",
          user_id: "5",
          user_name: "Johnson",
          designation:'Deputy Director',
          role:'Venue Supervisor',
          module:'OTR',
          status: "inactive",
          creation_date: "29-08-2018",
        },
        {
          id: "6",
          user_id: "6",
          user_name: "Williams",
          designation:'Deputy Director',
          role:'Venue Supervisor',
          module:'OTR',
          status: "active",
          creation_date: "11-09-2017",
        },
        {
          id: "7",
          user_id: "7",
          user_name: "Taylor",
          designation:'Deputy Director',
          role:'Venue Supervisor',
          module:'OTR',
          status: "inactive",
          creation_date: "18-10-2016",
        },
        {
          id: "8",
          user_id: "8",
          user_name: "Anderson",
          designation:'Deputy Director',
          role:'Venue Supervisor',
          module:'OTR',
          status: "active",
          creation_date: "23-11-2015",
        },
        {
          id: "9",
          user_id: "9",
          user_name: "Thomas",
          designation:'Deputy Director',
          role:'Venue Supervisor',
          module:'OTR',
          status: "inactive",
          creation_date: "30-12-2014",
        },
        {
          id: "10",
          user_id: "10",
          user_name: "Jackson",
          designation:'Deputy Director',
          role:'Venue Supervisor',
          module:'OTR',
          status: "active",
          creation_date: "05-01-2013",
        },
        {
          id: "11",
          user_id: "11",
          user_name: "White",
          designation:'Deputy Director',
          role:'Venue Supervisor',
          module:'OTR',
          status: "inactive",
          creation_date: "12-02-2012",
        },
        {
          id: "12",
          user_id: "12",
          user_name: "Harris",
          designation:'Deputy Director',
          role:'Venue Supervisor',
          module:'OTR',
          status: "active",
          creation_date: "19-03-2011",
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
        <MUITable rows={rows} columns={columns}/>
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
         Add User
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
  
  )
}

export default Module
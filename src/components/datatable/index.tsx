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



export default function MUITable(props: any) {
  const { rows, columns } = props
  return (
    <Box sx={{ width: "90%" }}> 
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
            initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        sx={{
          '.css-yrdy0g-MuiDataGrid-columnHeaderRow': {
            backgroundColor: '#0f0f0f ',
          },
        }}
      />
      
    </Box>
  );
};

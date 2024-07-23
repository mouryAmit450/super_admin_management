"use client";
import * as React from "react";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Box,
} from "@mui/material";

export default function MUITable(props: any) {
  const { rows, columns } = props;
  return (
    <Box
      sx={{
        fontWeight: 'bold',   
        maxWidthwidth: "90%",
        '& .super-app-theme--header': {
          backgroundColor: '#2947A3',
          color:'#fff',
             },
      }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id || row.id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        sx={{minHeight:'400px'}}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

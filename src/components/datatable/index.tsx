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
      minHeight: 500,
      maxWidthwidth: "90%" ,
      '& .super-app-theme--header': {
        backgroundColor: '#bedaf3',
      },
    }}>
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
      />
    </Box>
  );
}

"use client";
import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import MUITable from "@/components/datatable";
import { idID } from "@mui/material/locale";
function Module() {
  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "designation_id", headerName: "Designation Id", width: 90 },
    {
      field: "designation_name",
      headerName: "Designation Name",
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
      designation_id: "1",
      designation_name: "Snow",

      status: "active",
      creation_date: "21-02-2022",
    },
    {
      id: "2",
      designation_id: "2",
      designation_name: "Doe",

      status: "inactive",
      creation_date: "10-03-2021",
    },
    {
      id: "3",
      designation_id: "3",
      designation_name: "Smith",

      status: "active",
      creation_date: "15-05-2020",
    },
    {
      id: "4",
      designation_id: "4",
      designation_name: "Brown",

      status: "active",
      creation_date: "02-07-2019",
    },
    {
      id: "5",
      designation_id: "5",
      designation_name: "Johnson",

      status: "inactive",
      creation_date: "29-08-2018",
    },
    {
      id: "6",
      designation_id: "6",
      designation_name: "Williams",

      status: "active",
      creation_date: "11-09-2017",
    },
    {
      id: "7",
      designation_id: "7",
      designation_name: "Taylor",

      status: "inactive",
      creation_date: "18-10-2016",
    },
    {
      id: "8",
      designation_id: "8",
      designation_name: "Anderson",

      status: "active",
      creation_date: "23-11-2015",
    },
    {
      id: "9",
      designation_id: "9",
      designation_name: "Thomas",

      status: "inactive",
      creation_date: "30-12-2014",
    },
    {
      id: "10",
      designation_id: "10",
      designation_name: "Jackson",

      status: "active",
      creation_date: "05-01-2013",
    },
    {
      id: "11",
      designation_id: "11",
      designation_name: "White",

      status: "inactive",
      creation_date: "12-02-2012",
    },
    {
      id: "12",
      designation_id: "12",
      designation_name: "Harris",

      status: "active",
      creation_date: "19-03-2011",
    },
  ];
  return (
    <div>
     <MUITable rows={rows} columns={columns} />
    </div>
  )
}

export default Module
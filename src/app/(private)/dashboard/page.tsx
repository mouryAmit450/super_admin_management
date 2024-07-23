"use client";
import Cards from "@/components/Cards";
import { useEffect } from "react";
import { useState } from "react";
import { Box,  Grid } from "@mui/material";
import { dashboardApi } from "@/services/report";
function Dashboard() {
 const[data,setData]=useState();
  const dashboardData = async () => {
    try {
      const report  = await dashboardApi()
      const data = report.data
      console.log(data,'data')
      setData(data)
    } catch (err) {
      // alert("Something went wrong");
    }
  };

  useEffect(() => {
    dashboardData();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Cards/>
      </Grid>
      <Grid item xs={3}>
        <Cards />
      </Grid>
      <Grid item xs={3}>
        <Cards />
      </Grid>
      <Grid item xs={3}>
        <Cards />
      </Grid>
    </Grid>
  );
}
export default Dashboard;


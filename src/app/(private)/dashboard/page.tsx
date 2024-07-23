"use client";
import Cards from "@/components/Cards";
import { useEffect } from "react";
import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { dashboardApi } from "@/services/report";
function Dashboard() {
  const [data, setData] = useState();
  const dashboardData = async () => {
    try {
      const report = await dashboardApi();
      const data = report.data;
      console.log(data, "data");
      setData(data);
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
        <Cards
          count={data?.totalCount}
          title={
            <Typography variant="h6" style={{ fontSize: "16px" }}>
              Total Users
            </Typography>
          }
        />
      </Grid>
      <Grid item xs={3}>
        <Cards
          count={data?.totalMale}
          title={
            <Typography variant="h6" style={{ fontSize: "16px" }}>
              Total Male
            </Typography>
          }
        />
      </Grid>
      <Grid item xs={3}>
        <Cards
          count={data?.totalFemale}
          title={
            <Typography variant="h6" style={{ fontSize: "16px" }}>
              Total Female
            </Typography>
          }
        />
      </Grid>
      <Grid item xs={3}>
        <Cards
          count={data?.countY}
          title={
            <Typography variant="h6" style={{ fontSize: "16px" }}>
              Aadhar Users
            </Typography>
          }
        />
      </Grid>
      <Grid item xs={3}>
        <Cards
          count={data?.countN}
          title={
            <Typography variant="h6" style={{ fontSize: "16px" }}>
              Non Aadhar Users
            </Typography>
          }
        />
      </Grid>
    </Grid>
  );
}
export default Dashboard;

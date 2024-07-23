"use client";
import Cards from "@/components/Cards";
import { useEffect } from "react";
import { useState } from "react";
import { Box, CardHeader, Grid, Typography } from "@mui/material";
import { dashboardApi } from "@/services/report";
import { colors } from "@/utils/colors";
import Cookies from 'js-cookie'
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
    <>
     <CardHeader
                    title={'Dashboard'}
                    sx={{ backgroundColor: colors.primary, color: '#fff',padding:'12px', marginBottom:'25px'}}
                  />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Cards
            count={data?.totalCount}
            title={
              <Typography variant="h6" style={{ fontSize: "16px" }}>
                Total Registered Candidate
              </Typography>
            }
          />
        </Grid>
        {/* <Grid item xs={4}>
          <Cards
            count={data?.totalMale}
            title={
              <Typography variant="h6" style={{ fontSize: "16px" }}>
                Male Candidates
              </Typography>
            }
          />
        </Grid> */}
        {/* <Grid item xs={4}>
          <Cards
            count={data?.totalFemale}
            title={
              <Typography variant="h6" style={{ fontSize: "16px" }}>
                Female Candidates
              </Typography>
            }
          />
        </Grid> */}
        <Grid item xs={4}>
          <Cards
            count={data?.countY}
            title={
              <Typography variant="h6" style={{ fontSize: "16px" }}>
                Registered With Aadhar
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={4}>
          <Cards
            count={data?.countN}
            title={
              <Typography variant="h6" style={{ fontSize: "16px" }}>
                Registered without Aadhar
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </>
  );
}
export default Dashboard;

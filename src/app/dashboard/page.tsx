import Cards from "@/components/Cards";
import { Box,  Grid } from "@mui/material";

function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Cards />
      </Grid>
      <Grid item xs={6}>
        <Cards />
      </Grid>
      <Grid item xs={6}>
        <Cards />
      </Grid>
      <Grid item xs={6}>
        <Cards />
      </Grid>
    </Grid>
  );
}
export default Dashboard;

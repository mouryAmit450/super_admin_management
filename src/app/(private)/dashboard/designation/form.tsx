"use client";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TextField, Button, MenuItem } from "@mui/material";
import { colors } from "@/utils/colors";
//import { officerType , designation, department,userType,status } from "@/utils/Data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const Input = styled(TextField)`
  && {
    .MuiInputBase-root {
      font-size: 16px;
      border-color: "primary";
      height: 2.8em;
    }
    .MuiInputLabel-root{
      color: "primary";
    }
  }
`;

const Form = () => {
  const status = [
    
    { value: "Y", label: "Active" },
    { value: "N", label: "Inactive" },
  ];
  const designation=  [
    { label: "Joint Secretary", value: "joint_secretary" },
    { label: "Assistant Director", value: "assistant_director" },
    { label: "Assistant Section Officer", value: "assistant_section_officer" },
    { label: "Consultant", value: "consultant" },
    { label: "Deputy Director", value: "deputy_director" },
    { label: "Data Entry Operator", value: "data_entry_operator" },
    { label: "Director", value: "director" },
    { label: "Data Processing Assistant", value: "data_processing_assistant" },
    { label: "Deputy Director", value: "deputy_director" },
    { label: "Joint Director", value: "joint_director" },
    { label: "Junior Review Officer", value: "junior_review_officer" },
    { label: "Review Officer", value: "review_officer" },
    { label: "System Analyst", value: "system_analyst" },
    { label: "Scorer", value: "scorer" },
    { label: "Section Officer", value: "section_officer" },
    { label: "Senior Review Officer", value: "senior_review_officer" },
    { label: "Senior System Analyst", value: "senior_system_analyst" },
    { label: "Superintendent", value: "superintendent" },
    { label: "Under Secretary", value: "under_secretary" },
    { label: "District Magistrate", value: "district_magistrate" },
    { label: "District Collector", value: "district_collector" },
    { label: "Principal", value: "principal" },
    { label: "Vice Principal", value: "vice_principal" }
  ];
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = () => {};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <Controller
              name="designation_ID"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Designation ID"
                  variant="outlined"
                  fullWidth
                  value='--<System Generated>--'
                  margin="dense"
                  multiline
                />
              )}
            />
          </Grid>
        <Grid item xs={12}>
            <Controller
              name="designation_name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Designation Name"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  multiline
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="designation_description"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Designation Description"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  multiline
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="designation_short-name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Designation Short Name"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                
                />
              )}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Status"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  select
                >
                  {status &&
                    status?.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                </Input>
              )}
            />
          </Grid>
      
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
        Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;

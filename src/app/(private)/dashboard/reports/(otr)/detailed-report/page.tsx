"use client";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import styled from "styled-components";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Cookies from 'js-cookie'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MUITable from "@/components/datatable";
import { auditReport } from "@/services/report";
import CustomizedDialogs from "@/components/Modal";

const customData = [
  {
    _id: "669cb8daf1ba86139c960f1d",
    moduleId: "OTR",
    moduleSubId: "Candidate Registration",
    formName: null,
    roleId: "",
    userId: "",
    ipAddress: "14.102.117.50",
    requestPayload: {
      candidateOTRDetails: {
        uniqueId: "Unique123",
        candidateAadharDetails: {
          candidateAadharVaultRefId: "VaultRef123",
          candidateRegWithAadharFlag: "Y",
          candidateAadharMatch10DtlFlag: "Y",
          candidateEkycFlag: "Y",
        },
        candidatePersonalDetails: {
          candidateNameEn: "JOHN DOE",
          candidateNameHi: "जॉन डो",
          genderId: "1",
          genderNameEn: "Male",
          candidateDateOfBirth: "1990-01-01T00:00:00.000Z",
          singleParentId: "SP123",
          singleParentNameEn: "Single Parent",
        },
        candidateParentDetails: [
          {
            familyMemberId: "FM123",
            familyTypeId: "FT123",
            familyTypeNameEn: "Nuclear",
            familyMemberName: "JANE DOE",
            familyMemberGenderId: "2",
            familyMemberGenderNameEn: "Female",
          },
        ],
      },
    },
    createdBy: "",
    createdDt: "2024-07-21T07:25:06.487Z",
  },
  {
    _id: "669cb7f7f1ba86139c960f08",
    moduleId: "OTR",
    moduleSubId: "Candidate Registration",
    formName: null,
    roleId: "",
    userId: "",
    ipAddress: "14.102.117.50",
    requestPayload: {
      candidateOTRDetails: {
        uniqueId: "Unique123",
        candidateAadharDetails: {
          candidateAadharVaultRefId: "VaultRef123",
          candidateRegWithAadharFlag: "Y",
          candidateAadharMatch10DtlFlag: "Y",
          candidateEkycFlag: "Y",
        },
      },
    },
    createdBy: "",
    createdDt: "2024-07-21T07:25:06.487Z",
  },
  {
    _id: "669cb92bf1ba86139c960f21",
    moduleId: "OTR",
    moduleSubId: "Candidate Registration",
    formName: null,
    roleId: "",
    userId: "",
    ipAddress: "14.102.117.50",
    requestPayload: {
      candidateOTRDetails: {
        uniqueId: "Unique123",
        candidateAadharDetails: {
          candidateAadharVaultRefId: "VaultRef123",
          candidateRegWithAadharFlag: "Y",
          candidateAadharMatch10DtlFlag: "Y",
          candidateEkycFlag: "Y",
          _id: "669cb84af1ba86139c960f0f",
        },
        candidatePersonalDetails: {
          candidateNameEn: "JOHN DOE 3",
          candidateNameHi: "जॉन डो",
          genderId: "1",
          genderNameEn: "Male",
          candidateDateOfBirth: "1990-01-01T00:00:00.000Z",
          singleParentId: "SP123",
          singleParentNameEn: "Single Parent",
          _id: "669cb84af1ba86139c960f10",
        },
        candidateParentDetails: [
          {
            familyMemberId: "FM123",
            familyTypeId: "FT123",
            familyTypeNameEn: "Nuclear",
            familyMemberName: "JANE DOE",
            _id: "669cb84af1ba86139c960f11",
          },
        ],
        candidateMinorityDetails: {
          minorityCategoryFlag: "N",
          minorityCategoryId: "MC123",
          minorityCategoryNameEn: "None",
          _id: "669cb84af1ba86139c960f12",
        },
        candidateEducationQualification: {
          qualificationId: "Q123",
          qualificationNameEn: "Bachelor's Degree",
          boardUniversityId: "BU123",
          boardUniversityName: "University of XYZ",
          boardUniversityOthName: "XYZ University",
          boardUniversityType: "Public",
          qualificationPassingYear: "2012",
          qualificationRollNo: "Roll123",
          _id: "669cb84af1ba86139c960f13",
        },
        candidateContactDetails: {
          candidateMobile: "9855543413",
          candidateEmail: "sarveesh@gmail.com",
          firstTimeLogin: "Y",
          mobileAlternateVerifiedFlag: "N",
          emailAlternate: "sarveesdffdffffffffffh@gmail.com",
          emailAlternateVerifiedFlag: "N",
          _id: "669cb84af1ba86139c960f14",
        },
        candidateConsentDetails: {
          candidateTermsConditionConsentFlag: "Y",
          candidateTermsConditionConsentDt: "2024-07-01T00:00:00.000Z",
          candidateAadhaarConsentFlag: "N",
          candidateAadhaarConsentDt: "2024-07-01T00:00:00.000Z",
          _id: "669cb84af1ba86139c960f15",
        },
        _id: "669cb84af1ba86139c960f0e",
        otrIds: {
          refId: [],
          _id: "669cb84af1ba86139c960f16",
          otrId: "124000000000026",
        },
      },
      _id: "669cb84af1ba86139c960f0d",
      __v: 0,
    },
    createdBy: "",
    createdDt: "2024-07-21T07:25:06.487Z",
  },
  {
    _id: "669cb8bbf1ba86139c960f19",
    moduleId: "OTR",
    moduleSubId: "Candidate Registration",
    formName: null,
    roleId: "",
    userId: "",
    ipAddress: "14.102.117.50",
    requestPayload: {
      candidateOTRDetails: {
        uniqueId: "Unique123",
        candidateAadharDetails: {
          candidateAadharVaultRefId: "VaultRef123",
          candidateRegWithAadharFlag: "Y",
          candidateAadharMatch10DtlFlag: "Y",
          candidateEkycFlag: "Y",
        },
        candidatePersonalDetails: {
          candidateNameEn: "JOHN DOE",
          candidateNameHi: "जॉन डो",
          genderId: "1",
          genderNameEn: "Male",
          candidateDateOfBirth: "1990-01-01T00:00:00.000Z",
          singleParentId: "SP123",
          singleParentNameEn: "Single Parent",
        },
      },
    },
    createdBy: "",
    createdDt: "2024-07-21T07:25:06.487Z",
  },
];
// Style Wrapper
const StyledWrapper = styled.div`
  .card {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05),
      0px -4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    overflow: hidden;
    padding: 20px;
  }

  .filter-container {
    display: flex;
    margin-bottom: 16px;
    padding: 15px 10px 0 10px;
    justify-content: flex-start;
    gap: 10px;
  }

  .form-control {
    width: 200px;
    margin-right: 10px;
    & .MuiInputBase-root {
      font-size: 16px;
      height: 2.8em;
    }
  }

  .text-field {
    & .MuiInputBase-root {
      font-size: 16px;
      height: 2.8em;
    }
  }

  .table-container {
    overflow: auto;
    width: 100%;
  }
`;

// Main Component
export default function DetailedReport() {
  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [modalData, setModelData] = useState([]);
  const [reportData , setReportData] = useState([])
  const handleSearchChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleFilterChange = (event: any) => {
    setRoleFilter(event.target.value);
  };

  const handleEyeButtonClick = (params: GridRenderCellParams) => {
    setOpen(true);
    console.log("Eye button clicked", params.row);
    setModelData(params.row);
  };

  const auditReportApi = async () => {
    try {
      console.log(customData);
      const report = await auditReport({
        selectType: roleFilter,
        keyword: searchText,
      });
      setReportData(report.data)
      const data = report.data
      setRowsAndColumns(data);
    } catch (err) {
      // alert("Something went wrong");
    }
  };

  const filterMenu = [
    { label: "OTR Id", value: "otrId" },
    { label: "Candidate Name", value: "candidateName" },
    // {label:`Father's Name` , value:'otrId'},
    // {label:`Mother's Name` , value:'otrId'},
    // {label:'Date Of Birth' , value:'otrId'},
    { label: "IP Address", value: "ip" },
    { label: "Gender", value: "gender" },
    { label: "Aadhar", value: "aadhar" },
    // {label:'Date Of Registration' , value:'otrId'},
  ];
 
  const setRowsAndColumns = useCallback((data:any) => {
    const generatedColumns: GridColDef[] = Object.keys(data[0])
      .filter((key) => key !== "_id")
      .map((key) => ({
        field: key,
        headerName: key,
        width: 110,
        headerClassName: "super-app-theme--header",
      }));

    const generatedRows = data.map((row: any, index: number) => ({
      id: index,
      ...row,
    }));
    setColumns(generatedColumns);
    setRows(generatedRows)
  }, [searchText]);

  useEffect(() => {
    auditReportApi();
  }, [searchText]);

  useEffect(()=>{
    Cookies.set('title' , 'Detailed Report')
  },[])

  return (
    <StyledWrapper>
        <div className="filter-container">
          <FormControl variant="outlined" className="form-control">
            <InputLabel>Filter By</InputLabel>
            <Select
              value={roleFilter}
              onChange={handleFilterChange}
              label="Filter By"
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {filterMenu.map((column) => (
                <MenuItem key={column.value} value={column.value}>
                  {column.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
            className="text-field"
          />
        </div>
        <Box
          className="table-container"
          sx={{ width: "800px", overflowY: "auto" }}
        >
          <MUITable rows={rows} columns={columns} />
        </Box>
        {open && (
          <CustomizedDialogs open={open} setOpen={setOpen} data={modalData} />
        )}
    </StyledWrapper>
  );
}

"use client";
import React, { useState, useMemo, useEffect } from "react";
import { GridColDef } from "@mui/x-data-grid";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
  Grid,
} from "@mui/material";
import MUITable from "@/components/datatable";
import { auditReport } from "@/services/report";

type TransformedData = {
  id: number;
  candidateNameEn: string;
  genderId: string;
  genderNameEn: string;
  candidateDateOfBirth: string;
  singleParentId: string;
  singleParentNameEn: string;
  minorityCategoryFlag: string;
  minorityCategoryId: string;
  minorityCategoryNameEn: string;
  FatherName: string;
  MotherName: string;
  qualificationId: string;
  qualificationNameEn: string;
  boardUniversityId: string;
  boardUniversityName: string;
  boardUniversityOthName: string;
  boardUniversityType: string;
  qualificationPassingYear: string;
  qualificationRollNo: string;
  candidateMobile: string;
  mobileAlternate: string;
  candidateEmail: string;
  candidatePassword: string;
  firstTimeLogin: boolean;
  roleId: string;
  userId: string;
  ipAddress: string;
};

const auditLogs = [
  {
    id: Math.floor(Math.random() * 100),
    step1: {
      _id: "669a1eefc81a8bcb003c9570",
      moduleId: "OTR",
      moduleSubId: "Candidate Registration",
      requestPayload: {
        candidatePersonalDetails: {
          candidateNameEn: "SARVESH GUPTA",
          genderId: "",
          genderNameEn: "Male",
          candidateDateOfBirth: "1997-01-13",
          singleParentId: "",
          singleParentNameEn: "no",
        },
        candidateMinorityDetails: {
          minorityCategoryFlag: "N",
          minorityCategoryId: "",
          minorityCategoryNameEn: "",
        },
        candidateParentDetails: [
          {
            familyMemberId: "1",
            familyTypeId: "1",
            familyTypeNameEn: "Father",
            familyMemberName: "KRISHAN GUPTA",
            familyMemberGenderId: "1",
            familyMemberGenderNameEn: "Male",
          },
          {
            familyMemberId: "2",
            familyTypeId: "2",
            familyTypeNameEn: "Mother",
            familyMemberName: "PINKI GUPTA",
            familyMemberGenderId: "2",
            familyMemberGenderNameEn: "Female",
          },
        ],
      },
      roleId: "",
      userId: "",
      ipAddress: "14.102.117.50",
    },
    step2: {
      _id: "669a1ef7c81a8bcb003c9573",
      moduleId: "OTR",
      moduleSubId: "Candidate Registration",
      requestPayload: {
        candidateEducationQualification: {
          qualificationId: "1",
          qualificationNameEn: "10th Board",
          boardUniversityId: "34",
          boardUniversityName:
            "STATE BOARD OF SCHOOL EXAMINATIONS(SEC.) & BOARD OF HIGHER SECONDARY EXAMINATIONS, TAMIL NADU",
          boardUniversityOthName: "",
          boardUniversityType: "SB",
          qualificationPassingYear: "2015",
          qualificationRollNo: "1103636737",
        },
      },
      roleId: "",
      userId: "",
      ipAddress: "14.102.117.50",
    },
    step3: {
      _id: "669a1f1ac81a8bcb003c957d",
      moduleId: "OTR",
      moduleSubId: "Candidate Registration",
      requestPayload: {
        candidateContactDetails: {
          candidateMobile: "8826107920",
          mobileAlternate: "",
          candidateEmail: "sarveshgupta14@gmail.com",
          candidatePassword: "Email@123",
          firstTimeLogin: true,
        },
      },
      roleId: "",
      userId: "",
      ipAddress: "14.102.117.50",
    },
  },
];

function transformAuditLog(auditLog: any): TransformedData {
  const step1 = auditLog.step1.requestPayload;
  const step2 = auditLog.step2.requestPayload;
  const step3 = auditLog.step3.requestPayload;

  return {
    id: Math.floor(Math.random() * 1000),
    candidateNameEn: step1?.candidatePersonalDetails?.candidateNameEn ?? "",
    genderId: step1?.candidatePersonalDetails?.genderId ?? "",
    genderNameEn: step1?.candidatePersonalDetails?.genderNameEn ?? "",
    candidateDateOfBirth:
      step1?.candidatePersonalDetails?.candidateDateOfBirth ?? "",
    singleParentId: step1?.candidatePersonalDetails?.singleParentId ?? "",
    singleParentNameEn:
      step1?.candidatePersonalDetails?.singleParentNameEn ?? "",
    minorityCategoryFlag:
      step1?.candidateMinorityDetails?.minorityCategoryFlag ?? "",
    minorityCategoryId:
      step1?.candidateMinorityDetails?.minorityCategoryId ?? "",
    minorityCategoryNameEn:
      step1?.candidateMinorityDetails?.minorityCategoryNameEn ?? "",
    FatherName:
      step1?.candidatePersonalDetails?.candidateParentDetails?.find(
        (parent: any) => parent.familyTypeNameEn === "Father"
      )?.familyMemberName ?? "",
    MotherName:
      step1?.candidatePersonalDetails?.candidateParentDetails?.find(
        (parent: any) => parent.familyTypeNameEn === "Mother"
      )?.familyMemberName ?? "mother ji",
    qualificationId:
      step2?.candidateEducationQualification?.qualificationId ?? "",
    qualificationNameEn:
      step2?.candidateEducationQualification?.qualificationNameEn ?? "",
    boardUniversityId:
      step2?.candidateEducationQualification?.boardUniversityId ?? "",
    boardUniversityName:
      step2?.candidateEducationQualification?.boardUniversityName ?? "",
    boardUniversityOthName:
      step2?.candidateEducationQualification?.boardUniversityOthName ?? "",
    boardUniversityType:
      step2?.candidateEducationQualification?.boardUniversityType ?? "",
    qualificationPassingYear:
      step2?.candidateEducationQualification?.qualificationPassingYear ?? "",
    qualificationRollNo:
      step2?.candidateEducationQualification?.qualificationRollNo ?? "",
    candidateMobile: step3?.candidateContactDetails?.candidateMobile ?? "",
    mobileAlternate: step3?.candidateContactDetails?.mobileAlternate ?? "",
    candidateEmail: step3?.candidateContactDetails?.candidateEmail ?? "",
    candidatePassword: step3?.candidateContactDetails?.candidatePassword ?? "",
    firstTimeLogin: step3?.candidateContactDetails?.firstTimeLogin ?? false,
    roleId: auditLog.step1.roleId ?? "",
    userId: auditLog.step1.userId ?? "",
    ipAddress: auditLog.step1.ipAddress ?? "",
  };
}

const transformedData = auditLogs.map(transformAuditLog);

const columns: GridColDef[] = [
  {
    field: "candidateNameEn",
    headerName: "Candidate Name (En)",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "genderId",
    headerName: "Gender ID",
    width: 100,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "genderNameEn",
    headerName: "Gender Name (En)",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "candidateDateOfBirth",
    headerName: "Date of Birth",
    width: 120,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "singleParentId",
    headerName: "Single Parent ID",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "singleParentNameEn",
    headerName: "Single Parent Name (En)",
    width: 180,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "minorityCategoryFlag",
    headerName: "Minority Flag",
    width: 120,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "minorityCategoryId",
    headerName: "Minority Category ID",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "minorityCategoryNameEn",
    headerName: "Minority Category Name (En)",
    width: 180,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "FatherName",
    headerName: "Father Name",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "MotherName",
    headerName: "Mother Name",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "qualificationId",
    headerName: "Qualification ID",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "qualificationNameEn",
    headerName: "Qualification Name (En)",
    width: 200,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "boardUniversityId",
    headerName: "Board University ID",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "boardUniversityName",
    headerName: "Board University Name",
    width: 350,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "boardUniversityOthName",
    headerName: "Board University Other Name",
    width: 220,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "boardUniversityType",
    headerName: "Board University Type",
    width: 180,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "qualificationPassingYear",
    headerName: "Passing Year",
    width: 130,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "qualificationRollNo",
    headerName: "Roll No",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "candidateMobile",
    headerName: "Mobile",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "mobileAlternate",
    headerName: "Alternate Mobile",
    width: 180,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "candidateEmail",
    headerName: "Email",
    width: 200,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "candidatePassword",
    headerName: "Password",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "firstTimeLogin",
    headerName: "First Time Login",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "roleId",
    headerName: "Role ID",
    width: 100,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "userId",
    headerName: "User ID",
    width: 100,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "ipAddress",
    headerName: "IP Address",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
];
export default function Audit() {
  const [searchText, setSearchText] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleFilterChange = (event: any) => {
    setRoleFilter(event.target.value);
  };

  useEffect(() => {
    auditReport();
  }, []);

  const filteredRows = useMemo(() => {
    return transformedData.filter((row) => {
      const matchesSearchText = searchText
        ? Object.values(row).some((value) =>
            value.toString().toLowerCase().includes(searchText.toLowerCase())
          )
        : true;
      const matchesRoleFilter = roleFilter
        ? row[roleFilter as keyof typeof row]
            .toString()
            .toLowerCase()
            .includes(searchText.toLowerCase())
        : true;
      return matchesSearchText && matchesRoleFilter;
    });
  }, [transformedData, searchText, roleFilter]);

  return (
    <Card
      sx={{
        boxShadow:
          "0px 4px 8px rgba(0, 0, 0, 0.05), 0px -4px 8px rgba(0, 0, 0, 0.05)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", mb: 2, padding: "15px 10px 0 10px" }}>
          <FormControl variant="outlined" sx={{ width: "200px" }}>
            <InputLabel>Filter By</InputLabel>
            <Select
              value={roleFilter}
              onChange={handleFilterChange}
              label="Role"
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {columns.map((column) => (
                <MenuItem key={column.field} value={column.field}>
                  {column.headerName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
            sx={{ paddingLeft: "5px" }}
          />
        </Box>
        <Box sx={{ overflow: "auto", width: "900px" }}>
          <MUITable rows={filteredRows} columns={columns} />
        </Box>
      </CardContent>
    </Card>
  );
}

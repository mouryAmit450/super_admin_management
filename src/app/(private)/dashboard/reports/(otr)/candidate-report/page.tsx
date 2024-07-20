'use client'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type TransformedData = {
  candidateNameEn: string;
  candidateNameHi: string;
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
          candidateNameHi: "",
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
    candidateNameEn: step1?.candidatePersonalDetails?.candidateNameEn ?? '',
    candidateNameHi: step1?.candidatePersonalDetails?.candidateNameHi ?? '',
    genderId: step1?.candidatePersonalDetails?.genderId ?? '',
    genderNameEn: step1?.candidatePersonalDetails?.genderNameEn ?? '',
    candidateDateOfBirth: step1?.candidatePersonalDetails?.candidateDateOfBirth ?? '',
    singleParentId: step1?.candidatePersonalDetails?.singleParentId ?? '',
    singleParentNameEn: step1?.candidatePersonalDetails?.singleParentNameEn ?? '',
    minorityCategoryFlag: step1?.candidateMinorityDetails?.minorityCategoryFlag ?? '',
    minorityCategoryId: step1?.candidateMinorityDetails?.minorityCategoryId ?? '',
    minorityCategoryNameEn: step1?.candidateMinorityDetails?.minorityCategoryNameEn ?? '',
    FatherName: step1?.candidatePersonalDetails?.candidateParentDetails?.find(
      (parent: any) => parent.familyTypeNameEn === 'Father'
    )?.familyMemberName ?? '',
    MotherName: step1?.candidatePersonalDetails?.candidateParentDetails?.find(
      (parent: any) => parent.familyTypeNameEn === 'Mother'
    )?.familyMemberName ?? 'mother ji',
    qualificationId: step2?.candidateEducationQualification?.qualificationId ?? '',
    qualificationNameEn: step2?.candidateEducationQualification?.qualificationNameEn ?? '',
    boardUniversityId: step2?.candidateEducationQualification?.boardUniversityId ?? '',
    boardUniversityName: step2?.candidateEducationQualification?.boardUniversityName ?? '',
    boardUniversityOthName: step2?.candidateEducationQualification?.boardUniversityOthName ?? '',
    boardUniversityType: step2?.candidateEducationQualification?.boardUniversityType ?? '',
    qualificationPassingYear: step2?.candidateEducationQualification?.qualificationPassingYear ?? '',
    qualificationRollNo: step2?.candidateEducationQualification?.qualificationRollNo ?? '',
    candidateMobile: step3?.candidateContactDetails?.candidateMobile ?? '',
    mobileAlternate: step3?.candidateContactDetails?.mobileAlternate ?? '',
    candidateEmail: step3?.candidateContactDetails?.candidateEmail ?? '',
    candidatePassword: step3?.candidateContactDetails?.candidatePassword ?? '',
    firstTimeLogin: step3?.candidateContactDetails?.firstTimeLogin ?? false,
    roleId: auditLog.step1.roleId ?? '',
    userId: auditLog.step1.userId ?? '',
    ipAddress: auditLog.step1.ipAddress ?? '',
  };
}

const transformedData = auditLogs.map(transformAuditLog);

const columns: GridColDef[] = [
  { field: 'candidateNameEn', headerName: 'Candidate Name (En)', width: 150 },
  { field: 'candidateNameHi', headerName: 'Candidate Name (Hi)', width: 150 },
  { field: 'genderId', headerName: 'Gender ID', width: 100 },
  { field: 'genderNameEn', headerName: 'Gender Name (En)', width: 150 },
  { field: 'candidateDateOfBirth', headerName: 'Date of Birth', width: 120 },
  { field: 'singleParentId', headerName: 'Single Parent ID', width: 150 },
  { field: 'singleParentNameEn', headerName: 'Single Parent Name (En)', width: 180 },
  { field: 'minorityCategoryFlag', headerName: 'Minority Flag', width: 120 },
  { field: 'minorityCategoryId', headerName: 'Minority Category ID', width: 150 },
  { field: 'minorityCategoryNameEn', headerName: 'Minority Category Name (En)', width: 180 },
  { field: 'FatherName', headerName: 'Father Name', width: 150 },
  { field: 'MotherName', headerName: 'Mother Name', width: 150 },
  { field: 'qualificationId', headerName: 'Qualification ID', width: 150 },
  { field: 'qualificationNameEn', headerName: 'Qualification Name (En)', width: 200 },
  { field: 'boardUniversityId', headerName: 'Board University ID', width: 150 },
  { field: 'boardUniversityName', headerName: 'Board University Name', width: 350 },
  { field: 'boardUniversityOthName', headerName: 'Board University Other Name', width: 220 },
  { field: 'boardUniversityType', headerName: 'Board University Type', width: 180 },
  { field: 'qualificationPassingYear', headerName: 'Passing Year', width: 130 },
  { field: 'qualificationRollNo', headerName: 'Roll No', width: 150 },
  { field: 'candidateMobile', headerName: 'Mobile', width: 150 },
  { field: 'mobileAlternate', headerName: 'Alternate Mobile', width: 180 },
  { field: 'candidateEmail', headerName: 'Email', width: 200 },
  { field: 'candidatePassword', headerName: 'Password', width: 150 },
  { field: 'firstTimeLogin', headerName: 'First Time Login', width: 150 },
  { field: 'roleId', headerName: 'Role ID', width: 100 },
  { field: 'userId', headerName: 'User ID', width: 100 },
  { field: 'ipAddress', headerName: 'IP Address', width: 150 },
];

const TransformedDataGrid: React.FC = () => {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={transformedData} columns={columns} getRowId={(row) => row.candidateEmail} />
    </div>
  );
};

export default TransformedDataGrid;

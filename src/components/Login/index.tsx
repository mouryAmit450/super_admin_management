/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "../AuthContext/AuthContext";
// @ts-ignore
import Captcha from "demos-react-captcha";
import { colors } from "@/utils/colors";
const Login = () => {
  const [forms, setForms] = useState<any>({
    userId: "",
    candidatePassword: "",
    email: "",
    mobile: "",
    otpValue: "",
    otpValue2: "",
    captcha: "",
  });
  const [alignment, setAlignment] = useState("1");
  const { useLogin, useSendOTP, useVerifyOTP } = useAuth();
  const [showText, setShowText] = React.useState(null);
  const captchaRef = React.useRef<any>("ss");
  const [timerActive, setTimerActive] = useState(false);
  const [textValue, setTextValue] = React.useState(false);
  const [secondsLeft, setSecondsLeft] = useState(300); // 300 seconds for 5 minutes
  const [emailError, setEmailError] = useState("");
  const [otrError, setOtrError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment) {
      setForms({
        userId: "",
        candidatePassword: "",
        email: "",
        mobile: "",
        otpValue: "",
        otpValue2: "",
        captcha: "",
      });
      setEmailError("");
      setOtrError("");
      setMobileError("");
      setAlignment(newAlignment);
      captchaRef.current.refresh();
      setTimerActive(false);
      setTextValue(false);
      setSecondsLeft(300);
      return;
    }
  };
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      const emailRegex =
        /^[a-zA-Z0-9](\.?[a-zA-Z0-9]){1,63}@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
    if (name === "userId") {
      if (value.length === 5) {
        return;
      }
      // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value.length !== 6) {
        setOtrError("Please enter a valid OTR ID");
      } else {
        setOtrError("");
      }
    }
    if (name === "mobile") {
      if (value.length === 11) {
        return;
      }
      if (value.length === 10) {
        if (parseInt(value[0]) < 6) {
          setMobileError("Please enter a valid mobile number.");
        } else {
          setMobileError("");
        }
      } else if (value.length < 10) {
        setMobileError("Please enter a valid mobile number.");
      } else {
        setMobileError("");
      }
    }
    setForms((prevForm: any) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleLogin = async () => {
    await useLogin({ ...forms, type: alignment });
    // if (data) {
    //   return window.location.href = '/dashboard/candidate';
    // }
    // return;
  };

  const getData = (value: any) => {
    setTextValue(value);
    setShowText(value);
  };
  const inputCheck = (value: any, y: any) => {
    console.log("check input", value, y);
  };
  const onRefreshx = () => {
    setTextValue(false);
    setShowText(null);
    // if (captchaRef.current) {
    //   captchaRef.current.refresh(); // Reset the captcha using the ref
    // }
  };
  // useEffect(() => {
  //   onRefreshx();
  // }, [alignment]);
  const handleSendOtp = async (type: string) => {
    const data: any = await useSendOTP({
      otpType: type,
      form: "login",
      otpTypeId: type === "email" ? forms?.email : forms?.mobile,
      message: "Login",
    });
    if (data) {
      startTimer();
    }
  };
  const handleVerifyOtp = async () => {
    const data: any = await useVerifyOTP({
      otpType: alignment === "2" ? "email" : "mobile",
      form: "login",
      otpTypeId: alignment === "2" ? forms?.email : forms?.mobile,
      otpValue:
        alignment === "2"
          ? parseInt(forms?.otpValue)
          : parseInt(forms?.otpValue2),
    });
    // if (data) {
    //   return (window.location.href = "/dashboard/candidate");
    // }
    // return;
  };
  useEffect(() => {
    let timer: any;
    if (timerActive && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setTimerActive(false);
    }

    return () => clearInterval(timer);
  }, [timerActive, secondsLeft]);

  const startTimer = () => {
    setSecondsLeft(300); // Reset to 5 minutes
    setTimerActive(true);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <Grid container>
      <Grid xs={0} sm={0} md={3} lg={3} />
      <Grid xs={12} sm={12} md={6} lg={6}>
        <Box
          sx={{
            paddingBottom: "40px",
            borderRadius: "4px 4px 4px 4px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
            mx: "auto",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
          }}
        >
          <Box
            sx={{
              display: "flex",
              border: "1px solid gray",
              height: "60px",
              width: "100%",
              borderRadius: "4px 4px 0px 0px",
              background: colors.primary,
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                padding: "0 16px",
                fontSize: "20px",
                fontWeight: 700,
                alignItems: "center",
              }}
            >
              Admin Login
            </Typography>
          </Box>
          <Box
            sx={{
              height: "auto",
              width: "90%",
              mx: "auto",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            {/* <FormControl variant="standard"> */}
            <Box>
              <Typography sx={{ fontWeight: 600 }}>
                Select Mode for Login*
              </Typography>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                size="small"
                sx={{
                  width: "100%",
                  ".Mui-selected": {
                    border: `1px solid ${colors.primary}  !important`,
                    backgroundColor: `${colors.primary} !important`,
                    color: "#fff !important",
                  },
                }}
              >
                <ToggleButton
                  value="1"
                  sx={{
                    width: "34%",
                    border: "1px solid blue",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  User Id
                </ToggleButton>
                <ToggleButton
                  value="2"
                  sx={{
                    width: "34%",
                    border: "1px solid blue",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  MOBILE
                </ToggleButton>
                <ToggleButton
                  value="3"
                  sx={{
                    width: "33%",
                    border: "1px solid blue",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  EMAIL
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
            {alignment === "1" && (
              <Box>
                <Box>
                  {" "}
                  <Typography sx={{ marginTop: "20px", fontWeight: 600 }}>
                    User Id*
                  </Typography>
                  <TextField
                    size="small"
                    sx={{ width: "100%" }}
                    placeholder="Please enter usr id"
                    name="userId"
                    value={forms?.otrId}
                    onChange={handleFormChange}
                    type="number"
                    inputProps={{
                      maxLength: 15,
                    }}
                    error={!!otrError}
                    helperText={otrError}
                  ></TextField>
                </Box>
                <Box>
                  {" "}
                  <Typography sx={{ marginTop: "20px", fontWeight: 600 }}>
                    Password*
                  </Typography>
                  <TextField
                    size="small"
                    sx={{ width: "100%" }}
                    placeholder="Please password"
                    name="candidatePassword"
                    value={forms?.candidatePassword}
                    onChange={handleFormChange}
                    inputProps={{
                      maxLength: 15,
                      minLength: 8,
                    }}
                  ></TextField>
                </Box>
              </Box>
            )}

            {/*  */}
            {alignment === "3" && (
              <Box>
                <Box sx={{ alignItems: "center" }}>
                  {" "}
                  <Typography sx={{ marginTop: "20px", fontWeight: 600 }}>
                    Email*
                  </Typography>
                  <TextField
                    size="small"
                    sx={{
                      width: "75%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "4px 0 0 4px",
                        height: "41px",
                      },
                    }}
                    name="email"
                    value={forms?.email}
                    placeholder="Please enter email"
                    onChange={handleFormChange}
                    InputProps={{
                      readOnly: timerActive,
                    }}
                    error={!!emailError}
                    helperText={emailError}
                  ></TextField>
                  <Button
                    sx={{
                      width: "25%",
                      height: "41px",
                      borderRadius: "0 4px 4px 0",
                      backgroundColor:colors.primary
                    }}
                    variant="contained"
                    size="medium"
                    onClick={() => handleSendOtp("email")}
                    disabled={timerActive || emailError !== ""}
                  >
                    Send OTP
                  </Button>
                </Box>
                <Box>
                  {" "}
                  <Typography sx={{ marginTop: "20px", fontWeight: 600 }}>
                    Enter OTP*
                  </Typography>
                  <TextField
                    size="small"
                    type="number"
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "4px 0 0 4px",
                        height: "41px",
                      },
                    }}
                    placeholder="Enter OTP"
                    name="otpValue"
                    value={forms?.otpValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const { value } = e.target;
                      if (value.length <= 6) {
                        // Max length check
                        handleFormChange(e);
                      }
                    }}
                  ></TextField>
                  {/* <Button
                  sx={{
                    width: "25%",
                    height: "41px",
                    borderRadius: "0 4px 4px 0",
                  }}
                  variant="contained"
                  size="medium"
                  onClick={handleVerifyOtp}
                >
                  Verify OTP
                </Button> */}
                  <Box
                    sx={{
                      textAlign: "right",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "right",
                      // border: "1px solid teal",
                    }}
                  >
                    {timerActive && (
                      <Typography
                        sx={{
                          marginRight: "10px",
                          color: "gray",
                          marginTop: "5px",
                        }}
                      >
                        Submitting otp in {formatTime(secondsLeft)} min
                      </Typography>
                    )}
                    <Button
                      variant="text"
                      sx={{
                        textDecoration: "underline", // Adds underline to the text
                        "&:hover": {
                          textDecoration: "underline", // Ensures the underline remains on hover
                        },
                      }}
                      disabled={timerActive}
                    >
                      Resend OTP
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}
            {alignment === "2" && (
              <Box>
                <Box>
                  {" "}
                  <Typography sx={{ marginTop: "20px", fontWeight: 600 }}>
                    Mobile*
                  </Typography>
                  <TextField
                    size="small"
                    sx={{
                      width: "75%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "4px 0 0 4px",
                        height: "41px",
                      },
                    }}
                    name="mobile"
                    value={forms?.mobile}
                    onChange={handleFormChange}
                    placeholder="Please enter mobile no"
                    error={!!mobileError}
                    helperText={mobileError}
                  ></TextField>
                  <Button
                    sx={{
                      width: "25%",
                      height: "41px",
                      borderRadius: "0 4px 4px 0",
                      backgroundColor:colors.primary
                    }}
                    variant="contained"
                    size="medium"
                    onClick={() => handleSendOtp("mobile")}
                    disabled={timerActive || mobileError !== ""}
                  >
                    Send OTP
                  </Button>
                </Box>
                <Box>
                  {" "}
                  <Typography sx={{ marginTop: "20px", fontWeight: 600 }}>
                    Enter OTP*
                  </Typography>
                  <TextField
                    size="small"
                    type="number"
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "4px 0 0 4px",
                        height: "41px",
                      },
                    }}
                    placeholder="Enter OTP"
                    name="otpValue2"
                    value={forms?.otpValue2}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const { value } = e.target;
                      if (value.length <= 6) {
                        // Max length check
                        handleFormChange(e);
                      }
                    }}
                  ></TextField>
                  <Box
                    sx={{
                      textAlign: "right",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "right",
                      // border: "1px solid teal",
                    }}
                  >
                    {timerActive && (
                      <Typography
                        sx={{
                          marginRight: "10px",
                          color: "gray",
                          marginTop: "5px",
                        }}
                      >
                        Submitting otp in {formatTime(secondsLeft)} min
                      </Typography>
                    )}
                    <Button
                      variant="text"
                      sx={{
                        textDecoration: "underline", // Adds underline to the text
                        "&:hover": {
                          textDecoration: "underline", // Ensures the underline remains on hover
                        },
                      }}
                      disabled={timerActive}
                    >
                      Resend OTP
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}
            <Box>
              {" "}
              <Typography sx={{ marginTop: "5px", fontWeight: 600 }}>
                Captcha*
              </Typography>
              {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}> */}
              <Box>
                <Captcha
                  oninput={inputCheck}
                  ref={captchaRef}
                  placeholder="Enter captcha" // optional
                  length={6} // default
                  onRefresh={onRefreshx}
                  onChange={getData}
                />
                {showText === null
                  ? null
                  : !showText && (
                      <span style={{ color: "red" }}>
                        Please enter valid captcha
                      </span>
                    )}
              </Box>
              {/* <TextField
                  size="small"
                  sx={{ width: "100%", marginTop: "15px" }}
                  placeholder="Please captcha"
                  name="captcha"
                  value={forms?.captcha}
                  onChange={handleFormChange}
                ></TextField> */}
            </Box>
          </Box>
          {/* <span>(*) Star marked fields are essentially to be filled</span> */}
          <Box
            sx={{
              // border: "1px solid gray",
              width: "90%",
              mx: "auto",
              // marginTop: "30px",
            }}
          >
            <span>(*) Star marked fields are essentially to be filled</span>
            <br />
            <Button
              variant="contained"
              fullWidth
              onClick={alignment === "1" ? handleLogin : handleVerifyOtp}
              sx={{backgroundColor:colors.primary}}
            >
              LOGIN
            </Button>
            <Link href="/about" style={{ float: "right" }}>
              Forgot Password
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={0} sm={0} md={3} lg={3} />
    </Grid>
  );
};

export default Login;

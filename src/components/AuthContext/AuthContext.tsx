"use client";
import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { toast } from "react-toastify";

interface AuthContextProps {
  isAuthenticated: boolean;
  useLogin: (forms: any) => Promise<void>;
  useSendOTP: (forms: any) => Promise<void>;
  useVerifyOTP: (forms: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const useLogin = async (data: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/login`,
        data
      );
      console.log(response.data);
      if (response.data.tokens) {
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        window.location.href = "/candidate/dashboard";
      }
    } catch (e: any) {
      toast.error(e?.response?.data?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  const useSendOTP = async (data: any) => {
    try {
      console.log(process.env.NEXT_PUBLIC_BACKEND_BASE_URL)
      let response: any;
      if (data?.otpType === "email") {
        response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/candidate/register/verifyEmail`,
          data
        );
      } else if (data?.otpType === "mobile") {
        response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/candidate/register/verifyMobile`,
          data
        );
      }
      if (!response.data.error) {
        toast.success(response?.data?.msg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return response.data;
        // localStorage.setItem("token", response.data.token);
        // setIsAuthenticated(true);
      } else {
        toast.error(response?.data?.msg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return null;
      }
    } catch (e: any) {
      toast.error(e?.response?.data?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  const useVerifyOTP = async (data: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/candidate/register/verifyEmailOtp`,
        data
      );
      console.log(response.data);
      if (!response.data.error) {
        console.log(1);
        toast.success(response?.data?.msg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        window.location.href = "/candidate/dashboard";
      } else {
        console.log(2);
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (e: any) {
      toast.error(e?.response?.data?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, useLogin, useSendOTP, useVerifyOTP, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

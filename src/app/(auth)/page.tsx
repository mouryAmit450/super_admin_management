import Login from '@/components/Login'
import { GetServerSideProps } from 'next';
// import { setCookie } from 'cookies-next';
import React from 'react'
import { cookies } from 'next/headers';
function LoginPage() {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;

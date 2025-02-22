import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Login to EchoSwap</h1>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;

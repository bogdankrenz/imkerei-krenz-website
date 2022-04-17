import React from "react";
import Header from "../components/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

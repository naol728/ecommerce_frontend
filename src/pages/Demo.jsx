import Navbar from "@/components/custom/Navbar";
import React from "react";
import { Link } from "react-router-dom";

export default function Demo() {
  return (
    <div className="h-screen grid grid-cols-2 gap-3">
      <Navbar />
    </div>
  );
}

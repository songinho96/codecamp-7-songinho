import dynamic from "next/dynamic";
import React from "react";

const Writer = dynamic(() => import("../toast"), { ssr: false });
export default function index() {
  return <Writer />;
}

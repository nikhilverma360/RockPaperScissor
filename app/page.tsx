"use client";
import Dashboard from "./dashboard/dashboard";
import { useAccount } from "wagmi";
import Navbar from "@/components/navbar";


export default function Home() {
  const { status } = useAccount();

  return (
    <div className=" ">
      <Navbar/>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 12,
        }}
      >
      </div>
      {/* <Dashboard/> */}
      {status === "connected" ? <Dashboard /> : <w3m-button />}
    </div>
  );
}

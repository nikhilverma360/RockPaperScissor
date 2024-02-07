"use client";
import Dashboard from "./dashboard/dashboard";
import { useAccount } from "wagmi";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "@/components/navbar";


export default function Home() {
  const { status } = useAccount();

  return (
    <div className=" ">
      <AnimatedCursor
        innerSize={18}
        outerSize={25}
        innerScale={3}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color-outer)",
        }}
      />
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

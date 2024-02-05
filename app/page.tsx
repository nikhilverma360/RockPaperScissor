"use client";
import Dashboard from "./dashboard/dashboard";
import { useAccount } from "wagmi";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  const { status } = useAccount();
  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black via-gray-800 to-black animate-text">
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
          border: "3px solid var(--cursor-color)",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 12,
        }}
      >
        <w3m-button />
      </div>
      {/* <Dashboard/> */}
      {status === "connected" ? <Dashboard /> : <w3m-button />}
    </div>
  );
}

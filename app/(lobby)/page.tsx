"use client";
import Dashboard from "./CreateOrJoin";
import { useAccount } from "wagmi";
import Navbar from "@/components/navbar";
import MyGames from "./MyGames";

export default function Home() {
  const { status } = useAccount();

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 mt-8 mx-2 md:mx-16 md:grid-cols-3">
        <div>{status === "connected" ? <Dashboard /> : <w3m-button />}</div>
        <div className="col-span-2">
          <MyGames />
        </div>
      </div>
    </div>
  );
}

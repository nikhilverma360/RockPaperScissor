import React from "react";
import useStore from "@/hooks/useSavedGames";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getImageUrl, copyToClipboard } from "@/lib/utils";
import toast from "react-hot-toast";

const MyGames = () => {
  const { games } = useStore();

  const handleCopyLink = (address: `0x${string}`) => {
    const currentUrl = window.location.href;
    copyToClipboard(currentUrl + "play/" + address);
    toast.success("Link copied to clipboard");
  };
  console.log("games", games);
  return (
    <div>
      <h2 className=" text-2xl my-4 text-white">My Games</h2>
      <div
        className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2"
      >
        {Object.entries(games)
          .reverse()
          .map(([key, value]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle>Game #{Number(key) + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <Image
                    src={getImageUrl(String(value.move))}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="mt-4">
                  <strong>Id:</strong>{" "}
                  {`${value.address.slice(0, 6)}.......${value.address.slice(
                    -5
                  )}`}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="mr-4"
                  variant={"outline"}
                  onClick={() => handleCopyLink(value.address)}
                >
                  Copy Link
                </Button>
                <Button>Join</Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default MyGames;

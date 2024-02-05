"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAccount } from "wagmi";

export default function Dashboard() {
  const { status } = useAccount();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Create</TabsTrigger>
          <TabsTrigger value="password">Join</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Create New Game</CardTitle>
              <CardDescription>
                This game uses a commit-reveal scheme for player 1 to commit to
                his move without revealing it. Make sure to save the password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="address">Opponent Address</Label>
                <Input id="address" placeholder="ftnikhil.eth" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="bet">Bet Amount (in eth) </Label>
                <Input id="bet" placeholder="0.00" type="number" min="0" />
              </div>
              <RadioGroup className="flex flex-row" defaultValue="option-one">
                <div className="flex flex-col items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Rock</Label>
                </div>
                <div className="flex flex-col items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Paper</Label>
                </div>
                <div className="flex flex-col items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">Scissors</Label>
                </div>
                <div className="flex flex-col items-center space-x-2">
                  <RadioGroupItem value="option-four" id="option-four" />
                  <Label htmlFor="option-four">Spock</Label>
                </div>
                <div className="flex flex-col items-center space-x-2">
                  <RadioGroupItem value="option-five" id="option-five" />
                  <Label htmlFor="option-five">Lizard</Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter>
              <Button>Create Game</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Join Game</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Game Contract Address</Label>
                <Input id="current" placeholder="0xd914......39138" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Join</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

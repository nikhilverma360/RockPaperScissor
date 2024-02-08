//import usePastGames from "src/store/usePastGames";
import { useWalletClient, usePublicClient } from "wagmi";
import { parseEther } from "viem";
import { abi , bytecode } from "@/contracts/rpsABI";
//import RPS from "@/contracts/";
import { toast } from "react-hot-toast";
import useHasher from "@/hooks/useHasher";
import { GameMove } from "@/types/types";
import useLocalStorage from "@/hooks/useLocalStorage";

const useCreateGame = () => {
  //const addGame = usePastGames((state) => state.addGame);
  const { data, addDataToLocalStorage } = useLocalStorage();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const { hashGameMessage } = useHasher();

  const createGame = async (opponentAddress: `0x${string}`, wager: string, move: GameMove, salt: `0x${string}`) => {
    if (!walletClient) {
      toast.error("Please connect your wallet first.");
      return "";
    }

    const commitment = hashGameMessage(move, salt);

    console.log(commitment)

    try {
      const hash = await walletClient.deployContract({
        abi: abi,
        bytecode: bytecode as `0x${string}`,
        // @ts-expect-error New functionality apparently, not yet added to types?
        value: parseEther(wager).toString(),
        args: [commitment, opponentAddress],
        gas : BigInt(4700000)
      });

      const contractPromise = new Promise<`0x${string}`>((resolve, reject) => {
        publicClient
          .waitForTransactionReceipt({ hash })
          .then((tx) => (tx.contractAddress ? resolve(tx.contractAddress) : reject()));
      });

      toast.promise(contractPromise, {
        loading: "Waiting for transaction confirmation",
        success: "Contract deployed successfully",
        error: "There was an issue with contract creation (see console for details).",
      });

      const deployedContract = await contractPromise;

      const addGame = {
        [deployedContract] : {
          move: move,
          salt: salt,
        }
        
      };
      addDataToLocalStorage(addGame)
      return deployedContract;
    } catch (e) {
      console.error(e);

      const stringified = typeof e === "string" ? e : JSON.stringify(e);

      if (stringified.includes("rejected") || stringified.includes("denied"))
        toast.error("You rejected the request. Please try again.");

      return "";
    }
  };

  return { createGame };
};

export default useCreateGame;
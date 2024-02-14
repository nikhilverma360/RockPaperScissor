# Extended Rock Paper Scissors Web3 Game
Welcome to the extended version of Rock Paper Scissors (RPS) implemented on the Ethereum blockchain using web3 technology. This game extends the traditional RPS game by adding additional weapons, following the guidelines provided by the Wikipedia article on RPS and incorporating them into the gameplay.

<div>
    <a href="https://www.loom.com/share/bb117d71702c4ec093914abb8ed878f1">
      <p>RockPaperScissors - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/bb117d71702c4ec093914abb8ed878f1">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/bb117d71702c4ec093914abb8ed878f1-with-play.gif">
    </a>
</div>

## How to Play
#### 1) Creating a Game:
The first party creates the game by initiating a smart contract transaction. They will commit their move, select the other player, and stake some ETH.

<img width="1680" alt="Screenshot 2024-02-14 at 17 30 49" src="https://github.com/nikhilverma360/RockPaperScissor/assets/32412967/4c57f589-c12c-4156-90af-503d753ea883">


#### 2) Joining the Game:
The second party joins the game by paying the same amount of ETH as staked by the first party and chooses their move.

<img width="1680" alt="Screenshot 2024-02-14 at 17 31 28" src="https://github.com/nikhilverma360/RockPaperScissor/assets/32412967/9a2e771f-eb0b-42da-a7fd-f2a1648a5597">


#### 3) Revealing Moves:
Once both parties have chosen their moves, the first party reveals their move, and the smart contract verifies it.
<img width="1680" alt="Screenshot 2024-02-14 at 17 36 26" src="https://github.com/nikhilverma360/RockPaperScissor/assets/32412967/c8a1a6e3-57aa-4888-9e29-fdfe21566c92">
<img width="1680" alt="Screenshot 2024-02-14 at 17 36 57" src="https://github.com/nikhilverma360/RockPaperScissor/assets/32412967/a7eaa66d-8020-4ed8-9f78-0e3fe1367200">


#### 4) Determining the Winner:
The smart contract determines the winner based on the game rules and distributes the ETH accordingly. In case of a tie, the ETH is split between the parties.

<img width="1678" alt="Screenshot 2024-02-14 at 17 35 16" src="https://github.com/nikhilverma360/RockPaperScissor/assets/32412967/421d17a7-6003-4597-a684-efdfd18a9968">


#### 5) Timeouts:
If any party stops responding during the game, timeouts are implemented to handle such scenarios securely.
<img width="1678" alt="Screenshot 2024-02-14 at 17 39 02" src="https://github.com/nikhilverma360/RockPaperScissor/assets/32412967/a70abde2-df5c-4f22-93f7-17331b24fa55">

<img width="1680" alt="Screenshot 2024-02-14 at 17 42 38" src="https://github.com/nikhilverma360/RockPaperScissor/assets/32412967/ff74f85d-c3b0-494c-8dcc-6f288bf49719">


### Demo :
To play the extended RPS game, follow these steps:

- Visit Web3 RPS Game using a browser.
- Connect your Metamask wallet to the Ethereum testnet (Sepolia).
- Create a game or join an existing one following the on-screen instructions.
- Make your move and wait for the other party to reveal theirs.
- Enjoy the game and may the best strategist win!



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Mixed Strategy Nash Equilibrium
In the game of RPSSL (Rock Paper Scissors Spock Lizard), the mixed strategy Nash equilibrium is achieved when each player selects their actions with equal probabilities. This equilibrium is based on the assumption that both players are rational and have perfect knowledge of the game, but are completely unaware of their opponent's choices, which are randomized.

Given the payoff matrix provided:

| Player1/Player2 | Rock | Paper | Scissors | Spock | Lizard |
|-----------------|------|-------|----------|-------|--------|
| Rock            | 0,0  | -1,1  | 1,-1     | -1,1  | 1,-1   |
| Paper           | 1,-1 | 0,0   | -1,1     | 1,-1  | -1,1   |
| Scissors        | -1,1 | 1,-1  | 0,0      | -1,1  | 1,-1   |
| Spock           | 1,-1 | -1,1  | 1,-1     | 0,0   | -1,1   |
| Lizard          | -1,1 | 1,-1  | -1,1     | 1,-1  | 0,0    |


We observe that there is no dominant strategy for any player, as there is no single action that guarantees the highest payoff regardless of the opponent's choice. Therefore, pure strategy equilibria do not exist in this case.

In the absence of pure strategy equilibria, mixed strategy Nash equilibrium involves players randomizing their choices based on certain probabilities. In this case, each action (Rock, Paper, Scissors, Spock, Lizard) has an equal probability of 1/5 of being chosen by each player. This balanced strategy ensures that no player can gain an advantage by deviating from their strategy, given the randomization of the opponent's choices.

Hence, the mixed strategy Nash equilibrium for the RPSSL game is playing each hand with a probability of 1/5. However, if a player can recognize a pattern or has knowledge of the opponent's tendencies, they may adjust these probabilities to follow a different strategy.







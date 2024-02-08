import { GameMove } from '@/types/types';
import React from 'react';

type GameData = {
  move: GameMove;
  salt: `0x${string}`;
};

type Props = {
  data: { [key: string]: GameData };
};

const MyGames: React.FC<Props> = ({ data }) => {
  return (
    <div className='text-white'>
      <h2>Game Data</h2>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <div>
              <strong>Key: </strong> {key}
            </div>
            <div>
              <strong>Move: </strong> {value.move}
            </div>
            <div>
              <strong>Salt: </strong> {value.salt}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyGames;

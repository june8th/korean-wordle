'use client';

import React from 'react';
import { Tile } from './Tile';
import { evaluateGuess, TileStatus } from '@/utils/hangul';

interface RowProps {
  guess: string;
  isSubmitted: boolean;
  answer: string;
  isCurrentRow: boolean;
  isShaking: boolean;
  isWinningRow: boolean;
}

export const Row: React.FC<RowProps> = ({
  guess,
  isSubmitted,
  answer,
  isCurrentRow,
  isShaking,
  isWinningRow,
}) => {
  const chars = guess.split('');
  const statuses: TileStatus[] = [];

  if (isSubmitted) {
    const evaluated = evaluateGuess(guess, answer);
    for (let i = 0; i < 5; i++) {
      statuses.push(evaluated[i]);
    }
  } else {
    for (let i = 0; i < 5; i++) {
      if (chars[i]) {
        statuses.push('current');
      } else {
        statuses.push('empty');
      }
    }
  }

  return (
    <div
      className={`grid grid-cols-5 gap-1.5 sm:gap-2 justify-center ${
        isShaking ? 'animate-shake' : ''
      }`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Tile
          key={index}
          char={chars[index] || ''}
          status={statuses[index]}
          index={index}
          isBouncing={isWinningRow}
        />
      ))}
    </div>
  );
};

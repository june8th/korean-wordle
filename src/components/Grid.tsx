'use client';

import React from 'react';
import { Row } from './Row';

interface GridProps {
  guesses: string[];
  currentGuess: string;
  currentRowIndex: number;
  answer: string;
  isShaking: boolean;
  isGameWon: boolean;
}

export const Grid: React.FC<GridProps> = ({
  guesses,
  currentGuess,
  currentRowIndex,
  answer,
  isShaking,
  isGameWon,
}) => {
  return (
    <div className="flex flex-col gap-1.5 sm:gap-2 my-auto items-center justify-center p-2">
      {Array.from({ length: 6 }).map((_, index) => {
        const isCurrentRow = index === currentRowIndex;
        const isSubmitted = index < currentRowIndex;
        const guess = isCurrentRow
          ? currentGuess
          : isSubmitted
          ? guesses[index] || ''
          : '';
        const isWinningRow = isGameWon && isSubmitted && guesses[index] === answer;

        return (
          <Row
            key={index}
            guess={guess}
            isSubmitted={isSubmitted}
            answer={answer}
            isCurrentRow={isCurrentRow}
            isShaking={isCurrentRow && isShaking}
            isWinningRow={isWinningRow}
          />
        );
      })}
    </div>
  );
};

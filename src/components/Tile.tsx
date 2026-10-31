'use client';

import React from 'react';
import { TileStatus } from '@/utils/hangul';

interface TileProps {
  char: string;
  status: TileStatus;
  index: number;
  isBouncing?: boolean;
}

export const Tile: React.FC<TileProps> = ({ char, status, index, isBouncing }) => {
  // 상태별 스타일 정의
  let bgClass = 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100';
  let animationClass = '';
  let style: React.CSSProperties = {};

  if (status === 'correct') {
    bgClass = 'bg-emerald-600 border-emerald-600 text-white font-bold';
    animationClass = 'animate-flip';
    style = { animationDelay: `${index * 250}ms` };
  } else if (status === 'present') {
    bgClass = 'bg-amber-500 border-amber-500 text-white font-bold';
    animationClass = 'animate-flip';
    style = { animationDelay: `${index * 250}ms` };
  } else if (status === 'absent') {
    bgClass = 'bg-zinc-500 border-zinc-500 dark:bg-zinc-700 dark:border-zinc-700 text-white font-bold';
    animationClass = 'animate-flip';
    style = { animationDelay: `${index * 250}ms` };
  } else if (status === 'current') {
    bgClass = 'bg-white dark:bg-zinc-800 border-zinc-500 dark:border-zinc-400 text-zinc-900 dark:text-white font-bold scale-100 animate-pop';
  } else {
    // empty
    bgClass = 'bg-white/60 dark:bg-zinc-900/60 border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100';
  }

  if (isBouncing) {
    animationClass = 'animate-bounce';
    style = { animationDelay: `${index * 100}ms` };
  }

  return (
    <div
      style={style}
      className={`w-13 h-13 sm:w-16 sm:h-16 border-2 flex items-center justify-center text-2xl sm:text-3xl font-extrabold select-none rounded-md transition-colors duration-300 ${bgClass} ${animationClass}`}
    >
      {char || ''}
    </div>
  );
};

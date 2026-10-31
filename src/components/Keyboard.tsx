'use client';

import React, { useState } from 'react';
import { KeyStatus } from '@/utils/hangul';
import { Delete, CornerDownLeft, ArrowBigUp } from 'lucide-react';

interface KeyboardProps {
  onChar: (char: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  keyStatuses: Record<string, KeyStatus>;
}

export const Keyboard: React.FC<KeyboardProps> = ({
  onChar,
  onDelete,
  onEnter,
  keyStatuses,
}) => {
  const [isShifted, setIsShifted] = useState(false);

  // 일반 키보드 배열
  const normalRow1 = ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'];
  const shiftedRow1 = ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅒ', 'ㅖ'];
  const row2 = ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'];
  const row3 = ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ'];

  const currentRow1 = isShifted ? shiftedRow1 : normalRow1;

  const getKeyBgClass = (char: string) => {
    const status = keyStatuses[char];
    if (status === 'correct') {
      return 'bg-emerald-600 text-white border-emerald-600 shadow-sm';
    }
    if (status === 'present') {
      return 'bg-amber-500 text-white border-amber-500 shadow-sm';
    }
    if (status === 'absent') {
      return 'bg-zinc-400 dark:bg-zinc-800 text-zinc-200 dark:text-zinc-500 border-zinc-400 dark:border-zinc-800 opacity-75';
    }
    return 'bg-slate-200 hover:bg-slate-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-slate-900 dark:text-zinc-100 border-slate-300 dark:border-zinc-600';
  };

  const handleKeyClick = (char: string) => {
    onChar(char);
    if (isShifted) {
      setIsShifted(false); // 1회 입력 후 시프트 자동 해제
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-1.5 sm:p-2 flex flex-col gap-1.5 select-none pb-4 sm:pb-6">
      {/* 1행 */}
      <div className="flex gap-1 sm:gap-1.5 justify-center">
        {currentRow1.map((char) => (
          <button
            key={char}
            onClick={() => handleKeyClick(char)}
            className={`flex-1 h-12 sm:h-14 max-w-[42px] sm:max-w-[48px] rounded font-bold text-base sm:text-lg flex items-center justify-center border transition-all active:scale-95 active:brightness-90 ${getKeyBgClass(
              char
            )}`}
          >
            {char}
          </button>
        ))}
      </div>

      {/* 2행 */}
      <div className="flex gap-1 sm:gap-1.5 justify-center px-2 sm:px-4">
        {row2.map((char) => (
          <button
            key={char}
            onClick={() => handleKeyClick(char)}
            className={`flex-1 h-12 sm:h-14 max-w-[42px] sm:max-w-[48px] rounded font-bold text-base sm:text-lg flex items-center justify-center border transition-all active:scale-95 active:brightness-90 ${getKeyBgClass(
              char
            )}`}
          >
            {char}
          </button>
        ))}
      </div>

      {/* 3행 */}
      <div className="flex gap-1 sm:gap-1.5 justify-center">
        {/* Shift 버튼 */}
        <button
          onClick={() => setIsShifted(!isShifted)}
          className={`px-2 h-12 sm:h-14 rounded font-bold text-xs sm:text-sm flex items-center justify-center border transition-all active:scale-95 ${
            isShifted
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-slate-300 dark:bg-zinc-600 text-slate-800 dark:text-zinc-200 border-slate-400 dark:border-zinc-500'
          }`}
          title="쌍자음 입력 토글"
        >
          <ArrowBigUp className={`w-4 h-4 sm:w-5 sm:h-5 ${isShifted ? 'fill-current' : ''}`} />
        </button>

        {/* Enter 버튼 */}
        <button
          onClick={onEnter}
          className="flex-[1.4] h-12 sm:h-14 max-w-[62px] sm:max-w-[72px] rounded font-bold text-xs sm:text-sm flex items-center justify-center gap-1 border bg-slate-300 hover:bg-slate-400 dark:bg-zinc-600 dark:hover:bg-zinc-500 text-slate-800 dark:text-zinc-100 border-slate-400 dark:border-zinc-500 transition-all active:scale-95 active:brightness-90"
        >
          <span>입력</span>
          <CornerDownLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {/* 3행 자음/모음 키 */}
        {row3.map((char) => (
          <button
            key={char}
            onClick={() => handleKeyClick(char)}
            className={`flex-1 h-12 sm:h-14 max-w-[42px] sm:max-w-[48px] rounded font-bold text-base sm:text-lg flex items-center justify-center border transition-all active:scale-95 active:brightness-90 ${getKeyBgClass(
              char
            )}`}
          >
            {char}
          </button>
        ))}

        {/* Backspace 버튼 */}
        <button
          onClick={onDelete}
          className="flex-[1.3] h-12 sm:h-14 max-w-[56px] sm:max-w-[66px] rounded font-bold text-xs sm:text-sm flex items-center justify-center border bg-slate-300 hover:bg-slate-400 dark:bg-zinc-600 dark:hover:bg-zinc-500 text-slate-800 dark:text-zinc-100 border-slate-400 dark:border-zinc-500 transition-all active:scale-95 active:brightness-90"
        >
          <Delete className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

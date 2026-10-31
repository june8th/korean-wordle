'use client';

import React from 'react';
import { HelpCircle, BarChart2, Moon, Sun, RotateCcw } from 'lucide-react';

interface HeaderProps {
  onOpenHelp: () => void;
  onOpenStats: () => void;
  onRestart: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isDailyMode: boolean;
  setIsDailyMode: (daily: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenHelp,
  onOpenStats,
  onRestart,
  isDarkMode,
  toggleDarkMode,
  isDailyMode,
  setIsDailyMode,
}) => {
  return (
    <header className="w-full max-w-xl mx-auto border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 flex items-center justify-between">
      {/* 좌측 액션들: 도움말, 새 게임 */}
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={onOpenHelp}
          className="p-1.5 sm:p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          title="게임 방법"
        >
          <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={onRestart}
          className="p-1.5 sm:p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          title="새 게임 시작"
        >
          <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* 중앙 타이틀 및 모드 선택 */}
      <div className="flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl font-black tracking-wider text-zinc-900 dark:text-white flex items-center gap-1.5">
          <span className="text-emerald-600 dark:text-emerald-500">한글</span> WORDLE
        </h1>
        <div className="flex items-center gap-1 mt-0.5">
          <button
            onClick={() => setIsDailyMode(true)}
            className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-all ${
              isDailyMode
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            오늘의 단어
          </button>
          <button
            onClick={() => setIsDailyMode(false)}
            className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-all ${
              !isDailyMode
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            무한 연습
          </button>
        </div>
      </div>

      {/* 우측 액션들: 통계, 테마 토글 */}
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={onOpenStats}
          className="p-1.5 sm:p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          title="통계 보기"
        >
          <BarChart2 className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={toggleDarkMode}
          className="p-1.5 sm:p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          title="다크/라이트 모드"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>
    </header>
  );
};

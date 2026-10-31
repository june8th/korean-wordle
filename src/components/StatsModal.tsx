'use client';

import React from 'react';
import { X, BarChart3 } from 'lucide-react';

export interface GameStats {
  played: number;
  won: number;
  currentStreak: number;
  maxStreak: number;
  guesses: Record<number, number>; // 1: n, 2: n, ... 6: n
}

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: GameStats;
}

export const StatsModal: React.FC<StatsModalProps> = ({ isOpen, onClose, stats }) => {
  if (!isOpen) return null;

  const winRate = stats.played > 0 ? Math.round((stats.won / stats.played) * 100) : 0;
  const maxGuessCount = Math.max(...Object.values(stats.guesses), 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden p-6 text-center relative flex flex-col">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400">
          <BarChart3 className="w-6 h-6" />
          <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
            플레이 통계
          </h3>
        </div>

        {/* 요약 4칸 */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="bg-zinc-100 dark:bg-zinc-800/80 p-2.5 rounded-xl">
            <div className="text-2xl font-black text-zinc-900 dark:text-white">{stats.played}</div>
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">플레이</div>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-800/80 p-2.5 rounded-xl">
            <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{winRate}%</div>
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">승률</div>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-800/80 p-2.5 rounded-xl">
            <div className="text-2xl font-black text-zinc-900 dark:text-white">{stats.currentStreak}</div>
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">현재 연승</div>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-800/80 p-2.5 rounded-xl">
            <div className="text-2xl font-black text-zinc-900 dark:text-white">{stats.maxStreak}</div>
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">최대 연승</div>
          </div>
        </div>

        {/* 시도 횟수 분포 그래프 */}
        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-200 text-left mb-3">
          시도 횟수 분포
        </h4>
        <div className="space-y-1.5 mb-6 text-xs">
          {[1, 2, 3, 4, 5, 6].map((num) => {
            const count = stats.guesses[num] || 0;
            const percentage = Math.max((count / maxGuessCount) * 100, 8);
            return (
              <div key={num} className="flex items-center gap-2">
                <span className="w-3 font-bold text-zinc-500 dark:text-zinc-400">{num}</span>
                <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-md overflow-hidden h-5 flex items-center">
                  <div
                    style={{ width: `${percentage}%` }}
                    className={`h-full flex items-center justify-end px-2 text-[11px] font-bold text-white rounded-md transition-all duration-500 ${
                      count > 0 ? 'bg-emerald-600' : 'bg-zinc-400 dark:bg-zinc-700'
                    }`}
                  >
                    {count}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl font-bold text-sm bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-100 transition-all active:scale-95"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

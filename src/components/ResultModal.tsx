'use client';

import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { WordInfo } from '@/data/words';
import { evaluateGuess } from '@/utils/hangul';
import { RotateCcw, Share2, Check, Trophy, Frown, X } from 'lucide-react';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  isWon: boolean;
  targetWordInfo: WordInfo;
  guesses: string[];
  onRestart: () => void;
}

export const ResultModal: React.FC<ResultModalProps> = ({
  isOpen,
  onClose,
  isWon,
  targetWordInfo,
  guesses,
  onRestart,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && isWon) {
      // 승리 시 컨페티 효과 실행
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // canvas-confetti 실패 시 무시
      }
    }
  }, [isOpen, isWon]);

  if (!isOpen) return null;

  const handleShare = async () => {
    const tileEmojis: Record<string, string> = {
      correct: '🟩',
      present: '🟨',
      absent: '⬜',
    };

    let resultGrid = '';
    for (const guess of guesses) {
      const evaluation = evaluateGuess(guess, targetWordInfo.word);
      resultGrid += evaluation.map((status) => tileEmojis[status] || '⬜').join('') + '\n';
    }

    const shareText = `한국어 Wordle ${isWon ? `${guesses.length}/6` : 'X/6'}\n\n${resultGrid}\n지금 바로 도전해보세요!`;

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden p-6 text-center relative flex flex-col items-center">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 아이콘 및 타이틀 */}
        {isWon ? (
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 rounded-full flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
            <Trophy className="w-8 h-8" />
          </div>
        ) : (
          <div className="w-16 h-16 bg-rose-100 dark:bg-rose-950/60 rounded-full flex items-center justify-center mb-4 text-rose-600 dark:text-rose-400">
            <Frown className="w-8 h-8" />
          </div>
        )}

        <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-1">
          {isWon ? '정답입니다! 🎉' : '아쉽네요! 다음 기회에 😢'}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5">
          {isWon
            ? `${guesses.length}번 만에 단어를 맞추셨습니다!`
            : '6번의 도전 기회를 모두 사용하셨습니다.'}
        </p>

        {/* 정답 단어 카드 */}
        <div className="w-full bg-zinc-100 dark:bg-zinc-800/80 rounded-xl p-4 mb-6 border border-zinc-200 dark:border-zinc-700/60">
          <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
            [{targetWordInfo.category}]
          </div>
          <div className="text-2xl font-extrabold tracking-widest text-zinc-900 dark:text-white mb-2">
            {targetWordInfo.word}
          </div>
          <div className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {targetWordInfo.hint}
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="flex w-full gap-2.5">
          <button
            onClick={handleShare}
            className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-100 flex items-center justify-center gap-1.5 transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span>복사됨!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>결과 공유</span>
              </>
            )}
          </button>
          <button
            onClick={onRestart}
            className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-1.5 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>새 게임</span>
          </button>
        </div>
      </div>
    </div>
  );
};

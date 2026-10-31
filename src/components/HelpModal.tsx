'use client';

import React from 'react';
import { X, HelpCircle } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden p-6 text-left relative flex flex-col max-h-[90vh] overflow-y-auto">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400">
          <HelpCircle className="w-6 h-6" />
          <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
            게임 방법 (한국어 Wordle)
          </h3>
        </div>

        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <p>
            숨겨진 <strong>5글자 한국어 단어</strong>를 <strong>6번의 기회</strong> 안에 맞춰보세요!
          </p>
          <p>
            각각의 추측은 올바른 5음절 단어여야 하며, 글자를 입력한 후 <strong>[입력 (Enter)]</strong> 버튼을 누르면 단어의 각 글자 색상이 힌트로 바뀝니다.
          </p>

          <hr className="border-zinc-200 dark:border-zinc-800 my-3" />

          <div className="font-bold text-zinc-900 dark:text-white text-base">색상 힌트 규칙</div>

          {/* 초록색 예시 */}
          <div>
            <div className="flex gap-1.5 my-2">
              <div className="w-10 h-10 bg-emerald-600 text-white font-bold flex items-center justify-center rounded">호</div>
              <div className="w-10 h-10 border border-zinc-300 dark:border-zinc-700 font-bold flex items-center justify-center rounded">박</div>
              <div className="w-10 h-10 border border-zinc-300 dark:border-zinc-700 font-bold flex items-center justify-center rounded">고</div>
              <div className="w-10 h-10 border border-zinc-300 dark:border-zinc-700 font-bold flex items-center justify-center rounded">구</div>
              <div className="w-10 h-10 border border-zinc-300 dark:border-zinc-700 font-bold flex items-center justify-center rounded">마</div>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              <strong className="text-emerald-600 dark:text-emerald-400">초록색</strong>: &apos;호&apos; 글자가 정답 단어에 포함되어 있고, <strong>정확한 위치</strong>에 있습니다.
            </p>
          </div>

          {/* 노란색 예시 */}
          <div>
            <div className="flex gap-1.5 my-2">
              <div className="w-10 h-10 border border-zinc-300 dark:border-zinc-700 font-bold flex items-center justify-center rounded">바</div>
              <div className="w-10 h-10 bg-amber-500 text-white font-bold flex items-center justify-center rounded">나</div>
              <div className="w-10 h-10 border border-zinc-300 dark:border-zinc-700 font-bold flex items-center justify-center rounded">나</div>
              <div className="w-10 h-10 border border-zinc-300 dark:border-zinc-700 font-bold flex items-center justify-center rounded">우</div>
              <div className="w-10 h-10 border border-zinc-300 dark:border-zinc-700 font-bold flex items-center justify-center rounded">유</div>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              <strong className="text-amber-500">노란색</strong>: &apos;나&apos; 글자가 정답 단어에 포함되어 있지만, <strong>다른 위치</strong>에 있습니다.
            </p>
          </div>

          {/* 회색 예시 */}
          <div>
            <div className="flex gap-1.5 my-2">
              <div className="w-10 h-10 border border-zinc-300 dark:border-zinc-700 font-bold flex items-center justify-center rounded">크</div>
              <div className="w-10 h-10 border border-zinc-300 dark:border-zinc-700 font-bold flex items-center justify-center rounded">리</div>
              <div className="w-10 h-10 bg-zinc-500 dark:bg-zinc-700 text-white font-bold flex items-center justify-center rounded">스</div>
              <div className="w-10 h-10 border border-zinc-300 dark:border-zinc-700 font-bold flex items-center justify-center rounded">마</div>
              <div className="w-10 h-10 border border-zinc-300 dark:border-zinc-700 font-bold flex items-center justify-center rounded">스</div>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              <strong className="text-zinc-500">회색</strong>: &apos;스&apos; 글자는 정답 단어의 어떤 위치에도 <strong>포함되지 않습니다</strong>.
            </p>
          </div>

          <hr className="border-zinc-200 dark:border-zinc-800 my-3" />

          <div className="font-bold text-zinc-900 dark:text-white text-base">키보드 팁</div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            • 하단 가상 키보드의 자음/모음도 단어 매칭 결과에 따라 초록, 노랑, 회색으로 반응합니다.<br />
            • 키보드의 [⇧ (Shift)] 버튼을 누르면 쌍자음(ㅃ, ㅉ, ㄸ, ㄲ, ㅆ)을 입력할 수 있습니다.<br />
            • PC에서는 물리 키보드의 한글 타자 또는 영문 쿼티 자판(자동 변환)으로도 편하게 타이핑할 수 있습니다.
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md active:scale-95"
        >
          이해했습니다! 게임 시작
        </button>
      </div>
    </div>
  );
};

'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Grid } from '@/components/Grid';
import { Keyboard } from '@/components/Keyboard';
import { ResultModal } from '@/components/ResultModal';
import { HelpModal } from '@/components/HelpModal';
import { StatsModal, GameStats } from '@/components/StatsModal';
import { Toast } from '@/components/Toast';
import {
  WordInfo,
  getDailyWord,
  getRandomWord,
} from '@/data/words';
import {
  assembleHangul,
  decomposeWord,
  getKeyStatuses,
  QWERTY_TO_HANGUL,
  INITIALS,
  MEDIALS,
} from '@/utils/hangul';

const INITIAL_STATS: GameStats = {
  played: 0,
  won: 0,
  currentStreak: 0,
  maxStreak: 0,
  guesses: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
};

export default function Home() {
  // 모드 및 정답 상태
  const [isDailyMode, setIsDailyMode] = useState<boolean>(true);
  const [targetWordInfo, setTargetWordInfo] = useState<WordInfo>(getDailyWord());

  // 게임 진행 상태
  const [guesses, setGuesses] = useState<string[]>([]);
  const [jamoBuffer, setJamoBuffer] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isGameWon, setIsGameWon] = useState<boolean>(false);

  // UI 상태
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isResultOpen, setIsResultOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [isStatsOpen, setIsStatsOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // 통계 상태
  const [stats, setStats] = useState<GameStats>(INITIAL_STATS);

  // 자모 버퍼로부터 현재 입력 중인 단어 조립
  const currentGuess = useMemo(() => {
    return assembleHangul(jamoBuffer);
  }, [jamoBuffer]);

  // 가상 키보드 자모 색상 계산
  const keyStatuses = useMemo(() => {
    return getKeyStatuses(guesses, targetWordInfo.word);
  }, [guesses, targetWordInfo.word]);

  // 로컬스토리지에서 테마 및 통계 로드
  useEffect(() => {
    const savedTheme = localStorage.getItem('korean_wordle_theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      document.documentElement.classList.add('dark');
    }

    const savedStats = localStorage.getItem('korean_wordle_stats');
    if (savedStats) {
      try {
        setStats(JSON.parse(savedStats));
      } catch (e) {
        // 파싱 에러 시 기본값 사용
      }
    }
  }, []);

  // 테마 토글 함수
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('korean_wordle_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('korean_wordle_theme', 'light');
    }
  };

  // 모드 전환 시 게임 초기화
  const handleModeChange = (daily: boolean) => {
    setIsDailyMode(daily);
    resetGame(daily ? getDailyWord() : getRandomWord());
  };

  // 게임 초기화
  const resetGame = (newWordInfo?: WordInfo) => {
    const wordInfo = newWordInfo || (isDailyMode ? getDailyWord() : getRandomWord());
    setTargetWordInfo(wordInfo);
    setGuesses([]);
    setJamoBuffer([]);
    setIsGameOver(false);
    setIsGameWon(false);
    setIsResultOpen(false);
  };

  // 토스트 메시지 띄우기
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  // 흔들림 애니메이션 트리거
  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 600);
  };

  // 통계 업데이트
  const updateStats = (won: boolean, attemptCount: number) => {
    setStats((prev) => {
      const newStats: GameStats = {
        played: prev.played + 1,
        won: won ? prev.won + 1 : prev.won,
        currentStreak: won ? prev.currentStreak + 1 : 0,
        maxStreak: won ? Math.max(prev.maxStreak, prev.currentStreak + 1) : prev.maxStreak,
        guesses: {
          ...prev.guesses,
          [attemptCount]: won ? (prev.guesses[attemptCount] || 0) + 1 : prev.guesses[attemptCount],
        },
      };
      localStorage.setItem('korean_wordle_stats', JSON.stringify(newStats));
      return newStats;
    });
  };

  // 글자(자모) 입력 처리
  const handleChar = useCallback(
    (char: string) => {
      if (isGameOver) return;

      setJamoBuffer((prev) => {
        const nextJamos = [...prev, char];
        const assembled = assembleHangul(nextJamos);

        // 글자 수가 5개를 초과하면 입력 방지
        if (assembled.length > 5) {
          return prev;
        }

        return nextJamos;
      });
    },
    [isGameOver]
  );

  // 글자 삭제 (Backspace)
  const handleDelete = useCallback(() => {
    if (isGameOver) return;

    setJamoBuffer((prev) => {
      if (prev.length === 0) return prev;
      return prev.slice(0, -1);
    });
  }, [isGameOver]);

  // 엔터 키 (추측 제출 및 검증)
  const handleEnter = useCallback(() => {
    if (isGameOver) return;

    // 1. 글자 수 검증 (5글자)
    if (currentGuess.length < 5) {
      showToast('5글자를 모두 입력해주세요!');
      triggerShake();
      return;
    }

    // 2. 완성형 한글 검증 (미완성 자모 포함 여부 확인)
    const isCompleteHangul = /^[가-힣]{5}$/.test(currentGuess);
    if (!isCompleteHangul) {
      showToast('완성된 한글 5글자를 입력해주세요!');
      triggerShake();
      return;
    }

    const newGuesses = [...guesses, currentGuess];
    const isWon = currentGuess === targetWordInfo.word;
    const isLost = !isWon && newGuesses.length >= 6;

    setGuesses(newGuesses);
    setJamoBuffer([]);

    if (isWon) {
      setIsGameOver(true);
      setIsGameWon(true);
      updateStats(true, newGuesses.length);
      // 타일 플립 애니메이션(약 1.5초) 후 결과창 표시
      setTimeout(() => {
        setIsResultOpen(true);
      }, 1600);
    } else if (isLost) {
      setIsGameOver(true);
      setIsGameWon(false);
      updateStats(false, 6);
      setTimeout(() => {
        setIsResultOpen(true);
      }, 1600);
    }
  }, [isGameOver, currentGuess, guesses, targetWordInfo.word]);

  // 물리 키보드 이벤트 핸들러
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 모달이 열려 있거나 포커스된 다른 입력창이 있으면 무시
      if (isResultOpen || isHelpOpen || isStatsOpen) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      if (e.key === 'Enter') {
        e.preventDefault();
        handleEnter();
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleDelete();
      } else if (QWERTY_TO_HANGUL[e.key]) {
        // 영문 쿼티 자판 입력 시 한글 두벌식 자모로 매핑
        e.preventDefault();
        handleChar(QWERTY_TO_HANGUL[e.key]);
      } else if (INITIALS.includes(e.key as any) || MEDIALS.includes(e.key as any)) {
        // 이미 한글 자모로 입력된 경우
        e.preventDefault();
        handleChar(e.key);
      } else if (/^[가-힣]$/.test(e.key)) {
        // IME로 완성형 한글 1글자가 바로 전달된 경우
        e.preventDefault();
        const jamos = decomposeWord(e.key);
        for (const jamo of jamos) {
          handleChar(jamo);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    isResultOpen,
    isHelpOpen,
    isStatsOpen,
    handleEnter,
    handleDelete,
    handleChar,
  ]);

  return (
    <main className="flex-1 flex flex-col justify-between max-w-xl w-full mx-auto px-2 min-h-screen py-1">
      {/* 알림 토스트 */}
      <Toast message={toastMessage} />

      {/* 상단 헤더 */}
      <Header
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenStats={() => setIsStatsOpen(true)}
        onRestart={() => resetGame()}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isDailyMode={isDailyMode}
        setIsDailyMode={handleModeChange}
      />

      {/* 중앙 5x6 단어 그리드 */}
      <div className="flex-1 flex items-center justify-center my-1 sm:my-2">
        <Grid
          guesses={guesses}
          currentGuess={currentGuess}
          currentRowIndex={guesses.length}
          answer={targetWordInfo.word}
          isShaking={isShaking}
          isGameWon={isGameWon}
        />
      </div>

      {/* 하단 한국어 두벌식 가상 키보드 */}
      <Keyboard
        onChar={handleChar}
        onDelete={handleDelete}
        onEnter={handleEnter}
        keyStatuses={keyStatuses}
      />

      {/* 모달 팝업들 */}
      <ResultModal
        isOpen={isResultOpen}
        onClose={() => setIsResultOpen(false)}
        isWon={isGameWon}
        targetWordInfo={targetWordInfo}
        guesses={guesses}
        onRestart={() => resetGame()}
      />

      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        stats={stats}
      />
    </main>
  );
}

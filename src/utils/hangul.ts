// 한글 유니코드 기본 상수
const HANGUL_BASE = 0xac00;
const HANGUL_END = 0xd7a3;

// 초성 19자
export const INITIALS = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
] as const;

// 중성 21자
export const MEDIALS = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ',
  'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
] as const;

// 종성 28자 (0번은 종성 없음)
export const FINALS = [
  '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ',
  'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
] as const;

// 복합 모음 분해
export const COMPLEX_MEDIALS: Record<string, [string, string]> = {
  'ㅘ': ['ㅗ', 'ㅏ'],
  'ㅙ': ['ㅗ', 'ㅐ'],
  'ㅚ': ['ㅗ', 'ㅣ'],
  'ㅝ': ['ㅜ', 'ㅓ'],
  'ㅞ': ['ㅜ', 'ㅔ'],
  'ㅟ': ['ㅜ', 'ㅣ'],
  'ㅢ': ['ㅡ', 'ㅣ'],
};

// 복합 모음 결합
export const COMBINED_MEDIALS: Record<string, string> = {
  'ㅗㅏ': 'ㅘ',
  'ㅗㅐ': 'ㅙ',
  'ㅗㅣ': 'ㅚ',
  'ㅜㅓ': 'ㅝ',
  'ㅜㅔ': 'ㅞ',
  'ㅜㅣ': 'ㅟ',
  'ㅡㅣ': 'ㅢ',
};

// 복합 받침 분해
export const COMPLEX_FINALS: Record<string, [string, string]> = {
  'ㄳ': ['ㄱ', 'ㅅ'],
  'ㄵ': ['ㄴ', 'ㅈ'],
  'ㄶ': ['ㄴ', 'ㅎ'],
  'ㄺ': ['ㄹ', 'ㄱ'],
  'ㄻ': ['ㄹ', 'ㅁ'],
  'ㄼ': ['ㄹ', 'ㅂ'],
  'ㄽ': ['ㄹ', 'ㅅ'],
  'ㄾ': ['ㄹ', 'ㅌ'],
  'ㄿ': ['ㄹ', 'ㅍ'],
  'ㅀ': ['ㄹ', 'ㅎ'],
  'ㅄ': ['ㅂ', 'ㅅ'],
};

// 복합 받침 결합
export const COMBINED_FINALS: Record<string, string> = {
  'ㄱㅅ': 'ㄳ',
  'ㄴㅈ': 'ㄵ',
  'ㄴㅎ': 'ㄶ',
  'ㄹㄱ': 'ㄺ',
  'ㄹㅁ': 'ㄻ',
  'ㄹㅂ': 'ㄼ',
  'ㄹㅅ': 'ㄽ',
  'ㄹㅌ': 'ㄾ',
  'ㄹㅍ': 'ㄿ',
  'ㄹㅎ': 'ㅀ',
  'ㅂㅅ': 'ㅄ',
};

// 영문 쿼티 -> 한글 두벌식 키보드 매핑
export const QWERTY_TO_HANGUL: Record<string, string> = {
  q: 'ㅂ', Q: 'ㅃ',
  w: 'ㅈ', W: 'ㅉ',
  e: 'ㄷ', E: 'ㄸ',
  r: 'ㄱ', R: 'ㄲ',
  t: 'ㅅ', T: 'ㅆ',
  y: 'ㅛ', Y: 'ㅛ',
  u: 'ㅕ', U: 'ㅕ',
  i: 'ㅑ', I: 'ㅑ',
  o: 'ㅐ', O: 'ㅒ',
  p: 'ㅔ', P: 'ㅖ',
  a: 'ㅁ', A: 'ㅁ',
  s: 'ㄴ', S: 'ㄴ',
  d: 'ㅇ', D: 'ㅇ',
  f: 'ㄹ', F: 'ㄹ',
  g: 'ㅎ', G: 'ㅎ',
  h: 'ㅗ', H: 'ㅗ',
  j: 'ㅓ', J: 'ㅓ',
  k: 'ㅏ', K: 'ㅏ',
  l: 'ㅣ', L: 'ㅣ',
  z: 'ㅋ', Z: 'ㅋ',
  x: 'ㅌ', X: 'ㅌ',
  c: 'ㅊ', C: 'ㅊ',
  v: 'ㅍ', V: 'ㅍ',
  b: 'ㅠ', B: 'ㅠ',
  n: 'ㅜ', N: 'ㅜ',
  m: 'ㅡ', M: 'ㅡ',
};

// 자음/모음 여부 확인
export const isConsonant = (char: string) => INITIALS.includes(char as any) || char === 'ㄳ' || char === 'ㄵ' || char === 'ㄶ' || char === 'ㄺ' || char === 'ㄻ' || char === 'ㄼ' || char === 'ㄽ' || char === 'ㄾ' || char === 'ㄿ' || char === 'ㅀ' || char === 'ㅄ';
export const isVowel = (char: string) => MEDIALS.includes(char as any);

/**
 * 한글 음절 1개를 기본 자모(초성, 중성, 종성)로 분해
 */
export function decomposeChar(char: string): string[] {
  const code = char.charCodeAt(0);
  if (code < HANGUL_BASE || code > HANGUL_END) {
    // 한글 음절이 아니면 (이미 자모이거나 기타 문자)
    return [char];
  }

  const offset = code - HANGUL_BASE;
  const finalIdx = offset % 28;
  const medialIdx = Math.floor((offset / 28) % 21);
  const initialIdx = Math.floor(offset / (28 * 21));

  const result: string[] = [INITIALS[initialIdx]];

  // 중성 분해 (복합모음도 기본자모로 분해)
  const medial = MEDIALS[medialIdx];
  if (COMPLEX_MEDIALS[medial]) {
    result.push(...COMPLEX_MEDIALS[medial]);
  } else {
    result.push(medial);
  }

  // 종성 분해
  if (finalIdx > 0) {
    const final = FINALS[finalIdx];
    if (COMPLEX_FINALS[final]) {
      result.push(...COMPLEX_FINALS[final]);
    } else {
      result.push(final);
    }
  }

  return result;
}

/**
 * 단어 전체를 기본 자모 배열로 분해
 */
export function decomposeWord(word: string): string[] {
  const result: string[] = [];
  for (const char of word) {
    result.push(...decomposeChar(char));
  }
  return result;
}

/**
 * 기본 자모들을 한글 완성형 단어로 조립 (한글 오토마타)
 */
export function assembleHangul(jamoList: string[]): string {
  let result = '';
  let i = 0;

  while (i < jamoList.length) {
    const char = jamoList[i];

    // 첫 글자가 초성이 아니면 그대로 추가
    if (!INITIALS.includes(char as any)) {
      result += char;
      i++;
      continue;
    }

    const initial = char;
    i++;

    // 다음 글자가 모음인지 확인
    if (i >= jamoList.length || !isVowel(jamoList[i])) {
      result += initial;
      continue;
    }

    let medial = jamoList[i];
    i++;

    // 복합 모음 조합 가능한지 확인
    if (i < jamoList.length && COMBINED_MEDIALS[medial + jamoList[i]]) {
      medial = COMBINED_MEDIALS[medial + jamoList[i]];
      i++;
    }

    // 종성 확인
    let final = '';
    if (i < jamoList.length && isConsonant(jamoList[i])) {
      // 다음다음 글자가 모음이라면 종성이 아니라 다음 음절의 초성이어야 함!
      const nextNext = i + 1 < jamoList.length ? jamoList[i + 1] : null;

      if (nextNext && isVowel(nextNext)) {
        // 다음 음절의 초성이 되므로 여기서 음절 종료
      } else {
        // 일단 단자음 받침
        const candidateFinal = jamoList[i];
        if (FINALS.includes(candidateFinal as any)) {
          final = candidateFinal;
          i++;

          // 복합 받침 가능한지 확인 (예: ㄳ, ㄵ 등)
          if (i < jamoList.length && isConsonant(jamoList[i])) {
            const combinedCandidate = COMBINED_FINALS[final + jamoList[i]];
            const afterCandidate = i + 1 < jamoList.length ? jamoList[i + 1] : null;

            // 다음다음 글자가 모음이면 복합받침의 두번째 자음은 다음 음절의 초성이 됨
            if (combinedCandidate && (!afterCandidate || !isVowel(afterCandidate))) {
              final = combinedCandidate;
              i++;
            }
          }
        }
      }
    }

    // 초성, 중성, 종성 결합하여 완성형 음절 생성
    const initIdx = INITIALS.indexOf(initial as any);
    const medIdx = MEDIALS.indexOf(medial as any);
    const finIdx = FINALS.indexOf(final as any);

    if (initIdx >= 0 && medIdx >= 0 && finIdx >= 0) {
      const code = HANGUL_BASE + (initIdx * 21 + medIdx) * 28 + finIdx;
      result += String.fromCharCode(code);
    } else {
      result += initial + medial + final;
    }
  }

  return result;
}

export type TileStatus = 'correct' | 'present' | 'absent' | 'empty' | 'current';

/**
 * 5글자 추측 단어와 정답 단어 비교 (Wordle 판정 알고리즘)
 */
export function evaluateGuess(guess: string, answer: string): TileStatus[] {
  const result: TileStatus[] = Array(5).fill('absent');
  const answerChars = answer.split('');
  const guessChars = guess.split('');
  const answerLetterCount: Record<string, number> = {};

  // 1단계: 정확한 위치의 글자(초록색 correct) 판정 및 남은 글자 빈도 계산
  for (let i = 0; i < 5; i++) {
    const g = guessChars[i];
    const a = answerChars[i];
    if (g === a) {
      result[i] = 'correct';
    } else {
      answerLetterCount[a] = (answerLetterCount[a] || 0) + 1;
    }
  }

  // 2단계: 다른 위치에 존재하는 글자(노란색 present) 판정
  for (let i = 0; i < 5; i++) {
    if (result[i] === 'correct') continue;
    const g = guessChars[i];
    if (answerLetterCount[g] && answerLetterCount[g] > 0) {
      result[i] = 'present';
      answerLetterCount[g]--;
    } else {
      result[i] = 'absent';
    }
  }

  return result;
}

export type KeyStatus = 'correct' | 'present' | 'absent' | 'unused';

/**
 * 가상 키보드 자모들의 색상 상태 계산
 */
export function getKeyStatuses(
  guesses: string[],
  answer: string
): Record<string, KeyStatus> {
  const statuses: Record<string, KeyStatus> = {};
  const answerJamos = decomposeWord(answer);
  const answerJamoSet = new Set(answerJamos);

  for (const guess of guesses) {
    const guessJamos = decomposeWord(guess);
    const evaluatedTiles = evaluateGuess(guess, answer);

    // 각 글자의 상태에 따라 자모 상태 결정
    for (let i = 0; i < guess.length; i++) {
      const char = guess[i];
      const charJamos = decomposeChar(char);
      const tileStatus = evaluatedTiles[i];

      for (const jamo of charJamos) {
        const current = statuses[jamo];

        if (tileStatus === 'correct') {
          // 해당 글자가 correct 위치라면 자모도 correct
          statuses[jamo] = 'correct';
        } else if (tileStatus === 'present' || answerJamoSet.has(jamo)) {
          // 정답에 포함되어 있는 자모라면 present (단, 이미 correct면 유지)
          if (current !== 'correct') {
            statuses[jamo] = 'present';
          }
        } else {
          // 정답에 전혀 포함되어 있지 않은 자모라면 absent (단, 이미 correct나 present면 유지)
          if (!current || current === 'unused') {
            statuses[jamo] = 'absent';
          }
        }
      }
    }
  }

  return statuses;
}

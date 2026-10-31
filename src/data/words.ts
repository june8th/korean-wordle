export interface WordInfo {
  word: string;
  category: string;
  hint: string;
}

export const TARGET_WORDS: WordInfo[] = [
  // 음식 및 요리
  { word: "호박고구마", category: "음식", hint: "노랗고 달콤한 맛이 일품인 대표적인 겨울 구황작물" },
  { word: "바나나우유", category: "음료", hint: "노란 단지 모양 용기에 든 추억의 달콤한 가공유" },
  { word: "도토리묵밥", category: "음식", hint: "시원하거나 따뜻한 육수에 채 썬 도토리묵과 밥을 말아먹는 음식" },
  { word: "김치볶음밥", category: "음식", hint: "잘 익은 김치와 밥을 기름에 볶아 계란을 얹은 인기 한식" },
  { word: "치즈돈가스", category: "음식", hint: "바삭한 튀김옷 속에 모차렐라 치즈가 듬뿍 들어간 돈가스" },
  { word: "오징어튀김", category: "분식", hint: "쫄깃한 오징어에 튀김옷을 입혀 바삭하게 튀겨낸 분식 메뉴" },
  { word: "비빔냉면맛", category: "음식", hint: "매콤달콤한 비빔 양념장과 쫄깃한 면발의 조화로운 맛" },
  { word: "된장찌개맛", category: "음식", hint: "구수한 된장에 두부와 애호박을 넣고 끓여낸 정겨운 맛" },
  { word: "불고기버거", category: "음식", hint: "한국인 입맛에 맞춘 달콤 짭조름한 패티가 들어간 햄버거" },
  { word: "붕어빵슈크", category: "간식", hint: "팥 대신 달콤하고 부드러운 슈크림이 들어간 겨울철 길거리 간식" },
  { word: "새우튀김롤", category: "음식", hint: "바삭하게 튀긴 새우를 밥과 김으로 말아낸 퓨전 롤 요리" },
  { word: "망고빙수맛", category: "디저트", hint: "달콤하고 시원한 망고 과육이 듬뿍 올라간 여름 디저트" },
  { word: "아메리카노", category: "음료", hint: "에스프레소에 뜨거운 물 또는 찬물을 더해 깔끔하게 마시는 커피" },
  { word: "카푸치노한", category: "음료", hint: "풍성한 우유 거품 위에 시나몬 가루를 살짝 뿌린 커피 한 잔" },
  { word: "바닐라라떼", category: "음료", hint: "에스프레소와 부드러운 우유에 향긋한 바닐라 시럽을 넣은 음료" },
  { word: "유부초밥세", category: "음식", hint: "달콤짭조름하게 조린 유부 주머니 속에 양념된 밥을 채운 음식" },
  { word: "카레라이스", category: "음식", hint: "각종 채소와 고기를 푹 끓인 향긋한 카레를 밥 위에 얹은 요리" },
  { word: "군고구마향", category: "일상", hint: "추운 겨울밤 길거리 드럼통에서 솔솔 풍겨오는 구수한 냄새" },
  { word: "딸기생크림", category: "디저트", hint: "부드러운 하얀 생크림과 상큼한 붉은 딸기가 어우러진 케이크" },
  { word: "떡꼬치양념", category: "분식", hint: "기름에 튀긴 쫄깃한 떡에 바르는 새콤달콤 매콤한 소스" },
  { word: "참치마요김", category: "음식", hint: "고소한 마요네즈와 기름을 뺀 참치로 속을 채운 삼각김밥" },
  { word: "짜장면한그", category: "음식", hint: "춘장을 볶아 만든 검은 소스를 비벼 먹는 중화요리 한 그릇" },
  { word: "순두부찌개", category: "음식", hint: "부드러운 몽글몽글 순두부에 얼큰한 고추기름을 낸 찌개" },
  { word: "갈비탕국물", category: "음식", hint: "소갈비를 진하게 우려내어 맑고 깊은 맛을 내는 보양 국물" },

  // 자연 및 계절, 식물, 동물
  { word: "해바라기꽃", category: "식물", hint: "항상 태양을 향해 고개를 돌린다고 알려진 밝은 노란색 꽃" },
  { word: "무지개다리", category: "자연", hint: "비 온 뒤 하늘에 걸리는 일곱 빛깔 아치형 빛의 띠" },
  { word: "하얀눈사람", category: "계절", hint: "겨울철 소복이 쌓인 눈을 굴려 둥글게 뭉쳐 만든 인형" },
  { word: "가을단풍잎", category: "계절", hint: "찬 바람이 불며 빨갛고 노랗게 물드는 가을 나무의 잎사귀" },
  { word: "봄바람살랑", category: "자연", hint: "추운 겨울이 지나고 따스하게 불어오는 포근한 바람" },
  { word: "밤하늘은하", category: "자연", hint: "맑은 밤하늘에 별들이 강처럼 무리지어 빛나는 은하수 풍경" },
  { word: "시원한바다", category: "자연", hint: "파도가 넘실거리는 탁 트인 푸른 물결의 휴양지" },
  { word: "푸른소나무", category: "식물", hint: "사계절 내내 푸른 잎을 잃지 않는 지조 높은 상록수" },
  { word: "아기다람쥐", category: "동물", hint: "도토리를 양 볼 가득 물고 총총 뛰어다니는 귀여운 설치류" },
  { word: "호랑이나비", category: "곤충", hint: "날개에 호랑이 무늬처럼 검고 노란 줄무늬가 있는 나비" },
  { word: "귀여운팬더", category: "동물", hint: "대나무 잎을 좋아하며 눈가에 검은 반점이 있는 곰과 동물" },
  { word: "단풍나무숲", category: "자연", hint: "가을철 온 산을 붉게 물들이는 아름다운 나무들의 군락지" },
  { word: "들꽃한다발", category: "자연", hint: "들판에 피어난 소박하고 아름다운 야생화들을 묶은 꽃다발" },
  { word: "초록빛바다", category: "자연", hint: "에메랄드처럼 맑고 투명하게 빛나는 아름다운 바닷물" },
  { word: "소나기구름", category: "날씨", hint: "여름철 갑작스럽게 굵은 빗방울을 쏟아내는 먹구름" },

  // 일상, 생활, IT/사물
  { word: "스마트폰케", category: "생활", hint: "휴대전화를 충격과 긁힘으로부터 보호해주는 케이스" },
  { word: "무선이어폰", category: "IT", hint: "선 없이 블루투스로 연결하여 음악을 듣는 오디오 기기" },
  { word: "에어컨바람", category: "생활", hint: "무더운 여름철 실내를 시원하고 쾌적하게 식혀주는 찬 공기" },
  { word: "노트북가방", category: "생활", hint: "컴퓨터와 충전기, 마우스를 안전하게 수납하는 가방" },
  { word: "알람시계소", category: "생활", hint: "아침마다 정해진 시각에 잠을 깨워주는 요란한 소리" },
  { word: "푹신한베개", category: "생활", hint: "머리를 편안하게 받쳐주어 꿀잠을 도와주는 침구류" },
  { word: "따뜻한이불", category: "생활", hint: "추운 밤 포근하게 몸을 감싸 체온을 유지해주는 침구" },
  { word: "교통카드잔", category: "생활", hint: "지하철이나 버스를 탈 때 단말기에 찍히는 남은 카드 금액" },
  { word: "지하철노선", category: "교통", hint: "도심 구석구석을 거미줄처럼 연결해 달리는 철도 노선도" },
  { word: "자동판매기", category: "기기", hint: "동전이나 카드를 넣으면 음료수나 물건이 자동으로 나오는 기계" },
  { word: "우산과우비", category: "생활", hint: "비가 오는 날 비를 맞지 않도록 쓰거나 입는 용품" },
  { word: "전동칫솔모", category: "생활", hint: "빠르게 진동하거나 회전하여 치아의 플라그를 닦아내는 칫솔" },
  { word: "고속철도역", category: "교통", hint: "KTX나 SRT 등 빠른 열차를 타고 내리는 대형 철도역" },
  { word: "종이비행기", category: "놀이", hint: "색종이를 접어 허공으로 날려 보내는 추억의 장난감" },

  // 감정, 문화, 축제, 표현
  { word: "크리스마스", category: "축제", hint: "12월 25일 트리와 선물이 함께하는 성탄절 축제" },
  { word: "즐거운주말", category: "일상", hint: "한 주 동안 열심히 일하거나 공부한 뒤 맞이하는 꿀맛 같은 휴일" },
  { word: "행복한하루", category: "일상", hint: "좋은 사람들과 웃으며 뜻깊고 기분 좋게 보낸 하루" },
  { word: "반가운친구", category: "관계", hint: "오랜만에 만나서 서로 활짝 웃으며 인사하는 소중한 벗" },
  { word: "고마운마음", category: "감정", hint: "누군가의 배려와 도움에 진심으로 감사하는 따뜻한 심정" },
  { word: "신나는여행", category: "여가", hint: "일상에서 벗어나 새로운 곳으로 떠나는 설레는 여정" },
  { word: "아름다운밤", category: "감성", hint: "반짝이는 야경과 별빛이 어우러진 낭만적인 밤 풍경" },
  { word: "두근두근설", category: "감정", hint: "첫 만남이나 기다리던 순간을 앞두고 가슴이 콩닥거림" },
  { word: "반짝반짝빛", category: "감성", hint: "작은 불빛이나 보석처럼 영롱하게 빛나는 모습" },
  { word: "오순도순모", category: "일상", hint: "가족이나 정다운 사람들이 옹기종기 모여 정답게 이야기함" },
  { word: "알쏭달쏭한", category: "표현", hint: "그런 것 같기도 하고 아닌 것 같기도 하여 분명하지 않은 상태" },
  { word: "차근차근하", category: "표현", hint: "서두르지 않고 순서에 따라 꼼꼼하게 일을 풀어나감" },
  { word: "정다운이야", category: "소통", hint: "오랜 벗과 마주 앉아 시간 가는 줄 모르고 나누는 대화" },
  { word: "푸른하늘아", category: "자연", hint: "구름 한 점 없이 높고 청명하게 펼쳐진 하늘" },
  { word: "새해복많이", category: "인사", hint: "새해 첫날 서로의 행복과 건강을 기원하며 건네는 덕담" }
];

// 정답 단어 목록 (단어 텍스트만 추출)
export const WORD_LIST = TARGET_WORDS.map((item) => item.word);

// 유효한 단어 세트 (정답 리스트 + 추가적인 상용 5음절 단어들)
export const VALID_GUESS_SET = new Set([
  ...WORD_LIST,
  "가나다라마", "대한민국만", "동해물과백", "남산위에저", "가을하늘공",
  "이것저것다", "하나둘셋넷", "원숭이엉덩", "빨간사과맛", "동그란지구",
  "아침점심저", "일월화수목", "도레미파솔", "초록색바람", "고등어구이",
  "해질녘바람", "초콜릿케익", "텀블러커피", "카페라테맛", "두부두루치",
  "청소년관람", "전국노래자", "생년월일확", "비밀번호입", "회원가입완"
]);

/**
 * 날짜 기반 고정 단어 (오늘의 단어)
 */
export function getDailyWord(): WordInfo {
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash << 5) - hash + dateStr.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % TARGET_WORDS.length;
  return TARGET_WORDS[index];
}

/**
 * 무작위 단어 (새 게임 / 무한 모드)
 */
export function getRandomWord(): WordInfo {
  const index = Math.floor(Math.random() * TARGET_WORDS.length);
  return TARGET_WORDS[index];
}

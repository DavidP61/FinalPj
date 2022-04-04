const qnaList = [
  {
    q: 'Q. 이틀간의 자유시간이 생겼다. 쉬는 동안 가고 싶은 장소는?',
    a: [
      {
        answer: 'A. 느긋하고 여유로운 분위기의 카페',
        type: ['# 퀸카가 되고싶어?', '# 맛깔나는', '# 폰할머니집', '# 방구석 여행', '# 냠냠쩝쩝', '# 브금맛집'],
      },
      {
        answer: 'B. 어둡고 화려한 조명이 있는 술집',
        type: [
          '#감정을파고드는',
          '#빨간맛궁금해허니',
          '#당신의기숙사는?',
          '#미친상상력의비밀',
          '#잔혹한',
          '#심장마비오는',
        ],
      },
    ],
  },
  {
    q: 'Q. 카페에서 느긋히게 하고싶은 것은?',
    a: [
      {
        answer: 'A. 예쁜 디저트 사진을 열심히 찍어서 업로드',
        type: ['# 퀸카가 되고싶어?', '# 맛깔나는', '# 폰할머니집', '# 방구석 여행'],
      },
      {
        answer: 'B. 달달한 간식과 음료 먹으며 여유롭게 ',
        type: ['# 방구석 여행', '# 냠냠쩝쩝', '# 브금맛집', '# 폰할머니집'],
      },
    ],
  },
  {
    q: 'Q. 창 밖을 보니 비가 온다. 비를 보면 드는 생각은?',
    a: [
      {
        answer: 'A. 토독토독 들는 빗소리가 asmr같다',
        type: ['#감정을파고드는', '#빨간맛궁금해허니', '#당신의기숙사는?', '#미친상상력의비밀'],
      },
      {
        answer: 'B. 비오는날 어두운 뒷골목에서 이뤄지는 스릴만점 추격전이 생각난다.',
        type: ['#당신의기숙사는?', '#미친상상력의비밀', '#잔혹한', '#심장마비오는'],
      },
    ],
  },
  {
    q: 'Q. 은퇴 후 내 집 마련의 꿈을 실현한다면?',
    a: [
      {
        answer: 'A. 무조건 도시를 벗어나서 살아야지! 지친 영혼을 치유하는 자연의 소리~',
        type: ['# 퀸카가 되고싶어?', '# 맛깔나는'],
      },
      {
        answer: 'B. 복작복작하고 편의 시설 빵빵한 도시에 살아야지!',
        type: ['# 폰할머니집', '# 방구석 여행'],
      },
    ],
  },
  {
    q: 'Q. 꿀 같은 주말! 주말 동안 할 일은?',
    a: [
      {
        answer: 'A. 주말을 그냥 보낼 수는 없지! 친구랑 같이 놀자',
        type: ['# 폰할머니집', '# 방구석 여행'],
      },
      {
        answer: 'B. 이불 밖은 위험해! 침대에서 밀린 영화 보기',
        type: ['# 냠냠쩝쩝', '# 브금맛집'],
      },
    ],
  },

  {
    q: 'Q. 디즈니랜드에 놀러왔다! 가장 먼저 가고 싶은 곳은?',
    a: [
      { answer: 'A. 디즈니랜드의 랜드마크인 공주의 성으로!', type: ['#감정을파고드는', '#빨간맛궁금해허니'] },
      {
        answer: 'B. 놀이공원에 왔으면 당연히 놀이기구부터 즐겨야지!',
        type: ['#당신의기숙사는?', '#미친상상력의비밀'],
      },
    ],
  },
  {
    q: 'Q. 내 방의 옷장을 열었다. 그 안에 있는 것은?',
    a: [
      { answer: 'A. 새로운 곳으로 가는 입구', type: ['#당신의기숙사는?', '#미친상상력의비밀'] },
      { answer: 'B. 묶여있는 좀비', type: ['#잔혹한', '#심장마비오는'] },
    ],
  },
  {
    q: 'Q. 어떤 연애를 꿈꾸나요?',
    a: [
      { answer: 'A. 영화 속 주인공 같은 로맨틱한 연애', type: ['# 퀸카가 되고싶어?'] },
      {
        answer: 'B. 함께 있으면 친구같이 편안하고 즐거운 연애',
        type: ['# 맛깔나는'],
      },
    ],
  },
  {
    q: 'Q. 오랜만에 긴 휴가가 생겼다! 여행지로 가고 싶은 곳은?',
    a: [
      { answer: 'A. 휴식이 필요해~ 느긋하게 쉴 수 있는곳', type: ['# 폰할머니집'] },
      {
        answer: 'B. 늘 보던 곳은 지겨워~ 매일매일 새로운 곳',
        type: ['# 방구석 여행'],
      },
    ],
  },
  {
    q: 'Q. 지치는 하루의 끝 당신을 위로하는 것은?',
    a: [
      {
        answer: 'A. 영혼을 살찌우는 음식',
        type: ['# 냠냠쩝쩝'],
      },
      { answer: 'B. 난 슬플 때 음악을 들어', type: ['# 브금맛집'] },
    ],
  },
  {
    q: 'Q. 운명같은 사랑이란?',
    a: [
      { answer: 'A. 시나브로 스며드는 것', type: ['#감정을파고드는'] },
      {
        answer: 'B. 불과 같이 언제나 활활 타오르는 것',
        type: ['#빨간맛궁금해허니'],
      },
    ],
  },
  {
    q: 'Q. 자동차가 하늘을 난다면?',
    a: [
      {
        answer: 'A. 자동차가 하늘을 날면  그건 비행기지!',
        type: ['#당신의기숙사는?'],
      },
      {
        answer: 'B. 백조와 같은 우아한 날개를 가지고 있을 거야',
        type: ['#미친상상력의비밀'],
      },
    ],
  },
  {
    q: 'Q. 침대 밑에 귀신이 있다면?',
    a: [
      {
        answer: 'A. 때려잡는다',
        type: ['#잔혹한?'],
      },
      {
        answer: 'B. 도망친다',
        type: ['#심장마비오는'],
      },
    ],
  },
];

const infoList = [
  {
    name: '#퀸카가 되고싶어?',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: '#맛깔나는',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: '#폰할머니집',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: '#방구석여행',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: '#냠냠쩝쩝',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: '#브금맛집',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: '#감정을파고드는',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: '#빨간맛궁금해허니',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: '#당신의기숙사는',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: '#미친상상력의비밀',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: '#잔혹한',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: '#심장마비오는',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
];

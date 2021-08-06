// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: "눈을 떠보니 당신은 낯선 도시의 한복판이였다. 판타지 세계 같은데.... 이제 어떡하지!?!?",
    answers: [
      {
        // briggs, color, letter
        type: 'J',
        content: '거리를 배회 하며 분석한다'
      },
      {
        type: 'P',
        content: '여관을 찾는다'
      },

    ]
  },
  // question #2
  {
    question: '이 세계에 정착한 당신은 생활비를 위해 던전 공략에 나서려고 한다. 둘중에 누가 더 맘에 들어?',
    answers: [
      {
        // briggs, color, letter
        type: 'F',
        content: '길드까지 안내해준 친절한 전사'
      },
      {
        type: 'T',
        content: '냉철하지만 스펙은 화려한 대마법사'
      },
    
    ]
  },
  // question #3
  {
    question: '파티를 결성해 용의 숲을 탐험중인 당신! 그런데 팀의 분위기가 다소 어색한것 같다. 어떻게 할까?',
    answers: [
      {
        // briggs, color, letter
        type: 'E',
        content: '대화를 이끌며 분위기를 주도한다'
      },
      {
        type: 'I',
        content: '동료에게 집중하며 질문에 대답한다'
      },
     
    ]
  },
  // question #4
  {
    question: "숲의 한가운데서 새로운 던전을 발견했다! 지금 들어가면 아이템을 독식 할 수 있을 것 같은데.. 어떡하지..?",
    answers: [
      {
        // briggs, color, letter
        type: 'J',
        content: '철저하게 계획을 짜서 도전한다.'
      },
      {
        type: 'P',
        content: '일단 동료를 믿고 도전해보자.'
      },
   
    ]
  },
  // question #5
  {
    question: '던전에서 고블린을 만났다! 약한 몬스터 지만 평범한 고블린과는 다르게 푸른 비늘이 덮혀 있다. 어떻게 할까?',
    answers: [
      {
        // briggs, color, letter
        type: 'S',
        content: '잠깐 멈추고 몬스터 도감을 살펴본다'
      },
      {
        type: 'N',
        content: '살짝만 공격한뒤 반응을 살피자'
      },
      
    ]
  },
  // question #6
  {
    question: '블루 고블린을 쓰러트린 직후에 울음소리가 들려왔다. 새끼 고블린 인 것 같은데.. 어떡하지..?',
    answers: [
      {
        // briggs, color, letter
        type: 'T',
        content: '내버려두면 해를 끼칠 것이다. 없앤다'
      },
      {
        type: 'F',
        content: '새끼라서 죄는 없다. 풀어준다'
      },
   
    ]
  },
  // question #7
  {
    question: '멀리서 용의 울음소리가 들려 온다. 보아하니 이 근처에 보물이 있을 것 같은데.. 어떡할까?',
    answers: [
      {
        // briggs, color, letter
        type: 'P',
        content: '금은보화는 포기 못하지! 직진 하자!'
      },
      {
        type: 'J',
        content: '용을 만나면 너무 위험해! 피해 가자!'
      },
     
    ]
  },
  // question #8
  {
    question: '던전 깊숙한 곳으로 들어가자 보물상자 안에 두개의 아이템이 있었다. 어떤 걸 선택할까?',
    answers: [
      {
        // briggs, color, letter
        type: 'S',
        content: '비싸 보이는 아이템. 다이아 포션'
      },
      {
        type: 'N',
        content: '예사롭지 않은 아이템. 에메랄드 포션'
      },
     
    ]
  },
  // question #9
  {
    question: '던전 탐색이 끝나 이제야 쉴 시간이 생겼다. 어떤 휴식을 취할까?',
    answers: [
      {
        // briggs, color, letter
        type: 'E',
        content: '동료와 함께 시원한 맥주한잔 !'
      },
      {
        type: 'I',
        content: '집에서 맛있는 거 먹으면서 휴식!'
      },
      
    ]
  },
  // question #10
  {
    question: '다음날 아침. 방문을 나서는데 여관에 도둑이 들었다는 소리가 들려온다! 어떤 행동을 취할까 ?',
    answers: [
      {
        // briggs, color, letter
        type: 'T',
        content: '도둑으로 의심되는 사람을 쫓아간다'
      },
      {
        type: 'F',
        content: '부상자를 확인한다'
      },
   
    ]
  },
  // question #11
  {
    question: '알고보니 없어진게 내 아이템 이였다! 어떻게 얻은 포션인데! 어떡하지?',
    answers: [
      {
        // briggs, color, letter
        type: 'E',
        content: '사람들에게 수소문해서 도둑을 찾는다'
      },
      {
        type: 'I',
        content: '내 나름대로 추리해서 도둑을 찾는다'
      },
    
    ]
  },
  // question #12
  {
    question: '간신히 도둑을 잡아 아이템을 돌려 받았다. 알고보니 이게 엄청나게 희귀한 포션이라고 하는데.. 어떻게 하지?',
    answers: [
      {
        // briggs, color, letter
        type: 'S',
        content: '경매장에서 비싼 값을 주고 판다!'
      },
      {
        type: 'N',
        content: '어떤 일이 일어날까..?　궁금하다 써보자!'
      },
    ]
  }
 
]

export default quizQuestions

// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: '비행기 옆자리에 마음에 드는 이상형이 있다. 어쩌다 대화를 시작한 나는',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: '풍부한 공감과 리액션을 해준다'
      },
      {
        type: ' ',
        content: '이것저것 궁금한 것을 질문한다'
      },
      {
        type: 'J,Brown,D,No',
        content: "신경쓰지 않고 내할일 한다"
      }
    ]
  },
  // question #2
  {
    question: '갑작스러운 여행으로 혼자 오게 된 낯선 장소, 이런 곳에서 나는',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Green,C',
        content: '혼자 조용히 여행을 즐긴다'
      },
      {
        type: ' ',
        content: '여행 중 만난 사람들과 쉽게 친해진다'
      },
      {
        type: 'N,Green,C,No',
        content: "내 마음대로 돌아다닌다"
      }
    ]
  },
  // question #3
  {
    question: '여행지에서 친구가 평소 필요로 했던 선물이 생각날 때 나는',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Red,A',
        content: '난 역시 섬세한 사람이야'
      },
      {
        type: ' ',
        content: '나는 역시 기억력이 좋아'
      },
      {
        type: 'S,Red,A,No',
        content: "사기 귀찮으니 다음에 사야겠다"
      }
    ]
  },
  // question #4
  {
    question: "돌아온 숙소, 게스트 하우스 사람들과 맥주를 마시러 온 나는",
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: '묵묵히 사람들의 이야기를 듣는다'
      },
      {
        type: ' ',
        content: '대화를 주도하며 분위기를 이끈다'
      },
      {
        type: 'J,Brown,D,No',
        content: "일단 안주먼저 먹고 대화를 시작한다"
      }
    ]
  },
  // question #5
  {
    question: '늦은 저녁, 룸메이트가 오늘 크게 넘어졌다고 얘기할 때 나는',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Brown,C',
        content: '내가 다친 것처럼 공감하며 걱정을 한다'
      },
      {
        type: ' ',
        content: '왜 다쳤는지 물어보고 근처 약국을 알려준다'
      },
      {
        type: 'T,Brown,C,No',
        content: "아이고 왜 그랬어 하며 다그친다"
      }
    ]
  },
  // question #6
  {
    question: '잠들기 전, 가족과 통화에서 나는',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: '구체적으로 있었던 일을 얘기한다'
      },
      {
        type: ' ',
        content: '오늘 느꼈던 큰 감정을 얘기한다'
      },
      {
        type: 'I,Green,C,No',
        content: "용돈을 달라고 한다"
      }
    ]
  },
  // question #7
  {
    question: '룸메이트가 어제 다녀왔던 맛집의 위치를 물어본다',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: '숙소에서부터 가는 법을 알려준다'
      },
      {
        type: ' ',
        content: '식당 옆에 있는 큰 건물을 알려준다'
      },
      {
        type: 'E,Blue,B,No',
        content: "구글 지도로 좌표를 찍어준다"
      }
    ]
  },
  // question #8
  {
    question: '멍~ 때리며 버스를 기다리는 중, 나는 어떤 생각을 할까?',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: '"오늘 저녁은..." 남은 일정에 대해 생각한다'
      },
      {
        type: ' ',
        content: '"내가 여기 산다면..." 의식의 흐름에 따라 상상의 나래를 펼친다'
      },
      {
        type: 'E,Blue,B,No',
        content: '"사람은 하늘을 날 수 있는건가..?" 생각해본다...' 
      }
    ]
  },
  // question #9
  {
    question: '아직 여행 마지막 날의 일정을 짜지 못한 나는',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: '미루다 전날 잠들기 직전에 짠다'
      },
      {
        type: ' ',
        content: '틈틈히 미리 루트를 구상해둔다'
      },
      {
        type: 'F,Blue,B,No',
        content: "에라 모르겠다 여행은 즉흥이지~"
      }
    ]
  },
  // question #10
  {
    question: '미리 찾아보았던 식당이 문을 닫았다. 나의 선택은?',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: '맛있어 보이는 옆 식당에 들어간다'
      },
      {
        type: ' ',
        content: '맛집을 다시 검색해서 찾아본다'
      },
      {
        type: 'P,Red,A,No',
        content: "김치볶음밥 먹고 싶네"
      }
    ]
  },
  // question #11
  {
    question: '여행 중, 게스트하우스에서 가볍게 인사만 했던 사람과 우연히 마주친 나는?',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: '간단히 인사만 하고 지나간다'
      },
      {
        type: ' ',
        content: '반가워하며 가벼운 대화를 이어간다'
      },
      {
        type: 'P,Red,A,No',
        content: "누구세요? 기억하지 못한다"
      }
    ]
  },
  // question #12
  {
    question: '마지막 여행지를 향해 걸어가던 중 새로운 장소를 발견한 나는',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,C',
        content: '어떤 장소인지 궁금하다. 일단 가서 구경한다'
      },
      {
        type: ' ',
        content: '우선 남은 일정에 무리가 없는지 고려해본다'
      },
      {
        type: 'S,Brown,C,No',
        content: "어떤 장소인지 면밀히 탐색한다"
      }
    ]
  }
 
]

export default quizQuestions

import { subjectLangPack } from "../Data/subjectLists"

const splitEachLang = (langObj, langList) => {
  let newObj = {}
  //langObj의 key를 가져와서 나중에 참조용 인덱스로 사용
  let langObjKeys = Object.keys(langObj)

  //langList내의 언어별로 객체 생성
  for(let i=0; i<langList.length; i++){
    let lang = langList[i]
    newObj[lang] = {}

    //langObj에서 해당 언어의 value를 가져옴.
    for (let j=0; j<langObjKeys.length; j++) {
      let value = langObj[langObjKeys[j]][lang];
        newObj[lang] = {
          ...newObj[lang],
          [langObjKeys[j]] : value
        } 
    }
  }
  return newObj
}

const langList = ["ko", "en"]


const langPack:{[k:string]:{ko:string, en : string}} = {
  "라이어 게임" : {
    ko : "라이어 게임",
    en : "Liar Game",
  },
  "시작버튼을 눌러 게임을 시작하세요" : {
    ko : "시작버튼을 눌러 게임을 시작하세요",
    en : "Press button to start."
  },
  "시작하기" : {
    ko : "시작하기",
    en : "Start"
  },
  "테마" : {
    ko : "테마",
    en : "Theme"
  },
  "변경" : {
    ko : "변경",
    en : "Change"
  },
  "다음단계로" : {
    ko : "다음단계로",
    en : "Next step"
  },
  "인원 수" : {
    ko : "인원 수",
    en : "Players"
  },
  "제시어" : {
    ko : "제시어",
    en : "Subject"
  },
  "당신은 라이어입니다":{
    ko : "당신은 라이어입니다.",
    en : "You are the Liar."
  },
  "제시어는" : {
    ko : "제시어는",
    en : "The Subject is"
  },
  "입니다" : {
    ko : "입니다!",
    en : "!"
  },
  "아래 버튼을 눌러 역할을 확인해주세요" : {
    ko : "아래 버튼을 눌러 역할을 확인해주세요!",
    en : "Press button to check your role!"
  },
  "확인" : {
    ko : "확인",
    en : "Check"
  },
  "숨기기" : {
    ko : "숨기기",
    en : "Blind"
  },
  "라이어 선택" : {
    ko : "라이어 선택",
    en : "Guess Liar"
  },
  "라이어의 승리입니다" : {
    ko : "라이어의 승리입니다!",
    en : "The Liar wins!"
  },
  "라이어의 패배입니다" : {
    ko : "라이어의 패배입니다!",
    en : "The Liar Loses."
  },
  "라이어는 " : {
    ko : "라이어는 ",
    en : "The Liar was No."
  },
  "번이었습니다" : {
    ko : "번이었습니다!",
    en : "!"
  },
  "처음으로 돌아가기" : {
    ko : "처음으로 돌아가기",
    en : "Restart the game"
  },
  "닫기" : {
    ko : "닫기",
    en : "Close"
  },
  "선택한 단어" : {
    ko : "선택한 단어",
    en : "Chosen"
  },
  "한" : {
    ko : "한",
    en : "한"
  },
  "en" : {
    ko : "En",
    en : "En"
  },
  "언어" : {
    ko : "언어",
    en : "Language"
  },
  "도움말" : {
    ko : "도움말",
    en : "help"
  },
  "한명씩 돌아가며 제시어를 설명한 후" : {
    ko : "한명씩 돌아가며 제시어를 설명한 후",
    en : "Explain the subject one by one"
  },
  "라이어를 지목하세요" : {
    ko : "라이어를 지목하세요.",
    en : "and after that, choice the Liar."
  },
  '라이어가 선택되었습니다' :{
    ko : '라이어가 선택되었습니다.',
    en : 'The Liar is chosen.'
  },
  '제시어를 맞추면 승리합니다':{
    ko : '제시어를 맞추면 승리합니다.',
    en : 'Get the subject right to win.'
  },
  ...subjectLangPack
}
//splitEachLang(langPack, langList)

export const setLanguagePack = () => splitEachLang(langPack, langList)



# 라이어게임

## React Native와 TypeScript를 연습하기 위해 시작한 토이프로젝트 게임입니다.



### 프로젝트 진행 회고.
* 이 프로젝트를 통하여 Expo를 이용해 React Native프로젝트를 생성하고 빌드하여 플레이스토어에 배포하는 경험을 하였습니다. 

* 플레이스토어에서 제공하는 여러 통계를 보며 다운로드수를 늘릴 방법을 고민하며, 언어선택 기능을 추가하여 전세계에 출시하며 최대 300%의 다운로드 수 증가를 경험하였습니다. 

### 프로젝트를 추후 개선 점
* 다음 프로젝트에서는 Expo없이 프로젝트를 진행해봐야겠다.

* React Native의 Native적인 기능을 좀 더 활용하는 연습을 해야겠다.

## 현재 플레이스토어에서 다운로드 할 수 있습니다.
### 링크 : https://play.google.com/store/apps/details?id=com.liargame.test&hl=ko&gl=US
![KakaoTalk_Photo_2021-12-08-22-47-54](https://user-images.githubusercontent.com/61589338/145219326-0559c54f-0077-4a99-8125-75ef3af04fe3.png)

+ 버전 4 추가 기능
  + 언어 선택기능을 추가하였습니다. (한/영 선택가능)
  + 도움말 버튼을 추가하여 클릭시 모달화면으로 플레이 방법을 게임내에서 확인할 수 있습니다.

### 언어 설정
사용 라이브러리 : i18n-js (링크 : https://github.com/fnando/i18n-js)

* ### 언어팩 구현 방식
  ### 
  ```javascript
  //언어팩에 추가시에는 아래 형태로 작성하여 유지보수가 편하게 했습니다.
    "라이어 게임" : {
      ko : "라이어 게임",
      en : "Liar Game",
    },

  //i18n-js라이브러리를 사용하기 위해 데이터를 아래의 형태로 포맷팅하는 함수를 작성하였습니다.
    ko : {
      "라이어 게임" : "라이어 게임"
    }, 
    en : {
      "라이어 게임" : "Liar Game"
    }
  ```
  ### 언어 데이터 포멧팅 함수

  ```javascript
  const splitEachLang = (langObj, langList) => {
    let newObj = {}
    //langObj의 key를 가져와서 나중에 참조용 인덱스로 사용
    let langObjKeys = Object.keys(langObj)

    //langList내의 언어별로 newObj의 Key생성
    for(let i=0; i<langList.length; i++){
      let lang = langList[i]
      newObj[lang] = {}

      //langObj에서 해당 언어의 value를 가져와서 포멧팅.
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
  ```

* ### 제시어 추가시 번역 유무 확인
  ```javascript
  //제시어를 추가할때는 아래의 리스트의 형태로 작성합니다.
  '전자제품' : [
        '스마트폰', '태블릿', '청소기', '빔 프로젝터', '에어팟', '보조 배터리', '블루투스 스피커', '가습기', '컴퓨터', '전동 킥보드', '스마트 워치', '에어컨', '히터', '리모컨', '셋톱박스'
    ],
  //이때 제시어에 대한 번역 유무를 확인하는 테스트용 함수를 작성하였습니다.
  //해당 함수 작성으로 실수를 미연에 방지할수 있게 했습니다.
  const checkSubjectLangPack = (subjects, langPack) => {
    const langObjKeys = Object.keys(subjects);
    const langPackKeys = Object.keys(langPack);
    for(let i=0; i<langObjKeys.length; i++){
      //제시어의 카테고리가 번역 팩에 있는지 먼저 확인. 없으면 에러처리
      if(langPackKeys.includes(langObjKeys[i])){
          for(let j=0; j<subjects[langObjKeys[i]].length; j++){
              //제시어가 번역 팩에 있는지 확인. 없으면 에러처리
              if(!langPackKeys.includes(subjects[langObjKeys[i]][j])){
                  throw `langpack doesn't have ${subjects[langObjKeys[i]][j]}`
              }
          }
      }
      else{
          throw `langpack doesn't have ${langObjKeys[i]}`
      }
    } 
  }
  ```
### 시작 화면
![Simulator Screen Shot - iPhone 8 - 2021-12-02 at 23 05 54](https://user-images.githubusercontent.com/61589338/145217885-6a790e94-3467-431b-b325-1bba8fe94d64.png)


### 기타 플레이 화면들

![Simulator Screen Shot - iPhone 8 - 2021-12-02 at 23 06 00](https://user-images.githubusercontent.com/61589338/145219740-bd0e3f89-8cd5-48a1-9631-936ea8a8524b.png)
![Simulator Screen Shot - iPhone 8 - 2021-12-08 at 22 54 46](https://user-images.githubusercontent.com/61589338/145220217-e40982be-fdd7-4679-a42c-d19958b6dffa.png)
![Simulator Screen Shot - iPhone 8 - 2021-12-02 at 23 06 04](https://user-images.githubusercontent.com/61589338/145219844-c0e7dc3e-ff79-464f-9635-d64c6c18a617.png)
![Simulator Screen Shot - iPhone 8 - 2021-12-02 at 23 06 07](https://user-images.githubusercontent.com/61589338/145219851-4f3dd848-4fc8-4243-b5d1-e703c47c89de.png)
![Simulator Screen Shot - iPhone 8 - 2021-12-02 at 23 06 12](https://user-images.githubusercontent.com/61589338/145219864-bce7e6f1-8f9c-4e02-8b27-597f01575703.png)
![Simulator Screen Shot - iPhone 8 - 2021-12-02 at 23 06 16](https://user-images.githubusercontent.com/61589338/145219872-e53aab0c-71c1-4733-8348-af9050093a4b.png)


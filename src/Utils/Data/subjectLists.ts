

const checkSubjectLangPack = (subjects, langPack) => {
    const langObjKeys = Object.keys(subjects);
    const langPackKeys = Object.keys(langPack);
    //console.log(langPackKeys)
    for(let i=0; i<langObjKeys.length; i++){
        if(langPackKeys.includes(langObjKeys[i])){
            for(let j=0; j<subjects[langObjKeys[i]].length; j++){
                //console.log(subjects[langObjKeys[i]][j])
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


export const subjectDatas:{[k:string]:string[]} = {
    '전자제품' : [
        '스마트폰', '태블릿', '청소기', '빔 프로젝터', '에어팟', '보조 배터리', '블루투스 스피커', '가습기', '컴퓨터', '전동 킥보드', '스마트 워치', '에어컨', '히터', '리모컨', '셋톱박스'
    ],
    '동물' : [
        '얼룩말', '코끼리', '사자', '원숭이', '오랑우탄', '기린', '코뿔소', '다람쥐', '말', '버팔로', '치타', '도마뱀', '하이에나', '하마', '사슴'
    ],
    '음식' : [
        '쌀국수', '샐러드', '파스타', '스테이크', '라면', '후라이드 치킨', '햄버거', '피자', '핫도그', '프렌치 토스트', '케익', '타코', '바베큐', '스시', '딤섬'
    ],
    '팝 가수' : [
        '저스틴 비버', '블랙핑크', '에드 시런', '에미넴', '아리아나 그란데', '방탄소년단', '테일러 스위프트', '케이티 페리', '리한나', '빌리 아일리시', '원디렉션', '마룬파이브', '션 멘데스', '브루노 마스', '아델'
    ],
    '관광지' : [
        '그랜드 캐니언', '에펠탑', '자유의 여신상', '만리장성', '타지마할', '피라미드', '베네치아', '마추픽추', '타임스퀘어', '오페라 하우스', '피사의 사탑', '쿠알라룸푸르', '부르즈 할리파', '나이아가라 폭포', '타이베이 타워', '융프라우'
    ],
    '직업' : [
        '패션 디자이너', '화가', '소설가', '택시기사', '간호사', '모델', '교수', '전문 경영인', '가수', '축구팀 감독', '배우', '댄서', '변호사', '요리사', '경찰'
    ],
    '영화' : [
        '쇼생크 탈출', '대부', '배트맨', '반지의 제왕', '인셉션', '레옹', '센과 치히로의 행방불명', '매드맥스', '올드보이', '이웃집 토토로', '300', '분노의 질주', '해리포터', '아바타', '인터스텔라'
    ],
    '나라 이름' : [
        '가나', '뉴질랜드', '도미니카 공화국', '체코', '루마니아', '모나코', '미얀마', '불가리아', '세르비아', '케냐', '크로아티아', '파나마', '피지', '짐바브웨', '에티오피아', '아일랜드'
    ],
    '신체 부위' : [
        '간', '손목', '위', '갑상선', '쓸개', '성대', '옆구리', '무릎', '십자인대', '척추', '신장', '심장', '코', '발가락', '배꼽'
    ],
    '하계 스포츠' : [
        '태권도', '펜싱', '럭비', '축구', '트라이애슬론', '조정', '테니스', '체조', '사격', '농구', '승마', '수영', '권투', '골프', '역도'
    ],
    '과일' :[
        '멜론', '용과', '석류', '레몬', '키위', '무화과', '귤', '감', '자두', '머루', '오디', '코코넛', '라즈베리', '아보카도', '칼라만시'
    ],

}

export const  subjectLangPack : {[k:string]:{ko:string, en : string}} = {
    '과일' : { ko: '과일', en: 'Fruits' },
    '멜론': { ko: '멜론', en: 'Melon' },
    '용과': { ko: '용과', en: 'Dragon Fruit' },
    '석류': { ko: '석류', en: 'Pomegranate' },
    '레몬': { ko: '레몬', en: 'Lemon' },
    '키위': { ko: '키위', en: 'Kiwi' },
    '무화과': { ko: '무화과', en: 'Fig' },
    '귤': { ko: '귤', en: 'Mandarin' },
    '감': { ko: '감', en: 'Persimmon' },
    '자두': { ko: '자두', en: 'Plum' },
    '머루': { ko: '머루', en: 'Muscadine' },
    '오디': { ko: '오디', en: 'Mulberry' },
    '코코넛': { ko: '코코넛', en: 'Coconut' },
    '라즈베리': { ko: '라즈베리', en: 'Raspberry' },
    '아보카도': { ko: '아보카도', en: 'Avocado' },
    '칼라만시': { ko: '칼라만시', en: 'Calamansi' },
    '팝 가수' : { ko: '팝 가수', en: 'Pop singers' },
    '저스틴 비버': { ko: '저스틴 비버', en: 'Justin Bieber' },
    '블랙핑크': { ko: '블랙핑크', en: 'BLACKPINK' },
    '에드 시런': { ko: '에드 시런', en: 'Ed Sheeran' },
    '에미넴': { ko: '에미넴', en: 'Eminem' },
    '아리아나 그란데': { ko: '아리아나 그란데', en: 'Ariana Grande' },
    '방탄소년단': { ko: '방탄소년단', en: 'BTS' },
    '테일러 스위프트': { ko: '테일러 스위프트', en: 'Taylor Swift' },
    '케이티 페리': { ko: '케이티 페리', en: 'Katy Perry' },
    '리한나': { ko: '리한나', en: 'Rihanna' },
    '빌리 아일리시': { ko: '빌리 아일리시', en: 'Billie Eilish' },
    '원디렉션': { ko: '원 디렉션', en: 'One Direction' },
    '마룬파이브': { ko: '마룬 파이브', en: 'Maroon 5' },
    '션 멘데스': { ko: '션 멘데스', en: 'Shawn Mendes' },
    '브루노 마스': { ko: '브루노 마스', en: 'Bruno Mars' },
    '아델': { ko: '아델', en: 'Adel' },
    '하계 스포츠' : {ko : '하계 스포츠', en: 'Summer sports'},
    '태권도': { ko: '태권도', en: 'Taekwondo' },
    '펜싱': { ko: '펜싱', en: 'Fencing' },
    '럭비': { ko: '럭비', en: 'Rugby' },
    '축구': { ko: '축구', en: 'Soccer' },
    '트라이애슬론': { ko: '트라이애슬론', en: 'Triathlon' },
    '조정': { ko: '조정', en: 'Rowing' },
    '테니스': { ko: '테니스', en: 'Tennis' },
    '체조': { ko: '체조', en: 'Gymnast' },
    '사격': { ko: '사격', en: 'Shooting' },
    '농구': { ko: '농구', en: 'Basketball' },
    '승마': { ko: '승마', en: 'Riding' },
    '수영': { ko: '수영', en: 'Swimming' },
    '권투': { ko: '권투', en: 'Boxing' },
    '골프': { ko: '골프', en: 'Golf' },
    '역도': { ko: '역도', en: 'Weightlifting' },
    '간': { ko: '간', en: 'Liver' },
    '손목': { ko: '손목', en: 'Wrist' },
    '위': { ko: '위', en: 'Stomach' },
    '갑상선': { ko: '갑상선', en: 'Thyroid' },
    '쓸개': { ko: '쓸개', en: 'Gall bladder' },
    '성대': { ko: '성대', en: 'Vocal cords' },
    '옆구리': { ko: '옆구리', en: 'Side' },
    '무릎': { ko: '무릎', en: 'Knee' },
    '십자인대': { ko: '십자인대', en: 'Cruciate ligaments' },
    '척추': { ko: '척추', en: 'Backbone' },
    '신장': { ko: '신장', en: 'Kidney' },
    '심장': { ko: '심장', en: 'Heart' },
    '코': { ko: '코', en: 'Nose' },
    '발가락': { ko: '발가락', en: 'Toe' },
    '배꼽': { ko: '배꼽', en: 'Navel' },
    '신체 부위' : {ko : '신체 부위', en: 'Body part'},
    '나라 이름' : {ko : '나라 이름', en:'Country'},
    '관광지' : {ko : '관광지', en: 'Tourist spot'},
    '가나': { ko: '가나', en: 'Ghana' },
    '뉴질랜드': { ko: '뉴질랜드', en: 'New Zealand' },
    '도미니카 공화국': { ko: '도미니카 공화국', en: 'Dominican Republic' },
    '체코': { ko: '체코', en: 'Czech Republic' },
    '루마니아': { ko: '루마니아', en: 'Romania' },
    '모나코': { ko: '모나코', en: 'Monaco' },
    '미얀마': { ko: '미얀마', en: 'Myanmar' },
    '불가리아': { ko: '불가리아', en: 'Bulgaria' },
    '세르비아': { ko: '세르비아', en: 'Serbia' },
    '케냐': { ko: '케냐', en: 'Kenya' },
    '크로아티아': { ko: '크로아티아', en: 'Croatia' },
    '파나마': { ko: '파나마', en: 'Panama' },
    '피지': { ko: '피지', en: 'Republic of Fiji' },
    '짐바브웨': { ko: '짐바브웨', en: 'Zimbabwe' },
    '에티오피아': { ko: '에티오피아', en: 'Ethiopia' },
    '아일랜드': { ko: '아일랜드', en: 'Ireland' },
    '300': { ko: '300', en: '300' },
    '쇼생크 탈출': { ko: '쇼생크 탈출', en: 'Shawshank Redemption' },
    '대부': { ko: '대부', en: 'Godfather' },
    '배트맨': { ko: '배트맨', en: 'Batman' },
    '반지의 제왕': { ko: '반지의 제왕', en: 'The Lord of the Rings' },
    '인셉션': { ko: '인셉션', en: 'Inception' },
    '레옹': { ko: '레옹', en: 'Leon' },
    '센과 치히로의 행방불명': { ko: '센과 치히로의 행방불명', en: 'Spirited away' },
    '매드맥스': { ko: '매드맥스', en: 'Mad Max' },
    '올드보이': { ko: '올드보이', en: 'Oldboy' },
    '이웃집 토토로': { ko: '이웃집 토토로', en: 'My Neighbor Totoro' },
    '분노의 질주': { ko: '분노의 질주', en: 'The Fast and the Furious' },
    '해리포터': { ko: '해리포터', en: 'Harry Potter' },
    '아바타': { ko: '아바타', en: 'Avatar' },
    '인터스텔라': { ko: '인터스텔라', en: 'Interstellar' },
    '패션 디자이너': { ko: '패션 디자이너', en: 'Fashion designer' },
    '화가': { ko: '화가', en: 'Painter' },
    '소설가': { ko: '소설가', en: 'Novelist' },
    '택시기사': { ko: '택시기사', en: 'Taxi driver' },
    '간호사': { ko: '간호사', en: 'Nurse' },
    '모델': { ko: '모델', en: 'Model' },
    '교수': { ko: '교수', en: 'Professor' },
    '전문 경영인': { ko: '전문 경영인', en: 'Executive' },
    '가수': { ko: '가수', en: 'Singer' },
    '축구팀 감독': { ko: '축구팀 감독', en: 'Soccer coach' },
    '배우': { ko: '배우', en: 'Actor' },
    '댄서': { ko: '댄서', en: 'Dancer' },
    '변호사': { ko: '변호사', en: 'Lawyer' },
    '요리사': { ko: '요리사', en: 'Chef' },
    '경찰': { ko: '경찰', en: 'Police officer' },
    '그랜드 캐니언': { ko: '그랜드 캐니언', en: 'Grand Canyon' },
    '에펠탑': { ko: '에펠탑', en: 'The Eiffel Tower' },
    '자유의 여신상': { ko: '자유의 여신상', en: 'Statue of Liberty' },
    '만리장성': { ko: '만리장성', en: 'The Great Wall' },
    '타지마할': { ko: '타지마할', en: 'Taj Mahal' },
    '피라미드': { ko: '피라미드', en: 'Egyptian pyramids' },
    '베네치아': { ko: '베네치아', en: 'Venice' },
    '마추픽추': { ko: '마추픽추', en: 'Machu Picchu' },
    '타임스퀘어': { ko: '타임스퀘어', en: 'Times Square' },
    '오페라 하우스': { ko: '오페라 하우스', en: 'Sydney Opera House' },
    '피사의 사탑': { ko: '피사의 사탑', en: 'The Leaning Tower of Pisa' },
    '쿠알라룸푸르': { ko: '쿠알라룸푸르', en: 'Kuala Lumpur' },
    '부르즈 할리파': { ko: '부르즈 할리파', en: 'Burj Khalifa' },
    '나이아가라 폭포': { ko: '나이아가라 폭포', en: 'Niagara Falls' },
    '타이베이 타워': { ko: '타이베이 타워', en: 'TAIPEI 101' },
    '융프라우': { ko: '융프라우', en: 'Jungfrau' },
    '쌀국수': { ko: '쌀국수', en: 'Rice noodles' },
    '샐러드': { ko: '샐러드', en: 'Salad' },
    '파스타': { ko: '파스타', en: 'Pasta' },
    '스테이크': { ko: '스테이크', en: 'Steak' },
    '라면': { ko: '라면', en: 'Ramen' },
    '후라이드 치킨': { ko: '후라이드 치킨', en: 'Fried chicken' },
    '햄버거': { ko: '햄버거', en: 'Hamburger' },
    '피자': { ko: '피자', en: 'Pizza' },
    '핫도그': { ko: '핫도그', en: 'Hot dog' },
    '프렌치 토스트': { ko: '프렌치 토스트', en: 'French toast' },
    '케익': { ko: '케익', en: 'Cake' },
    '타코': { ko: '타코', en: 'Tacos' },
    '딤섬': { ko: '딤섬', en: 'Dimsum' },
    '바베큐': { ko: '바베큐', en: 'Barbecue' },
    '스시': { ko: '스시', en: 'Sushi' },
    '얼룩말' : {ko : '얼룩말',en : 'Zebra'}, 
    '코끼리': { ko: '코끼리', en: 'Elephant' },
    '사자': { ko: '사자', en: 'Lion' },
    '원숭이': { ko: '원숭이', en: 'Monkey' },
    '오랑우탄': { ko: '오랑우탄', en: 'Orangutan' },
    '기린': { ko: '기린', en: 'Giraffe' },
    '코뿔소': { ko: '코뿔소', en: 'Rhinoceros' },
    '다람쥐': { ko: '다람쥐', en: 'Squirrel' },
    '말': { ko: '말', en: 'Horse' },
    '버팔로': { ko: '버팔로', en: 'Buffalo' },
    '치타': { ko: '치타', en: 'Cheetah' },
    '도마뱀': { ko: '도마뱀', en: 'Lizard' },
    '하이에나': { ko: '하이에나', en: 'Hyena' },
    '하마': { ko: '하마', en: 'Hippopotamus' },
    '사슴': { ko: '사슴', en: 'Deer' },
    '물건' : { ko: '물건', en : 'Stuffs' },
    '동물' : { ko : '동물', en : 'Animals' },
    '음식' : { ko : '음식', en : 'Foods' },
    '장소' : { ko : '장소', en : 'Places' },
    '직업' : { ko : '직업', en : 'Jobs' },
    '영화' : { ko : '영화', en : 'Movies' },
    '전자제품' : { ko : '전자제품', en : 'Electronics' },
    '스마트폰' : { ko : '스마트폰', en : 'Smartphone' },
    '태블릿' : { ko : '태블릿', en : 'Tablet' },
    '청소기' : { ko : '청소기', en : 'Vacuum cleaner' }, 
    '빔 프로젝터' : { ko : '빔 프로젝터',   en : 'Projector' }, 
    '에어팟' : { ko : '에어팟', en : 'Airpods' }, 
    '보조 배터리' : { ko : '보조 배터리',   en : 'Power bank' }, 
    '블루투스 스피커' : { ko : '블루투스 스피커',   en : 'Bluetooth speaker' },
    '가습기' : { ko : '가습기', en : 'Humidifier' }, 
    '컴퓨터' : { ko : '컴퓨터', en : 'Computer' }, 
    '전동 킥보드' : { ko : '전동 킥보드', en : 'Electric scooter' }, 
    '스마트 워치' : { ko : '스마트 워치', en : 'Smart watch' }, 
    '에어컨' : { ko : '에어컨', en : 'Air conditioner' }, 
    '히터' : { ko : '히터', en : 'Heater' }, 
    '리모컨' : { ko : '리모컨', en : 'Remote control' }, 
    '셋톱박스' : { ko : '셋톱박스', en : 'Set-Top Box' }
}


export const checkSubjectLangPackError = () => checkSubjectLangPack(subjectDatas,subjectLangPack)
import styled from "styled-components/native";
import { Modal } from "../../Organisms/Modal/Modal";
import React from "react"
import { BtnBasic } from "../../Atoms/Button/BtnBasic";
import { TextComp } from "../../Atoms/Text/TextComp";
import { currentLocale, LangEN, LangKR } from "../../../Utils/LangPack/i18nConfig";



const BtnWrapper = styled.View`
  position: absolute;
  top: 2%;
  left : 5%;
  z-index: 2;
`

const InnerWrapper = styled.View`
  width: 90%;
  height: 95%;
  border-radius: 20px;
  background-color: ${p=>p.theme["gray"]};
  padding : 16px;
`

const HelpScroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`

const HOWTOPLAY_KR = `
1. 카테고리 및 인원수를 정합니다(최소 3명 최대 8명).

2. 역할을 배정받습니다. 라이어가 아닌 사람은 제시어를 받습니다.

3. 확인이 되었으면 버튼을 한번 더 눌러 화면을 가리고 옆사람에게 스마트폰을 건냅니다.

4. 모든플레이어가 제시어 및 역할을 확인하면 게임이 시작됩니다.

5. 한 사람씩 차례대로 제시어에 대한 설명을 합니다. 이때 라이어는 제시어를 모르지만, 본인이 라이어임을 들키지 않게 제시어를 유추하며 설명을 합니다.

6. 몇 차례를 진행한 후 라이어인 사람에게 투표를 합니다.(3차례 진행 후 투표하는게 무난합니다.)

7. 라이어 아닌 사람이 뽑히거나, 라이어가 제시어를 맞히면 라이어의 승리, 라이어가 제시어를 못 맞히면 나머지 플레이어들의 승리입니다.

제시어는 개발자가 임의로 정했으며 원하는 제시어가 있으면 이메일로 보내주세요.
`

const HOWTOPLAY_EN = `
1. Choose a theme and the number of players.

2. Check your role. Players get subject except the Liar.

3. After checking your role, press the blind button and  pass the phone to the next player.

4. You can start the game when all players know each role.

5. Players explain the subject one by one. Although the Liar doesn’t know the subject, imagine or guess and explain it.

6. After several turns(3 turns are good), vote for a player who seems to be a Liar.

7. If the liar is not chosen or the Liar gets the subject right, the Liar wins. But the Liar is chosen and gets the subject wrong, Liar loses.

If you have any subject you want , please contact me by email.
`

export const BasicHelp = ({modal, setModal}) => {
  return (
    <>
      <BtnWrapper>
        <BtnBasic onPress={()=>setModal(prev=>!prev)} t={"도움말"}/>
      </BtnWrapper>
      {modal &&
        <Modal>
        <InnerWrapper>
          <HelpScroll>  
            {(currentLocale() === LangKR) && <TextComp t={HOWTOPLAY_KR}/>}  
            {(currentLocale() === LangEN) && <TextComp t={HOWTOPLAY_EN}/>}
          </HelpScroll>
          <BtnBasic onPress={()=>setModal(prev=>!prev)} t={"닫기"} m={"10px 0 0 0"}/>
        </InnerWrapper>
        </Modal>
      }
    </>
  )
}
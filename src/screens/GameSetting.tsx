import React from "react";
import { Counter } from "../components/Molecules/Counter";
import { BtnBasic } from "../components/Atoms/Button/BtnBasic";
import { ColumnWrapper } from "../components/Atoms/Layout/ColumnWrapper";
import { SubjectSelecter } from "../components/Organisms/Subject/SubjectSelecter";
import { subjectDatas } from "../Utils/Data/subjectLists";
import { TextComp } from "../components/Atoms/Text/TextComp";
import { FlexWrapper } from "../components/Atoms/Layout/FlexWrapper";



type props = {
    playerCnt:number,
    setPlayerCnt:Function,
    selectModal:boolean,
    setSelectModal:Function,
    subjectText:string,
    setSubjectText:Function,
    toNextStep:Function
}


export const GameSetting: React.FC<props> = ({
    playerCnt,
    setPlayerCnt,
    selectModal,
    setSelectModal,
    subjectText,
    setSubjectText,
    toNextStep,
  }) => {



  const subjectHandler = (subject : string) => {
    setSubjectText(subject)
    setSelectModal(false)
  }

  const BtnSubject = () =>{
    setSelectModal(true)
  }


  return (
    <ColumnWrapper w={"100%"} h={"90%"} p={"10%"}>
        {!selectModal ?
        <>
          <ColumnWrapper w={"100%"} h={"80%"} jc={"flex-start"}>
            <FlexWrapper w={"100%"} h={"30%"}>
              <FlexWrapper>
                <TextComp t={`테마`} fc={"white"}/>
                <TextComp t={`:`} fc={"white"} m={"0 10px"}/>
                <TextComp t={`${subjectText}`} fc={"white"}/>
              </FlexWrapper>
              <BtnBasic t={"변경"} onPress={BtnSubject}/>
            </FlexWrapper>
            <Counter count={playerCnt} setCount={setPlayerCnt} display={!selectModal} />
          </ColumnWrapper>
          <BtnBasic t={"다음단계로"} onPress={()=>toNextStep()} w={"100%"}/>
        </>
        :
        <SubjectSelecter lists={subjectDatas} setSubjectText={subjectHandler} closeModal={()=>setSelectModal(false)}/>
      }
    </ColumnWrapper>
  );
};

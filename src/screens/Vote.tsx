import React from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { BtnBasic } from "../components/Atoms/Button/BtnBasic";
import { ColumnWrapper } from "../components/Atoms/Layout/ColumnWrapper";
import { TextComp } from "../components/Atoms/Text/TextComp";
import { WordWrapper } from "../components/Atoms/Text/WordWrapper";
import { subjectDatas } from "../Utils/Data/subjectLists";



const Wrapper = styled.View`
    width: 100%;
    height: 90%;
    padding: 10%;
`

const ResultWrapper = styled.View`
    width: 100%;
    height: 500px;
    justify-content: space-around;
    align-items: center;
`


const FlatWrapper = styled.FlatList`
	width: 100%;
	height: 100%;
	margin: auto;
	padding : 5%;
	background-color:${p=>p.theme["gray"]};
	display : flex;
	margin-bottom: 10px;
`


type props ={
    playerCnt :number
    liarNumber : number
    subjectText : string
    playWord : string
    resetGameStep : Function
}



export const Vote:React.FC<props> =({playerCnt, liarNumber, subjectText, playWord, resetGameStep}) => {

    const [voteDisplay, setVoteDisplay] = useState(true);
    const [liarGuess, setLiarGuess] = useState(false);
    const [voteResult, setVoteResult] = useState(false);
    const [liarSelect, setLiarSelect] = useState("")
    const [guessResult, setguessResult] = useState(false);


    const playerArray = Array.apply(null, Array(playerCnt)).map((val, idx) => idx);



    const selectLiarHander = (select:number) => {
        if(select === liarNumber){
            setVoteDisplay(false)
            setLiarGuess(true)
        }
        else if(select !== liarNumber){
            setVoteDisplay(false)
            setVoteResult(true)
        }
    }

    const guessLiarHandler = (select:string) => {
            setLiarGuess(false)
            setLiarSelect(select)
            setguessResult(true)
    }

    return(
        <Wrapper>
            
            {voteDisplay &&
                <>
                    <TextComp t={"라이어 선택"} fs={"30px"} m={"0 auto 20px auto"}/>
                    <FlatWrapper 
                    data={playerArray}
                    renderItem={({item}) => <WordWrapper t={+item+1} onPress={()=>selectLiarHander(+item)}/>}
                    keyExtractor={(item, index) => index.toString()}
                    />
                </>
            }

            {voteResult &&
                <ResultWrapper>
                    <TextComp t={"라이어의 승리입니다."} fs = {"30px"} fc={"red"}/>
                    <TextComp t={`라이어는 ${liarNumber + 1}번이었습니다!`} fs = {"20px"}/>
                    <BtnBasic t={"처음으로 돌아가기"} onPress={()=>resetGameStep()} w={"100%"}/>
                </ResultWrapper>
            }

            {liarGuess && 
                <>
                    <TextComp t={`테마 : ${subjectText}`} fs ={"30px"} m={"0 auto 20px auto"} />

                    <FlatWrapper 
                    data={subjectDatas[subjectText]}
                    renderItem={({item}) => <WordWrapper t={item} onPress={()=>guessLiarHandler(String(item))}/>}
                    keyExtractor={(item, index) => index.toString()}
                    />

                </>
            }

            {guessResult &&
                <ColumnWrapper w={"100%"} h={"60%"} jc={"space-around"}>
                    <TextComp t={(playWord === liarSelect) ? "라이어의 승리입니다!" : "라이어의 패배입니다."} fs = {"30px"} fc={"red"}/>
                    <ColumnWrapper>
                        <TextComp t={`제시어 : ${playWord}`} m={"0 0 20px 0"}/>
                        <TextComp t={`선택한 단어 : ${liarSelect}`}/>
                    </ColumnWrapper>
                    <BtnBasic t={"처음으로 돌아가기"} onPress={()=>resetGameStep()} w={"100%"}/>
                </ColumnWrapper>
            }

        </Wrapper>
    )
}
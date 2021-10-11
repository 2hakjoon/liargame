import React, { useState } from "react";
import styled from "styled-components/native";
import { BtnBasic } from "../../Atoms/Button/BtnBasic";
import { WordWrapper } from "../../Atoms/Text/WordWrapper"



const FlatWrapper = styled.FlatList`
	width: 100%;
	height: 100%;
	margin: auto;
	padding : 5%;
	background-color:${p=>p.theme["gray"]};
	display : flex;
	margin-bottom: 10px;
`






type props={
	lists : object,
	setSubjectText : Function,
	closeModal : () =>{}
}

export const SubjectSelecter = ({lists, setSubjectText, closeModal} : props) =>{


	
	return (
		<>
			<FlatWrapper
				data={Object.keys(lists)}
				renderItem={({item})=><WordWrapper t={item} onPress={setSubjectText}/>}
				keyExtractor={(item, index) => index.toString()}
			/>
			<BtnBasic onPress={closeModal} t={"취소"} w={"100%"}/>
	  </>
	);
}
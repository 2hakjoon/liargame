import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props:props) => props.bgColor};
`;


const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

type props={
    bgColor:string
}


const PressableButton = ({ onPress, bgColor, title }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
export default PressableButton;
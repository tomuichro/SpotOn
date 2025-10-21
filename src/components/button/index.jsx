import { ButtonContainer, ButtonText } from "./style";

export default function ButtonComponent(props) {
    return (
        <ButtonContainer activeOpacity={0.5} onPress={props.onPress}>
            <ButtonText>
            {props.title}
            </ButtonText>
        </ButtonContainer>
    );
}
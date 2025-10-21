import { ButtonContainer, ButtonTitle } from "./style";

export default function NavTab(props) {
    return(
        <ButtonContainer activeOpacity={0.5} onPress={props.onPress}>
            <ButtonTitle>
                {props.title}
            </ButtonTitle>
        </ButtonContainer>
    );
}
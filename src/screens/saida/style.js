import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

//Screen Container
export const SaidaContainer = styled.View`
    flex: 1;
    display: flex;
    align-items:center;
    background-color: #FFFFFF;
`

export const AppHeader = styled.View`
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    gap: 13px;
`

export const Logo = styled.Image`
    width: 78px;
    height: 78px;
`

export const Title = styled.Text`
    font-size: 50px;
    font-weight: bold;
    color: #D0D38F;
`

//Form
export const Form = styled(LinearGradient).attrs({
    colors: ['#D0D38F', '#ADB993', '#ADB993'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    })`
    margin-top: 60px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 50px 50px 0px 0px;
`

export const FormTitle = styled.Text`
    margin-top: 80px;
    width: 290px;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    color: #FFFFFF;
`
export const InputContainer = styled.View`
    margin-top: 80px;
`

export const ButtonContainer = styled.View`
    margin-top: -30px;
`

export const ButtonTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
`
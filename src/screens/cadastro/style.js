import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

//Screen Container
export const CadastroContainer = styled(LinearGradient).attrs({
    colors: ['#D0D38F', '#ADB993', '#ADB993'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
    flex: 1;
    display: flex;
    align-items: center;
`

//Title
export const Title = styled.Text`
    margin-top: 167px;
    font-size: 40px;
    font-weight: bold;
    color: #FFFFFF;
`

//Form
export const Form = styled.View`
    margin-top: 50px;
    width: 290px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 30px;
`

// Redirect Section
export const LoginRedirectSection = styled.View`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
`

export const RedirectText = styled.Text`
    font-size: 16px;
    font-weight: 300;
    color: #FFFFFF;
`

export const RedirectButton = styled.TouchableOpacity`
`

export const RedirectButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
`
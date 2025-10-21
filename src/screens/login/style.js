import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

//Screen Container
export const LoginContainer = styled(LinearGradient).attrs({
    colors: ['#D0D38F', '#ADB993', '#ADB993'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
    flex: 1;
    display: flex;
    align-items: center;
`

//Image
export const LoginImage = styled.Image`
    width: 412px;
    height: 367px;
    margin-top: 0px;

`

//Title
export const LoginTitle = styled.Text`
    margin-top: 50px;
    font-size: 35px;
    font-weight: bold;
    color: #FFFFFF;
`

// Form
export const Form = styled.View`
    margin-top: 50px;
    width: 290px;
    height: 145px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 25px;
`

// Forgot Password
export const ForgotPasswordButton = styled.TouchableOpacity`
    margin-top: -5px;
    width: 150px;
`

export const ForgotPasswordText = styled.Text`
    font-size: 16px;
    font-weight: 300;
    color: #FFFFFF;
`

// Redirect Section
export const RegisterRedirectSection = styled.View`
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




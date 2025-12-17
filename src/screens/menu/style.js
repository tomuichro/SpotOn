import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

//Screen Container
export const MenuContainer = styled(LinearGradient).attrs({
    colors: ['#D0D38F', '#ADB993', '#ADB993'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
    flex: 1;
`

//Sign Out
export const SignOutButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    margin-top: 50px;
    margin-left: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SignOutIcon = styled.Image`
    width: 30px;
    height: 30px;
`

//App Header
export const AppHeader = styled.View`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

export const Logo = styled.Image`
    width: 78px;
    height: 78px;
`

export const Title = styled.Text`
    font-size: 50px;
    font-weight: bold;
    color: #FFFFFF;
`

//Menu Content
export const MenuContent = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    border-radius: 50px 50px 0px 0px;
    background-color: #FFFFFF;
`

export const NavigationTabs = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 15px;
`

//List
export const VehicleList = styled.View`
    flex: 1;
    margin-top: 40px;
    width: 343px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

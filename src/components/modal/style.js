import { Modal } from "react-native";
import styled from "styled-components";

export const ModalBg = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContent = styled.View`
    width: 380px;
    height: 300px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`

export const ModalTitle = styled.Text`
    width: 260px;
    font-size: 25px; 
    font-weight: bold;
    text-align: center;
    color: #D0D38F;
`

//License Plate
export const LicensePlate = styled.View`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`
export const PlateText = styled.Text`
    font-size: 15px;
    color: #7D7C7C;
`

export const PlateValue = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #7D7C7C;
`

//Vehicle Info
export const VehicleInfo = styled.View`
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

//Time
export const TimeContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 6px;
`

export const TimeIcon = styled.Image`
    width: 24px;
    height: 24px;
`

export const TimeTitle = styled.Text`
    font-size: 15px; 
    font-weight: bold;
    color: #ADB993;
`

export const TimeValue = styled.Text`
    font-size: 15px; 
    color: #7D7C7C;
`

//Date

export const DateContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 6px;
`

export const DateIcon = styled.Image`
    width: 24px;
    height: 24px;
`

export const DateTitle = styled.Text`
    font-size: 15px; 
    font-weight: bold;
    color: #ADB993;
`

export const DateValue = styled.Text`
    font-size: 15px; 
    color: #7D7C7C;
`

//
export const MenuButton = styled.TouchableOpacity`
    margin-top: 20px;

`

export const ButtonTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #7D7C7C;
`
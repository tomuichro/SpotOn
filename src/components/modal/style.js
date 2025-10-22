import styled from "styled-components";

export const ModalBg = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContent = styled.View`
    width: 370px;
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
    color: #B1B1B1;
`

export const PlateValue = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #B1B1B1;
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
    align-items: center;
    gap: 6px;
`

export const TimeIcon = styled.Image`
    width: 24px;
    height: 24px;
`

export const TimeTitle = styled.Text`
    font-size: 14px; 
    font-weight: bold;
    color: #D0D38F;
`

export const TimeValue = styled.Text`
    font-size: 14px; 
    color: #B1B1B1;
`

//Date

export const DateContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
`

export const DateIcon = styled.Image`
    width: 24px;
    height: 24px;
`

export const DateTitle = styled.Text`
    font-size: 14px; 
    font-weight: bold;
    color: #D0D38F;
`

export const DateValue = styled.Text`
    font-size: 14px; 
    color: #B1B1B1;
`

//
export const MenuButton = styled.TouchableOpacity`
    margin-top: 20px;
`

export const ButtonTitle = styled.Text`
    font-size: 14px;
    color: #B1B1B1;
`
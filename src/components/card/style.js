import styled from "styled-components/native";

//Card Container
export const CardContainer = styled.View`
    width: 340px;
    height: 100px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    gap: 28px;
    border-radius: 0px 10px 10px 10px;
    elevation: 2;
    background-color: #FFFFFF;
`

//Entry Info Section
export const EntryInfoSection = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 20px;
    gap: 15px;

`

//Date
export const DateInfoGroup = styled.View`
    display: flex;
    flex-direction: row;
    gap: 6px;
`

export const DateIcon = styled.Image`
    width: 24px;
    height: 24px;
`

export const DateTitle = styled.Text`
    font-size: 12px; 
    color: #D0D38F;
`

export const DateValue = styled.Text`
    font-size: 12px; 
    color: #B1B1B1;

`

//Time
export const TimeInfoGroup = styled.View`
    display: flex;
    flex-direction: row;
    gap: 6px;
`

export const TimeIcon = styled.Image`
    width: 24px;
    height: 24px;
`

export const TimeTitle = styled.Text`
    font-size: 12px; 
    color: #D0D38F;
`
export const TimeValue = styled.Text`
    font-size: 12px; 
    color: #B1B1B1;
`

//Vehicle Info
export const VehicleInfoSection = styled.View`
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

`
export const Spot = styled.Text`
    font-size: 12px;
    color: #B1B1B1;
`

export const LicensePlate = styled.Text`
    font-size: 14px; 
    font-weight: bold;
    color: #D0D38F;
`
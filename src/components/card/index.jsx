import { CardContainer, DateIcon, DateInfoGroup, DateTitle, DateValue, EntryInfoSection, LicensePlate, Spot, TimeIcon, TimeInfoGroup, TimeTitle, TimeValue, VehicleInfoSection } from "./style";

export default function ListCard(props) {

    return(
        <CardContainer>
            <EntryInfoSection>
                <TimeInfoGroup>
                    <TimeIcon source={require('../../assets/hora-icon.png')}/>
                    <TimeTitle>Hora da Entrada</TimeTitle>
                    <TimeValue>{props.hora}</TimeValue>
                </TimeInfoGroup>

                <DateInfoGroup>
                    <DateIcon source={require('../../assets/data-icon.png')}/>
                    <DateTitle>Data da Entrada</DateTitle>
                    <DateValue>{props.data}</DateValue>
                </DateInfoGroup>
            </EntryInfoSection>
    

            <VehicleInfoSection>
                <Spot>{props.vaga}</Spot>
                <LicensePlate>{props.placa}</LicensePlate>
            </VehicleInfoSection>
        </CardContainer>
        

    );
}
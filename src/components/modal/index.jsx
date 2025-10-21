import { Modal } from "react-native";
import { ButtonTitle, MenuButton, HoraDataContainer, ModalBg, ModalContent, ModalTitle, LicensePlate, PlateText, PlateValue, VehicleInfo, TimeIcon, TimeTitle, DateContainer, DateIcon, DateTitle, DateValue, TimeValue, TimeContainer } from "./style";

export default function ModalComponent(props) {
    const {visible, onClose} = props
    return(
        <Modal visible={visible} transparent animationType="slide">
            <ModalBg>
                <ModalContent>
                    <ModalTitle>{props.title}</ModalTitle>

                    <LicensePlate>
                        <PlateText>Veículo de placa:</PlateText>
                        <PlateValue>{props.placa}</PlateValue>
                    </LicensePlate>

                    <VehicleInfo>
                             <TimeContainer>
                                <TimeIcon source={require('../../assets/hora-icon.png')}/>
                                <TimeTitle>{props.horaTitle}</TimeTitle>
                                <TimeValue>{props.hora}</TimeValue>
                             </TimeContainer>
                            
                       
                            <DateContainer>
                                <DateIcon source={require('../../assets/data-icon.png')}/>
                                <DateTitle>{props.dataTitle}</DateTitle>
                                <DateValue>{props.data}</DateValue>
                            </DateContainer>
                    </VehicleInfo>
                    
                    <MenuButton onPress={onClose}>
                        <ButtonTitle>Fechar</ButtonTitle>
                    </MenuButton>
                </ModalContent>
            </ModalBg>
        </Modal>
    

    );
}
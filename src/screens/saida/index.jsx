import { AppHeader, ButtonContainer, Form, FormTitle, InputContainer, Logo, SaidaContainer, Title } from "./style";
import InputField from "../../components/input";
import ButtonComponent from "../../components/button";
import ModalComponent from "../../components/modal";
import api from "../../services/api";
import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Saida() {
    const [open, setOpen] = useState(false);
    const [placa, setPlaca] = useState("");
    const [dadosSaida, setDadosSaida] = useState({
        hora: "",
        data: "",
        placa: "",
    });
    const navigation = useNavigation();

    async function RegistrarSaida() {
        if(!placa.trim()) {
            Alert.alert("Erro", "Por favor, informe a placa do veículo");
            return;
        }

        try {
            const res = await api.put("/api/veiculos/saida", {placa: placa.toUpperCase()});

            const {horarioSaida, dataSaida, placa: placaSaida} = res.data;
            
            setDadosSaida({
                hora: horarioSaida,
                data: dataSaida,
                placa: placaSaida,
            });

            setTimeout(() => setOpen(true), 100);
            setPlaca("");

        } catch (err) {
            console.error("Erro:", err);
            Alert.alert("Erro", "Erro ao registrar saída do veículo")
        }
        
    }

    return(
        <SaidaContainer>
            <AppHeader>
                <Logo source={require('../../assets/logo-green.png')}></Logo>
                <Title>Spot On</Title>
            </AppHeader>

            <Form>
                <FormTitle>Registre a saída do veículo</FormTitle>
                <InputContainer>
                    <InputField image={require('../../assets/placa-icon.png')}
                    placeholder="Placa"
                    color="#7D7C7C"
                    value={placa}
                    onChangeText={setPlaca}/>
                </InputContainer>

                <ButtonContainer >
                    <ButtonComponent onPress={RegistrarSaida} title="Registrar"/>
                </ButtonContainer>

                <ModalComponent visible={open} onClose={() => setOpen(false)}
                    placa={dadosSaida.placa}
                    title="Saída registrada com sucesso!"
                    horaTitle="Hora da Saída"
                    hora={dadosSaida.hora}
                    dataTitle="Data da Saída"
                    data={dadosSaida.data}
                />
                    
                <ButtonContainer>
                    <ButtonComponent onPress={() => navigation.navigate("Menu")} title="Voltar"/>
                </ButtonContainer>
            </Form>
        </SaidaContainer>
    );
}
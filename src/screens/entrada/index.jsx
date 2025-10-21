import { EntradaContainer, ButtonContainer, InputContainer, Logo, Title, AppHeader, Form, FormTitle } from "./style";
import InputField from "../../components/input";
import ButtonComponent from "../../components/button";
import ModalComponent from "../../components/modal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import api from "../../services/api";

export default function Entrada() {
    const [open, setOpen] = useState(false)
    const [placa, setPlaca] = useState("");
    const navigation = useNavigation();

    const [dadosEntrada, setDadosEntrada] = useState({
        hora: "",
        data: "",
        placa: ""
    })

    async function RegistrarEntrada() {
        if(!placa.trim()) {
            Alert.alert("Erro", "Por favor, informe a placa do veículo");
            return;
        }

        try {
            const res = await api.post("/api/veiculos/entrada", {
                placa: placa.toUpperCase()
            });

            const {horarioEntrada, dataEntrada, placa: placaEntrada} = res.data;

            setDadosEntrada({
                hora: horarioEntrada,
                data: dataEntrada,
                placa: placaEntrada,
            });

            setOpen(true)
            setPlaca("")
        } catch (err) {
            console.error("Erro:", err)
            Alert.alert("Erro")
        } 
    }

    return(
        <EntradaContainer>
            <AppHeader>
                <Logo source={require('../../assets/logo-green.png')}></Logo>
                <Title>Spot On</Title>
            </AppHeader>

            <Form>
                <FormTitle>Registre a entrada do veículo</FormTitle>

                <InputContainer>
                    <InputField image={require('../../assets/placa-icon.png')}
                    placeholder="Placa"
                    color='#7D7C7C'
                    value={placa}
                    onChangeText={setPlaca}></InputField>
                </InputContainer>
                
                <ButtonContainer>
                    <ButtonComponent onPress={RegistrarEntrada} title="Registrar"/>
                </ButtonContainer>

                <ModalComponent visible={open} onClose={() => setOpen(false)}
                title="Entrada registrada com sucesso!"
                placa={dadosEntrada.placa}
                horaTitle="Hora da Entrada"
                hora={dadosEntrada.hora}
                dataTitle="Data da Entrada"
                data={dadosEntrada.data}
                />

                <ButtonContainer>
                    <ButtonComponent onPress={() => navigation.navigate("Menu")} title="Voltar"/>
                </ButtonContainer>
            </Form>
        </EntradaContainer>
    );
}
import { CadastroContainer, Title, Form, LoginRedirectSection, RedirectText, RedirectButton, RedirectButtonText } from "./style.js"
import InputField from "../../components/input/index.jsx";
import ButtonComponent from "../../components/button/index.jsx";
import api from "../../services/api.js";
import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigation = useNavigation();

    async function handleCadastro() {
        if (!nome.trim() || !email.trim() || !senha.trim()) {
            Alert.alert("Erro", "Por favor, preencha todos os campos");
            return;
        };

        try {
            const res = await api.post("/auth/register", {nome, email, senha,});
    
            Alert.alert("Sucesso", "Conta criada com sucesso!")
            navigation.navigate("Home")
            
        } catch (err) {
            console.error("Erro:", err);
            Alert.alert("Erro", "Não foi possível realizar o cadastro");
        } 
    }

    return(
       <CadastroContainer>
            <Title>Cadastro</Title>
            <Form>
                <InputField image={require('../../assets/nome-icon.png')}
                placeholder="Nome completo"
                color="#ADB993"
                value={nome}
                onChangeText={setNome}>
                </InputField>

                <InputField image={require('../../assets/email-icon.png')}
                placeholder="E-mail"
                color="#ADB993"
                type="email-address"
                value={email}
                onChangeText={setEmail}>
                </InputField>

                <InputField image={require('../../assets/senha-icon.png')}
                placeholder="Senha"
                color="#ADB993"
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}>
                </InputField>
            </Form>
       
            <ButtonComponent onPress={handleCadastro} title="Criar"/>
            
            <LoginRedirectSection>
                <RedirectText>Já possui uma conta?</RedirectText>
                <RedirectButton onPress={() => navigation.navigate("Home")}>
                    <RedirectButtonText>Faça o login</RedirectButtonText>
                </RedirectButton>
            </LoginRedirectSection>
            
       </CadastroContainer>
    );
}
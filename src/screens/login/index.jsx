import {LoginContainer, LoginImage, LoginTitle, Form, ForgotPasswordButton, ForgotPasswordText, RegisterRedirectSection, RedirectText, RedirectButton, RedirectButtonText} from './style'
import InputField from '../../components/input';
import ButtonComponent from '../../components/button/index';
import api from '../../services/api';
import { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigation = useNavigation();

    async function handleLogin() {
        if (!email.trim() || !senha.trim()) {
            Alert.alert("Erro", "Por favor, preencha todos os campos");
            return;
        }

        try {
            const res = await api.post("/auth/login", {email, senha,});

            if(res.data.token) {
                await AsyncStorage.setItem("token", res.data.token);
            };

            // Alert.alert("Sucesso", "Login realizado com sucesso!");
            navigation.navigate("Menu");
            
        } catch (err) {
            console.error("Erro:", err);
            if (err.response?.status === 401) {
                Alert.alert("Erro", "E-mail ou senha incorretos");
            } else {
                Alert.alert("Erro", "Não foi possível realizar o login.")
            }
        }
    }

    return (
        <LoginContainer>
            <LoginImage source={require('../../assets/login-img.png')}></LoginImage>
            <LoginTitle>Login</LoginTitle>

            <Form>
                <InputField
                image={require('../../assets/email-icon.png')} 
                placeholder="E-mail"
                type="email-address"
                value={email}
                onChangeText={setEmail}/>

                <InputField image={require('../../assets/senha-icon.png')} 
                placeholder="Senha"
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}/>

                <ForgotPasswordButton>
                    <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
                </ForgotPasswordButton>   

            </Form>
            
            <ButtonComponent title="Entrar" onPress={handleLogin}/>

            <RegisterRedirectSection>
                <RedirectText>Não possui uma conta?</RedirectText>
                <RedirectButton onPress={() => navigation.navigate("Cadastro")}>
                    <RedirectButtonText>Faça o cadastro</RedirectButtonText>
                </RedirectButton>
            </RegisterRedirectSection>
        </LoginContainer>
    );
}
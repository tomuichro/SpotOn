import { AppHeader, Logo, MenuContainer, MenuContent, NavigationTabs, SignOutButton, SignOutIcon, Title, VehicleList } from "./style";
import ListCard from "../../components/card";
import NavTab from "../../components/nav-tab";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";

function placaValida(placa) {
    if (!placa) return false;

    const placaFormatada = placa.toUpperCase().trim();

    const modeloAntigo = /^[A-Z]{3}[0-9]{4}$/;
    const modeloNovo = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;

    return modeloAntigo.test(placaFormatada) || modeloNovo.test(placaFormatada);
};

export default function Menu() {
    const navigation = useNavigation();
    const [veiculos, setVeiculos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get("/api/veiculos")
                
                const placasVistas = new Set();

                const veiculosFiltrados = res.data.filter(item => {
                    if (!placaValida(item.placa)) return false;

                    const placaFormatada = item.placa.toUpperCase().trim();

                    if (placasVistas.has(placaFormatada)) {
                        return false;
                    };

                    placasVistas.add(placaFormatada);
                    return true;
                });

                setVeiculos(veiculosFiltrados);

            } catch (err) {
                console.error("Erro:", err);
            } finally {
                setLoading(false);
            };
        }

        fetchData()
    }, [])

    return(
        <MenuContainer>
            <SignOutButton onPress={() => navigation.navigate("Home")}>
                <SignOutIcon source={require('../../assets/logout-icon.png')}/>
            </SignOutButton>

            <AppHeader>
                <Logo source={require('../../assets/logo.png')}></Logo>
                <Title>Spot On</Title>
            </AppHeader>

            <MenuContent>
                <NavigationTabs>
                    <NavTab onPress={() => navigation.navigate("Entrada")} title="Entrada"/>
                    <NavTab onPress={() => navigation.navigate("Saida")} title="Saída"/>
                </NavigationTabs>
                    
                <VehicleList>
                    {loading ? (<ActivityIndicator size="large" color="B2BF60"/>) : 
                        (<FlatList
                            data={veiculos}
                            keyExtractor={(_, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, index}) => {
                                const horaFormatada = item.horarioEntrada ?
                                item.horarioEntrada.slice(0, 5) : "";
                                const dataFormatada = item.dataEntrada ?
                                new Date(item.dataEntrada).toLocaleDateString("pt-BR") : "";
                                const numeroVaga = index + 1;
                                return(
                                    <ListCard
                                    hora={horaFormatada}
                                    data={dataFormatada}
                                    vaga={`Vaga ${numeroVaga}`}
                                    placa={item.placa}
                                    />
                                );
                            }}  
                        />
                    )}
                </VehicleList>
            </MenuContent>
        </MenuContainer>
    );
}
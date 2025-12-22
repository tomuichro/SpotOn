import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/login/index'
import Cadastro from './src/screens/cadastro/index';
import Entrada from './src/screens/entrada';
import Saida from './src/screens/saida';
import Menu from './src/screens/menu';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home', 
  screens: {
    Home: {
      screen: Login,
      options: {headerShown: false }
    }, 
    Cadastro: {
      screen: Cadastro,
      options: {headerShown: false}
    }, 
    Menu: {
      screen: Menu,
      options: {headerShown: false}
    },
    Entrada: {
      screen: Entrada,
      options: {headerShown: false}
    },
    Saida: {
      screen: Saida,
      options: {headerShown: false}
    }
  }
})

const Navigation = createStaticNavigation(RootStack)

const ContainerApp = styled.SafeAreaView`
flex: 1;
`

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden></StatusBar>
      <Navigation/>
    </ContainerApp>

  );
}



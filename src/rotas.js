import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Principal from './paginas/Principal';
import Repositorios from './paginas/Repositorios';
import CriarRepositorio from './paginas/CriarRepositorio';
import InfoRepositorio from './paginas/InfoRepositorio';
import Seguidores from './paginas/Seguidores';
import Erro404 from './paginas/Erro404';
import SeguidoresPagina from './paginas/SeguidoresPagina';

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Principal" options={{ title: "Perfil" }} component={Principal} />
                <Tab.Screen name="Repositorios" component={Repositorios} />
                <Tab.Screen name="CriarRepositorio" options={{ title: "Criar Repositório" }} component={CriarRepositorio} />
                <Tab.Screen name="InfoRepositorio" options={{ title: "Repositório Info" }} component={InfoRepositorio} />
                <Tab.Screen name="Seguidores" options={{ title: "Seguidores" }} component={Seguidores} />
                <Tab.Screen name="SeguidoresPagina" options={{ title: "SeguidoresPagina" }} component={SeguidoresPagina} />
                <Tab.Screen name="Erro404" options={{ title: "Erro404" }} component={Erro404} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
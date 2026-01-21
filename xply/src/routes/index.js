import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Home from '../pages/Home';
import CadastroUsuario from '../pages/Cadastro';
import CadastrarTarefa from '../pages/CadastrarTarefa';
import DetalhesTarefa   from "../pages/DetalhesTarefa";

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="CadastrarTarefa"
                    component={CadastrarTarefa}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="DetalhesTarefa"
                    component={DetalhesTarefa}
                    options={({ route }) => ({
                        title: route.params.tarefa.titulo,
                        headerShown: false
                    })}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={CadastroUsuario}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'XPly Dashboard',
                        headerStyle: {backgroundColor: '#6CABDD'},
                        headerTintColor: '#FFFFFF'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppRoutes;
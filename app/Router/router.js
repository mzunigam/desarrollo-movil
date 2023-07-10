import { createStackNavigator } from '@react-navigation/stack';
import Login from "../Screens/login";
import { Menu } from "../Screens/menu";
import { RegistrarProduct } from '../Screens/registrarProduct';
import { ActualizarProduct } from '../Screens/actualizarProduct';

const Stack = createStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator>
                        <Stack.Screen name="index" component={Login} options={
                {
                    headerShown: false,
                }
            } />
            <Stack.Screen name="menu" component={Menu} options={
                {
                    headerShown: false,
                }
            } />
            <Stack.Screen name="registrar" component={RegistrarProduct} options={
                {
                    headerShown: false,
                }
            } />
            <Stack.Screen name="actualizar" component={ActualizarProduct} options={
                {
                    headerShown: false,
                }
            } />
        </Stack.Navigator>
    );
}
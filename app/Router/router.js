import { createStackNavigator } from '@react-navigation/stack';
import Login from "../Screens/login";
import {Menu} from "../Screens/menu";
import { registrarProduct } from '../Screens/registrarProduct';

const Stack = createStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator>
                    <Stack.Screen name="index" component={registrarProduct} options={
                {
                    headerShown: false,
                }
            }/>
            <Stack.Screen name="login" component={Login} options={
                {
                    headerShown: false,
                }
            }/>
            <Stack.Screen name="menu" component={Menu} options={
                {
                    headerShown: false,
                }
            }/>
        </Stack.Navigator>
    );
}
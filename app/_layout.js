import {Stack} from "expo-router";

const Layout = () => {
    return (
        <Stack screenOptions={{
            headerStyle:{
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name="index" options={{ headerTitle: 'Login',headerShown: false}} />
            {/*<Stack.Screen name="menu" options={{ headerTitle: 'Register',headerShown: false}} />*/}
        </Stack>
    );
}
export default Layout;
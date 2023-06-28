import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from "react-native";
import {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import {MessageBubble} from "../Components/messageBubble"
import {login} from "../Helpers/loginHelper";


const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notifcation, setNotification] = useState('');
    const [isVisible, setIsVisible] = useState('');

    return (
        <>
            <View style={styles.container}>
                <LinearGradient colors={['#b876ff', '#8432ff']} style={styles.container}>
                    <View style={styles.image_container}>
                        <Text style={styles.heading}>FierroMax</Text>
                        <Image source={require('../Assets/logo.png')} style={styles.image}/>
                    </View>
                    <View style={styles.input_container}>
                        <TextInput
                            style={styles.input}
                            placeholder="Usuario"
                            value={username}
                            onChangeText={setUsername}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholderTextColor={'white'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="contraseña"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            placeholderTextColor={'white'}
                        />
                        <Text style={styles.password_forgotten}>¿Olvidaste tu contraseña?</Text>
                    </View>
                    <TouchableOpacity style={styles.button}
                                      onPress={() => login(username, password, setNotification, setIsVisible)}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Registrate</Text>
                    </TouchableOpacity>
                    <MessageBubble text={notifcation} whatType={isVisible}/>
                </LinearGradient>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    heading: {
        fontSize: 44,
        fontWeight: 'bold',
        marginBottom: 32,
        textAlign: 'center',
        color: 'white',
    },
    input_container: {
        alignItems: 'center',
        width: '100%',
        bottom: 50,
    },
    input: {
        width: '75%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 4,
        marginBottom: 16,
        paddingLeft: 8,
        color: 'white',
    },
    button: {
        backgroundColor: 'white',
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 16,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 50,
    },
    image_container: {
        bottom: 50,
    },
    password_forgotten: {
        color: '#e1c5ff',
    }
});


export default Register;
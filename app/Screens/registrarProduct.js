import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const registrarProduct = () => {
    return (
        <>
            <View style={styles.container}>
                <LinearGradient colors={['#b876ff', '#8432ff']} style={styles.container}>
                    <View style={styles.image_container}>
                        <Text style={styles.heading}>Agregar Nuevo Producto</Text>
                        {/* <Image source={require('../Assets/logo.png')} style={styles.image} /> */}
                    </View>
                    <View style={styles.input_container}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre"
                            autoCapitalize="none"
                            placeholderTextColor={'white'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Categoria"
                            autoCapitalize="none"
                            placeholderTextColor={'white'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Precio"
                            autoCapitalize="none"
                            placeholderTextColor={'white'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Imagen"
                            autoCapitalize="none"
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Registrar</Text>
                    </TouchableOpacity>
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
        fontSize: 22,
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
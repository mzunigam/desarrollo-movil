import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import {MessageBubble} from "../Components/messageBubble"
import { useRef } from "react";

export const RegistrarProduct = (prop) => {

    const nombre = useRef(null);
    const descripcion = useRef(null);
    const precio = useRef(null);
    const stock = useRef(null);
    const registrar = useRef(null);
    const [isVisible, setIsVisible] = useState('');
    const [notification,setNotification] = useState('');

    const getBack = () => {
        prop.navigation.navigate('menu',
            {
                username: prop?.route?.params?.username
            });
    };

    const createProducto = async () => {

        registrar.current.setNativeProps({ disabled: true });
        
        const json = {
            nombre: nombre.current.value,
            descripcion: descripcion.current.value,
            precio: parseInt(precio.current.value),
            stock: parseInt(stock.current.value),
        };

        console.log(json);

        try {
            await fetch('http://74.208.94.23:8082/api/producto/save/null',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(json)
            }
            );
            setNotification('Se ha registrado el nuevo producto');
            setIsVisible('good');
            }catch(e){
                console.log(e);
                setNotification('Ha ocurrido un error');
                setIsVisible('error');
            }

            setTimeout( () => {
                if(isVisible === 'good'){
                    prop.navigation.navigate('menu',
                    {
                        username: prop?.route?.params?.username
                    });
                }
                setIsVisible('');
                setNotification('');
                registrar.current.setNativeProps({ disabled: false });
            },3000);


    };

    return (
        <>
            <View style={styles.container}>
                <LinearGradient colors={['#b876ff', '#8432ff']} style={styles.container}>
                    <View style={styles.image_container}>
                        <Text style={styles.heading}>Agregar Nuevo Producto</Text>
                        {/* <Image source={require('../Assets/logo.png')} style={styles.image} /> */}
                    </View>
                    <View style={styles.input_container}>
                        <Text style={{ width: '70%', justifyContent: 'left', color: 'white', marginBottom: 5 }} aria-label="Nombre" nativeID="nombre">Nombre</Text>
                        <TextInput
                            id="nombre"
                            ref={nombre}
                            style={styles.input}
                            placeholder="..."
                            autoCapitalize="none"
                            placeholderTextColor={'white'}
                        />
                        <Text style={{ width: '70%', justifyContent: 'left', color: 'white', marginBottom: 5 }} aria-label="Descripcion" nativeID="descripcion">Descripcion</Text>
                        <TextInput
                            id="descripcion"
                            ref={descripcion}
                            style={styles.input}
                            placeholder="..."
                            autoCapitalize="none"
                            placeholderTextColor={'white'}
                        />
                        <Text style={{ width: '70%', justifyContent: 'left', color: 'white', marginBottom: 5 }} aria-label="Precio" nativeID="precio">Precio</Text>
                        <TextInput
                            id="precio"
                            ref={precio}
                            style={styles.input}
                            placeholder="..."
                            autoCapitalize="none"
                            placeholderTextColor={'white'}
                        />
                        <Text style={{ width: '70%', justifyContent: 'left', color: 'white', marginBottom: 5 }} aria-label="Stock" nativeID="stock">Stock</Text>
                        <TextInput
                            id="stock"
                            ref={stock}
                            style={styles.input}
                            placeholder="..."
                            autoCapitalize="none"
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <View style={styles.buttonVIew}>
                        <TouchableOpacity style={{...styles.button,backgroundColor: '#ffffff'}} ref={registrar} onPress={() => createProducto()}>
                            <Text style={{...styles.buttonText,color:'black'}}>Registrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.button,backgroundColor: '#ee0000'}} onPress={() => getBack()}>
                            <Text style={{...styles.buttonText,color:'white'}}>Volver</Text>
                        </TouchableOpacity>
                    </View>
                    <MessageBubble text={notification} whatType={isVisible} />
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
    buttonVIew: {
        width: '100%',
        alignItems: 'center',
        bottom: 50,
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
    },
    button: {
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 16,
    },
    buttonText: {
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
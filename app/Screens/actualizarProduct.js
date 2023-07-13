import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import {MessageBubble} from "../Components/messageBubble"


export const ActualizarProduct = (prop) => {

    const [nombre,setNombre] = useState(prop?.route?.params?.item?.nombre || '');
    const [descripcion,setDescripcion] = useState(prop?.route?.params?.item?.descripcion || '');
    const [precio,setPrecio] = useState(prop?.route?.params?.item?.precio || '');
    const [stock,setStock] = useState(prop?.route?.params?.item?.stock || '');
    const [isVisible, setIsVisible] = useState('');
    const [notification,setNotification] = useState('');

    useEffect(() => {
        
    }, [0]);

    const getBack = () => {
        prop.navigation.navigate('menu',
            {
                username: prop?.route?.params?.username
            });
    };

    const updateProducto = async () => {
        
        const json = {
            nombre: nombre,
            descripcion: descripcion,
            precio: parseInt(precio) || 0,
            stock: parseInt(stock) || 0,
        };

        try {
            await fetch('http://74.208.94.23:8082/api/producto/save/'+prop?.route?.params?.item?.id,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(json)
            }
            );
            setNotification('Se ha actualizado correctamente');
            setIsVisible('good');
            prop.navigation.navigate('menu',
            {
                username: prop?.route?.params?.username
            });
            }catch(e){
                console.log(e);
                setNotification('Ha ocurrido un error');
                setIsVisible('error');
            }
            setTimeout( () => {
                setIsVisible('');
                setNotification('');

            },3000);

            if(isVisible === 'good'){
                getBack();
            }
    };

    return (
        <>
            <View style={styles.container}>
                <LinearGradient colors={['#b876ff', '#8432ff']} style={styles.container}>
                    <View style={styles.image_container}>
                        <Text style={styles.heading}>{prop?.route?.params?.item?.nombre || ''} esta siendo modificado</Text>
                        {/* <Image source={require('../Assets/logo.png')} style={styles.image} /> */}
                    </View>
                    {[undefined,null].includes(prop?.route?.params?.item) ? null : (
                        <View style={styles.input_container}>
                            <Text style={{ width: '70%', justifyContent: 'left', color: 'white', marginBottom: 5 }} aria-label="Nombre" nativeID="nombre">Nombre</Text>
                            <TextInput
                                name="nombre"
                                value={nombre}
                                style={styles.input}
                                placeholder="..."
                                autoCapitalize="none"
                                onChangeText={setNombre}
                                placeholderTextColor={'white'}
                            />
                            <Text style={{ width: '70%', justifyContent: 'left', color: 'white', marginBottom: 5 }} aria-label="Descripcion" nativeID="descripcion">Descripcion</Text>
                            <TextInput
                                id="descripcion"
                                value={descripcion}
                                style={styles.input}
                                placeholder="..."
                                onChangeText={setDescripcion}
                                autoCapitalize="none"
                                placeholderTextColor={'white'}
                            />
                            <Text style={{ width: '70%', justifyContent: 'left', color: 'white', marginBottom: 5 }} aria-label="Precio" nativeID="precio">Precio</Text>
                            <TextInput
                                name="precio"
                                value={precio}
                                style={styles.input}
                                placeholder="..."
                                autoCapitalize="none"
                                onChangeText={setPrecio}
                                placeholderTextColor={'white'}
                            />
                            <Text style={{ width: '70%', justifyContent: 'left', color: 'white', marginBottom: 5 }} aria-label="Stock" nativeID="stock">Stock</Text>
                            <TextInput
                                name="stock"
                                value={stock}
                                style={styles.input}
                                placeholder="..."
                                autoCapitalize="none"
                                onChangeText={setStock}
                                placeholderTextColor={'white'}
                            />
                        </View>
                    )}
                    <View style={styles.buttonVIew}>
                        <TouchableOpacity style={{ ...styles.button, backgroundColor: '#ffffff' }} onPress={() => updateProducto()}>
                            <Text style={{ ...styles.buttonText, color: 'black' }}>Actualizar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.button, backgroundColor: '#ee0000' }} onPress={() => getBack()}>
                            <Text style={{ ...styles.buttonText, color: 'white' }}>Volver</Text>
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
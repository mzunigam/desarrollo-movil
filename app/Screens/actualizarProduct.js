import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import {MessageBubble} from "../Components/messageBubble"


export const ActualizarProduct = (prop) => {

    const [producto, setProducto] = useState(null);
    const nombre = useRef(null);
    const descripcion = useRef(null);
    const precio = useRef(null);
    const stock = useRef(null);
    const actualizar = useRef(null);
    const [isVisible, setIsVisible] = useState('');
    const [notification,setNotification] = useState('');

    useEffect(() => {
        setProducto(prop?.route?.params?.item);
    }, [0]);

    const getBack = () => {
        prop.navigation.navigate('menu',
            {
                username: prop?.route?.params?.username
            });
    };

    const updateProducto = async () => {

        actualizar.current.setNativeProps({ disabled: true });
        
        const json = {
            nombre: nombre.current,
            descripcion: descripcion.current,
            precio: precio.current,
            stock: stock.current,
        };

        try {
            await fetch('http://74.208.94.23:8082/api/producto/save/'+producto.id,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(json)
            }
            );
            setNotification('Se ha actualizado correctamente');
            setIsVisible('good');
            }catch(e){
                console.log(e);
                setNotification('Ha ocurrido un error');
                setIsVisible('error');
            }
            setTimeout( () => {
                setIsVisible('');
                setNotification('');
                actualizar.current.setNativeProps({ disabled: false });
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
                        <Text style={styles.heading}>{producto?.nombre || ''} esta siendo modificado</Text>
                        {/* <Image source={require('../Assets/logo.png')} style={styles.image} /> */}
                    </View>
                    {producto === null ? 'Cargando' : (
                        <View style={styles.input_container}>
                            <Text style={{ width: '70%', justifyContent: 'left', color: 'white', marginBottom: 5 }} aria-label="Nombre" nativeID="nombre">Nombre</Text>
                            <TextInput
                                id="nombre"
                                ref={nombre}
                                value={producto?.nombre}
                                flat={true}
                                style={styles.input}
                                placeholder="..."
                                autoCapitalize="none"
                                placeholderTextColor={'white'}
                            />
                            <Text style={{ width: '70%', justifyContent: 'left', color: 'white', marginBottom: 5 }} aria-label="Descripcion" nativeID="descripcion">Descripcion</Text>
                            <TextInput
                                id="descripcion"
                                ref={descripcion}
                                value={producto?.descripcion}
                                style={styles.input}
                                placeholder="..."
                                autoCapitalize="none"
                                placeholderTextColor={'white'}
                            />
                            <Text style={{ width: '70%', justifyContent: 'left', color: 'white', marginBottom: 5 }} aria-label="Precio" nativeID="precio">Precio</Text>
                            <TextInput
                                id="precio"
                                ref={precio}
                                value={producto?.precio}
                                style={styles.input}
                                placeholder="..."
                                autoCapitalize="none"
                                placeholderTextColor={'white'}
                            />
                            <Text style={{ width: '70%', justifyContent: 'left', color: 'white', marginBottom: 5 }} aria-label="Stock" nativeID="stock">Stock</Text>
                            <TextInput
                                id="stock"
                                ref={stock}
                                value={producto?.stock}
                                style={styles.input}
                                placeholder="..."
                                autoCapitalize="none"
                                placeholderTextColor={'white'}
                            />
                        </View>
                    )}
                    <View style={styles.buttonVIew}>
                        <TouchableOpacity style={{ ...styles.button, backgroundColor: '#ffffff' }} href={actualizar} onPress={() => updateProducto()}>
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
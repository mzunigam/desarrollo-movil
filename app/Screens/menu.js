import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from "react";
import {MessageBubble} from "../Components/messageBubble"

export const Menu = (prop) => {

    const [product, setProduct] = useState([]);
    const [isVisible, setIsVisible] = useState('');
    const [notification,setNotification] = useState('');
    const getProducts = async () => {
        const response = await fetch('http://74.208.94.23:8082/api/producto/find');
        const json = await response.json();
        setProduct(json);
    }

    useEffect(() => {
        getProducts();
    }, [0]);

    const goToEdit = (item) => {
        prop.navigation.navigate('actualizar',
            {
                username: prop?.route?.params?.username,
                item: item
            });
    };

    const gotoCreate = () => {
        prop.navigation.navigate('registrar',
            {
                username: prop?.route?.params?.username
            });
    };

    const deleteProduct = async (item) => {

        try {
        await fetch('http://74.208.94.23:8082/api/producto/delete/'+item.id);
        setNotification('Se ha eliminado '+item.nombre);
        setIsVisible('good');
        getProducts();
        }catch(e){
            console.log(e);
            setNotification('Ha ocurrido un error');
            setIsVisible('error');
        }
        setTimeout( () => {
            setIsVisible('');
            setNotification('');
        },3000);
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#b876ff', '#8432ff']} style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.text}>
                        Bienvenido {prop?.route?.params?.username || 'Usuario'}
                    </Text>
                    <Image source={require('../Assets/logo.png')} style={{ width: 50, height: 50 }} />
                </View>
                <View style={styles.bodycontainer}>
                    <View style={styles.buttoncontainer}>
                        <TouchableOpacity style={styles.buttonRegistrar}>
                            <Text style={styles.buttonText} onPress={() => gotoCreate()}>Nuevo
                                <Icon name="plus" size={15} color="#b876ff" />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.buttonRegistrar,marginLeft:10}}>
                            <Text style={styles.buttonText} onPress={() => getProducts()}>Cargar de nuevo
                                <Icon name="redo" size={15} color="#b876ff" />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listView}>
                        {
                            product.map((item, index) => {
                                return (<View key={index} style={styles.card}>
                                    <View style={styles.textView}>
                                        <Text style={styles.cardText}>{item.nombre}</Text>
                                        <Text style={styles.cardDesc}>{item.descripcion}</Text>
                                    </View>
                                    <View style={styles.actionsView}>
                                        <Text style={{ ...styles.cardDesc, marginBottom: 5 }}>Stock: {item.stock}</Text>
                                        <View style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: 10
                                        }}>
                                            <TouchableOpacity id={'edit_' + index} onPress={() => goToEdit(item)} style={{
                                                backgroundColor: 'rgba(255,255,255,0.13)',
                                                padding: 5,
                                                width: 30,
                                                borderRadius: 5
                                            }}>
                                                <Icon name="edit" size={20} color="#ffffffaa" />
                                            </TouchableOpacity>
                                            <TouchableOpacity d={'delete' + index} onPress={()=> deleteProduct(item)} style={{
                                                backgroundColor: 'rgba(255,255,255,0.13)',
                                                padding: 5,
                                                width: 30,
                                                borderRadius: 5
                                            }}>
                                                <Icon name="trash" size={20} color="#ffffffaa" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>);
                            })
                        }
                    </View>
                </View>
                <MessageBubble text={notification} whatType={isVisible} />
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    text: {
        color: 'white',
        fontSize: 30
    },
    heading: {
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    bodycontainer: {
        marginTop: '10%',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.07)',
        height: '50%',
        width: '80%'
    },
    buttonRegistrar: {
        display: 'flex',
        backgroundColor: '#e3c7ff',
        borderRadius: 5,
        width: 'max-content',
        height: 'max-content',
        padding: '2.5%',
        marginBottom: 10,
    },
    buttoncontainer: {
        flexDirection: 'row',
        height: 'max-content',
        alignItems: 'center',
    },
    buttonText: {
        color: '#4a0998',
        fontWeight: 'bold',
        height: 'max-content',
        gap: 4,
        display: 'flex'
    },
    listView: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    card: {
        backgroundColor: '#910fff',
        borderWidth: 1,
        borderColor: '#891fff',
        borderRadius: 5,
        padding: '2.5%',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        position: 'relative',
        gap: 10,
    },
    cardText: {
        color: '#eadcff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    cardDesc: {
        color: '#e2cfff',
    },
    textView: {
        width: '66%'
    },
    actionsView: {
        position: 'relative',
        flex: 1,
        alignItems: 'flex-end',
        display: 'flex',
        justifyContent: 'center',
    }
});
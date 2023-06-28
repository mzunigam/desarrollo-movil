import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const Menu = (prop) => {

    if (prop.route.params.username === "") {
        prop.route.params.username = "Usuario";
    }

    const ArrayData = [
        {
            id: 1,
            name: 'fierro',
            descripcion: 'Metal',
            url: ''
        }, {
            id: 2,
            name: 'madera',
            descripcion: 'Metal',
            url: ''
        }, {
            id: 3,
            name: 'clavo',
            descripcion: 'Metal',
            url: ''
        }, {
            id: 4,
            name: 'gaaa',
            descripcion: 'gaaa',
            url: ''
        }, {
            id: 5,
            name: 'geee',
            descripcion: 'geee',
            url: ''
        }, {
            id: 6,
            name: 'giii',
            descripcion: 'giii',
            url: ''
        }, {
            id: 7,
            name: 'xddd',
            descripcion: 'xddd',
            url: ''
        }, {
            id: 8,
            name: 'adsads',
            descripcion: 'asdasd',
            url: ''
        }, {
            id: 9,
            name: 'lñlñklñ',
            descripcion: 'asdadljkaskld',
            url: ''
        }
    ]

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#b876ff', '#8432ff']} style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.text}>
                        Bienvenido {prop.route.params.username}
                    </Text>
                    <Image source={require('../Assets/logo.png')} style={{ width: 50, height: 50 }} />
                </View>
                <View style={styles.bodycontainer}>
                    <View style={styles.buttoncontainer}>
                        <TouchableOpacity style={styles.buttonRegistrar}>
                            <Text style={styles.buttonText}>Nuevo
                                <Icon name="plus" size={15} color="#8432ff" />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {/* { ArrayData.map( x => {
                            return (
                                <View id={}></View>
                            )
                        })} */}
                    </View>
                </View>
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
        borderColor: '#ffffff55',
        height: '50%',
        width: '80%'
    },
    buttonRegistrar: {
        display: 'flex',
        backgroundColor: '#e1c5ff',
        borderRadius: 5,
        width: 'max-content',
        height: 'max-content',
        padding: '2.5%'
    },
    buttoncontainer: {
        flexDirection: 'row',
        height: 'max-content',
        alignItems: 'center',
    },
    buttonText: {
        color: '#8432ff',
        fontWeight: 'bold',
        height: 'max-content',
        gap: 4,
        display: 'flex'
    },
    listView: {

    }
});
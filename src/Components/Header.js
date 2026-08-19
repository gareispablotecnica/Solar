import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Logo from '../Media/Logo/a.gif'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Encabezado}>
                <Image
                    source={Logo}
                    resizeMode='cover'
                    style={styles.imgLogo}
                />
                <View style={styles.Menu}>
                    <Text style={styles.Item}>Sistema Solar</Text>
                    <Text style={styles.eslogan}>Explorá el universo, planeta a planeta</Text>
                </View>
                <View style={styles.Nav}>
                    <Text style={styles.Icono}>≡</Text>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Encabezado: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        borderRadius: 20,
        padding: 12,
        backgroundColor:'#1D2128',
        // Borde para definir el contorno (efecto de luz sutil)
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        // Sombra (Shadow)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // Android
    },
    imgLogo: {
        width: 60,
        height: 60,
        borderRadius: '100%',
        marginTop: 5,
    },
    Menu: {
        marginTop: 15,
        marginLeft: -10,
    },
    Item: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    Icono: {
        marginTop: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    eslogan: {
        color: '#fff',
    },
})
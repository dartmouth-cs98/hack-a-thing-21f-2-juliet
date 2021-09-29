import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from './colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground style= {styles.background} source={require('../../assets/shop.webp')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/logo.png')}/>
                <Text>For The Items You Do Not Need</Text>
            </View>
            <View style={styles.loginButton}>
                <Text>
                    See Our Products
                </Text>
            </View>
            <View style={styles.registerButton}>
                <Text>About Us</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems:'center'
    },
    logo:{
        width: 100,
        height: 100,

    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems:'center'
    },
    logoContainer: {
        position: "absolute",
        top: 480,
        alignItems:'center'
    }, 
     
})

export default WelcomeScreen;
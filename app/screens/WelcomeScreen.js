import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from './colors';
import Items from './Items';


// I implemented this screen by following this tutorial by Mosh 
// https://www.youtube.com/watch?v=0-S5a0eXPoc
// and modified to experiement some more.
function WelcomeScreen(props) {
    return (
        <ImageBackground style= {styles.background} source={require('../../assets/viewImage.webp')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/newlogo.jpg')}/>
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
        height: 50,

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
        top: 200,
        alignItems:'center'
    }, 
     
})

export default WelcomeScreen;
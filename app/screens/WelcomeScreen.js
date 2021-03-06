import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from './colors';
import Items from './Items';
import StyledButton from './StyledButton';


// I implemented this screen by following this tutorial by Mosh 
// https://www.youtube.com/watch?v=0-S5a0eXPoc
// and modified to experiement some more, using styles and buttons by Savin and my own code
// https://www.youtube.com/watch?v=iQ_0Fd_N3Mk&t=1305s
function WelcomeScreen(props) {
    return (
        <ImageBackground style= {styles.background} source={require('../../assets/viewImage.webp')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/newlogo.jpg')}/>
            </View>
            <StyledButton type="primary" content={"see our products"} onPress={() => { console.warn("Will Be Available Soon")}} />
            <StyledButton type="primary" content={"home"} onPress={() => { console.warn("Will Be Available Soon")}} />
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
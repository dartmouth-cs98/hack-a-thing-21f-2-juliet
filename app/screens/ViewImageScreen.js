import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from './colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode = "contain" style={styles.image} source={require('../../assets/viewImage.webp')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
    }, 
    closeIcon: {
        width: 50, 
        height: 50, 
        backgroundColor: colors.close,
        position: 'absolute',
        top:40,
        left: 30,
    }, 
    deleteIcon: {
        width: 50, 
        height: 50, 
        backgroundColor: colors.secondary,
        position: 'absolute',
        top:40,
        right: 30,
    }, 
    image:{
        width: "100%",
        height: "100%"
    }

})

export default ViewImageScreen;
import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import StyledButton from "./StyledButton";
import WelcomeScreen from './WelcomeScreen';

// the code in the file follows the same structure as that of Savin Vadim,
// I changed the code to incorporate my own dummy data
// all the styling were adapted from Savin but i changed the concept from cars to any other items
// full repo by Savin Vadim https://github.com/Savinvadim1312/TeslaClone
const Item = (props) => {

  const { name, tagline, image } = props.item;

  return (
    <View style={styles.itemContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Add To Cart"}
          onPress={() => {
            console.warn("Will Be Available Soon");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Go Back To Home"}
          onPress={() => { 
              <WelcomeScreen/>;
          }}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
    itemContainer: {
      width: '100%',
      height: Dimensions.get('window').height,
    },
    titles: {
      marginTop: '30%',
      width: '100%',
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: '500',
    },
    subtitleCTA: {
      textDecorationLine: 'underline',
    },
    subtitle: {
      fontSize: 16,
      color: '#5c5e62'
    },
  
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
    },
  
    buttonsContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%',
    }
  });

export default Item;
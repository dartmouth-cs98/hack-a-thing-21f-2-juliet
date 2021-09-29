// The code in this file is by Savin Vadim, and I modified just a little bit
// I found it super convinient to inject into my app. 
// Full github repo: https://github.com/Savinvadim1312/TeslaClone
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const StyledButton = (props) => {

  const { type, content, onPress } = props;

  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: 15,
    },
    button: {
      height: 45,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 12,
      fontWeight: '500',
      textTransform: 'uppercase',
    }
  });

export default StyledButton;
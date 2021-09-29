
import React from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';

import itemsInfo from './itemsInfo';
import Item from './item';

const Items = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={itemsInfo}
        renderItem={({item}) => <Item item={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
    }
  });

export default Items;
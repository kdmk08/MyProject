// -*- js-jsx -*-
import React from 'react';
import Greeting from './Greeting';
import BlinkText from './BlinkText';
import BasicInteractionApp from './BasicInteractionApp';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class HelloWithImageApp extends React.Component {
  render() {
    let pic = {
      uri: 'https://img1.coastalliving.timeinc.net/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/image/2017/03/main/poipu-beach-park-hawaii_0.jpg?itok=2zTolJLZ'
    };
    return (
       <View style={styles.container}>
        <Image source={pic} style={{width: 270, height: 154}}/>
        <Text>Welcome to my app!</Text>
        <BlinkText text='I hope you enjoy my app'/>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BlinkText from './BlinkText';
//import Beach from './props';


export default class BasicHelloApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BlinkText text='Changes you make will automatically reload.'/>
        <Text>Changes you make will automatically reload.</Text>
        <Text>You can do inline Javascript like: 3+5 is {3+5}.</Text>
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

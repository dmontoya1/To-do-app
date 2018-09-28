import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Body </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#98fb98',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

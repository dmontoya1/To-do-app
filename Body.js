import React, { Component } from 'react';
import {
  Text, View, StyleSheet, FlatList,
} from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Body </Text>
        <FlatList
          data={this.props.tasks}
          renderItem={({ item }) => <Text>{item.text}</Text>}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#98fb98',
  },
});

import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Task extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.item.text}</Text>
        <TouchableOpacity onPress={() => this.props.delete(this.props.item.key)}>
          <Ionicons
            name="md-trash"
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 24,
  },
});

export default Task;

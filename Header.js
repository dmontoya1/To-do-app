import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TextInput,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Header </Text>
        <TextInput
          style={styles.text}
          blurOnSubmit
          onChangeText={this.props.changeText}
          placeholder="Aqui escribe tu texto..."
          onSubmitEditing={this.props.agregar}
          value={this.props.text}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#00ff00',
    justifyContent: 'center',
  },
  text: {
    paddingHorizontal: 16,
  },
});

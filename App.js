import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      text: '',
    };
  }

  pushText = (value) => {
    console.log(value);
    this.setState({ text: value });
  }

  agregarTarea = () => {
    console.log('submit');
    this.setState({
      text: '',
      tasks: [...this.state.tasks, { text: this.state.text, key: Date.now() }],
    });
    console.log(this.state.tasks.length);
    console.log('salió');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          text={this.state.text}
          changeText={this.pushText}
          agregar={this.agregarTarea}
        />
        <Text>{this.state.text}</Text>
        <Body tasks={this.state.tasks} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

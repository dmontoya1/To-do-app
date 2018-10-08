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
    this.setState({ text: value });
  }

  agregarTarea = () => {
    this.setState({
      text: '',
      tasks: [...this.state.tasks, { text: this.state.text, key: Date.now() }],
    });
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.key !== id);
    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          text={this.state.text}
          changeText={this.pushText}
          agregar={this.agregarTarea}
        />
        <Body tasks={this.state.tasks} delete={this.deleteTask} />
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

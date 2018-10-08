import React, { Component } from 'react';
import {
  StyleSheet, Text, View, AsyncStorage, Button,
} from 'react-native';
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

  componentDidMount() {
    this.retrievePhone();
  }

  pushText = (value) => {
    this.setState({ text: value });
  }

  agregarTarea = () => {
    const newTasks = [...this.state.tasks, { text: this.state.text, key: Date.now() }];
    this.savePhone(newTasks);
    this.setState({
      text: '',
      tasks: newTasks,
    });
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.key !== id);
    this.savePhone(newTasks);
    this.setState({
      tasks: newTasks,
    });
  }

  savePhone = (tasks) => {
    AsyncStorage.setItem('@AppCurso:tasks', JSON.stringify(tasks))
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  retrievePhone = () => {
    AsyncStorage.getItem('@AppCurso:tasks')
      .then((value) => {
        console.log(value);
        console.log(JSON.parse(value));
        if (value !== null) {
          const newTasks = JSON.parse(value);
          this.setState({
            tasks: newTasks,
          });
        }
      })
      .catch((error) => {
        console.log(error);
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

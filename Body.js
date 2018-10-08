import React, { Component } from 'react';
import {
  Text, View, StyleSheet, FlatList, ActivityIndicator,
} from 'react-native';
import Task from './Task';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.loading
        && (
        <ActivityIndicator
          size="large"
          color="gray"
        />
        )
      }
        {!this.props.loading
        && (
          <FlatList
            data={this.props.tasks}
            renderItem={({ item }) => <Task item={item} delete={this.props.delete} />}
          />
        )
      }

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

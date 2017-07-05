
import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
class LoginScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Login with Facebook
        </Text>
        <Login />
      </View>
    );
  }
}
export default LoginScreen;

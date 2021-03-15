import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen.js';
import AppHeader from './header.js'

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
      <AppHeader/>
      <View style = {{marginTop: 250}}>
      <HomeScreen/>
      </View>
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

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { AsyncStorage } from "react-native";

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      value: ""
    }
  }
  
// save data function
  saveData() {
    var a = this.state.value
    AsyncStorage.setItem('key', a)
      .then(() => {
        
        alert("chal gaya")
      })
  }

  // get data function
  getData() {
    AsyncStorage.getItem('key')
      .then((data) => {
        alert(data + " " + "this is your data")
      })
  }

  // remove data function
  removeData() {
    AsyncStorage.removeItem('key')
      .then(() => {
        alert('chala gaya')
      })
  }

  render() {
    return (
      <View>
        <TextInput placeholder="Enter First Name"
          onChangeText={(text) => { this.setState({ value: text }) }}/>

        <Button title="get" onPress={this.getData.bind(this)}>
        get
        </Button>

        <Button title="remove" onPress={this.removeData.bind(this)}>
          REMOVE
        </Button>
        <Button title="save" onPress={this.saveData.bind(this)}>
          SAVE
        </Button>
      </View>
    );
  }
}

AppRegistry.registerComponent('TouristGuide', () => App);

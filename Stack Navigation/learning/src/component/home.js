import React, { Component } from 'react';
import { View, Button, AsyncStorage } from 'react-native';

class Home extends Component {
    static navigationOptions = {
        title: "Home"
    }
    navigate() {
        this.props.navigation.navigate("Aboutroute")
    }
    render() {
        return (
            <View>
                <Button title="Go To About" onPress={this.navigate.bind(this)}></Button>
            </View>
        );
    }
}
export default Home
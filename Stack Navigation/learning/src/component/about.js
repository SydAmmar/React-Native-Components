import React, { Component } from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';

class About extends Component {
    static navigationOptions = {
        title: "About"
    }
    navigate() {
        this.props.navigation.navigate("Homeroute")
    }
    render() {
        return (
            <View>
                <Button title="Go To Home" onPress={this.navigate.bind(this)}></Button>
            </View>
        );
    }
}
export default About
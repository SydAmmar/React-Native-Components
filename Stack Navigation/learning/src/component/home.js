import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, Label } from "native-base";


var array = []

class Home extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            disease: '',
            medication: '',
            cost: '',

        }
    }
    static navigationOptions = {
        title: "Home"
    }


    saveData() {
        let obj = {
            name: this.state.name,
            disease: this.state.disease,
            medication: this.state.medication,
            cost: this.state.cost
        }

        array: []
        array.push(obj)

        AsyncStorage.getItem('ammar')
            .then((data) => {
                if (data !== null) {
                    var newdata = JSON.parse(data)
                    array.push(newdata)
                    console.log(newdata, "yai data save hoa hai")
                }

            })


        AsyncStorage.setItem('ammar', JSON.stringify(array))
            .then(() => {
                console.log("submit hogaya")
            })





    }



    getData() {

        AsyncStorage.getItem('ammar')
            .then((data) => {
                var newdata = JSON.parse(data)
                console.log(newdata)
            })

    }


    navigate() {
        this.props.navigation.navigate("Aboutroute")
    }

    render() {
        return (
            <Container>

                <Content>
                    <Form>

                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input
                                onChangeText={(text) => {
                                    this.setState({
                                        name: text
                                    })
                                }}

                            />
                        </Item>

                        <Item floatingLabel>
                            <Label>Disease</Label>
                            <Input
                                onChangeText={(text) => {
                                    this.setState({
                                        disease: text
                                    })
                                }}
                            />
                        </Item>

                        <Item floatingLabel>
                            <Label>Medication Provided</Label>
                            <Input
                                onChangeText={(text) => {
                                    this.setState({
                                        medication: text
                                    })
                                }}

                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Cost</Label>
                            <Input
                                onChangeText={(text) => {
                                    this.setState({
                                        cost: text
                                    })
                                }}
                            />
                        </Item>
                        <Button danger onPress={this.saveData.bind(this)}>
                            <Text>save</Text>
                        </Button>
                        <Button danger onPress={this.getData.bind(this)}>
                            <Text>get</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
export default Home
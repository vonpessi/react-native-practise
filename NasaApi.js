import React, { Component } from 'react'
import {ActivityIndicator, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent'

class Nasa extends Component {
    constructor(props) {
        super(props);

    this.state = { isLoading: true }
}
componentDidMount = () => {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=n0jSIrodEcdnKgitUDvLbrMcd0wrjB6yBTrTFu1Y')
        .then((response) => response.json())
        .then((responseJson) => {

            this.setState({
                isLoading: false,
                data: {
                    title: responseJson.title,
                    img: responseJson.url,
                    explanation: responseJson.explanation
                }
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }
    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View>
                <PresentationalComponent data={this.state.data} />
            </View>
        )
    }
}

export default Nasa
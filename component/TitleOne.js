import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import {Divider} from "react-native-elements"
import {Colors} from "../styles";

class TitleOne extends Component {
    render() {
        const {title} = this.props;
        const contStyle = {
            position: "relative",
            marginTop: 20,
            marginBottom: 20
        }
        const titleMiddleBar = {
            backgroundColor: '#e5e5e5',
            position: "absolute",
            top: 20,
            left: 0,
            right: 0,
            height: 2
        }
        const titleStyle = {
            fontSize: 30,
            backgroundColor: '#fff',
            alignSelf: "center",
            paddingLeft: 10,
            paddingRight: 10,
            color: Colors.green,
            fontFamily: "BenSenHandwriting"
        }
        return(
            <View style={contStyle}>
                <Divider style={titleMiddleBar} />
                <Text style={titleStyle}>{title}</Text>
            </View>
        );
    }
}

export default TitleOne;
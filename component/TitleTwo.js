import React, { Component } from 'react';
import {View, Text} from "react-native";
import {Divider} from "react-native-elements";
import {Colors} from "../styles";

class TitleTwo extends Component {
    render() {
        const {title} = this.props;
        const contStyle = {
            width: '100%',
            marginTop: 10,
            marginBottom: 30,
            alignItems: 'center',
        }
        const titleStyle = {
            color: Colors.green,
            fontSize: 30,
            fontFamily: "BenSenHandwriting",
            marginBottom: 10
        }
        const divStyle = {
            backgroundColor: Colors.green,
            color: Colors.green,
            height: 4,
            width: 40
        }
        return(
            <View style={contStyle}>
                <Text style={titleStyle}>{title}</Text>
                <Divider style={divStyle} />
            </View>
        );
    }
}

export default TitleTwo;
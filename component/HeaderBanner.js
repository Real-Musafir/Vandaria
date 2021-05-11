import React, { Component } from 'react';
import {View, Text} from "react-native";
import { Slider, Image } from 'react-native-elements'

class HeaderBanner extends Component {
    render() {
        const {image, title, subtitle} = this.props;
        const headTitle = {
            fontSize: 20,
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            fontFamily: "kalpurush"
        }
        const headTitle2 = {
            fontSize: 56,
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            fontWeight: "900",
            fontFamily: "BenSenHandwriting"
          }
        return(
            <View style={{height: 250}}>
                <Image
                    style={{ height: 250, justifyContent: "center"}}
                    source={image}
                >
                    <Text style={headTitle}>{title}</Text>
                    <Text style={headTitle2}>{subtitle}</Text>
                </Image>
            </View>
        )
    }
}
export default HeaderBanner;
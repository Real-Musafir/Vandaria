import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Colors} from "../styles"

class IconBox extends Component {
    render() {
        const { width, height } = Dimensions.get('window')
        const {icon, image, title, subtitle, position, side, style, bg} = this.props;
        let vis = null;
        if (icon) {
            vis = <Icon color={Colors.red} name={icon} size={52} />
        }
        if (image) {
            vis = <Image style={{width: 85, height: 85, resizeMode: 'contain', marginBottom: 10}} source={image} />
        }

        let contStyle = {
            width: (width)/2,
            borderStyle: "dashed",
            borderWidth: 1,
            borderRadius: 1,
            borderColor: Colors.lightGray,
            position: "relative",
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
        }
        if (position == 'middle') {
            contStyle = {...contStyle, paddingTop: 20}
        }
        if (position == 'bottom') {
            contStyle = {...contStyle, paddingTop: 20, paddingBottom: 0}
        }

        let contOverlay = {
            backgroundColor: bg ?? "white",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            marginLeft: -1,
            marginTop: -1
        }
        if (side == "right") {
            contOverlay = {...contOverlay, marginRight: -1}
        }
        if (position == "bottom") {
            contOverlay = {...contOverlay, marginBottom: -1}
        }

        const bar2 = {
            width: 35,
            height: 3,
            backgroundColor: Colors.black,
            marginTop: 15,
            marginBottom: 15,
          }
        let num = {
            fontSize: 32,
            color: Colors.green,
            fontFamily: "kalpurush"
        }
        if (style == "2") {
            num = {...num, fontSize: 27, fontFamily: "BenSenHandwriting"}
        }
        if (style == "3") {
            num = {...num, fontSize: 27}
        }

        let numText = {
            fontSize: 18,
            marginBottom: 15,
            textAlign: 'center',
            width: width * 0.4,
            fontFamily: "kalpurush"
        }

        if (position == "bottom") {
            numText = {...numText, marginBottom: 0}
        }

        return(
            <View style={contStyle}>
                <View style={contOverlay}></View>
                {vis}
                <Text style={num}>{title}</Text>
                {style != "2" && style != "3" &&
                    <View style={bar2}></View>
                }
                <Text style={numText}>{subtitle}</Text>
          </View>
        );
    }
}

export default IconBox;
import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

class UserSlider extends Component {
  render() {
    const { headTitle, name, title, image } = this.props
    const { width, height } = Dimensions.get('window')
    const imgSize = {
      width: width * 0.8,
      height: width * 0.6,
      resizeMode: 'contain',
    }
    const nameStyle = {
      fontSize: 20,
      marginTop: 10,
      color: '#2E8B57',
    }
    const headTitle2 = {
      fontSize: 25,
      marginTop: 10,
      color: '#2E8B57',
    }
    const bar = {
      width: 55,
      height: 4,
      backgroundColor: '#2E8B57',
      marginTop: 10,
      marginBottom: 10,
    }
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={headTitle2}>{headTitle}</Text>
        <View style={bar}></View>
        <Image style={imgSize} source={require('../assets/images/ff.png')} />
        <Text style={nameStyle}>{name}</Text>
        <Text style={nameStyle}>{title}</Text>
      </View>
    )
  }
}

export default UserSlider

import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

class NationalLeader extends Component {
  render() {
    const { headTitle, name, title, image } = this.props
    const { width, height } = Dimensions.get('window')
    const viewWidth = width / 2
    const imgSize = {
      width: viewWidth,
      height: viewWidth,
      resizeMode: 'contain',
    }
    const nameStyle = {
      fontSize: 25,
      marginTop: 10,
      color: '#2E8B57',
      textAlign: 'center',
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
    const titleStyle = {
      fontSize: 20,
    }

    return (
      <View>
        <View style={{ alignItems: 'center', width: width / 2 }}>
          <Image style={imgSize} source={image} />
          <Text style={nameStyle}>{name}</Text>
          <Text style={titleStyle}>{title}</Text>
        </View>
      </View>
    )
  }
}

export default NationalLeader

import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { Image } from 'react-native-elements'

class HeaderSlide extends Component {
  render() {
    const { headTitle, name, title, image } = this.props
    const { width, height } = Dimensions.get('window')
    const imgSize = {
      width: width,
      height: width * 0.6,
    }
    const nameStyle = {
      fontSize: 40,
      fontWeight: 'bold',
      marginTop: 10,
      color: 'white',
      textAlign: 'center',
    }
    const headTitle2 = {
      fontSize: 20,
      marginTop: width * 0.16,
      color: 'white',
      textAlign: 'center',
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
        <Image
          style={imgSize}
          source={require('../assets/images/banner-1.png')}
        >
          <Text style={headTitle2}>{headTitle}</Text>
          <Text style={nameStyle}>{title}</Text>
        </Image>
      </View>
    )
  }
}

export default HeaderSlide

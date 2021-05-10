import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

class Notice extends Component {
  render() {
    const { name, author, date } = this.props
    const { width, height } = Dimensions.get('window')
    const imgSize = {
      width: width * 0.8,
      height: width * 0.6,
      resizeMode: 'contain',
    }
    const nameStyle = {
      fontSize: 20,
      marginTop: 10,
      color: 'black',
      textAlign: 'center',
      marginBottom: 20,
      marginRight: 20,
    }
    const Author = {
      fontSize: 20,
      marginTop: 10,
      color: 'black',
      textAlign: 'center',
      marginBottom: 5,
    }
    const Date = {
      fontSize: 16,
      color: 'gray',
      textAlign: 'center',
      marginBottom: 20,
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
    const bar2 = {
      width: 20,
      height: 2,
      backgroundColor: 'black',
      marginTop: 10,
      marginBottom: 10,
    }
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={headTitle2}>
          নোটিশ <Text style={{ color: 'black' }}>বোর্ড</Text>
        </Text>
        <View style={bar}></View>
        <Text style={nameStyle}>{name}</Text>
        <View style={bar2}></View>
        <Text style={Author}>{author}</Text>
        <Text style={Date}>{date}</Text>
      </View>
    )
  }
}

export default Notice

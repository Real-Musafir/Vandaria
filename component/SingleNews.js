import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  Animated,
  Dimensions,
  Pressable,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { SliderBox } from 'react-native-image-slider-box'
import { Slider, Image, Button } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'

class SingleNews extends Component {
  render() {
    const { title } = this.props
    const { width, height } = Dimensions.get('window')
    const circle1 = {
      width: 20,
      height: 20,
      backgroundColor: 'red',
      borderRadius: 12,
      marginTop: 3,
    }
    const rawView = {
      flexDirection: 'row',
      padding: 20,
      borderTopWidth: 1,
      borderColor: 'lightgray',
    }
    const titleText = {
      marginLeft: 20,
      fontSize: 18,
    }
    return (
      <View style={rawView}>
        <View style={circle1}></View>
        <Text style={titleText}>{title} </Text>
      </View>
    )
  }
}

export default SingleNews

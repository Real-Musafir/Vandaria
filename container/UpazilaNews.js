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
import CloseHeader from '../component/CloseHeader'

class UpazilaNews extends Component {
  render() {
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
      <SafeAreaProvider style={{ backgroundColor: 'white' }}>
        <CloseHeader
          navigation={this.props.navigation}
          text="উপজেলা সম্পর্কিত"
        />
        <ScrollView>
          <View style={rawView}>
            <View style={circle1}></View>
            <Text style={titleText}>এক নজরে </Text>
          </View>
          <View style={rawView}>
            <View style={circle1}></View>
            <Text style={titleText}>উপজেলা পটভূমি </Text>
          </View>
          <View style={rawView}>
            <View style={circle1}></View>
            <Text style={titleText}> উপজেলা ঐতিহ্য </Text>
          </View>
          <View style={rawView}>
            <View style={circle1}></View>
            <Text style={titleText}>ভাষা ও সংস্কৃতি </Text>
          </View>
          <View style={rawView}>
            <View style={circle1}></View>
            <Text style={titleText}>দর্শনীয় স্থান </Text>
          </View>
          <View style={rawView}>
            <View style={circle1}></View>
            <Text style={titleText}>খেলা ধুলা ও বিনোদন </Text>
          </View>
          <View style={rawView}>
            <View style={circle1}></View>
            <Text style={titleText}>মুক্তিজোদ্ধাদের তালিকা </Text>
          </View>
          <View style={rawView}>
            <View style={circle1}></View>
            <Text style={titleText}>প্রাকৃতিক সম্পদ </Text>
          </View>
          <View style={rawView}>
            <View style={circle1}></View>
            <Text style={titleText}>নদ নদী </Text>
          </View>
          <View style={rawView}>
            <View style={circle1}></View>
            <Text style={titleText}>ব্যবসা বাণিজ্য </Text>
          </View>
          <View style={rawView}>
            <View style={circle1}></View>
            <Text style={titleText}>হাট বাজার </Text>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default UpazilaNews

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
import SingleNews from '../component/SingleNews'

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
          <SingleNews title="এক নজরে" />
          <SingleNews title="উপজেলা পটভূমি" />
          <SingleNews title="উপজেলা ঐতিহ্য" />
          <SingleNews title="ভাষা ও সংস্কৃতি" />
          <SingleNews title="দর্শনীয় স্থান" />
          <SingleNews title="খেলা ধুলা ও বিনোদন" />
          <SingleNews title="মুক্তিজোদ্ধাদের তালিকা" />
          <SingleNews title="প্রাকৃতিক সম্পদ  " />
          <SingleNews title="নদ নদী" />
          <SingleNews title="ব্যবসা বাণিজ্য" />
          <SingleNews title="হাট বাজার" />
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default UpazilaNews

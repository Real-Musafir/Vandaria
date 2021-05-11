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

class AboutUpazila extends Component {
  gotoUpazilaNews = () => {
    this.props.navigation.navigate('UpazilaNews')
  }
  render() {
    const { width, height } = Dimensions.get('window')
    const middleBody = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
      paddingBottom: 0,
      paddingTop: 0,
    }
    const left1 = {
      padding: 10,
      paddingTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: width * 0.47,
      borderStyle: 'dashed',
      borderRightWidth: 1,
      // borderWidth: 2,
      // borderStyle: 'dotted',
    }
    const right1 = {
      padding: 10,
      paddingTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: width * 0.53,
      // backgroundColor: 'red',
    }
    const bar2 = {
      width: 35,
      height: 3,
      backgroundColor: '#2E8B57',
      marginTop: 15,
      marginBottom: 15,
    }
    const num = {
      fontSize: 25,
      color: '#2E8B57',
    }
    const num2 = {
      marginBottom: 10,
      marginTop: 10,
      fontSize: 20,
      color: '#2E8B57',
    }
    const numText = {
      fontSize: 17,
      marginBottom: 15,
      textAlign: 'center',
      width: width * 0.4,
    }
    const bdr = {
      height: 2,
      width: width,
      backgroundColor: 'gray',
    }
    const icnCircle = {
      width: 75,
      height: 75,
      borderRadius: 45,
      backgroundColor: 'red',
      alignItems: 'center',
    }
    const icnCircle2 = {
      width: 90,
      height: 90,
      borderRadius: 45,
      borderWidth: 3,
      borderColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    }
    const iconStyle2 = { color: 'white', marginTop: 20 }
    const iconStyle = { color: 'red', marginTop: 20 }
    return (
      <SafeAreaProvider style={{ backgroundColor: 'white' }}>
        <ScrollView style={{ marginTop: 35 }}>
          <View style={middleBody}>
            <Pressable onPress={this.gotoUpazilaNews}>
              <View style={left1}>
                <View style={icnCircle2}>
                  <View style={icnCircle}>
                    <Icon style={iconStyle2} name="building" size={40} />
                  </View>
                </View>

                <Text style={num2}>উপজেলা সম্পর্কিত</Text>
                <Text style={numText}>উপজেলা সম্পর্কিত তথ্য ও পরিচিতি</Text>
              </View>
            </Pressable>
            <View style={right1}>
              <View style={icnCircle2}>
                <View style={icnCircle}>
                  <Icon style={iconStyle2} name="home" size={40} />
                </View>
              </View>

              <Text style={num2}>প্রশাসন সম্পর্কিত</Text>
              <Text style={numText}>প্রশাসন সম্পর্কিত তথ্য ও পরিচিতি</Text>
            </View>
          </View>
          <View style={bdr}></View>
          <View style={middleBody}>
            <Pressable onPress={this.gotoAboutUpazila}>
              <View style={left1}>
                <View style={icnCircle2}>
                  <View style={icnCircle}>
                    <Icon style={iconStyle2} name="building" size={40} />
                  </View>
                </View>

                <Text style={num2}>উপজেলা প্রশাসন</Text>
                <Text style={numText}>উপজেলা প্রশাসন এর তথ্য ও পরিচিতি</Text>
              </View>
            </Pressable>
            <View style={right1}>
              <View style={icnCircle2}>
                <View style={icnCircle}>
                  <Icon style={iconStyle2} name="user" size={40} />
                </View>
              </View>

              <Text style={num2}>প্রখ্যাত ব্যক্তিত্ব</Text>
              <Text style={numText}>উপজেলার প্রখ্যাত ব্যক্তিত্ব</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default AboutUpazila

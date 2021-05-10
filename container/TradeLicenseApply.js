import React, { Component } from 'react'
import { View, Text, ScrollView, TextInput, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { SliderBox } from 'react-native-image-slider-box'
import { Slider, Image, Button } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RNPickerSelect from 'react-native-picker-select'
import DropDownPicker from 'react-native-dropdown-picker'
import DropZone from 'react-native-drop-zone'

class TradeLicenseApply extends Component {
  render() {
    const { width, height } = Dimensions.get('window')
    const scrlStyle = {
      backgroundColor: 'white',
      padding: 30,
    }
    const inpuBox = {
      borderColor: 'lightgray',
      borderWidth: 2,
      padding: 3,
      paddingLeft: 10,
    }
    const title = {
      fontSize: 15,
      color: '#696969',
      marginTop: 15,
      marginBottom: 5,
    }
    const container = {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
    const dropDown = {
      height: 40,
      borderRadius: 0,
      borderColor: 'lightgray',
    }
    const busniessText = {
      fontSize: 23,
      color: '#696969',
      marginTop: 15,
      marginBottom: 5,
    }
    const bdr = {
      width: width,
      height: 1,
      backgroundColor: 'lightgray',
    }
    return (
      <SafeAreaProvider>
        <ScrollView style={scrlStyle}>
          <Text style={title}>আবেদন কারীর নাম </Text>
          <TextInput style={inpuBox} />
          <Text style={title}>পিতা / স্বামী </Text>
          <DropDownPicker
            style={dropDown}
            placeholder=""
            items={[
              { label: 'পিতা', value: 'পিতা', parent: 'na' },
              { label: 'স্বামী', value: 'স্বামী', parent: 'na' },
            ]}
          />
          <Text style={title}>আবেদনকারীর পিতা বা স্বামীর নাম </Text>
          <TextInput style={inpuBox} />
          <Text style={title}>আবেদনকারীর মাতার নাম </Text>
          <TextInput style={inpuBox} />
          <Text style={title}>জেলা </Text>
          <DropDownPicker
            style={dropDown}
            placeholder=""
            items={[
              { label: 'চট্টগ্রাম', value: 'চট্টগ্রাম', parent: 'na' },
              { label: 'ঢাকা', value: 'ঢাকা', parent: 'na' },
              { label: 'খুলনা', value: 'খুলনা', parent: 'na' },
            ]}
          />
          <Text style={title}>উপজেলা </Text>
          <DropDownPicker
            style={dropDown}
            placeholder=""
            items={[
              { label: 'চট্টগ্রাম', value: 'চট্টগ্রাম', parent: 'na' },
              { label: 'ঢাকা', value: 'ঢাকা', parent: 'na' },
              { label: 'খুলনা', value: 'খুলনা', parent: 'na' },
            ]}
          />
          <Text style={title}>ইউনিয়ন পরিষদ </Text>
          <DropDownPicker
            style={dropDown}
            placeholder=""
            items={[
              { label: 'চট্টগ্রাম', value: 'চট্টগ্রাম', parent: 'na' },
              { label: 'ঢাকা', value: 'ঢাকা', parent: 'na' },
              { label: 'খুলনা', value: 'খুলনা', parent: 'na' },
            ]}
          />
          <Text style={title}>ডাকঘর </Text>
          <DropDownPicker
            style={dropDown}
            placeholder=""
            items={[
              { label: 'চট্টগ্রাম', value: 'চট্টগ্রাম', parent: 'na' },
              { label: 'ঢাকা', value: 'ঢাকা', parent: 'na' },
              { label: 'খুলনা', value: 'খুলনা', parent: 'na' },
            ]}
          />
          <Text style={title}>গ্রাম </Text>
          <DropDownPicker
            style={dropDown}
            placeholder=""
            items={[
              { label: 'চট্টগ্রাম', value: 'চট্টগ্রাম', parent: 'na' },
              { label: 'ঢাকা', value: 'ঢাকা', parent: 'na' },
              { label: 'খুলনা', value: 'খুলনা', parent: 'na' },
            ]}
          />
          <Text style={title}>ওয়ার্র্ড নাম্বার </Text>
          <DropDownPicker
            style={dropDown}
            placeholder=""
            items={[
              { label: 'চট্টগ্রাম', value: 'চট্টগ্রাম', parent: 'na' },
              { label: 'ঢাকা', value: 'ঢাকা', parent: 'na' },
              { label: 'খুলনা', value: 'খুলনা', parent: 'na' },
            ]}
          />
          <Text style={title}>হোল্ডিং নম্বর</Text>
          <TextInput style={inpuBox} />
          <Text style={title}>বাড়ির নাম </Text>
          <TextInput style={inpuBox} />
          <Text style={title}>এনআইডি / জন্ম </Text>
          <DropDownPicker
            style={dropDown}
            placeholder=""
            items={[
              { label: 'এনআইডি', value: 'এনআইডি', parent: 'na' },
              { label: 'জন্ম', value: 'জন্ম', parent: 'na' },
            ]}
          />
          <Text style={title}>মোবাইল নাম্বার</Text>
          <TextInput style={inpuBox} />
          <Text style={busniessText}>ব্যবসা সংক্রান্ত </Text>
          <View style={bdr}></View>
          <Text style={title}>প্রতিষ্টানের নাম </Text>
          <TextInput style={inpuBox} />
          <Text style={title}>ব্যবসার ধরণ</Text>
          <TextInput style={inpuBox} />
          <Text style={title}>ব্যবসার নাম </Text>
          <TextInput style={inpuBox} />

          <View style={{ marginTop: 50 }}></View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default TradeLicenseApply

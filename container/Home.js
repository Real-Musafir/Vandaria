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
import { Slider, Image, Divider, Button } from 'react-native-elements'
import UserSlider from '../component/UserSlider'
import NationalLeader from '../component/NationalLeader'
import Swiper from 'react-native-web-swiper'
import Notice from '../component/Notice'
import HeaderBanner from '../component/HeaderBanner'
import TitleOne from '../component/TitleOne'
import TitleTwo from '../component/TitleTwo'
import IconBox from '../component/IconBox'
import { Colors } from '../styles'

class Home extends Component {
  gotoTradeLicenseApply = () => {
    this.props.navigation.navigate('TradeLicenseApply')
  }
  gotoAboutUpazila = () => {
    this.props.navigation.navigate('AboutUpazila')
  }
  constructor(props) {
    super(props)
    this.state = {
      images: [
        'http://rabonadev.com/grandstar/img/slider1.jpg',
        'http://rabonadev.com/grandstar/img/slider1.jpg',
        'http://rabonadev.com/grandstar/img/slider1.jpg',
        // require('./assets/images/girl.jpg'),
      ],
    }
  }
  render() {
    const { width, height } = Dimensions.get('window')
    const scrlStyle = {
      backgroundColor: 'white',
    }
    const rawSlide = {
      textAlign: 'center',
      backgroundColor: '#f2f6f5',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 30,
      paddingBottom: 30,
    }
    const rawSlide1 = {
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 30,
      paddingBottom: 30,
    }
    const rawSlide3 = {
      textAlign: 'center',
      padding: 10,
      marginTop: 30,
      backgroundColor: 'white',
      padding: 10,
    }

    const eknojor = {
      marginTop: 30,
      textAlign: 'center',
      fontSize: 27,
      fontFamily: 'BenSenHandwriting',
      color: Colors.black,
    }
    const eknojor2 = {
      textAlign: 'center',
      fontSize: 18,
      fontFamily: 'kalpurush',
    }
    const bar = {
      width: 55,
      height: 4,
      backgroundColor: Colors.green,
      marginTop: 15,
      marginBottom: 15,
      marginLeft: width * 0.46,
    }
    const middleBody = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 0,
    }
    const left1 = {
      width: width / 2,
      borderStyle: 'dashed',
      borderWidth: 1,
      borderRadius: 1,
      borderColor: Colors.lightGray,
      position: 'relative',
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    }
    const left1Cont = {
      backgroundColor: 'white',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      marginLeft: -1,
      marginTop: -1,
    }
    const right1 = {
      width: width / 2,
      borderStyle: 'dashed',
      borderWidth: 1,
      borderRadius: 1,
      borderColor: Colors.lightGray,
      position: 'relative',
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    }
    const right1Cont = {
      backgroundColor: 'white',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      marginLeft: -1,
      marginTop: -1,
      marginRight: -1,
    }

    const bar2 = {
      width: 35,
      height: 3,
      backgroundColor: Colors.black,
      marginTop: 15,
      marginBottom: 15,
    }
    const num = {
      fontSize: 35,
      color: Colors.green,
      fontFamily: 'kalpurush',
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
    const iconStyle = { color: 'red', marginTop: 0 }
    const imgStyle = {
      height: 250,
      width: 250,
      resizeMode: 'contain',
    }
    const pName = {
      fontSize: 30,
      color: Colors.green,
      textAlign: 'center',
      fontFamily: 'BenSenHandwriting',
      marginTop: 10,
    }
    const pTitle = {
      fontSize: 18,
      textAlign: 'center',
      paddingLeft: 15,
      paddingRight: 15,
      color: Colors.gray,
      fontFamily: 'kalpurush',
    }
    const union = {
      textAlign: 'center',
      fontSize: 30,
      color: '#2E8B57',
      marginTop: 20,
      marginBottom: 20,
    }
    const rawData = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    }
    const leftUnino = {
      padding: 15,
      width: width * 0.5,
      backgroundColor: Colors.green,
      alignItems: 'center',
    }
    const uTitle = {
      fontSize: 32,
      marginTop: 10,
      marginBottom: 10,
      color: 'white',
      fontFamily: 'BenSenHandwriting',
    }
    const uTxt = {
      fontSize: 22,
      marginBottom: 5,
      color: 'white',
      fontFamily: 'kalpurush',
    }
    const rightUnino = {
      padding: 15,
      width: width * 0.5,
      backgroundColor: 'red',
      alignItems: 'center',
    }
    const noticeTitle = {
      fontFamily: 'BenSenHandwriting',
      fontSize: 35,
      color: Colors.green,
      textAlign: 'center',
    }
    const ntcB = {
      textAlign: 'center',
      fontSize: 35,
      color: Colors.black,
      marginTop: 30,
      fontFamily: 'BenSenHandwriting',
    }
    const complainText = {
      fontSize: 35,
      textAlign: 'center',
      color: 'white',
      fontFamily: 'BenSenHandwriting',
    }
    const bar3 = {
      height: 5,
      width: 50,
      backgroundColor: 'white',
      marginTop: 10,
      marginBottom: 20,
    }
    const complainBox = {
      height: 60,
      width: 200,
      backgroundColor: 'white',
      borderRadius: 10,
      marginBottom: 20,
      marginTop: 20,
      justifyContent: 'center',
    }
    const leaderCont = {
      width: width - 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    const rawSlide2 = {
      textAlign: 'center',
      padding: 10,
      marginTop: 0,
    }
    const headTitle3 = {
      fontSize: 30,
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: 10,
      color: '#2E8B57',
      fontWeight: 'bold',
      marginBottom: 30,
    }

    return (
      <ScrollView style={scrlStyle}>
        <View style={{ flex: 1, width: width, height: 250 }}>
          <Swiper
            from={0}
            minDistanceForAction={0.1}
            controlsProps={{
              dotsTouchable: true,
              prevPos: 'left',
              nextPos: 'right',
              nextTitle: '>',
              prevTitle: '<',
              nextTitleStyle: {
                color: 'white',
                fontSize: 24,
                fontWeight: '500',
                backgroundColor: 'rgba(0,0,0,.5)',
                paddingLeft: 12,
                paddingRight: 12,
                marginRight: -20,
                paddingTop: 5,
                paddingBottom: 5,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              },
              prevTitleStyle: {
                color: 'white',
                fontSize: 24,
                fontWeight: '500',
                backgroundColor: 'rgba(0,0,0,.5)',
                paddingLeft: 12,
                paddingRight: 12,
                marginLeft: -20,
                paddingTop: 5,
                paddingBottom: 5,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
              },
            }}
          >
            <HeaderBanner
              image={require('../assets/images/banner-1.png')}
              title="ভান্ডারিয়া উপজেলা পরিষদ"
              subtitle="স্মার্ট উপজেলা"
            />
            <HeaderBanner
              image={require('../assets/images/banner-2.png')}
              title="ভান্ডারিয়া উপজেলা পরিষদ"
              subtitle="স্মার্ট উপজেলা"
            />
          </Swiper>
        </View>
        <View style={rawSlide2}>
          <TitleOne title="জাতীয় নেতৃবৃন্দ" />

          <View style={{ flex: 1, width: width - 20, height: 370 }}>
            <Swiper
              from={0}
              minDistanceForAction={0.1}
              controlsProps={{
                dotsTouchable: true,
                nextTitle: '>',
                nextTitleStyle: {
                  display: 'none',
                },
                prevTitleStyle: {
                  display: 'none',
                },
                dotActiveStyle: {
                  backgroundColor: Colors.red,
                },
              }}
            >
              <View style={leaderCont}>
                <NationalLeader
                  name="বঙ্গবন্ধু শেখ মুজিবুর রহমান"
                  title="বাঙ্গালী জাতির পিতা"
                  image={require('../assets/images/bb.jpg')}
                />
                <NationalLeader
                  name="জননেত্রী শেখ হাসিনা"
                  title="মাননীয় প্রধানমন্ত্রী"
                  image={require('../assets/images/hasina.jpg')}
                />
              </View>
              <View style={leaderCont}>
                <NationalLeader
                  name="বঙ্গবন্ধু শেখ মুজিবুর রহমান"
                  title="বাঙ্গালী জাতির পিতা"
                  image={require('../assets/images/bb.jpg')}
                />
                <NationalLeader
                  name="জননেত্রী শেখ হাসিনা"
                  title="মাননীয় প্রধানমন্ত্রী"
                  image={require('../assets/images/hasina.jpg')}
                />
              </View>
            </Swiper>
          </View>
        </View>
        <View style={rawSlide}>
          <TitleTwo title="গণ্যমান্য ব্যক্তিবর্গ" />
          <View style={{ flex: 1, width: width, height: 350 }}>
            <Swiper
              from={0}
              minDistanceForAction={0.1}
              controlsProps={{
                dotsTouchable: true,
                prevPos: 'left',
                nextPos: 'right',
                nextTitle: '>',
                nextTitleStyle: {
                  display: 'none',
                },
                prevTitleStyle: {
                  display: 'none',
                },
                dotActiveStyle: {
                  backgroundColor: Colors.red,
                },
              }}
            >
              <UserSlider
                name="আতাউল গনি ওসমানী"
                title="বীর মুক্তিযোদ্ধা"
                image="../assets/images/ff.png"
              />
              <UserSlider
                name="আতাউল গনি ওসমানী"
                title="বীর মুক্তিযোদ্ধা"
                image="../assets/images/ff.png"
              />
            </Swiper>
          </View>
        </View>
        <View style={rawSlide1}>
          <TitleTwo title="সম্মানীত মুক্তিযোদ্ধাগণ" />
          <View style={{ flex: 1, width: width, height: 350 }}>
            <Swiper
              from={0}
              minDistanceForAction={0.1}
              controlsProps={{
                dotsTouchable: true,
                prevPos: 'left',
                nextPos: 'right',
                nextTitle: '>',
                nextTitleStyle: {
                  display: 'none',
                },
                prevTitleStyle: {
                  display: 'none',
                },
                dotActiveStyle: {
                  backgroundColor: Colors.red,
                },
              }}
            >
              <UserSlider
                name="আতাউল গনি ওসমানী"
                title="বীর মুক্তিযোদ্ধা"
                image="../assets/images/ff.png"
              />
              <UserSlider
                name="আতাউল গনি ওসমানী"
                title="বীর মুক্তিযোদ্ধা"
                image="../assets/images/ff.png"
              />
            </Swiper>
          </View>
        </View>
        <Text style={eknojor}>
          এক নজরে <Text style={{ color: Colors.green }}>ভান্ডারিয়া</Text> উপজেলা
        </Text>
        <Text style={eknojor2}>বাংলাদেশের অন্যতম স্মার্ট উপজেলা</Text>
        <View style={bar}></View>
        <View style={{ height: 30 }}></View>
        <View style={middleBody}>
          <IconBox
            title="১৬৩.৫৬"
            subtitle="বর্গ কিলোমিটার"
            icon="vector-square"
            position="top"
            side="left"
          />
          <IconBox
            title="১,৬৪,৬১৮"
            subtitle="জনসংখ্যা (প্রায়)"
            icon="users"
            position="top"
            side="right"
          />
        </View>
        <View style={middleBody}>
          <IconBox
            title="১২৭,২০১"
            subtitle="ভোটার সংখ্যা"
            icon="person-booth"
            position="bottom"
            side="left"
          />
          <IconBox
            title="৬২.৬৮%"
            subtitle="শিক্ষার হার"
            icon="graduation-cap"
            position="bottom"
            side="right"
          />
        </View>
        <View
          style={{
            backgroundColor: '#f9f9f9',
            paddingTop: 30,
            paddingBottom: 30,
            paddingLeft: 15,
            paddingRight: 15,
            marginTop: 30,
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            style={imgStyle}
            source={require('../assets/images/mirajul.png')}
          />
          <Text style={pName}>মোঃ মিরাজুল ইসলাম</Text>
          <Text style={pTitle}>
            স্মার্ট ভান্ডারিয়া উপজেলা বাস্তবায়নের অন্যতম রূপকার
          </Text>
        </View>
        <TitleOne title="ইউনিয়নসমূহ" />
        <View style={rawData}>
          <View style={leftUnino}>
            <Icon
              style={{ color: 'white', marginTop: 10 }}
              name="city"
              size={42}
            />
            <Text style={uTitle}>গৌরীপুর</Text>
            <Text style={uTxt}>৪৭৩৭ একর</Text>
            <Text style={uTxt}>৫৪,০৮৬ জন</Text>
          </View>
          <View style={rightUnino}>
            <Icon
              style={{ color: 'white', marginTop: 10 }}
              name="city"
              size={42}
            />
            <Text style={uTitle}>ভান্ডারিয়া সদর</Text>
            <Text style={uTxt}>৪৭৩৭ একর</Text>
            <Text style={uTxt}>৫৪,০৮৬ জন</Text>
          </View>
        </View>
        <TitleOne title="আরও দেখুন" />
        <View style={middleBody}>
          <Pressable onPress={this.gotoAboutUpazila}>
            <IconBox
              title="উপজেলা"
              subtitle="উপজেলা সম্পর্কিত তথ্য, পরিষদ, প্রশাসন"
              image={require('../assets/images/upazila.png')}
              position="top"
              side="left"
              style="2"
            />
          </Pressable>
          <IconBox
            title="পৌরসভা"
            subtitle="পৌরসভা সম্পর্কিত তথ্য"
            image={require('../assets/images/pourasava.png')}
            position="top"
            side="right"
            style="2"
          />
        </View>
        <View style={middleBody}>
          <IconBox
            title="ইউনিয়ন"
            subtitle="ইউনিয়ন সমুহের পরিচিতি"
            image={require('../assets/images/union.png')}
            position="middle"
            side="left"
            style="2"
          />
          <IconBox
            title="প্রতিষ্ঠান সমূহ"
            subtitle="উপজেলার প্রতিষ্ঠানসমুহের তথ্য"
            image={require('../assets/images/protistan.png')}
            position="middle"
            side="right"
            style="2"
          />
        </View>
        <View style={middleBody}>
          <IconBox
            title="উন্নয়ন প্রকল্প"
            subtitle="উপজেলায় সরকারি উন্নয়ন প্রকল্পসমূহ"
            image={require('../assets/images/unnayan.png')}
            position="middle"
            side="left"
            style="2"
          />
          <IconBox
            title="অনলাইনে সেবা"
            subtitle="অনলাইনে উপজেলার নাগরিক সেবা"
            image={require('../assets/images/sheba.png')}
            position="middle"
            side="right"
            style="2"
          />
        </View>
        <View style={middleBody}>
          <IconBox
            title="নিউজ আর্কাইভ"
            subtitle="জাতীয় এবং আঞ্চলিক নিউজ আপডেট"
            image={require('../assets/images/news.png')}
            position="middle"
            side="left"
            style="2"
          />
          <IconBox
            title="স্থানীয় সরকার"
            subtitle="মন্ত্রণালয় সম্পর্কিত তথ্য"
            image={require('../assets/images/local-govt.png')}
            position="middle"
            side="right"
            style="2"
          />
        </View>
        <View style={middleBody}>
          <IconBox
            title="ডিজিটাল লাইব্রেরি"
            subtitle="অনলাইনে ডিজিটাল বইয়ের সংগ্রহ"
            image={require('../assets/images/library.png')}
            position="bottom"
            side="left"
            style="2"
          />
          <IconBox
            title="বিনোদন"
            subtitle="ছবি, অডিও এবং ভিডিও"
            image={require('../assets/images/enter.png')}
            position="bottom"
            side="right"
            style="2"
          />
        </View>
        <View
          style={{
            backgroundColor: '#f9f9f9',
            paddingTop: 30,
            paddingBottom: 30,
            marginTop: 30,
            justifyContent: 'center',
          }}
        >
          <Text style={noticeTitle}>
            নোটিশ <Text style={{ color: Colors.black }}>বোর্ড</Text>
          </Text>
          <View style={bar}></View>
          <View style={{ flex: 1, width: width, height: 300 }}>
            <Swiper
              from={1}
              minDistanceForAction={0.1}
              controlsProps={{
                dotsTouchable: true,
                prevPos: 'left',
                nextPos: 'right',
                nextTitle: '>',
                nextTitleStyle: {
                  display: 'none',
                },
                prevTitleStyle: {
                  display: 'none',
                },
                dotActiveStyle: {
                  backgroundColor: Colors.red,
                },
              }}
            >
              <Notice
                name="আগামী শনি বার করোনা ভাইরাসের টিকা দেয়া হবে উপজেলা সমস্ত কমপ্লেক্সে"
                author="মোঃ মিরাজুল ইসলাম"
                date="১ এপ্রিল ২০১৭ "
              />
              <Notice
                name="আগামী শনি বার করোনা ভাইরাসের টিকা দেয়া হবে উপজেলা সমস্ত কমপ্লেক্সে"
                author="মোঃ মিরাজুল ইসলাম"
                date="১ এপ্রিল ২০১৭ "
              />
            </Swiper>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#e5f0ec',
            paddingBottom: 30,
          }}
        >
          <Text style={ntcB}>
            জরুরী <Text style={{ color: Colors.green }}>সেবা</Text>
          </Text>
          <View style={bar}></View>
          <View style={{ height: 20 }}></View>
          <View style={middleBody}>
            <IconBox
              title="হাসপাতাল"
              image={require('../assets/images/hospital.png')}
              position="top"
              side="left"
              style="3"
              bg="#e5f0ec"
            />
            <IconBox
              title="অ্যাম্বুলেন্স"
              image={require('../assets/images/ambulance.png')}
              position="top"
              side="right"
              style="3"
              bg="#e5f0ec"
            />
          </View>
          <View style={middleBody}>
            <IconBox
              title="ফায়ার সার্ভিস"
              image={require('../assets/images/fire.png')}
              position="bottom"
              side="left"
              style="3"
              bg="#e5f0ec"
            />
            <IconBox
              title="পুলিশ"
              image={require('../assets/images/police.png')}
              position="bottom"
              side="right"
              style="3"
              bg="#e5f0ec"
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'red',
            paddingTop: 30,
            padding: 15,
            alignItems: 'center',
          }}
        >
          <Text style={complainText}>অভিযোগ বা পরামর্শ</Text>
          <View style={bar3}></View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              fontFamily: 'kalpurush',
            }}
          >
            আপনার কোন অভিযোগ বা পরামর্শ থাকলে নিচের বাটনে ক্লিক করে আমাদেরকে
            জানান।
          </Text>
          <View style={complainBox}>
            <Text
              style={{
                color: 'red',
                fontSize: 22,
                textAlign: 'center',
                fontFamily: 'kalpurush',
              }}
            >
              অভিযোগ/পরামর্শ
            </Text>
          </View>
        </View>
        <Button
          onPress={this.gotoTradeLicenseApply}
          buttonStyle={{ backgroundColor: 'blue' }}
          title="Just For Test"
          type="solid"
        />
      </ScrollView>
    )
  }
}

export default Home

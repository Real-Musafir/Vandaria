import React, { Component } from 'react'
import { View, Text, ScrollView, Animated, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { SliderBox } from 'react-native-image-slider-box'
import { Slider, Image } from 'react-native-elements'
import UserSlider from '../component/UserSlider'
import NationalLeader from '../component/NationalLeader'
import Swiper from 'react-native-web-swiper'

class Home extends Component {
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
      marginTop: 20,
    }
    const rawSlide = {
      textAlign: 'center',
      backgroundColor: '#F0F8FF',
      padding: 10,
      marginTop: 30,
    }
    const headerPart = {}
    const headTitle = {
      fontSize: 20,
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: 80,
      color: 'white',
    }
    const headTitle2 = {
      fontSize: 46,
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: 10,
      color: 'white',
      fontWeight: 'bold',
    }
    const eknojor = {
      marginTop: 30,
      textAlign: 'center',
      fontSize: 23,
    }
    const eknojor2 = {
      textAlign: 'center',
      fontSize: 18,
    }
    const bar = {
      width: 55,
      height: 4,
      backgroundColor: '#2E8B57',
      marginTop: 15,
      marginBottom: 15,
      marginLeft: width * 0.46,
    }
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
      width: width * 0.5,
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
      width: width * 0.5,
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
    const iconStyle = { color: 'red', marginTop: 20 }
    const imgStyle = {
      height: 250,
      width: width,
      resizeMode: 'contain',
      marginTop: 50,
    }
    const pName = {
      fontSize: 25,
      color: '#2E8B57',
      textAlign: 'center',
    }
    const pTitle = {
      fontSize: 18,
      textAlign: 'center',
      padding: 15,
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
    }
    const leftUnino = {
      padding: 15,
      width: width * 0.5,
      backgroundColor: '#2E8B57',
      alignItems: 'center',
    }
    const uTitle = {
      fontSize: 22,
      marginTop: 10,
      marginBottom: 10,
      color: 'white',
    }
    const uTxt = {
      fontSize: 18,
      marginBottom: 10,
      color: 'white',
    }
    const rightUnino = {
      padding: 15,
      width: width * 0.5,
      backgroundColor: 'red',
      alignItems: 'center',
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
    const leaderCont = {
      width: width,
      flexDirection: 'row',
    }
    const rawSlide2 = {
      textAlign: 'center',
      padding: 10,
      marginTop: 30,
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
        <View style={headerPart}>
          <Image
            style={{ height: 250, marginTop: 10 }}
            source={require('../assets/images/banner-1.png')}
          >
            <Text style={headTitle}>ভান্ডারিয়া উপজেলা পরিষদ</Text>
            <Text style={headTitle2}>স্মার্ট উপজেলা</Text>
          </Image>
        </View>
        <View style={rawSlide2}>
          <Text style={headTitle3}>জাতীয় নেতৃবৃন্দ</Text>
          <View style={{ flex: 1, width: width, height: 440 }}>
            <Swiper
              from={0}
              minDistanceForAction={0.1}
              controlsProps={{
                dotsTouchable: true,
                prevPos: 'left',
                nextPos: 'right',
                nextTitle: '>',
                nextTitleStyle: {
                  color: 'red',
                  fontSize: 24,
                  fontWeight: '500',
                },
                PrevComponent: ({ onPress }) => (
                  <Text
                    style={{ color: 'white', fontSize: 24, fontWeight: '500' }}
                  >
                    {'<'}
                  </Text>
                ),
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
                  headTitle="গণ্যমান্য ব্যক্তিবর্গ"
                  title="বীর মুক্তিযোদ্ধা"
                  image="../assets/images/ff.png"
                />
                <NationalLeader
                  headTitle="গণ্যমান্য ব্যক্তিবর্গ"
                  name="আতাউল গনি ওসমানী"
                  title="বীর মুক্তিযোদ্ধা"
                  image="../assets/images/ff.png"
                />
              </View>
            </Swiper>
          </View>
        </View>
        <View style={rawSlide}>
          <View style={{ flex: 1, width: width, height: 440 }}>
            <Swiper
              from={1}
              minDistanceForAction={0.1}
              controlsProps={{
                dotsTouchable: true,
                prevPos: 'left',
                nextPos: 'right',
                nextTitle: '>',
                nextTitleStyle: {
                  color: 'red',
                  fontSize: 24,
                  fontWeight: '500',
                },
                PrevComponent: ({ onPress }) => (
                  <Text
                    style={{ color: 'white', fontSize: 24, fontWeight: '500' }}
                  >
                    {'<'}
                  </Text>
                ),
              }}
            >
              <UserSlider
                headTitle="গণ্যমান্য ব্যক্তিবর্গ"
                title="বীর মুক্তিযোদ্ধা"
                image="../assets/images/ff.png"
              />
              <UserSlider
                headTitle="গণ্যমান্য ব্যক্তিবর্গ"
                name="আতাউল গনি ওসমানী"
                title="বীর মুক্তিযোদ্ধা"
                image="../assets/images/ff.png"
              />
            </Swiper>
          </View>
        </View>
        <View style={rawSlide}>
          <View style={{ flex: 1, width: width, height: 440 }}>
            <Swiper
              from={1}
              minDistanceForAction={0.1}
              controlsProps={{
                dotsTouchable: true,
                prevPos: 'left',
                nextPos: 'right',
                nextTitle: '>',
                nextTitleStyle: {
                  color: 'red',
                  fontSize: 24,
                  fontWeight: '500',
                },
                PrevComponent: ({ onPress }) => (
                  <Text
                    style={{ color: 'white', fontSize: 24, fontWeight: '500' }}
                  >
                    {'<'}
                  </Text>
                ),
              }}
            >
              <UserSlider
                headTitle="সম্মানীত মুক্তিযোদ্ধাগণ"
                title="বীর মুক্তিযোদ্ধা"
                image="../assets/images/ff.png"
              />
              <UserSlider
                headTitle="সম্মানীত মুক্তিযোদ্ধাগণ"
                name="আতাউল গনি ওসমানী"
                title="বীর মুক্তিযোদ্ধা"
                image="../assets/images/ff.png"
              />
            </Swiper>
          </View>
        </View>
        <Text style={eknojor}>
          এক নজরে <Text style={{ color: '#2E8B57' }}>ভান্ডারিয়া</Text> উপজেলা
        </Text>
        <Text style={eknojor2}>বাংলাদেশের অন্যতম স্মার্ট উপজেলা</Text>
        <View style={bar}></View>
        <View style={middleBody}>
          <View style={left1}>
            <Icon style={iconStyle} name="square" size={52} />
            <Text style={num}>১৬৩.৫৬</Text>
            <View style={bar2}></View>
            <Text style={numText}>বর্গ কিলোমিটার</Text>
          </View>
          <View style={right1}>
            <Icon style={iconStyle} name="users" size={52} />
            <Text style={num}>১,৬৪,৬১৮</Text>
            <View style={bar2}></View>
            <Text style={numText}>জনসংখ্যা (প্রায়)</Text>
          </View>
        </View>
        <View style={bdr}></View>
        <View style={middleBody}>
          <View style={left1}>
            <Icon style={iconStyle} name="square" size={52} />
            <Text style={num}>১২৭,২০১</Text>
            <View style={bar2}></View>
            <Text style={numText}>ভোটার সংখ্যা</Text>
          </View>
          <View style={right1}>
            <Icon style={iconStyle} name="graduation-cap" size={52} />
            <Text style={num}>৬২.৬৮%</Text>
            <View style={bar2}></View>
            <Text style={numText}>শিক্ষার হার</Text>
          </View>
        </View>
        <Image
          style={imgStyle}
          source={require('../assets/images/mirajul.png')}
        />
        <Text style={pName}>মোঃ মিরাজুল ইসলাম</Text>
        <Text style={pTitle}>
          স্মার্ট ভান্ডারিয়া উপজেলা বাস্তবায়নের অন্যতম রূপকার
        </Text>
        <Text style={union}>ইউনিয়নসমূহ</Text>
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
        <Text style={union}>আরও দেখুন</Text>
        <View style={middleBody}>
          <View style={left1}>
            <View style={icnCircle2}>
              <View style={icnCircle}>
                <Icon style={iconStyle2} name="building" size={40} />
              </View>
            </View>

            <Text style={num2}>উপজেলা</Text>
            <Text style={numText}>উপজেলা সম্পর্কিত তথ্য, পরিষদ, প্রশাসন</Text>
          </View>
          <View style={right1}>
            <View style={icnCircle2}>
              <View style={icnCircle}>
                <Icon style={iconStyle2} name="home" size={40} />
              </View>
            </View>

            <Text style={num2}>পৌরসভা</Text>
            <Text style={numText}>পৌরসভা সম্পর্কিত তথ্য</Text>
          </View>
        </View>
        <View style={bdr}></View>
        <View style={middleBody}>
          <View style={left1}>
            <View style={icnCircle2}>
              <View style={icnCircle}>
                <Icon style={iconStyle2} name="building" size={40} />
              </View>
            </View>

            <Text style={num2}>ইউনিয়ন</Text>
            <Text style={numText}>ইউনিয়ন সমুহের পরিচিতি</Text>
          </View>
          <View style={right1}>
            <View style={icnCircle2}>
              <View style={icnCircle}>
                <Icon style={iconStyle2} name="home" size={40} />
              </View>
            </View>

            <Text style={num2}>প্রতিষ্ঠান সমূহ</Text>
            <Text style={numText}>উপজেলার প্রতিষ্ঠানসমুহের তথ্য</Text>
          </View>
        </View>
        <View style={bdr}></View>
        <View style={middleBody}>
          <View style={left1}>
            <View style={icnCircle2}>
              <View style={icnCircle}>
                <Icon style={iconStyle2} name="building" size={40} />
              </View>
            </View>

            <Text style={num2}>উন্নয়ন প্রকল্প</Text>
            <Text style={numText}>উপজেলায় সরকারি উন্নয়ন প্রকল্পসমূহ</Text>
          </View>
          <View style={right1}>
            <View style={icnCircle2}>
              <View style={icnCircle}>
                <Icon style={iconStyle2} name="home" size={40} />
              </View>
            </View>

            <Text style={num2}>অনলাইনে সেবা </Text>
            <Text style={numText}>অনলাইনে উপজেলার নাগরিক সেবা</Text>
          </View>
        </View>
        <View style={bdr}></View>
        <View style={middleBody}>
          <View style={left1}>
            <View style={icnCircle2}>
              <View style={icnCircle}>
                <Icon style={iconStyle2} name="building" size={40} />
              </View>
            </View>

            <Text style={num2}>নিউজ আর্কাইভ</Text>
            <Text style={numText}>জাতীয় এবং আঞ্চলিক নিউজ আপডেট</Text>
          </View>
          <View style={right1}>
            <View style={icnCircle2}>
              <View style={icnCircle}>
                <Icon style={iconStyle2} name="home" size={40} />
              </View>
            </View>

            <Text style={num2}>স্থানীয় সরকার</Text>
            <Text style={numText}>মন্ত্রণালয় সম্পর্কিত তথ্য</Text>
          </View>
        </View>
        <View style={bdr}></View>
        <View style={middleBody}>
          <View style={left1}>
            <View style={icnCircle2}>
              <View style={icnCircle}>
                <Icon style={iconStyle2} name="building" size={40} />
              </View>
            </View>

            <Text style={num2}>ডিজিটাল লাইব্রেরি</Text>
            <Text style={numText}>অনলাইনে ডিজিটাল বইয়ের সংগ্রহ</Text>
          </View>
          <View style={right1}>
            <View style={icnCircle2}>
              <View style={icnCircle}>
                <Icon style={iconStyle2} name="home" size={40} />
              </View>
            </View>

            <Text style={num2}>বিনোদন</Text>
            <Text style={numText}>ছবি, অডিও এবং ভিডিও</Text>
          </View>
        </View>
        <View style={bdr}></View>
        <Text style={{ padding: 50 }}>asdf</Text>
      </ScrollView>
    )
  }
}

export default Home

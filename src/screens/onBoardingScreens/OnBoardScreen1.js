import { StyleSheet, Text, View,SafeAreaView,Image, TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import { useTheme } from '../../theme/ThemeProvider'
import { COLORS, FONTS, SIZES, images } from '../../constants'
import { AntDesign } from '@expo/vector-icons';

const OnBoardScreen1 = () => {
    const {colors, dark, fontSize} = useTheme()
    console.log("dark : ", dark)

  return (
    <SafeAreaView style={[styles.safeArea,{backgroundColor:colors.background}]}>
      <Image source={require("../../../assets/onBoardingOne.png")} style={{width:'100%', height:'60%'}}/>
      <View style={{marginHorizontal:30, marginTop:25, fontSize: FONTS.h1 }}>
        <Text style={{color:colors.text}}>Track Your Goal</Text>
        <Text style={{color:colors.text, paddingVertical:15, lineHeight:22}}>Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals</Text>
      </View>
      <TouchableOpacity style={{alignItems:'flex-end',position:'absolute',bottom:0,right:0,marginBottom:40,marginEnd:25}}>
        <ImageBackground source={require('../../../assets/circleBtn.png')} resizeMode="cover" style={{justifyContent:'center',alignItems:'center',width:60, height:60}}>
          <AntDesign name="right" size={20} color="white" />
        </ImageBackground>
      </TouchableOpacity>
    
      
    </SafeAreaView>
  )
}

export default OnBoardScreen1

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
   }
})
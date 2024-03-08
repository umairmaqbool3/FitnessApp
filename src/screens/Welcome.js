import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from '../constants'
import { StatusBar } from 'expo-status-bar'
import { useTheme } from "../theme/ThemeProvider"
import { LinearGradient } from 'expo-linear-gradient';

const Welcome = ({ navigation }) => {
    const { colors,dark } = useTheme()

    setTimeout(() => {
        navigation.navigate('onBoardingScreen1')
    },2000)
    return (
        // <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient  colors={[COLORS.splashGradient1, COLORS.splashGradient2]} style={{flex:1}}>
            <StatusBar style={dark ? "light": "dark"} />
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Text style={{color:COLORS.white,...FONTS.mediumTitle,paddingTop:5}}>
                    DIDPOOL 
                    <Text style={{color: COLORS.tertiaryBlack}}> Fit</Text>
                </Text>
                <Text style={{color:colors.text}}>Everybody Can Train</Text>
            </View>
           </LinearGradient>
           
        // </SafeAreaView>
    )
}

export default Welcome

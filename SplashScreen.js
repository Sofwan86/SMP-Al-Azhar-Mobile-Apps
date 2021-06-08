import React from 'react'
import {View, Image, StyleSheet, Text} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SplashScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Image source={require("./assets/iconsp.png")} style={styles.logo} />
            <Text style={styles.text} > SMP AL-AZHAR 3 {"\n"}    MOBILE APPS </Text>
        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:190
    },
    logo: {
        height: hp('40%'),
        width: wp('60%') 
    },
    text:{
        alignItems:"center",
        justifyContent:"center",
        fontSize:20,
        marginTop:80,
        fontFamily:"Roboto"
    }
}) 
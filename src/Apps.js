import React, {useEffect,useState} from 'react'
import {NavigationContainer,createAppContainer} from '@react-navigation/native'
import Router from './router'
import SplashScreen from '../SplashScreen'
import { View,Text } from 'react-native'


const Apps = () => {
  const [splash, IsSplash] = useState(true)
  const [home, IsHome] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      IsSplash(false)
      IsHome(true)
    }, 3000);
  }, []);
  return (
    <NavigationContainer>
       {splash && <SplashScreen />}
      {home && <Router />}
    </NavigationContainer> 

  )
}

export default Apps

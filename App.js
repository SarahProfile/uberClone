import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
const App = () => {
  return (
    <View>
     <HomeScreen/>
    </View>
  )
}


export default App


  const styles = StyleSheet.create({

container:{
  flex:1
}
})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>Hitting the MapScreen</Text>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { createStackNavigator } from '@react-navigation/stack';
// Needs it's own navigation for each option you'd select similiar to App.js's Stack Navigation


const MapScreen = () => {

  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View>

    <View style={tw`h-1/2`}>
      <Map />
    </View>

    <View style={tw`h-1/2`}>
      <Stack.Navigator>

        <Stack.Screen
          name="NavigateCard"
          component={ NavigateCard }
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="RideOptionsCard"
          component={ RideOptionsCard }
          options={{
            headerShown: false,
          }}
        />
        
       </Stack.Navigator>
    </View>

    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
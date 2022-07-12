import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import { Icon } from 'react-native-elements';


const NavigateCard = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>How are you feeling?</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete 
          placeholder="Where to?"
          styles={ toInputStyles }
          fetchDetails={true}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          returnKeyType={"search"}
          minLength={2}
          debounce={800}
          // ^^ Lower debounce later
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',
          }}

          onPress={( data, details = null ) => {
            dispatch(setDestination({
              location: details.geometry.location,
              description: details.description,
            }))
            navigation.navigate("RideOptionsCard");
          }}

        />
        <NavFavorites />
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100 mb-10`}
      >
        <TouchableOpacity 
          style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}
          onPress={() => navigation.navigate("RideOptionsCard")}
          >
          <Icon name="car" type="font-awesome" color="white" size={16} />
            <Text
              style={tw`text-white text-center`}
            >
              Rides
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex flex-row w-24 px-4 py-3 rounded-full`}>
          <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
            <Text
              style={tw`text-center`}
            >
              Eats
            </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default NavigateCard

const toInputStyles = StyleSheet.create({
  container: {
            backgroundColor: 'white',
            paddingTop: 20,
            flex: 0,

        },
  textInput: {
            backgroundColor: "#DDDDDF",
            borderRadius: 0,
            fontSize: 18,
        },
  textInputContainer: {
            paddingHorizontal: 20,
            paddingBottom: 0,
        },
})
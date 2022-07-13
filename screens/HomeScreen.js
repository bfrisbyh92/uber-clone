import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions'
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "@env";
import NavFavorites from '../components/NavFavorites';

// Redux
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const uberLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Caa15xOsNCSaVucg7kPZck9cSzqhfJShug&usqp=CAU'
// ^^^ Need to change to change to image saved inside assets directory before deployment 

const HomeScreen = () => {

const dispatch = useDispatch();

const navigation = useNavigation();
// useNavigation hook instead of passing a destructured 'navigation' to 'HomeScreen'

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image
                style={{
                    width: 100,
                    height: 100, 
                    resizeMode: 'contain',
                    borderRadius: 100/2,
                }}
                source={{
                    uri: `${ uberLogo }`,
                }}
             />

              <GooglePlacesAutocomplete
              // ^^^ Bug. This only shows up on mobile I will try to fix that later but for now only mobile is okay
                styles={{
                  container: {
                    flex: 0,
                    // flex: 1,
                    // Flex 0 shows up on mobile screens, Flex 1 shows up on Web. Neither show up on both.
                    // Note to Make media query later for both to work.
                  },
                  textInput: {
                    fontSize: 18,
                  }
                }}

                query={{
                  key: GOOGLE_API_KEY,
                  language: 'en',
                }}

                onPress={(data, details = null ) => {
                  console.log(data, setOrigin);
                  console.log(details);
                  console.log(setOrigin);

                  dispatch(setOrigin({
                    location: details.geometry.location,
                    description: data.description
                  }))
                  // dispatch(setDestination(null))
                }}
                // ^^^ Storing origin in Redux to be used later when calculating ride
                enablePoweredByContainer={false}
                minLength={2}
                placeholder='Where From?'
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={900}
                // ^^^ Change debounce to 400 later. No reason to call the API a million times during production as long as it's working
                
                fetchDetails={true}
                returnKeyType={"search"}
              />

             <NavOptions />
             <NavFavorites />
        </View>
    </SafeAreaView>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions'
const uberLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Caa15xOsNCSaVucg7kPZck9cSzqhfJShug&usqp=CAU'
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "@env";

const HomeScreen = () => {

const navigation = useNavigation(navigation);

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
                styles={{
                  container: {
                    flex: 0,
                  },
                  textInput: {
                    fontSize: 18,
                  }
                }}

                query={{
                  key: GOOGLE_API_KEY,
                  language: 'en',
                }}
                enablePoweredByContainer={false}
                minLength={2}
                placeholder='Where From?'
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={900}
                // ^^^ Change debounce to 400 later. No reason to call the API a million times during production as long as it's working
                onPress={(data, details = null ) => {
                  console.log(data);
                  console.log(details);
                }}
                fetchDetails={true}
              />

             <NavOptions />
        </View>
    </SafeAreaView>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({})
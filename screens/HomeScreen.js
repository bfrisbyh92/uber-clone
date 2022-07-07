import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions'
const uberLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Caa15xOsNCSaVucg7kPZck9cSzqhfJShug&usqp=CAU'
import { useNavigation } from '@react-navigation/native';

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
             <NavOptions />
        </View>
    </SafeAreaView>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({})
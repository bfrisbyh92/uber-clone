import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';


const data = [
    {
        id: '1',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },{
        id: '2',
        title: 'Order Food',
        image: "https://links.papareact.com/28w",
        screen: 'EatsScreen',
    }
    ];

const NavOptions = () => {

      const navigation = useNavigation();
      const origin = useSelector(selectOrigin);

  return (
    <FlatList
        data={ data }
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity 
            disabled={!origin}
            // ^^ If there is no origin selected this unpressable/clickable to prevent error
                style={tw`p-2 pb-8 pt-4 bg-gray-200 m-2 w-40 border-2`}
                onPress={() => {
                    navigation.navigate('MapScreen')
                    // navigation.navigate(item.screen)
                    // ^^^ item.screen is the same thing as data[0].screen
                    // If I leave it navigation.navigate(item.screen) clicking on order food will throw an error.
                    // It's navigation.navigate('MapScreen') for now, until/if I implement order food. 
                    console.log(navigation)
                    }}
                >
                <View style={tw`${!origin && 'opacity-20'}`}>
                <Image 
                    style={{width: 120, height: 100, resizeMode: 'contain'}}
                    source={{ uri: item.image }}
                />
                <Text
                    style={tw`mt-2 text-lg font-semibold`}
                >{item.title}</Text>
                <Icon 
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    type='antdesign' name='arrowright' color='white'
                />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})
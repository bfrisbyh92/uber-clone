import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';


const data = [
    {
        id: '1',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapsScreen',
    },{
        id: '2',
        title: 'Order Food',
        image: "https://links.papareact.com/28w",
        screen: 'EatsScreen',
    }
    ];

const NavOptions = ({ navigation }) => {

  return (
    <FlatList
        data={data}
        // horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity 
                style={tw`p-2 pb-8 pt-4 bg-gray-200 m-2 w-40 border-2`}
                onPress={() => navigation.navigate(item.screen)}
                >
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
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})
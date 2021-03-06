import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

// Come back here and implement shortcut rides basically just make this functional

const data = [
    {
        id: '1',
        icon: 'home',
        location: "Home",
        destination: '168 Martin dr, Manassas Park, Virginia',
    },
    {
        id: '2',
        icon: 'briefcase',
        location: "Work",
        destination: 'Sovanah Global Logistics',
    },
];

const NavFavorites = () => {
  return (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id }
        ItemSeparatorComponent={(item) => (
            <View style={[tw`bg-gray-600`, { height: 0.5 }]}/>
        )}
        renderItem={({item: { location, destination, icon } }) => (
            <TouchableOpacity 
                style={tw`flex-row items-center p-5 `}
            >
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>
                    { location }
                    </Text>

                    <Text style={tw`text-gray-500`}>
                    { destination }
                    </Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavFavorites

const styles = StyleSheet.create({})
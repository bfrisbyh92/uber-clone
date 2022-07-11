import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { selectOrigin, selectDestination } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from "@env";


const Map = () => {

const origin = useSelector(selectOrigin)
const destination = useSelector(selectDestination)
if(destination && origin)console.log(` Destination: ${destination.description}, origin: ${origin.description}`)

  return (
    <MapView
        style={tw`flex-1`}
        // ^^ Map won't show up without
        mapType="mutedStandard"
        // ^^^ Takes off the Grid look from map
        initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
        }}
    >

    {origin && destination && (
      <MapViewDirections 
        origin={ origin.description }
        destination={ destination.description }
        apikey={ GOOGLE_API_KEY }
        strokeWidth={6}
        strokeColor="black"

        onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            
        onReady={result => {
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)
            }}

        onError={(err) => {
              console.log(err);
            }}
      />
    )}

    {origin?.location && (
        <Marker 
            coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
            }}
            title="Origin"
            description={ origin.description }
            identifier="origin"
        />
    )}

    {destination?.location && (
        <Marker 
            coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
            }}
            title="Destination"
            description={ destination.description }
            identifier="destination"
        />
    )}

    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})
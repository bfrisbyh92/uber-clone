import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import React, { useEffect, useRef } from 'react'
import tw from 'tailwind-react-native-classnames';
import { selectOrigin, selectDestination } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from "@env";

const Map = () => {

const origin = useSelector(selectOrigin)
const destination = useSelector(selectDestination)
const mapRef = useRef(null)

useEffect(() => {
  if(!origin || !destination) return;

  mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
    edgePadding: {top:50, right:50,bottom:50, left:50},
  });
},[origin, destination])

if(destination && origin)console.log(` Destination: ${destination.description}, origin: ${origin}`)


  return (
    <MapView
        ref={mapRef}
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

    { origin && destination && (
      <MapViewDirections 
        origin={ origin.description }
        destination={ destination.description }
        apikey={ GOOGLE_API_KEY }
        strokeWidth={3}
        strokeColor="black"
      />
    )}
     {/* ^^^ React-native-maps-directions not working. Coming back to this after I have a working app
    Maybe trt lazyfox-directions */}

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

  );
};

export default Map

const styles = StyleSheet.create({
  
  })
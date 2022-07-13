import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const EndScreen = () => {

    const navigation = useNavigation()
    
  return (
    <View style={ styles.container }>
    <View style={styles.halfHeight}>
        <Text tyle={styles.text}>This is the end of this demo.</Text>
        <Text style={styles.text}>Brendan Frisby @2022</Text>
        <View style={styles.quarterHeight}>
            <Button 
            style={styles.button}
            onPress={() => navigation.replace('HomeScreen')}
            >Go back to start</Button>
        </View>
    </View>
    </View>
  )
}

export default EndScreen

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignContent: 'center',
    flexDirection: "column",
  },
  halfHeight: {
    flex: 0.5,
    alignContent: 'center',
    textShadowColor: 'black',
    backgroundColor: rgba(255, 70, 71, 0.2),
  },
  quarterHeight: {
    alignContent: 'center',
    textShadowColor: 'black',
    flex: 0.25,
    backgroundColor: rgba(255, 8, 34, 0.77),
  },
})
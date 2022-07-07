import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import { Provider } from 'react-redux'
import { store } from './store'
// ^^^ Implementing Redux ^^^

const Stack = createStackNavigator();

export default function App() {

  return (
    <Provider store={ store }>
      <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator
      initialRouteName='HomeScreen'
      >

        <Stack.Screen
          name="HomeScreen"
          component={ HomeScreen }
          options={{
            headerShown: false,
          }}
         />

         <Stack.Screen
          name="MapScreen"
          component={ MapScreen }
          options={{
            headerShown: false,
          }}
         />

      </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

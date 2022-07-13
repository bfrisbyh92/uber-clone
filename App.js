import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
// import EndScreen from './screens/EndScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// At the end of build run rm -rf node_modules,
// go through app and see what's needed,
// remove unnecessary modules from package.json and expo install again.

import { Provider } from 'react-redux'
import { store } from './store'
// ^^^ Implementing Redux ^^^

const Stack = createStackNavigator();

export default function App() {

  return (
    <Provider store={ store }>
      <NavigationContainer>
      <SafeAreaProvider>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height" }
        keyboardVerticalOffset={ Platform.OS === "ios" ? -64 : 0} 
      >
      
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

         {/* <Stack.Screen
          name="EndScreen"
          component={ EndScreen }
          options={{
            headerShown: false,
          }}
         /> */}

      </Stack.Navigator>

      </KeyboardAvoidingView>
      </SafeAreaProvider>
      </NavigationContainer>
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

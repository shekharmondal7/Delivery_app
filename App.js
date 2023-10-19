import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import { Navigation } from 'react-native-navigation';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Welcome/>
    //   <Login/>
    //   <Signup/>
    // </View>
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcome} options={
          {
            headerShown: false
          }
        }/>
        <Stack.Screen name="Login" component={Login} options={
          {
            headerShown: false
          }
        }/>
        <Stack.Screen name="Signup" component={Signup} options={
          {
            headerShown: false
          }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
    </>

    
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

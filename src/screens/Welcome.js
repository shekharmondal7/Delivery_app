import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import pattern from '../../assets/pattern.gif'
import restaurantlogo from '../../assets/Restaurant.png'
import { button1 } from '../common/Button'
import Login from './Login'
import Signup from './Signup'
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
  const navigation = useNavigation();
  return (
    <>
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />
      {/* <Text style={styles.head}>hi</Text> */}
      <View style={styles.container1}>
        {/* <Text style={styles.head}>Welcome to</Text> */}
        {/* <Image style={styles.logo} source={restaurantlogo} /> */}
        <TouchableOpacity
          style={button1} // Apply your button styles here
          onPress={() => {
            navigation.navigate(Login);
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={button1} // Apply your button styles here
          onPress={() => {
            navigation.navigate(Signup);
          }}
        >
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
      },
    patternbg:{
        position:'absolute',
        top:0,
        width:'100%',
        height:'100%',
        zIndex: -1
        
    },
    head:{
        fontSize: 30,
        color: '#fff',
    },
    container1:{
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100%',
      width: '100%'
    },
    logo:{
      width: 200,
      height: 200,
      aspectRatio: 1/1
    },
})

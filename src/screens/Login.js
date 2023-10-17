import { StyleSheet, Text, TextInput, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import pattern from '../../assets/pattern.gif'
import logo from '../../assets/Restaurant.png'
import { button1 } from '../common/Button'
import { formgroup, head1, head2, input, label, link, link2 } from '../common/Formcss'
import Signup from './Signup'
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Image style={styles.patternbg} source={pattern}/>

    <View style = {styles.container1}>
        <View style = {styles.s1}>
            {/* <Image style={styles.logo} source={logo}/> */}
        </View>
        <View style = {styles.s2}>
            <Text style={head1}>Login</Text>
            <Text style={head2}>Login to continue</Text>
            <View style={formgroup}>
                <Text style={label}>Email</Text>
                <TextInput style={input} placeholder='Enter your Email'/>
            </View>
            <View style={formgroup}>
                <Text style={label}>Password</Text>
                <TextInput style={input} placeholder='Enter your Password'/>
            </View>
            <View style={styles.fp}>
            <TouchableOpacity><Text style={link}>Forgot Password</Text></TouchableOpacity> 
            </View>
            <TouchableOpacity
          onPress={() => {
            // navigation.navigate(Login);
            console.log("Login.....................")
          }}
        >
          <Text style={button1}>Login</Text>
        </TouchableOpacity>
            
            <Text style={link}>Don't have an account?</Text>
               <TouchableOpacity onPress={() => {
            navigation.navigate(Signup);
            console.log("Login.....................")
          }}><Text style={link}>Create an account</Text></TouchableOpacity> 
            
        </View>
    </View>
    </View>
  )
}

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
    container1:{
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        height:'100%',
        width:'100%',
    },
    s1:{
        color:'#fff',
        fontSize:17,
    },
    
    s2:{
        display:'flex',
        backgroundColor:'#fff',
        width:'100%',
        height:'55%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:20,
    },
    formgroup:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        marginVertical:10,
    },
    label:{
        fontSize:17,
        color:'#000',
        marginLeft: 10,
        marginBottom:5,
    },
    input:{
        backgroundColor: "#FFF000",
        borderRadius: 30,
        padding: 15,
    },
    fp:{
        display:'flex',
        // justifyContent:'flex-end',
        alignItems:'flex-end',
        marginRight:10,
        marginHorizontal:5,
        marginVertical: 5,
    },
})
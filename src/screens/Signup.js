import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import pattern from '../../assets/pattern.gif'
import logo from '../../assets/Restaurant.png'
import { button1 } from '../common/Button'
import { formgroup, head1, head2, input, input1, label, link, link2 } from '../common/Formcss'

export default function Signup({navigation}) {
  return (
    <View style={styles.container}>
    <Image style={styles.patternbg} source={pattern}/>

    <View style = {styles.container1}>
        <View style = {styles.s1}>
           
        </View>
        <ScrollView style = {styles.s2}>
            <Text style={head1}>Creat a new account</Text>
            <Text style={link2}>Already have an account?&nbsp;
                <Text style={link}onPress={()=>navigation.navigate('Login')}>Login here</Text>
            </Text>
            <View style={formgroup}>
                <Text style={label}>Name</Text>
                <TextInput style={input} placeholder='Enter your Name'/>
            </View>
            <View style={formgroup}>
                <Text style={label}>Email</Text>
                <TextInput style={input} placeholder='Enter your Email'/>
            </View>
            <View style={formgroup}>
                <Text style={label}>Date of birth</Text>
                <TextInput style={input} placeholder='Enter your DOB'/>
            </View>
            <View style={formgroup}>
                <Text style={label}>Password</Text>
                <TextInput style={input} placeholder='Enter your Password'/>
            </View>
            <View style={formgroup}>
                <Text style={label}>Confirm Password</Text>
                <TextInput style={input} placeholder='Confirm your Password'/>
            </View>
            <View style={formgroup}>
                <Text style={label}>Address</Text>
                <TextInput style={input1} placeholder='Enter your Address'/>
            </View>
            
            <Text style={button1}>Signup</Text>
        </ScrollView>
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
        height:'80%',
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
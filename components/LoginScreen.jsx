import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function LoginScreen() {
  return (
    <View>
      <View style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 100
      }}>
      <Image source={require('./../assets/images/login.png')} 
        style={{
          width:180,
          height: 350,
          borderRadius: 20,
          borderWidth:6,
          borderColor: '#000'
        }}
      />
      </View>
      <View style={styles.subContainer}>
          <Text style={{
            fontSize:30,
            fontFamily: 'poppins-bold',
            textAlign:'center'
          }}>Your Ultimate 
            <Text style={{color:Colors.PRIMARY}}>
               Community Business Directory
            </Text>
          </Text>
          <Text style={{
            fontSize:15,
            fontFamily: 'poppins',
            textAlign:'center',
            marginVertical:15,
            color:Colors.GRAY
          }}>Find your favorite business nare your and post your own business to your community</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={{
            fontSize:15,
            fontFamily: 'poppins-bold',
            textAlign:'center',
            color:'#fff'
            }}>Let's get started</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  btn:{
      backgroundColor: Colors.PRIMARY,
      padding:15,
      textAlign:'center',
      borderRadius: 99,
      marginTop:20
  },
  subContainer:{
    backgroundColor:'#fff',
    padding:20,
    marginTop: -20
  }
})
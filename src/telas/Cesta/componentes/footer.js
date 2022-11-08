import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Tab, Text, TabView } from '@rneui/themed';


export default function Footer() {
  const [index, setindex] = React.useState(0)
  return(
   <View style={{blackground: '#fa0202'}}>
   <Text style={{ display:"flex", justifyContent:"center", fontSize: 30 }}> Jenny Jack Farm </Text> 
   <Text style={{ display:"flex", justifyContent:"center", fontSize: 30 }}> (32)9 9864-2534 </Text>
   <Text style={{ display:"flex", justifyContent:"center", fontSize: 30 }}> Jack Farm © </Text>
   </View>
  )
}
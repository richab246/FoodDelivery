import React from 'react'
import { View, Image, StyleSheet, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';

export default function ImageView(props) {
  return (
   
    <View 
    style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, marginTop: 20, marginHorizontal: 20}}>
    <TouchableWithoutFeedback
    onPress={() => props.navigation.navigate('food', { title: props.title})}
    >
      <View>
    <Image 
    source={require('../assets/panCake.jpg')} style={styles.image}/>
    <Text style={{marginTop: 10}}>{props.title}</Text>
    <Text>⭐ 4.5</Text>
    </View>
    </TouchableWithoutFeedback>
    <View>
    <Image source={require('../assets/panCake.jpg')} style={styles.image}/>
    <Text style={{marginTop: 10}}>Pukis Cake</Text>
    <Text>⭐ 4.5</Text>
    </View>
  </View>
 
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: Dimensions.get('screen').width/2 - 25,
    height: 250,
    borderRadius: 20,
  }
})


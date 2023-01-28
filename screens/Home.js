import React,{useState} from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, Image, ScrollView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Searchbar } from 'react-native-paper';
import ImageView from '../component/ImageView';

const DATA = [
  {
  id: 1,
  src: '../assets/panCake.jpg',
  title: 'Rice Vagent Spice',
  },
  {
    id: 2,
    src: '../assets/panCake.jpg',
    title: 'Pukis Cake'
  },
  {
    id: 3,
    src: '../assets/panCake.jpg',
    title: 'Country Ranged Spiced Pear'
  },
  {
    id: 4,
    src: '../assets/panCake.jpg',
    title: 'Dougnut'
  }
]

export default function Home({navigation}) {

  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelected] = useState('Popular')

  const onChangeSearch = query => setSearchQuery(query);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>
      <View style={{marginHorizontal: 18}}>
      <Text style={styles.head}>Good Morning,</Text>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Saifa Zahara</Text>
        <MaterialCommunityIcons name="cart-variant" size={24} color="black" />
      </View>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.search}
    />
    <View style={styles.options}>
      <Text 
      onPress={() => {setSelected('Popular')}}
      style={selected==='Popular'? styles.popularOption : {marginRight: 8, fontSize: 15, padding: 5}}>🌟Popular</Text>
      <Text 
      onPress={() => {setSelected('Breakfast')}}
      style={selected === 'Breakfast'? styles.selectedOption : styles.option}>🥞Breakfast</Text>
      <Text 
      onPress={() => {setSelected('Meal')}}
      style={selected === 'Meal'? styles.selectedOption : styles.option}>🍖Meal</Text>
      <Text 
      onPress={() => {setSelected('Snack')}}
      style={selected === 'Snack'? styles.selectedOption : styles.option}>🌭Snack</Text>
    </View>
    </View>
    <FlatList 
    data={DATA}
    renderItem={({item}) => <ImageView src={item.src} title={item.title} navigation={navigation}/>}
    keyExtractor={item => item.id}
    />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    flex: 1
  },
  head: {
    marginTop: 40,
    fontSize: 14,
    fontWeight: '600',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 5
  },
  search: {
   marginTop: 20,
   borderRadius: 10
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  option: {
    marginHorizontal: 8,
    fontSize: 15,
    padding: 5
  },
  selectedOption: {
   backgroundColor: 'black',
   padding: 7,
   color: '#fff',
   borderRadius: 5,
   marginHorizontal: 8,
   fontSize: 15
  },
  popularOption: {
    backgroundColor: 'black',
    color: '#fff',
    borderRadius: 5,
    marginRight: 8,
    fontSize: 15,
    padding: 7
  },
  image: {
    resizeMode: 'cover',
    width: Dimensions.get('screen').width/2 - 25,
    height: 250,
    borderRadius: 20,
  }
})

 
import React, {useState} from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel';
import { Button } from 'react-native-paper';

const carouselItems = [
  {
      src: require("../assets/panCake.jpg")
  },
  {
    src: require("../assets/panCake.jpg")
  },
  {
    src: require("../assets/panCake.jpg")
  },
  {
    src: require("../assets/panCake.jpg")
  },
  {
    src: require("../assets/panCake.jpg")
  },
]

export default function FoodDetails({navigation, route}) {

  const {title} = route.params

  const [activeIndex, setActiveIndex] = useState(0)
  const [count, setCount] = useState(1)
 
  const renderItem = ({item,index}) => {
    return (
      <View style={{marginTop: 30}}>
        <Image 
        style={styles.image}
        source={item.src}/>
      </View>

    )
}

  return (
    <View style={styles.container}>
        <StatusBar style='auto'/>
      <View style={{marginHorizontal: 18}}>
      <View style={styles.head}>
      <AntDesign 
      onPress={() => navigation.goBack()}
      name="arrowleft" size={20} color="black" />
        <Text style={{fontSize: 18}}>Order</Text>
        <AntDesign name="sharealt" size={24} color="black" />
      </View>
      <Carousel
                  layout={"default"}
                  // ref={ref => this.carousel = ref}
                  data={carouselItems}
                  sliderWidth={400}
                  itemWidth={250}
                  renderItem={renderItem}
                  onSnapToItem = { index => setActiveIndex(index) } 
                  />
      <View
      style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}
      >
      <Text style={styles.title}>{title}</Text>
      <AntDesign name="hearto" size={24} color="black" />
      </View>
      <Text style={{marginTop: 30, color: '#716F6E'}}>A white chocolate truffle layered with toffee sponge cranberry</Text>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 20}}>
      <Text>Review (120)</Text>
      <Text>⭐ 4.2</Text>
      </View>
      <Text style={{marginTop: 20, width: '100%'}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 40}}>
        <View style={{flexDirection: 'row'}}>
        <AntDesign name="minuscircleo" size={21} color={count>1? "black": "#CFCECE"}
        onPress={() => {if(count > 1){
          setCount(count-1)
        }}}
        />
        <Text style={{fontSize: 16, marginHorizontal: 10}}>{count}</Text>
        <AntDesign 
          onPress={() => setCount(count + 1)}
        name="pluscircleo" size={21} color="black" />
        </View>
        <Text style={{fontWeight: '700'}}>IDR 20.000</Text>
      </View>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 90}}>
        <Button
        mode='outlined'
        textColor='black'
        style={{borderWidth: 2, borderRadius: 10, width: '50%'}}
        >
      +Add to Cart
        </Button>
        <Button
        mode='elevated'
        buttonColor='#F57D24'
        textColor='white'
        style={{borderRadius: 10, width: '50%', marginLeft: 10}}
        >
          Checkout
        </Button>
      </View>
      </View>
      
    </View>
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
      flexDirection: 'row',
      marginTop: 50,
      justifyContent: 'space-between',
      width: '100%'
   },
   image: {
    resizeMode: 'cover',
    width: 250,
    height: 250,
    borderRadius: 20,
    alignSelf: 'center'
  },
  title: {
    fontWeight: '700',
    fontSize: 16
  }
})

 

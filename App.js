import Route from './Routes/Route';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodDetails from './screens/FoodDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator
     screenOptions={{headerShown:false}}
     initialRouteName={"Route"}
     >
      <Stack.Screen name="Route" component={Route}/>
      <Stack.Screen name="food" component={FoodDetails}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


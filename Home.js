import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
   const goToNasa = () => {
      Actions.nasa()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToNasa}>
         <Text>This is HOME!</Text>
      </TouchableOpacity>
   )
}
export default Home
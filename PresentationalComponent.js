import React from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'



const PresentationalComponent = (props) => {
    return (

        <View>
            <ScrollView>
         <Text>
            {props.data.title}
         </Text>
         <Image
          source={{uri: props.data.img }}
          style={{ width: 400, height: 400 }}
        />
        <Text style = {styles.secondaryText}>{props.data.explanation}</Text>
        </ScrollView>
      </View>
      
       
    )
}
export default PresentationalComponent

const styles = StyleSheet.create ({
    title: {
       marginTop: 20,
       textAlign: 'center',
       color: 'blue',
       fontWeight: 'bold',
       fontSize: 20
    },
    secondaryText: {
      textAlign: 'center',
      color: 'red',
      fontSize: 25
    }
  })
  